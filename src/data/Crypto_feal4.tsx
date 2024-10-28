"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
import Dropdown from "@/components/Dropdown";
import {
  encrypt,
  decrypt,
  strToByteArray,
  generateSubkeys,
  byteArrayToStr,
} from "../utils/feal4";

const logo = "/img/feal4.png";
const img1 = "/img/feal1.png";
const img2 = "/img/feal2.png";
const img3 = "/img/feal3.png";

function Crypto_feal4() {
  const [show, setShow] = useState(true);
  const [enc, setEnc] = useState(false);
  const [key, setKey] = useState("");
  const [arrayKey, setArrayKey] = useState<Uint32Array>();

  const [error, setError] = useState("");
  const [text, setText] = useState(`Fast`);
  const [convertedTxt, setConvertedTxt] = useState("");

  useEffect(() => {
    var keys: Uint32Array = generateSubkeys();
    var showHex = "";
    for (let i = 0; i < keys.length; i++) {
      showHex = showHex + keys[i].toString(16) + ", ";
    }

    setArrayKey(keys);
    setKey(showHex);
  }, []);

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

  const handleChange = (event: any) => {
    setText(event.target.value);
    setConvertedTxt("");
  };

  return (
    <div className="container">
      <Intro title="Криптограф!" description="Fast Data Encryption Algorithm" />

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            height={130}
            width={130}
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
          Feal-4 шифр | <strong style={{ color: "gray" }}>Feal-4 cipher</strong>
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

      {show == true && (
        <>
          <div className="column">
            <strong>FEAL-4</strong> гэдэг нь{" "}
            <strong>Fast Data Encryption Algorithm </strong>гэсэн үгний товчлол
            бөгөөд 1987 онд Японы харилцаа холбооны газарт загварчлан бүтээсэн
            байдаг.
            <br />
            <br />
            Тухайн үед <strong>DES </strong>алгоритмыг орлуулах шаардлага үүссэн
            бөгөөд хурдтай, найдвартай алгоритм бүтээх шаардлага гарсан. Үнэхээр
            тус алгоритм нь маш хурдтай ажилладаг бөгөөд аюулгүй байдлын хувьд
            тодорхой эрсдэлтэй байж болохуйц юм.
            <div
              className="text-center mt-4"
              style={{ color: "green", fontWeight: "bold" }}
            >
              Дараах схемын дагуу шифрлэлт хийгдэнэ.
            </div>
            <div className="columns mt-4">
              <div className="column is-half">
                <br></br>
                <br></br>
                <ul>
                  <li>
                    <strong>P</strong> - ил Мэдээ
                  </li>
                  <li>
                    <strong>C</strong> - шифр мэдээ
                  </li>
                  <li>
                    <strong>R </strong>- хувиргалт хийх функц
                  </li>
                  <li>
                    <strong>K </strong>- 32 битийн түлхүүрүүд
                  </li>
                  <li>
                    <strong>+ </strong>- XOR үйлдэл
                  </li>
                </ul>
              </div>
              <div className="column is-half">
                <Image
                  src={img1}
                  height={400}
                  width={400}
                  alt="photo"
                  priority={true}
                  style={{ borderRadius: 10 }}
                />
              </div>
            </div>
          </div>

          <div>
            <div
              className="text-center mt-4"
              style={{ color: "green", fontWeight: "bold" }}
            >
              Хувиргалт хийх функц (F)
            </div>
            <div className="columns mt-4">
              <div className="column is-half">
                <Image
                  src={img3}
                  height={400}
                  width={400}
                  alt="photo"
                  priority={true}
                  style={{ borderRadius: 10 }}
                />
                <br></br>
                <br></br>
                <br></br>

                <p
                  className="text-center"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  Тайлах үйлдэл нь тус схемийн урвуу нь гэдгийг санаарай.
                </p>
              </div>
              <div className="column is-half">
                <Image
                  src={img2}
                  height={400}
                  width={400}
                  alt="photo"
                  priority={true}
                  style={{ borderRadius: 10 }}
                />
              </div>
            </div>
          </div>
        </>
      )}

      {enc == true && (
        <div style={{ marginTop: 10 }}>
          <div className="notification is-info">
            Feal-4 шифр ашиглан нууцлах <br></br>
          </div>
          {error && <div className="notification is-primary">{error}</div>}

          <span
            className="tag is-primary"
            style={{ marginBottom: 10, color: "black" }}
          >
            Дараах түлхүүрүүдийг санамсаргүй үүсгэв.
          </span>
          <textarea
            className="textarea"
            placeholder="Түлхүүрээ оруулна уу"
            rows={1}
            value={key}
            readOnly
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
                  //   setConvertedTxt(byteArrayToStr(encrypt(strToByteArray(text), arrayKey)))
                  setConvertedTxt(
                    encrypt(strToByteArray(text), arrayKey).toString()
                  ); // byte array
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
                  var a = text.split(",");
                  var t: number[] = [];
                  for (let i = 0; i < a.length; i++) {
                    t[i] = parseInt(a[i]);
                  }

                  setConvertedTxt(byteArrayToStr(decrypt(t, arrayKey)));
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
                readOnly
              ></textarea>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Crypto_feal4;
