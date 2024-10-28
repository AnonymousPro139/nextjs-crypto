"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const forge = require("node-forge");
import ReactPlayer from "react-player";

const logo = "/img/des.png";
const img1 = "/img/des1.png";
const img2 = "/img/des2.png";
const img3 = "/img/des3.png";
const img4 = "/img/des4.png";

import Intro from "@/components/Intro";
import Dropdown from "@/components/Dropdown";

function Crypto_des() {
  const [show, setShow] = useState(true);
  const [enc, setEnc] = useState(false);
  const [key, setKey] = useState();
  const [iv, setIV] = useState();
  const [text, setText] = useState(`Data Encryption Standart`);
  const [convertedTxt, setConvertedTxt] = useState("");

  useEffect(() => {
    setKey(forge.util.bytesToHex(forge.random.getBytesSync(16)));
    setIV(forge.util.bytesToHex(forge.random.getBytesSync(8)));
  }, []);

  const handleChange = (event: any) => {
    setText(event.target.value);
    setConvertedTxt("");
  };

  const dropdownClick = (endpoint: any) => {
    if (endpoint == "enc") {
      setShow(false);
      setEnc(true);
    } else {
      if (endpoint == "dec") {
        setShow(false);
        setEnc(false);
        setText("");
      } else {
        setEnc(false);
        setShow(true);
      }
    }
  };

  return (
    <div className="container">
      <Intro title="Криптограф!" description="Data Encryption Standart" />
      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            height={135}
            width={135}
            alt="photo"
            priority={true}
            style={{ width: "auto", borderRadius: 20 }}
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
          DES шифр | <strong style={{ color: "gray" }}>DES cipher</strong>
        </div>
        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis"}
            info={"Горим"}
            data={[
              {
                text: "Тайлбар",
                endpoint: "show",
              },
              {
                text: "Туршилт хийх",
                endpoint: "enc",
              },
            ]}
            onClick={(endpoint: any) => dropdownClick(endpoint)}
          />
        </div>
      </div>

      <div className="column">
        <strong>DES</strong> буюу Data Encryption Standart алгоритмыг 1971 онд
        IBM-ын криптографч Horst Feistel зохиосон. DES нь 16 раундтай бөгөөд
        раунд тус бүр өөр өөр түлхүүр ашигладаг.
        <br></br>
        <br></br>
        <strong>DES</strong> нь AES алгоритмын өмнөх стандарт алгоритм бөгөөд
        2002 онд халаагаа өгч байжээ. Тус алгоритмын сул тал нь{" "}
        <strong>56 бит</strong> түлхүүр ашигладаг буюу орчин үед хэтэрхий богино
        урттай түлхүүрт тооцогдох юм.
        {show == true && (
          <>
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
              <ReactPlayer
                url="https://www.youtube.com/watch?v=S918rR4VdqQ&t=743s"
                height={400}
                controls={true}
              />
            </div>
          </>
        )}
      </div>

      {show == true && (
        <>
          <div className="columns mt-4">
            <div className="column is-half">
              <strong>Алгоритмын схем нь</strong> дараах байдалтай харагдана.
              <br></br>
              <br></br>
              Раунд бүрт ялгаатай, 48 бит урттай түлхүүр ашигладаг ба тус
              түлхүүрүүдийг Round key generator функцээс гаргаж авдаг.
            </div>
            <div className="column is-half">
              <Image
                src={img1}
                height={400}
                width={400}
                alt="photo"
                priority={true}
                style={{ width: "auto" }}
              />
            </div>
          </div>

          <div className="columns mt-4">
            <div className="column is-half">
              <strong>Initial болон Final Permutation</strong> функцүүд нь
              дараах байдалтай.
              <br></br>
              <br></br>
              Өөрөөр хэлбэл хамгийн эхэнд нэг удаа мөн хамгийн сүүлд 1 удаа
              хийгдэнэ.
            </div>
            <div className="column is-half">
              <Image
                src={img2}
                height={400}
                width={400}
                alt="photo"
                priority={true}
                style={{ width: "auto" }}
              />
            </div>
          </div>

          <div className="columns mt-4">
            <div className="column is-one-third">
              <strong>F</strong> функц нь DES алгоритмын{" "}
              <strong>үндсэн гол үйлдэл</strong> нь юм.
              <br></br>
              <br></br>- <strong>Expansion P box </strong>нь 32 бит оролт орж
              ирэхэд 48 бит болгож хувиргана.
              <br></br>- <strong>S box</strong> нь орлуулга хийх үйлдэл.
              <br></br>- <strong>P box</strong> нь байрлалыг нь солих үйлдэл тус
              тус байна.
            </div>
            <div className="column is-one-third">
              <Image
                src={img4}
                height={400}
                width={400}
                alt="photo"
                priority={true}
                style={{ width: "auto" }}
              />
            </div>
            <div className="column is-one-third">
              <Image
                src={img3}
                height={400}
                width={400}
                alt="photo"
                priority={true}
                style={{ width: "auto" }}
              />
            </div>
          </div>
        </>
      )}

      {enc == true && (
        <div style={{ marginTop: 10 }}>
          <div className="notification is-info">
            DES ашиглан нууцлах (CBC mode)
          </div>

          <span
            className="tag is-primary"
            style={{ marginBottom: 10, color: "black" }}
          >
            Дараах 16 байт түлхүүрийг санамсаргүй үүсгэв.
          </span>
          <textarea
            className="textarea"
            placeholder="Түлхүүрээ оруулна уу"
            rows={1}
            value={key}
            readOnly
          ></textarea>
          <br></br>
          <span
            className="tag is-primary"
            style={{ marginBottom: 10, color: "black" }}
          >
            Дараах 8 байт IV санамсаргүй үүсгэв.
          </span>
          <textarea
            className="textarea"
            placeholder="IV Түлхүүрээ оруулна уу"
            rows={1}
            value={iv}
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
                  var cipher = forge.cipher.createCipher("DES-CBC", key);
                  cipher.start({ iv: iv });
                  cipher.update(forge.util.createBuffer(text));
                  cipher.finish();
                  setConvertedTxt(cipher.output.toHex());
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
                  var decipher = forge.cipher.createDecipher("DES-CBC", key);
                  decipher.start({ iv: iv });
                  var data = forge.util.createBuffer();
                  data.putBytes(forge.util.hexToBytes(text));
                  decipher.update(data);
                  setConvertedTxt(decipher.output.toString());
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
    </div>
  );
}

export default Crypto_des;
