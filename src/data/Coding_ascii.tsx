"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import Intro from "@/components/Intro";
const str2bin = require("str2bin");

const logo = "/img/ascii.png";
const ascii_table = "/img/ascii_table.png";

function Coding_ascii() {
  const [text, setText] =
    useState(`This paper conducts an extensive analysis of text mining applications in big data analytics as used in various commercial fields and academic studies. While the
vast majority of the literature deals with the optimization of a specific text mining technique, this paper seeks to summarize the features of all text mining methods, thereby summarizing the state-of-the-art
practices and approaches in all the possible fields of application. It is centered around seven key applications of text mining in transcripts and speeches, meeting transcripts, and academic journal
articles, as well as websites, emails, blogs, and social media networking sites; for each of these, we, respectively, provide a description of the field, their functionality, the most commonly used methods,
the associated problems, and the related and relevant references.`);

  const [convertedTxt, setConvertedTxt] = useState("");
  const [code, setCode] = useState(true);
  const [encode, setEnCode] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const dropdownClick = (endpoint: any) => {
    if (endpoint == "code") {
      setCode(true);
      setEnCode(false);
      setShowTable(false);

      setText("");
      setConvertedTxt("");
    } else if (endpoint == "encode") {
      setCode(false);
      setEnCode(true);
      setShowTable(false);

      setText("");
      setConvertedTxt("");
    } else if (endpoint == "table") {
      setCode(false);
      setEnCode(false);
      setShowTable(true);

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
            width={130}
            height={130}
            alt="photo"
            priority={true}
            style={{ width: "auto" }}
          />
        </div>

        <div
          className="column"
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: 22,
            fontWeight: "bolder",
          }}
        >
          ASCII кодлол <strong style={{ color: "gray" }}> | ASCII code</strong>
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis/statistic"}
            info={"Нэмэлт мэдээлэл"}
            data={[
              {
                text: "ASCII кодлох",
                endpoint: "code",
              },
              {
                text: "ASCII код тайлах",
                endpoint: "encode",
              },
              {
                text: "ASCII хүснэгт харах",
                endpoint: "table",
              },
            ]}
            onClick={(endpoint: any) => dropdownClick(endpoint)}
          />
        </div>
      </div>
      <div className="column">
        Ascii кодууд нь компьютер, харилцаа холбооны төхөөрөмж болон бусад
        төхөөрөмжүүдийн текстийг төлөөлдөг{" "}
        <strong>ЦАХИМ ХАРИЛЦААНЫ ТЭМДЭГТ КОДЛОЛЫН СТАНДАРТ</strong> юм.
      </div>

      {code == true && (
        <div>
          {/* <CategoryTitle title={"Туршилт хийх"} /> */}
          <div className="notification is-success">
            {"Ascii кодлох туршилт"}
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
            rows={6}
            value={text}
            onChange={(e) => handleChange(e)}
          ></textarea>

          <div
            style={{
              marginTop: 10,
            }}
          >
            <button
              className="button is-success"
              style={{ margin: 15, color: "white", fontWeight: "initial" }}
              onClick={() => {
                if (text.length !== 0) {
                  setConvertedTxt(str2bin.strToBin(text));
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
                ASCII тэмдэгтрүү амжилттай хөрвүүлэв.
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
          <div className="notification is-info">
            {"Ascii кодыг тайлах туршилт хийх"}
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
            placeholder="2-тын тоолол дээрх тэмдэгтээ оруулна уу"
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
                  setConvertedTxt(str2bin.binToStr(text));
                } else {
                  alert("Утга оруулна уу");
                }
              }}
            >
              Тэмдэгтрүү хөрвүүлэх!
            </button>
          </div>

          {convertedTxt.length !== 0 && text.length !== 0 && (
            <div style={{ marginTop: 20 }}>
              <div className="notification is-success">
                Тэмдэгтрүү амжилттай хөрвүүллээ
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

      {showTable == true && (
        <div
          style={{
            backgroundColor: "white",
          }}
        >
          <Image
            src={ascii_table}
            height={840}
            width={"840"}
            alt="photo"
            priority={true}
            style={{ margin: 2, width: "auto" }}
          />
        </div>
      )}
    </div>
  );
}

export default Coding_ascii;
