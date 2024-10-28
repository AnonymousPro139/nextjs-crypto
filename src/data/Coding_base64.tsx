"use client";
import React, { useState } from "react";
import Image from "next/image";
import base64js from "base64-js";
import Dropdown from "@/components/Dropdown";
import Intro from "@/components/Intro";
const logo = "/img/base64.png";
const table = "/img/base64_table.png";

function Coding_base64() {
  const [text, setText] =
    useState(`A very specific feature of email mining is its noisy data, which has been discussed in this section. Moreover, we explain the challenges to the identification of the content of the email
  body and how email mining is used in business intelligence. The web mining techniques that are used  in screening and analyzing websites are studied in the Section 5. The features of a website, such as
  links, links between websites, anchor text, and html tags, are also discussed. Moreover, the difficulty  of capturing unexpected and dynamically generated patterns of data is also explored. Additionally,
  the importance of pattern recognition and text matching in e-commerce is highlighted. In the Section 6,  we present studies conducted on the use of Twitter and Facebook and explain the role of text mining
  in marketing strategies based upon social media, as well as the use of social media platforms for the  prediction of financial markets. In Sections 7 and 8, we round up our extensive analysis of text mining
  applications by exploring the text mining techniques used for academic journal articles and meeting
  transcripts.`);
  const [convertedTxt, setConvertedTxt] = useState("");

  const [code, setCode] = useState(true);
  const [encode, setEnCode] = useState(false);

  const dropdownClick = (endpoint: any) => {
    if (endpoint == "code") {
      setCode(true);
      setEnCode(false);

      setText("");
      setConvertedTxt("");
    } else if (endpoint == "encode") {
      setCode(false);
      setEnCode(true);

      setText("");
      setConvertedTxt("");
    } else if (endpoint == "table") {
      setCode(false);
      setEnCode(false);

      setText("");
      setConvertedTxt("");
    }
  };

  const handleChange = (event: any) => {
    setText(event.target.value);
    setConvertedTxt("");
  };

  return (
    <div className="container">
      <Intro
        title="Кодлол!"
        description="Бүх шинжлэх ухааны хаан нь МАТЕМАТИК юм."
      />
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
          Base 64 кодлол
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis/statistic"}
            info={"Горим"}
            data={[
              {
                text: "Base64 кодлох",
                endpoint: "code",
              },
              {
                text: "Base64 код тайлах",
                endpoint: "encode",
              },
            ]}
            onClick={(endpoint: any) => dropdownClick(endpoint)}
          />
        </div>
      </div>

      <div className="column">
        ASCII тэмдэгтүүд 8 битээс бүрдэнэ. <strong>Base64</strong> нь 8 битийн
        тэмдэгтүүдийг <strong>6</strong> битийн тэмдэгт болгон кодлодог. Энэ нь
        SMTP и-мэйл протоколын анхны хувилбарт шаардлагатай байсан бөгөөд
        тэмдэгтүүдэд зөвхөн дээд тал нь 7 битийг зөвшөөрдөг. Кодчилол нь
        өгөгдлийн хэмжээг 36%-иар нэмэгдүүлдэг. Зөвхөн{" "}
        <strong>A-Z, a-z, 0-9, + болон = </strong>тэмдэгтүүдийг ашиглана. Хэрэв
        оролтын битийн нийт тоо 24-т жигд хуваагдахгүй бол Base64-ээр тэгийг
        дүүргэх бит болгон нэмнэ. Бүрэн дүүргэх байт (8 бит) нь = кодоор
        кодлогддог.
        <br></br>
        <br></br>Хэрэв <strong>"ABBA"</strong> мессежийг кодлох шаардлагатай бол
        ASCII хүснэгтийн дагуу дараах битүүдийн дараалал гарч ирнэ.{" "}
        <strong>01000001 01000010 01000010 01000001</strong> <br></br>Энэ битийн
        дарааллыг одоо <strong>6 битийн блокуудад хувааж</strong>, битийн тоо
        24-т хуваагдах хүртэл төгсгөлийг нь тэгээр дүүргэнэ.{" "}
        <strong>010000 010100 001001 000010 010000 010000</strong>{" "}
        <strong style={{ color: "red" }}>000000 000000</strong>.<br></br>
        Нэмж хэлэхэд, дарааллын төгсгөлд 2 хаалтын байт нэмэгдсэн. Тиймээс код
        үгийн <strong style={{ color: "red" }}>
          төгсгөлд хоёр = тэмдэгт
        </strong>{" "}
        агуулагдана. Үлдсэн дарааллыг кодын хүснэгтийн дагуу орчуулна.
        {code == true && (
          <div
            style={{
              backgroundColor: "white",
              marginTop: 20,
              marginLeft: 15,
              marginRight: 10,
            }}
          >
            <Image
              src={table}
              height={840}
              width={840}
              alt="photo"
              priority={true}
              style={{ width: "auto" }}
            />
          </div>
        )}
      </div>

      {code == true && (
        <div>
          <div className="notification is-info">
            {"Base64 кодлох туршилт хийх"}
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
            placeholder="Тэмдэгтээ оруулна уу"
            rows={8}
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
                  let utf8Encode = new TextEncoder();
                  var arr = utf8Encode.encode(text); // string convert to bytearray
                  setConvertedTxt(base64js.fromByteArray(arr)); // bytearray convert to base64
                } else {
                  alert("Утга оруулна уу");
                }
              }}
            >
              Хөрвүүлэх!
            </button>
          </div>

          {convertedTxt.length !== 0 && text.length !== 0 && (
            <div style={{ marginTop: 20 }}>
              <div className="notification is-success">
                {"Base64 тэмдэгтрүү амжилттай хөрвүүлэв."}
              </div>
              <textarea
                className="textarea"
                rows={8}
                value={convertedTxt}
                onChange={(e) => setConvertedTxt("")}
              ></textarea>
            </div>
          )}
        </div>
      )}
      {encode == true && (
        <div>
          {/* <CategoryTitle
            title={"Base64 кодыг тэмдэгтрүү хөрвүүлэх туршилт хийх"}
          /> */}
          <div className="notification is-info">
            {"Base64 кодыг тэмдэгтрүү хөрвүүлэх туршилт хийх"}
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
            placeholder="Base64 кодлолтой тэмдэгтүүдийг оруулна уу"
            rows={8}
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
                  var byteArr = base64js.toByteArray(text); // takes a base64 string and returns a byte array
                  // setConvertedTxt(String.fromCharCode.apply(null, byteArr)); // bytearray to string
                  setConvertedTxt(
                    String.fromCharCode.apply(null, [
                      ...new Uint8Array(byteArr),
                    ])
                  );
                } else {
                  alert("Утга оруулна уу");
                }
              }}
            >
              Хөрвүүлэх!
            </button>
          </div>

          {convertedTxt.length !== 0 && text.length !== 0 && (
            <div style={{ marginTop: 20 }}>
              <div className="notification is-success">
                {"Тэмдэгтрүү амжилттай хөрвүүллээ."}
              </div>
              <textarea
                className="textarea"
                rows={8}
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

export default Coding_base64;
