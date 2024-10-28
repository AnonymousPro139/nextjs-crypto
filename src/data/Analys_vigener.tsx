"use client";
import React, { useState } from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Dropdown from "@/components/Dropdown";
import CategoryTitle from "@/components/CategoryTitle";

const logo = "/img/vigenere.png";
const photo = "/img/vig.png";

function Analys_vigener() {
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
  const [key, setKey] = useState("start");
  const [error, setError] = useState<string | null>(null);
  const [encryptedData, setEncryptedData] = useState<string | null>(null);
  const [analyzData, setAnalyzData] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [bigramData, setBigramData] = useState<any[]>([]);
  const [threegramData, setThreegramData] = useState<any[]>([]);
  const [fourgramData, setFourgramData] = useState<any[]>([]);
  const [fivegramData, setFivegramData] = useState<any[]>([]);
  const [ICdata, setICdata] = useState<any[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    setEncryptedData(null);
    setError(null);
  };

  const handleAnalyz = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnalyzData(event.target.value);
    setError(null);
    setBigramData([]);
    setThreegramData([]);
    setFourgramData([]);
    setFivegramData([]);
    setICdata([]);
  };

  const handleKey = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
    setEncryptedData(null);
    setError(null);
  };

  const stringToAsciiCodeArray = (str: string) => {
    let arr: number[] = [];
    for (let i = 0; i < str.length; i++) {
      arr[i] = str[i].charCodeAt(0);
    }

    return arr;
  };

  const dropdownClick = (e: string) => {
    setError(null);
    if (e === "analyz") setIsAnalyzing(true);
    else setIsAnalyzing(false);
  };

  const createColumnArray = (
    columnNumber: number,
    keyLength: number,
    Arr: any[] | string
  ) => {
    const columnArr = [];
    const sizeColumn = Math.floor(Arr.length / keyLength); //үлдэгдэл хэсгийг орхив

    for (let i = 0; i < sizeColumn; i++) {
      columnArr[i] = Arr[columnNumber + i * keyLength];
    }

    return columnArr;
  };

  const IC = (arr: any[]) => {
    // индэкс совпадения
    var A: any[] = [];
    var countA: number[] = [];
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
      if (!A.includes(arr[i])) {
        A.push(arr[i]);

        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            count = count + 1;
          }
        }
        countA.push(count);
        count = 1;
      }
    }

    let summa = 0;
    for (let i = 0; i < countA.length; i++) {
      summa = summa + countA[i] * (countA[i] - 1);
    }

    const m = arr.length;
    let Ic = summa / (m * (m - 1));

    return Ic;
  };

  const calcIC = () => {
    let ic = 0;
    var colA = [];
    var icArr: number[] = [];

    for (let i = 2; i < 20; i++) {
      for (let j = 0; j < i; j++) {
        colA = createColumnArray(j, i, analyzData);

        ic = IC(colA);
      }

      icArr.push(ic);
    }

    setICdata(prepareICdiagramData(icArr));
  };

  const prepareICdiagramData = (Arr: any[]) => {
    let mydata = [];
    for (let i = 0; i < Arr.length; i++) {
      if (Arr[i] >= 0.044) mydata.push({ key: i + 2, data: Arr[i] });
    }

    if (mydata.length === 0) {
      setError("Тохирох түлхүүрийн урт олдсонгүй");
    }

    return mydata;
  };
  const prepareDiagramData = (grammArr: any[], countArr: any[]) => {
    let mydata = [];
    for (let i = 0; i < countArr.length; i++) {
      if (countArr[i] > 5) {
        mydata.push({ key: grammArr[i], data: countArr[i] });
      }
    }

    return mydata;
  };

  const dataAndCount = (lengthGramm: number) => {
    let bigramm = "";
    let str = "";
    var Arr = []; // bigramm bur hichneen dawtagdaj bgag hadgalj bga
    var bigrammArr: any[] = []; // ymar ymar bigrammuud bgaag hadgalay
    let counter = 1;

    for (let j = 0; j < analyzData.length - (lengthGramm - 1); j++) {
      // if (typeof analyzData == "string") {
      // nemsen
      bigramm = analyzData.substring(j, j + lengthGramm);

      if (!bigrammArr.includes(bigramm)) {
        bigrammArr.push(bigramm);

        for (
          let i = j + (lengthGramm - 1);
          i < analyzData.length - (lengthGramm - 1);
          i++
        ) {
          str = analyzData.substring(i, i + lengthGramm);

          if (bigramm === str) {
            counter = counter + 1;
          }
        }

        Arr.push(counter);
        counter = 1;
        // }
      }
    }

    return [bigrammArr, Arr];
  };

  const analysis = () => {
    setError(null);

    if (analyzData.length == 0) {
      setError("Анализ хийх текстээ оруулна уу");
      return;
    }

    const [grammArr, countArr] = dataAndCount(2); // Биграмм диаграм гаргах
    setBigramData(prepareDiagramData(grammArr, countArr));

    const [grammArr3, countArr3] = dataAndCount(3); // Триграмм диаграм гаргах
    setThreegramData(prepareDiagramData(grammArr3, countArr3));

    const [grammArr4, countArr4] = dataAndCount(4); // 4x-грамм диаграм гаргах
    setFourgramData(prepareDiagramData(grammArr4, countArr4));

    const [grammArr5, countArr5] = dataAndCount(5); // 5x-грамм диаграм гаргах
    setFivegramData(prepareDiagramData(grammArr5, countArr5));
  };

  const encrypt = () => {
    setError(null);

    if (encryptedData) {
      setError("Түлхүүр болон тайлах текстээ оруулна уу");
      setEncryptedData(null);
      setKey("");
      setText("");
      return;
    }

    if (key.length === 0 || text.length === 0) {
      setError("Түлхүүр эсвэл текстээ оруулна уу");
      return;
    }
    if (key.length === 1) {
      setError("Түлхүүрийн урт 1-с урт байна.");
      return;
    }
    const keyArr = stringToAsciiCodeArray(key);
    const textArr = stringToAsciiCodeArray(text);

    const cipArr = [];
    let j = 0;
    for (let i = 0; i < textArr.length; i++) {
      if (j == keyArr.length) {
        j = 0;
        cipArr[i] = (textArr[i] + keyArr[j]) % 128;
        j++;
      } else {
        cipArr[i] = (textArr[i] + keyArr[j]) % 128;
        j++;
      }
    }

    const cipArrString = String.fromCharCode(...cipArr);
    setEncryptedData(cipArrString);
  };
  const decrypt = () => {
    setError(null);

    if (encryptedData) {
      setError("Түлхүүр болон тайлах текстээ оруулна уу");
      setEncryptedData(null);
      setKey("");
      setText("");
      return;
    }

    if (key.length === 0 || text.length === 0) {
      setError("Түлхүүр эсвэл текстээ оруулна уу");
      return;
    }

    if (key.length === 1) {
      setError("Түлхүүрийн урт 1-с урт байна.");
      return;
    }

    const keyArr = stringToAsciiCodeArray(key);
    const textArr = stringToAsciiCodeArray(text);

    const cipArr = [];
    let j = 0;
    for (let i = 0; i < textArr.length; i++) {
      if (j == keyArr.length) {
        j = 0;
      }

      cipArr[i] = (textArr[i] - keyArr[j]) % 128;
      if (cipArr[i] < 0) {
        cipArr[i] = 128 + cipArr[i];
      }
      j++;
    }

    const cipArrString = String.fromCharCode(...cipArr);
    setEncryptedData(cipArrString);
  };
  return (
    <div className="container">
      <Intro title="Криптоанализ!" description="Vigenere cipher" />
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
            fontSize: 21,
            fontWeight: "bolder",
          }}
        >
          Вижинерийн шифр анализ
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            url={"/analysis/statistic"}
            info={"Анализ"}
            data={[
              {
                text: "Анализ хийх",
                endpoint: "analyz",
              },
              {
                text: "Туршилт хийх",
                endpoint: "test",
              },
            ]}
            onClick={(endpoint: any) => dropdownClick(endpoint)}
          />
        </div>
      </div>
      <div className="column">
        Тодорхой K урттай түлхүүр сонгож түүгээрээ анхны текстэнд дарааллуулан
        үйлчилдэг шифрлэх аргачлалыг <strong>Вижинерийн шифр</strong> гэж
        нэрлэдэг.
        <div className=" column">
          <Image
            src={photo}
            width={130}
            height={430}
            alt="photo"
            priority={true}
            style={{ width: "auto" }}
          />
        </div>
      </div>
      {isAnalyzing ? (
        <div style={{ marginBottom: 20 }}>
          {error && <div className="notification is-danger">{error}</div>}
          <span className="tag is-danger" style={{ marginBottom: 10 }}>
            Анализ{" "}
            {analyzData.length !== 0 && <div> - урт: {analyzData.length}</div>}
          </span>
          <textarea
            id="txt3"
            className="textarea"
            placeholder="Анализ хийх текстээ оруулна уу"
            rows={5}
            value={analyzData}
            onChange={(e: any) => handleAnalyz(e)}
          ></textarea>
          <button
            className="button is-success"
            style={{ margin: 15, color: "black", fontWeight: "initial" }}
            onClick={analysis}
          >
            Анализ хийх!
          </button>

          <button
            className="button is-success"
            style={{ margin: 15, color: "black", fontWeight: "initial" }}
            onClick={calcIC}
          >
            Түлхүүрийн уртыг тооцоолох!
          </button>

          {bigramData.length != 0 && (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <div style={{ marginBottom: 15, color: "green", marginLeft: 15 }}>
                Тус текстэд 5-с олон удаа давтагдаж буй{" "}
                <span style={{ color: "red" }}>БИГРАММУУД</span>
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={bigramData}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="key" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="data" fill="#28B463" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          {threegramData.length != 0 && (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <div style={{ marginBottom: 15, color: "green", marginLeft: 15 }}>
                Тус текстэд 5-с олон удаа давтагдаж буй{" "}
                <span style={{ color: "red" }}>ТРИГРАММУУД</span>
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={threegramData}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="key" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="data" fill="#28B463" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          {fourgramData.length != 0 && (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <div style={{ marginBottom: 15, color: "green", marginLeft: 15 }}>
                Тус текстэд 5-с олон удаа давтагдаж буй{" "}
                <span style={{ color: "red" }}>4-ГРАММУУД</span>
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={fourgramData}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="key" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="data" fill="#28B463" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
          {fivegramData.length != 0 && (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <div style={{ marginBottom: 15, color: "green", marginLeft: 15 }}>
                Тус текстэд 5-с олон удаа давтагдаж буй{" "}
                <span style={{ color: "red" }}>5-ГРАММУУД</span>
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={fivegramData}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="key" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="data" fill="#28B463" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {ICdata?.length != 0 && (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <div style={{ marginBottom: 15, color: "red", marginLeft: 15 }}>
                Түлхүүр нь дараах урттай байх магадлалтай
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={ICdata}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="key" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="data" fill="#28B463" />
                </BarChart>
              </ResponsiveContainer>
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
                Түлхүүр {key.length !== 0 && <div> - урт: {key.length}</div>}
              </span>
              <textarea
                id="txt1"
                className="textarea"
                placeholder="Түлхүүр үгээ оруулна уу"
                rows={1}
                value={key}
                onChange={(e: any) => handleKey(e)}
              ></textarea>
            </div>

            <div>
              <span className="tag is-danger" style={{ marginBottom: 10 }}>
                Текст {text.length !== 0 && <div> - урт: {text.length}</div>}
              </span>
              <textarea
                id="txt2"
                className="textarea"
                placeholder="Шифрлэх текстээ оруулна уу"
                rows={5}
                value={text}
                onChange={(e: any) => handleChange(e)}
              ></textarea>
            </div>

            {encryptedData && (
              <div style={{ marginTop: 20 }}>
                <span className="tag is-warning" style={{ marginBottom: 10 }}>
                  Үр дүн{" "}
                  {encryptedData.length !== 0 && (
                    <div> - урт: {encryptedData.length}</div>
                  )}
                </span>
                <textarea
                  id="txt5"
                  className="textarea"
                  rows={5}
                  defaultValue={encryptedData}
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
              onClick={encrypt}
            >
              Шифрлэх!
            </button>

            <button
              className="button is-warning"
              style={{ margin: 15, color: "black", fontWeight: "initial" }}
              onClick={decrypt}
            >
              Тайлах!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Analys_vigener;
