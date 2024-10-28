"use client";
import React, { useState } from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
import Dropdown from "@/components/Dropdown";
import CategoryTitle from "@/components/CategoryTitle";

const logo = "/img/caeser.jpg";
const photo = "/img/photo_caeser.png";

function Analys_caeser() {
  const [data, setData] = useState("");
  const [analys, setAnalys] = useState(false);
  const [error, setError] = useState("");
  const [key, setKey] = useState<number>(1);
  const [color, setColor] = useState("is-primary");
  const [attackArr, setAttackArr] = useState<any[]>([]);

  const [text, setText] =
    useState(`The remaining sections of this paper are organized in the following manner. In the Section 2, we introduce the topic of text mining in transcripts and speeches. We explain the different classification
  techniques used in, for instance, the analysis of political speeches that classify opinions or sentiments in a manner that allows one to infer from a text or speech the ideology that a speaker most probably
  espouses. Furthermore, we explain the methods used in classifying transcripts and speeches and  identify the shortcomings of these methods, which are primarily related to the behavioral nature of
  human beings, such as ironic or ideological behavior. In the Section 3, we take a closer look at blog  mining, the dominance of news-related content in blogs and micro-blogging, and present the methods
  used in this area. Most of the methods applied in blog mining are based on dimensionality reduction,  which is also found in other fields of text mining applications. Additionally, the relationship between
  blog mining and cybersecurity—which is an interesting and novel application of blog mining—is also  covered in this section. In the Section 4, we analyze email mining and the techniques commonly used
  in relation to it. A very specific feature of email mining is its noisy data, which has been discussed  in this section. Moreover, we explain the challenges to the identification of the content of the email
  body and how email mining is used in business intelligence. The web mining techniques that are used  in screening and analyzing websites are studied in the Section 5. The features of a website, such as
  links, links between websites, anchor text, and html tags, are also discussed. Moreover, the difficulty  of capturing unexpected and dynamically generated patterns of data is also explored. Additionally,
  the importance of pattern recognition and text matching in e-commerce is highlighted. In the Section 6,  we present studies conducted on the use of Twitter and Facebook and explain the role of text mining
  in marketing strategies based upon social media, as well as the use of social media platforms for the  prediction of financial markets. In Sections 7 and 8, we round up our extensive analysis of text mining
  applications by exploring the text mining techniques used for academic journal articles and meeting transcripts. Section 9 discusses the important issue of extract hidden knowledge from a set of texts and
  building hypotheses`);

  const encrypt = () => {
    if (data) {
      setData("");
      return;
    }

    if (isNaN(key) === true || key == 0) {
      setError("Түлхүүрээ оруулна уу");
      return;
    }

    if (key > 127) {
      setError("Түлхүүр хамгийн ихдээ 127 байна.");
      return;
    }

    if (text.length < 1) {
      setError("Текст оруулна уу");
      return;
    }

    const K = key;
    const textArr = stringToAsciiCodeArray(text);

    const cipArr: number[] = [];
    for (let i = 0; i < textArr.length; i++) {
      cipArr[i] = (Number(textArr[i]) + Number(K)) % 128;
    }
    const cipArrString = String.fromCharCode(...cipArr);
    setColor("is-primary");
    setData(cipArrString);
  };

  const decrypt = () => {
    setError("");

    if (data) {
      setData("");
      return;
    }

    // key.length == 0
    if (isNaN(key) === true || key == 0) {
      setError("Түлхүүрээ оруулна уу");
      return;
    }

    if (key > 127) {
      setError("Түлхүүр хамгийн ихдээ 127 байна.");
      return;
    }

    if (text.length < 1) {
      setError("Текст оруулна уу");
      return;
    }

    const textArr: number[] = stringToAsciiCodeArray(text);

    const cipArr: number[] = [];
    for (let i = 0; i < textArr.length; i++) {
      cipArr[i] = (Number(textArr[i]) - Number(key)) % 128;
      if (cipArr[i] < 0) {
        cipArr[i] = 128 + Number(cipArr[i]);
      }
    }

    const cipArrString = String.fromCharCode(...cipArr);
    setColor("is-warning");
    setData(cipArrString);
  };

  const setHandler = (e: any) => {
    setError("");
    setText("");
    if (e === "test") setAnalys(false);
    else setAnalys(true);
  };

  const attack = () => {
    if (text.length < 1) {
      setError("Текст оруулна уу");
      return;
    }

    const textArr = stringToAsciiCodeArray(text);
    var cipArr: number[] = [];
    var RetArr: { index: number; value: string }[] = [];

    for (let j = 1; j <= 127; j++) {
      // let K = parseInt(j);
      let K = j;

      for (let i = 0; i < textArr.length; i++) {
        cipArr[i] = (textArr[i] - K) % 128;
        if (cipArr[i] < 0) {
          cipArr[i] = 128 + cipArr[i];
        }
      }

      var cipArrString = String.fromCharCode(...cipArr);

      var jsonObj = {
        index: j,
        value: cipArrString,
      };
      RetArr.push(jsonObj);
      cipArr = [];
    }

    setAttackArr(RetArr);
  };

  const stringToAsciiCodeArray = (str: string) => {
    let arr: number[] = [];
    for (let i = 0; i < str.length; i++) {
      arr[i] = str[i].charCodeAt(0);
    }

    return arr;
  };

  return (
    <div className="container">
      <Intro title="Криптоанализ!" description="Julius Caeser" />
      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            height={130}
            width={130}
            alt="photo"
            priority={false}
            style={{ width: "auto" }}
          />
        </div>

        <div
          className="column"
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: 21,
            fontWeight: "bolder",
          }}
        >
          Цезарийн шифр алгоритм
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis/caeser"}
            info={"Цэс"}
            data={[
              {
                text: "Туршилт хийх",
                endpoint: "test",
              },
              {
                text: "Довтолгоо хийж шифрийг тайлах",
                endpoint: "attack",
              },
            ]}
            onClick={(endpoint: any) => setHandler(endpoint)}
          />
        </div>
      </div>

      <div className="column">
        <div className="column">
          Тодорхой K тоог түлхүүрээр сонгож түүгээрээ анхны текстны үсэг бүрд
          харгалзуулан үйлчилж шифр текст гаргаж авах аргачлалыг{" "}
          <strong>Цезарийн шифр</strong> гэж нэрлэдэг. Тус арга нь маш эртний
          арга бөгөөд <strong>Юлий Цезарь</strong> нь өөрийн хаант засаглалын
          үедээ мэдээ, мэдээллээ <strong>нууцалж</strong> түнш улсуудтайгаа
          харилцахдаа ашигладаг байжээ.
        </div>
        <div className=" column">
          <Image
            src={photo}
            height={430}
            width={430}
            alt="photo"
            priority={true}
            style={{ width: "auto" }}
          />
        </div>
        <div className="column">
          <strong> Жишээлбэл:</strong> Дараах зураг дээр хэрэв түлхүүрийг{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>K=3 </span>
          гэвэл тухайн текстэд байгаа A үсэг бүр D, харин B үсэг бүр E үсгээр
          гэх мэтчилэн бүх үсгүүд солигдох юм.
          <br></br>
          <br></br>
          Өөрөөр хэлбэл{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            annacarenina{" "}
          </span>
          гэх текст{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            dqqdfduhqlqd
          </span>{" "}
          болж хувирна.
        </div>
      </div>

      {analys ? (
        <div>
          <div className="notification is-danger">
            <strong>Brute force </strong> буюу боломжит бүх түлхүүрийг шавхаж ил
            текстийг унших аргаар тайлцгаая.{" "}
          </div>
          {error && <div className="notification is-danger">{error}</div>}
          <br />
          <div>
            <span className="tag is-danger" style={{ marginBottom: 10 }}>
              Текст {text.length !== 0 && <div> - урт: {text.length}</div>}
            </span>
            <textarea
              id="textarea"
              className="textarea"
              placeholder="Шифр текстээ оруулна уу"
              rows={5}
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                setError("");
              }}
            ></textarea>

            <button
              className="button is-danger"
              style={{ margin: 15, color: "white", fontWeight: "initial" }}
              onClick={() => attack()}
            >
              Довтлох!
            </button>
          </div>

          {attackArr.length > 0 && (
            <div>
              <table className="table is-fullwidth is-scrollable">
                <thead>
                  <tr>
                    <th>Боломжит түлхүүр</th>
                    <th>Боломжит утга</th>
                  </tr>
                </thead>

                <tbody style={{ height: "200px" }}>
                  {attackArr.map((el, index) => (
                    <tr key={index}>
                      <td>{el.index}</td>
                      <td>{el.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div>
            <CategoryTitle title={"Туршилт хийх"} />
            {error && <div className="notification is-danger">{error}</div>}

            <div style={{ marginBottom: 30 }}>
              <span className="tag is-danger" style={{ marginBottom: 10 }}>
                Түлхүүр {key !== 0 && <div> : {key}</div>}
              </span>
              <textarea
                id="text"
                className="textarea"
                placeholder="Түлхүүрээ оруулна уу"
                rows={1}
                value={key}
                onChange={(e: any) => {
                  setKey(e.target.value);
                  setError("");
                  setData("");
                }}
              ></textarea>
            </div>

            <div>
              <span className="tag is-danger" style={{ marginBottom: 10 }}>
                Текст {text.length !== 0 && <div> - урт: {text.length}</div>}
              </span>
              <textarea
                id="txt"
                className="textarea"
                placeholder="Шифрлэх текстээ оруулна уу"
                rows={5}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  setError("");
                  setData("");
                }}
              ></textarea>
            </div>

            {data && (
              <div style={{ marginTop: 20 }}>
                <span
                  className={
                    color === "is-primary" ? "tag is-primary" : "tag is-warning"
                  }
                  style={{ marginBottom: 10 }}
                >
                  Үр дүн {data.length !== 0 && <div> - урт: {data.length}</div>}
                </span>
                <textarea
                  id="txt2"
                  className="textarea"
                  rows={5}
                  defaultValue={data}
                  onChange={(e) => {
                    setData("");
                  }}
                ></textarea>
              </div>
            )}
          </div>
          <div
            style={{
              marginTop: 10,
            }}
          >
            <button
              className="button is-primary"
              style={{ margin: 15, color: "black", fontWeight: "initial" }}
              onClick={() => encrypt()}
            >
              Шифрлэх!
            </button>

            <button
              className="button is-warning"
              style={{ margin: 15, color: "black", fontWeight: "initial" }}
              onClick={() => decrypt()}
            >
              Тайлах!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Analys_caeser;
