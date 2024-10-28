"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer2 from "react-player";
import Intro from "@/components/Intro";
import Dropdown from "@/components/Dropdown";
const aesjs = require("aes-js");

import logo from "../../public/img/aes.png";
import img1 from "../../public/img/aes1.png";
import img2 from "../../public/img/aes2.png";
import img3 from "../../public/img/aes3.png";
import img4 from "../../public/img/aes4.png";
import img5 from "../../public/img/aes5.png";

function Crypto_aes() {
  const [show, setShow] = useState(true);
  const [enc, setEnc] = useState(false);
  const [dec, setDec] = useState(false);
  const [error, setError] = useState("");

  const [text, setText] = useState(`Advanced Encryption Standart`);
  const [convertedTxt, setConvertedTxt] = useState("");

  // An example 128-bit key (16 bytes * 8 bits/byte = 128 bits)
  const key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const handleChange = (event: any) => {
    setText(event.target.value);
    setConvertedTxt("");
  };

  const dropdownClick = (endpoint: any) => {
    if (endpoint == "enc") {
      setShow(false);
      setDec(false);
      setEnc(true);
      setError("")
    } else {
      if (endpoint == "dec") {
        setShow(false);
        setEnc(false);
        setDec(true);
        setText("")
        setError("")
      } else {
        setDec(false);
        setEnc(false);
        setShow(true);
        setError("")
      }
    }
  };
  return (
    <div className="container">
      <Intro title="Криптограф" description="Rijndael" />
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
          AES шифр | <strong style={{ color: "gray" }}>AES cipher</strong>
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis/statistic"}
            info={"Горим"}
            data={[
              {
                text: "Тайлбар",
                endpoint: "show",
              },
              {
                text: "Нууцлах (encrypt)",
                endpoint: "enc",
              },
              {
                text: "Тайлах (decrypt)",
                endpoint: "dec",
              },
            ]}
            onClick={(endpoint: any) => dropdownClick(endpoint)}
          />
        </div>
      </div>

      <div className="column">
        <strong>AES</strong> нь 2001 онд АНУ-ын Үндэсний Стандарт, Технологийн
        Хүрээлэнгээс тогтоосон мэдээлэл <strong>нууцлалын алгоритм</strong> юм.
        <br></br>
        <br></br>
        {show == true && (
          <>
            <strong>Дараах шинж чанартай:</strong>
            <ul>
              <li>- Блок төрлийн алгоритм.</li>
              <li>- Түлхүүрийн урт нь 128/192/256 байх боломжтой.</li>
              <li>
                - 128 бит бүрээр нь таслан тус бүр дээр нь алгоритм нь
                ажилладаг.
              </li>
            </ul>
            <div
              className="mt-4"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p className="mb-2" style={{ color: "gray" }}>
                Ажиллах зарчмыг нь дараах бичлэгээс үзээрэй :
              </p>
              <ReactPlayer2
                url="https://www.youtube.com/watch?v=gP4PqVGudtg"
                height={400}
                controls={true}
              />
            </div>
          </>
        )}
      </div>

      {show == true && (
        <>
          <div className="mt-4">
            <div className="text-center" style={{ color: "green" }}>
              Түлхүүр үүсгэх
            </div>

            <br></br>

            <div className="columns mt-4">
              <div className="column is-half">
                Түлхүүр үүсгэх алгоритм нь тухайн анхны түлхүүрээс (init key)
                бүхий л раундуудад ашиглагдах түлхүүрийг үүсгэж өгөх зорилготой.
              </div>
              <div className="column is-half">
                <Image
                  src={img1}
                  height={400}
                  alt="photo"
                  priority={true}
                  style={{ width: "auto", borderRadius: 10 }}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-center" style={{ color: "green" }}>
              Нууцлах (Encrypt)
            </div>
            <br></br>

            <div className="columns mt-4">
              <div className="column is-half">
                AES алгоритм нь оролтын 128 бит буюу 16 байт блокыг дараах
                хэлбэртэй матриц гэж дүрслэн хувиргалтаа хийдэг.
                <br></br>
                <br></br>
                Раунд бүр нь дараах 4 төрлийн хувиргалтуудтай:
                <ul>
                  <li>
                    - <strong>SubBytes</strong> (орлуулга)
                  </li>
                  <li>
                    - <strong>ShiftRows</strong> (байрлалыг нь солих чанартай
                    хувиргалт)
                  </li>
                  <li>
                    - <strong>MixColumns</strong> (байрлалыг нь солих чанартай
                    хувиргалт)
                  </li>
                  <li>
                    - <strong>Add Round Key</strong>
                  </li>
                </ul>
                <br></br>
                Анхааруулахад, хамгийн сүүлийн раунд дээрээ{" "}
                <strong>MixColumns</strong> хувиргалтыг хийдэггүй.
              </div>
              <div className="column is-half">
                <Image
                  src={img2}
                  height={400}
                  alt="photo"
                  priority={true}
                  style={{ width: "auto", borderRadius: 10 }}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-center" style={{ color: "green" }}>
              SubBytes
            </div>
            <br></br>

            <div className="column">
              Энэ хувиргалт нь орлуулга хийх шинж чанартай. Өөрөөр хэлбэл byte
              бүр нь өөр byte-аар солигдоно. <strong>S-box</strong> гэх таблицын
              тусламжтайгаар аль byte нь ямар byte-аар солигдоно гэдгийг
              тооцоолдог.
              <br></br>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-center" style={{ color: "green" }}>
              ShiftRows
            </div>
            <br></br>

            <div className="columns mt-4">
              <div className="column is-half">
                Байрлалыг нь солих шинж чанартай үйлдэл.
                <br></br>
                <br></br>
                Тухайлбал,
                <ul>
                  <li>- Хамгийн эхний мөр хөдлөхгүй.</li>
                  <li>- 2 дахь мөр нь зүүн тийш нэг шилжинэ.</li>
                  <li>- 3 дахь мөр нь зүүн тийш хоёр шилжинэ.</li>
                  <li>- 3 дахь мөр нь зүүн тийш гурав шилжинэ.</li>
                </ul>
              </div>
              <div className="column is-half">
                <Image
                  src={img3}
                  height={400}
                  alt="photo"
                  priority={true}
                  style={{ width: "auto", borderRadius: 10 }}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-center" style={{ color: "green" }}>
              MixColumns
            </div>
            <br></br>

            <div className="columns mt-4">
              <div className="column is-half">
                Матрицын үржвэр хэлбэрээр тодорхойлдог. Тухайн мөр болгоныг
                урьдчилан тодорхойлсон матрицаар үржүүлдэг.
              </div>
              <div className="column is-half">
                <Image
                  src={img4}
                  height={400}
                  alt="photo"
                  priority={true}
                  style={{ width: "auto", borderRadius: 10 }}
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-center" style={{ color: "green" }}>
              Add Round Key
            </div>
            <br></br>

            <div className="columns mt-4">
              <div className="column is-half">
                Тухайн раундын түлхүүр бүрийг XOR(нэмэх) үйлдлээр тухайн 16 byte
                буюу 128 бит дээр нэмнэ.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                Харин <strong style={{ color: "red" }}>тайлах үйлдэл</strong> нь
                тухайн алгоритмын урвуу нь байх бөгөөд дараах хэлбэрээр бичиж
                болно.
                <br></br>
                <br></br>
                <ul>
                  <li>
                    - <strong>Add Round Key</strong>
                  </li>
                  <li>
                    - <strong>Inverse MixColumns</strong>
                  </li>
                  <li>
                    - <strong>ShiftRows</strong>
                  </li>
                  <li>
                    - <strong>Inverse SubByte</strong>
                  </li>
                </ul>
              </div>
              <div className="column is-half">
                <Image
                  src={img5}
                  height={400}
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
            AES ашиглан нууцлах <br></br>
            <br></br>{" "}
            <strong style={{ color: "yellow" }}>Анхны түлхүүр:</strong> [1, 2, 3
            ... 16] <br></br>
            <strong style={{ color: "yellow" }}>MODE = CTR-Counter</strong>
          </div>

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
                  var textBytes = aesjs.utils.utf8.toBytes(text);
                  // The counter is optional, and if omitted will begin at 1
                  var aesCtr = new aesjs.ModeOfOperation.ctr(
                    key,
                    new aesjs.Counter(5)
                  );
                  var encryptedBytes = aesCtr.encrypt(textBytes);
                  var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
                  setConvertedTxt(encryptedHex);
                } else {
                  alert("Утга оруулна уу");
                }
              }}
            >
              Нууцлах!
            </button>
          </div>

          {convertedTxt.length !== 0 && text.length !== 0 && (
            <div style={{ marginTop: 20 }}>
              <div className="notification is-success">
                {"Амжилттай нууцлав."}
              </div>
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

      {dec == true && (
        <div style={{ marginTop: 10 }}>
          <div className="notification is-info">{"AES кодыг тайлах"}</div>

          {error && <div className="notification is-danger">{error}</div>}
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
            placeholder="Тайлах мэдээгээ оруулна уу"
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
                  let regExp = /[0-9A-Fa-f]{6}/g;
                  if (regExp.test(text) == false) {
                    setError("Алдаа: Encrypt хийгдсэн hex утга байх ёстой!");
                    return;
                  }
                  // When ready to decrypt the hex string, convert it back to bytes
                  var encryptedBytes = aesjs.utils.hex.toBytes(text);
                  // The counter mode of operation maintains internal state, so to decrypt a new instance must be instantiated.
                  var aesCtr = new aesjs.ModeOfOperation.ctr(
                    key,
                    new aesjs.Counter(5)
                  );
                  var decryptedBytes = aesCtr.decrypt(encryptedBytes);
                  // Convert our bytes back into text
                  var decryptedText =
                    aesjs.utils.utf8.fromBytes(decryptedBytes);
                  setConvertedTxt(decryptedText);
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
              <div className="notification is-success">
                {"AES кодыг амжилттай тайлав."}
              </div>
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

export default Crypto_aes;
