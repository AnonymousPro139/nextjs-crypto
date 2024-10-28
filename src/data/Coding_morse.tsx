"use client";
import React, { useState } from "react";
import Image from "next/image";
import base64js from "base64-js";
import Dropdown from "@/components/Dropdown";
import Intro from "@/components/Intro";
import logo from "../../public/img/morse2.png";
import table from "../../public/img/morse table.jpg";
const morse = require("morsee");

function Coding_morse() {
  const [text, setText] =
    useState(`Data mining and text mining differ on the type of data they handle. While data mining handles
  structured data coming from systems, such as databases, spreadsheets, ERP, CRM, and accounting
  applications, text mining deals with unstructured data found in documents, emails, social media, and
  the web. Thus, the difference between regular data mining and text mining is that in text mining the
  patterns are extracted from natural language text rather than from structured databases of facts [2].
  Since all the written or spoken information can be represented in textual form, data mining requires all
  kinds of text mining tools when it comes to the interpretation and analysis of sentences, words, phrases,
  speeches, claims, adverts, and statements. This paper conducts an extensive analysis of text mining
  applications in big data analytics as used in various commercial fields and academic studies. While the
  vast majority of the literature deals with the optimization of a specific text mining technique, this paper
  seeks to summarize the features of all text mining methods, thereby summarizing the state-of-the-art
  practices and approaches in all the possible fields of application. It is centered around seven key
  applications of text mining in transcripts and speeches, meeting transcripts, and academic journal
  articles, as well as websites, emails, blogs, and social media networking sites; for each of these, we,
  respectively, provide a description of the field, their functionality, the most commonly used methods,
  the associated problems, and the related and relevant references.
  The remaining sections of this paper are organized in the following manner. In the Section 2, we
  introduce the topic of text mining in transcripts and speeches. We explain the different classification
  techniques used in, for instance, the analysis of political speeches that classify opinions or sentiments
  in a manner that allows one to infer from a text or speech the ideology that a speaker most probably
  espouses. Furthermore, we explain the methods used in classifying transcripts and speeches and
  identify the shortcomings of these methods, which are primarily related to the behavioral nature of
  human beings, such as ironic or ideological behavior. In the Section 3, we take a closer look at blog
  mining, the dominance of news-related content in blogs and micro-blogging, and present the methods
  used in this area. Most of the methods applied in blog mining are based on dimensionality reduction,
  which is also found in other fields of text mining applications. Additionally, the relationship between
  blog mining and cybersecurity—which is an interesting and novel application of blog mining—is also
  covered in this section. In the Section 4, we analyze email mining and the techniques commonly used
  in relation to it. A very specific feature of email mining is its noisy data, which has been discussed
  in this section. Moreover, we explain the challenges to the identification of the content of the email
  body and how email mining is used in business intelligence. The web mining techniques that are used
  in screening and analyzing websites are studied in the Section 5. The features of a website, such as
  links, links between websites, anchor text, and html tags, are also discussed. Moreover, the difficulty
  of capturing unexpected and dynamically generated patterns of data is also explored. Additionally,
  the importance of pattern recognition and text matching in e-commerce is highlighted. In the Section 6,
  we present studies conducted on the use of Twitter and Facebook and explain the role of text mining
  in marketing strategies based upon social media, as well as the use of social media platforms for the
  prediction of financial markets. In Sections 7 and 8, we round up our extensive analysis of text mining
  applications by exploring the text mining techniques used for academic journal articles and meeting
  transcripts. Section 9 discusses the important issue of extract hidden knowledge from a set of texts and
  building hypotheses. Finally, in the concluding section, we highlight the advantages and challenges
  related to text mining and discuss its potential benefits to society and individuals There are two types of text mining algorithms: supervised learning and unsupervised learning
  (the two terms originated in machine learning methods). Supervised learning algorithms are employed
  when there is a set of predictors to predict a target variable. The algorithm uses the target’s observed
  values to train a prediction model. Support vector machines (SVMs) are a set of supervised learning
  methods used for classification and prediction. On the other hand, unsupervised learning methods do
  not use a target value to train their models. In other words, the unsupervised learning algorithms use
  a set of predictors (features) to reveal hidden structures in the data. Non-negative matrix factorization
  is an unsupervised learning method Transcripts are a written or printed version of material originally presented in another medium,
  such as in speeches. Therefore, the analysis of transcripts can be treated in the same manner
  as the analysis of speeches, as spoken words need to be pre-processed through, for instance, a
  voice-recognition API or manual transcription. Despite its extensive application in transcripts from
  other fields, such as marketing and political science, text mining as a technique in economics has
  historically been less explored. Bholat et al. presented a comprehensive overview of the various
  text mining techniques used for research topics of interest to central banks for analyzing a corpus of
  documents, including, amongst others, the verbatim transcripts of meetings. Recently, three years
  of speeches, interviews, and statements of the Secretary General of Organization of the Petroleum
  Exporting Countries (OPEC) were analyzed using text-minin techniques.`);
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
            fontSize: 24,
            fontWeight: "bolder",
          }}
        >
          Морз код | <strong style={{ color: "gray" }}>Morse code</strong>
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis/statistic"}
            info={"Кодлох горим"}
            data={[
              {
                text: "Морз ашиглан кодлох",
                endpoint: "code",
              },
              {
                text: "Морз кодыг тайлах",
                endpoint: "encode",
              },
            ]}
            onClick={(endpoint: any) => dropdownClick(endpoint)}
          />
        </div>
      </div>

      {code == true && (
        <div className="column">
          Анхны <strong>цахилгаан соронзон</strong> телеграфыг{" "}
          <strong>1833</strong> онд бүтээжээ. Энэ төхөөрөмжөөр зөвхөн хувьсах
          урттай импульс илгээх боломжтой байв. Тиймээс тэмдэгтүүдийг богино ба
          урт импульсийн дарааллаар орчуулах шаардлагатай байлаа.{" "}
          <strong>1909</strong> онд ийм төхөөрөмжөөр SOS дохиог анх удаа задгай
          тэнгист өгчээ.
          <br></br>
          <br></br>
          Морзын цагаан толгой нь <strong>цэг, зурааснаас</strong> бүрдэнэ.
          Тэмдэгт болон тэмдэгтүүдийг тогтмол{" "}
          <strong style={{ color: "red" }}> дохио </strong> болгон хувиргаж
          болдог.
          <br></br> <br></br>
          Дамжуулсан хоёр тэмдэгтийн хоорондох завсарлага нь хоёр тэмдгийн (цэг
          эсвэл зураас) хоорондох завсарлагаас гурав дахин урт байх ёстой. Хоёр
          үгийн хоорондох завсарлага нь хоёр тэмдэгтийн хоорондох завсарлагаас
          ойролцоогоор хоёр дахин урт байх ёстой.
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
                height={800}
                alt="photo"
                priority={true}
                style={{ width: "auto" }}
              />
            </div>
          )}
          <br></br>
          Дараах <strong style={{ color: "red" }}> дохиог сонсож</strong> мэдээг
          тайлахыг оролдож үзээрэй
          <table
            className="table is-bordered  is-hoverable is-fullwidth"
            style={{ margin: 10 }}
          >
            <tbody>
              <tr>
                <th>Хялбархан</th>
                <th>
                  <a
                    style={{
                      color: "green",
                      fontSize: 18,
                    }}
                    href="https://www.cryptool.org/_ctoApps/morsecode/morse/english/1.mp3"
                  >
                    Радио дохио 1 сонсох
                  </a>
                </th>
              </tr>
              <tr>
                <th>Дунд зэргийн</th>
                <th>
                  <a
                    style={{
                      color: "green",
                      fontSize: 18,
                    }}
                    href="https://www.cryptool.org/_ctoApps/morsecode/morse/english/2.mp3"
                  >
                    Радио дохио 2 сонсох
                  </a>
                </th>
              </tr>{" "}
              <tr>
                <th>Хүнд</th>
                <th>
                  {" "}
                  <a
                    style={{
                      color: "green",
                      fontSize: 18,
                    }}
                    href="https://www.cryptool.org/_ctoApps/morsecode/morse/english/3.mp3"
                  >
                    Радио дохио 3 сонсох
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {code == true && (
        <div style={{ marginTop: 10 }}>
          <div className="notification is-info">{"Морз ашиглан кодлох"}</div>
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
                  //   setConvertedTxt(morseCode.morseSentence(text));
                  setConvertedTxt(morse.encode(text));
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
                {"Морз тэмдэгтрүү амжилттай хөрвүүлэв."}
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

      {encode == true && (
        <div style={{ marginTop: 10 }}>
          <div className="notification is-info">{"Морз кодыг тайлах"}</div>
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
                  //   setConvertedTxt(morseCode.stringSentence(text));
                  setConvertedTxt(morse.decode(text));
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
                {"Морз кодыг амжилттай хөрвүүлэв."}
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

export default Coding_morse;
