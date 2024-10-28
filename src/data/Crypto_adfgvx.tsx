"use client";
import React, { useState } from "react";
import Intro from "@/components/Intro";
import Image from "next/image";
import logo from "../../public/img/adfgvx.png";
import Dropdown from "@/components/Dropdown";

const img1 = "/img/adfgvx1.png";
const img2 = "/img/adfgvx2.png";
const img3 = "/img/adfgvx3.png";
const img4 = "/img/adfgvx4.png";

function Crypto_adfgvx() {
  const [show, setShow] = useState(true);
  const [enc, setEnc] = useState(false);
  const [key1, setKey1] = useState("");
  const [key2, setKey2] = useState("");

  const [error, setError] = useState("");

  const [text, setText] = useState(`Germany cryptographers are genius`);
  const [convertedTxt, setConvertedTxt] = useState("");

  const handleChange = (event: any) => {
    setText(event.target.value);
    setConvertedTxt("");
  };

  const handleKey1 = (event: any) => {
    setKey1(event.target.value);
    setConvertedTxt("");
    setError("");
  };

  const handleKey2 = (event: any) => {
    setKey2(event.target.value);
    setConvertedTxt("");
    setError("");
  };

  const dropdownClick = (endpoint: any) => {
    if (endpoint == "enc") {
      setShow(false);
      setEnc(true);
      setError("");
    } else {
      if (endpoint == "dec") {
        setShow(false);
        setEnc(false);
        setText("");
        setError("");
      } else {
        setEnc(false);
        setShow(true);
        setError("");
      }
    }
  };

  const adfgvxCipher = (
    selector: string,
    message: string,
    keyword1: string,
    keyword2: string
  ) => {
    var pA = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    var adfgvx = "ADFGVX";

    // clean keyword1, swap j for i, remove repeated letters
    var cleanKey1 = [];
    var char = "";
    for (var i = 0; i < keyword1.length; i++) {
      char = keyword1[i].toLowerCase();
      if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
        if (cleanKey1.indexOf(char) === -1) {
          cleanKey1.push(char);
        }
      }
    }
    //console.log("Fractionation key: " + cleanKey1);

    // clean keyword2, remove repeated letters
    var cleanKey2 = [];
    var char = "";
    for (var i = 0; i < keyword2.length; i++) {
      char = keyword2[i].toLowerCase();
      if (char >= "a" && char <= "z") {
        if (cleanKey2.indexOf(char) === -1) {
          cleanKey2.push(char);
        }
      }
    }
    //console.log("Transposition key: " + cleanKey2);

    // construct ciphertext alphabet
    var cA = [];
    for (var i = 0; i < cleanKey1.length; i++) {
      cA[i] = cleanKey1[i].toUpperCase();
    }
    for (var i = 0; i < pA.length; i++) {
      char = pA[i];
      if (char >= "a" && char <= "z") {
        char = char.toUpperCase();
      }
      if (cA.indexOf(char) === -1) {
        cA.push(char);
      }
    }
    //console.log("Ciphertext Alphabet: " + cA);

    // construct square for display
    var psq = "";
    for (var c = 0; c < 6; c++) {
      for (var r = 0; r < 6; r++) {
        psq += cA[c * 6 + r] + " ";
      }
      psq += "\n";
    }
    //console.log("Square for Ciphertext Alphabet:\n" + psq);

    // get column order from cleanKey2
    var order = [];
    for (var i = 0; i < cleanKey2.length; i++) {
      order.push(pA.indexOf(cleanKey2[i]));
    }
    //console.log("Char order from transposition key: " + order);

    var columnOrder = [];
    for (var currentNum = 0; currentNum < order.length; currentNum++) {
      var position = 0;
      for (var list = 0; list < order.length; list++) {
        if (order[currentNum] > order[list]) {
          position += 1;
        }
      }
      columnOrder.push(position);
    }
    //console.log("Column order from transposition key: " + columnOrder);

    // encryption process
    if (selector === "encrypt") {
      // clean up message
      var cleanMessage = [];
      var char = "";
      for (var i = 0; i < message.length; i++) {
        char = message[i].toLowerCase();
        if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
          cleanMessage.push(char);
        }
      }
      //console.log("Cleartext: " + cleanMessage);
      //console.log("Cleartext Length: " + cleanMessage.length);

      // get ADFGVX codes for message characters
      var fractionated = [];
      for (var i = 0; i < cleanMessage.length; i++) {
        var p = cA.indexOf(cleanMessage[i].toUpperCase());
        var pD = Math.floor(p / 6);
        var pM = p % 6;
        fractionated.push(adfgvx[pM]);
        fractionated.push(adfgvx[pD]);
      }
      //console.log("Fractionated: " + fractionated);

      // lay codes on grid
      var columns = cleanKey2.length;
      var rows = Math.floor(fractionated.length / cleanKey2.length) + 1;
      //console.log("c/r " + columns + " " + rows);

      // read off half codes by column
      var colForm = [];
      for (var co = 0; co < columns; co++) {
        var tmpCol = "";
        for (var ro = 0; ro < rows; ro++) {
          if (ro * columns + co < fractionated.length) {
            tmpCol += fractionated[ro * columns + co];
          }
        }
        colForm.push(tmpCol);
      }
      //console.log("Read by Column: " + colForm);

      // shuffle columns by transposition keyword
      var output: string = "";
      for (var co = 0; co < columns; co++) {
        output += colForm[columnOrder[co]];
        output += " ";
      }

      return output;
    }

    // decryption process
    if (selector === "decrypt") {
      // clean up message and chunk it by spaces
      var messageChunks = [];
      var currentChunk = [];
      for (var i = 0; i < message.length; i++) {
        char = message[i];
        char = char.toUpperCase();
        if (adfgvx.indexOf(char) != -1) {
          currentChunk.push(char);
        } else {
          messageChunks.push(currentChunk);
          currentChunk = [];
        }
      }
      if (currentChunk.length > 0) {
        messageChunks.push(currentChunk);
      }

      // display chunks and find longest one
      var longChunkLen = 0;
      for (var disp = 0; disp < cleanKey2.length; disp++) {
        //console.log(messageChunks[disp]);
        var currChunkLen = messageChunks[disp].length;
        if (currChunkLen > longChunkLen) {
          longChunkLen = currChunkLen;
        }
      }
      //console.log("Longest chunk = " + longChunkLen);

      // swap chunks around by colOrder
      var orderedChunks = [];
      var emptyChunk: any[] = [];
      for (var k2 = 0; k2 < cleanKey2.length; k2++) {
        orderedChunks.push(emptyChunk);
      }

      for (var col = 0; col < columnOrder.length; col++) {
        orderedChunks[columnOrder[col]] = messageChunks[col];
      }
      //console.log("Chunks after transposition by key 2: " + orderedChunks);

      // read off columns
      var gridOrder = [];
      for (var l = 0; l < longChunkLen; l++) {
        for (var c = 0; c < cleanKey2.length; c++) {
          if (l < orderedChunks[c].length) {
            gridOrder.push(orderedChunks[c][l]);
          }
        }
      }
      //console.log("Original grid order: " + gridOrder + " length " + gridOrder.length);
      if (gridOrder.length % 2 == 0) {
        // get plaintext characters from grid
        var output = "";
        for (var pair = 0; pair < gridOrder.length; pair += 2) {
          var top = adfgvx.indexOf(gridOrder[pair]);
          var side = adfgvx.indexOf(gridOrder[pair + 1]);
          var ptPos = top + side * 6;
          output += cA[ptPos].toLowerCase();
        }

        return output;
      } else {
        output =
          "It's not possible to generate plaintext from the combination of supplied ciphertext and transposition key.";

        return output;
      }
    }

    return "";
  };

  return (
    <div className="container">
      <Intro
        title="Криптограф!"
        description="Germany cryptographers are genius..."
      />
      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            height={130}
            alt="photo"
            priority={true}
            style={{ width: "auto", borderRadius: 10 }}
          />
        </div>

        <div
          className="column"
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: 24,
            fontWeight: "bolder",
          }}
        >
          ADFGVX шифр | <strong style={{ color: "gray" }}>ADFGVX cipher</strong>
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis/statistic"}
            info={"Турших"}
            data={[
              {
                text: "Тайлбар",
                endpoint: "show",
              },
              {
                text: "Нууцлах, тайлах туршилт хийх",
                endpoint: "enc",
              },
            ]}
            onClick={(endpoint: any) => dropdownClick(endpoint)}
          />
        </div>
      </div>

      <div className="column">
        <strong>ADFGVX</strong> шифр нь Германы армид дэлхийн 1-р дайны үед
        ашиглагдаж байсан шифр юм. Тус шифр нь <strong>ADFGX</strong> шифрийн
        өргөтгөсөн хувилбар бөгөөд анх 1918 онд хэрэглээнд ашиглаж байжээ.
        <br></br>
      </div>

      {show == true && (
        <>
          <div className="mt-2">
            <div
              className="text-center"
              style={{ color: "green", fontWeight: "bold" }}
            >
              Тайлбар
            </div>

            <br></br>

            <div className="columns mt-4">
              <div className="column">
                ADFGVX шифр нь дараах 6x6 хүснэгтэд цагаан толгойн үсгүүдийг
                байрлуулж үсэг бүрийг харгалзах хос үсгээр сольдог. Өөрөөр
                хэлбэл цагаан толгойн 25 үсэг (i,j үсгүүдийг нэг гэж үзнэ) мөн
                0-9 хүртэл цифрүүд байх юм.
                <br></br>
                <br></br>
                Хүснэгтэд үсгийг байрлуулахдаа түлхүүр үг сонгож авдаг бөгөөд
                тухайн түлхүүр үгийн үсгүүдийг хүснэгтэд байрлуулсны дараа
                үсгийн дарааллаар үлдсэн үсгүүдийг байрлуулдаг.
                <br></br>
                <br></br>
                Тус жишээнд дараах үгийг түлхүүр болгон ашигласан байна:{" "}
                <strong style={{ color: "red" }}>nachtbommenwerper</strong>
                <br></br>
                <br></br>
                Тус шифрийн ялгаатай олон хувилбар байдаг бөгөөд зураг дээрх
                жишээнд түлхүүр үгэнд a үсэг орсон байвал ардаас нь 1 гэсэн
                цифр, b орсон байвал 2 гэх мэт дүрмийг баримтлан бичсэн байна.
              </div>
              <div className="column is-one-third">
                <Image
                  src={img1}
                  height={400}
                  width={400}
                  alt="photo"
                  priority={true}
                  style={{ width: "auto", borderRadius: 10 }}
                />
              </div>
            </div>

            <div className="columns mt-4">
              <div className="column">
                Дараах мэдээг шифрлэсэн гэж үзье:{" "}
                <strong style={{ color: "red" }}>attack at 12 00 am</strong>
                <br></br>
                <br></br>
                Дээрх хүснэгтээс харвал <strong>A</strong> үсэг A мөр болон D
                багана дээр байрласан байна.
              </div>
              <div className="column is-one-third">
                <Image
                  src={img2}
                  height={400}
                  width={400}
                  alt="photo"
                  priority={true}
                  style={{ width: "auto", borderRadius: 10 }}
                />
              </div>
            </div>

            <div className="columns mt-4">
              <div className="column">
                Үүний дараагаар дахин нэг түлхүүр үг сонгож авдаг бөгөөд дараах
                үгийг жишээ болгон авъя:
                <strong style={{ color: "red" }}> PRIVACY</strong>
                <br></br>
                <br></br>
                Дээрх хүснэгтээс харгалзуулан гаргаж авсан мэдээг энэ түлхүүрийн
                уртад харгалзуулан дараах байдлаар бичнэ.
              </div>
              <div className="column is-one-third">
                <Image
                  src={img3}
                  height={400}
                  width={400}
                  alt="photo"
                  priority={true}
                  style={{ width: "auto", borderRadius: 10 }}
                />
              </div>
            </div>

            <div className="columns mt-4">
              <div className="column">
                Сонгож авсан түлхүүрийн үсгүүдийг цагаан толгойн дараалалд
                оруулан шифр мэдээгээ гаргаж авна.
                <br></br>
                <br></br>
                Ингээд бид шифрлэсэн мэдээгээ гаргаж авлаа:{" "}
                <strong style={{ color: "red" }}>
                  DGDD DAGD DGAF ADDF DADV DVFA ADVX
                </strong>
              </div>
              <div className="column is-one-third">
                <Image
                  src={img4}
                  height={400}
                  width={400}
                  alt="photo"
                  priority={true}
                  style={{ width: "auto", borderRadius: 10 }}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {enc == true && (
        <div style={{ marginTop: 10 }}>
          <div className="notification is-info">
            ADFGVX шифр ашиглан нууцлах <br></br>
          </div>
          {error && <div className="notification is-primary">{error}</div>}

          <span
            className="tag is-primary"
            style={{ marginBottom: 10, color: "black" }}
          >
            1-р түлхүүр
          </span>
          <textarea
            className="textarea"
            placeholder="Хүснэгтэд байрладаг түлхүүр үгээ оруулна уу"
            rows={1}
            value={key1}
            onChange={(e) => handleKey1(e)}
          ></textarea>
          <br></br>
          <span
            className="tag is-primary"
            style={{ marginBottom: 10, color: "black" }}
          >
            2-р түлхүүр
          </span>
          <textarea
            className="textarea"
            placeholder="Дараагийн түлхүүр үгээ оруулна уу"
            rows={1}
            value={key2}
            onChange={(e) => handleKey2(e)}
          ></textarea>
          <br></br>

          {text.length !== 0 && (
            <div
              style={{
                margin: 10,
                color: "red",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              <strong style={{ color: "gray" }}>текстийн урт: </strong>
              {text.length}
            </div>
          )}
          <textarea
            className="textarea"
            placeholder="Мэдээгээ оруулна уу"
            rows={5}
            value={text}
            onChange={(e) => handleChange(e)}
          ></textarea>

          <div
            style={{
              marginTop: 10,
            }}
          >
            <button
              className="button is-info"
              style={{ margin: 15, color: "white", fontWeight: "initial" }}
              onClick={() => {
                if (text.length !== 0) {
                  if (key1.length == 0) {
                    setError("Түлхүүр үгээ оруулна уу");
                    return;
                  }
                  if (key2.length == 0) {
                    setError("Түлхүүр үгээ оруулна уу");
                    return;
                  }

                  setConvertedTxt(adfgvxCipher("encrypt", text, key1, key2));
                } else {
                  alert("Утга оруулна уу");
                }
              }}
            >
              Нууцлах!
            </button>

            <button
              className="button is-danger"
              style={{ margin: 15, color: "white", fontWeight: "initial" }}
              onClick={() => {
                if (text.length !== 0) {
                  if (key1.length == 0) {
                    setError("Түлхүүр үгээ оруулна уу");
                    return;
                  }
                  if (key2.length == 0) {
                    setError("Түлхүүр үгээ оруулна уу");
                    return;
                  }

                  setConvertedTxt(adfgvxCipher("decrypt", text, key1, key2));
                } else {
                  alert("Утга оруулна уу");
                }
              }}
            >
              Тайлах!
            </button>
          </div>

          {convertedTxt.length !== 0 && text.length !== 0 && (
            <div style={{ marginTop: 20 }}>
              <div className="notification is-success">{"Амжилттай"}</div>
              <textarea
                className="textarea"
                rows={5}
                value={convertedTxt}
                onChange={(e) => setConvertedTxt("")}
              ></textarea>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Crypto_adfgvx;
