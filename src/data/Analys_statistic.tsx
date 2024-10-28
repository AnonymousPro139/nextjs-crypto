"use client";
import React, { useState, useEffect } from "react";
import { nGram, bigram } from "n-gram";
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
import logo from "../../public/img/frequency.png";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import StatisticLanguage from "@/components/StatisticLanguage";


function Analys_statistic() {
  const [text, setText] =
    useState(`Wkh#uhpdlqlqj#vhfwlrqv#ri#wklv#sdshu#duh#rujdql}hg#lq#wkh#iroorzlqj#pdqqhu1#Lq#wkh#Vhfwlrq#5/#zh#lqwurgxfh#wkh#wrslf#ri#wh{w#plqlqj#lq#wudqvfulswv#dqg#vshhfkhv1#Zh#h{sodlq#wkh#gliihuhqw#fodvvlilfdwlrq
      ##whfkqltxhv#xvhg#lq/#iru#lqvwdqfh/#wkh#dqdo|vlv#ri#srolwlfdo#vshhfkhv#wkdw#fodvvli|#rslqlrqv#ru#vhqwlphqwv#lq#d#pdqqhu#wkdw#doorzv#rqh#wr#lqihu#iurp#d#wh{w#ru#vshhfk#wkh#lghrorj|#wkdw#d#vshdnhu#prvw#suredeo|
      ##hvsrxvhv1l`);

  const [data, setdata]: any[] = useState([]);
  const [bigrammData, setBigrammData]: any[] = useState([]);

  const [statisticEng, setStatisticEng] = useState(true);
  const [statisticMgl, setStatisticMgl] = useState(false);
  const [analiz, setAnaliz] = useState(false);

  let mydata: any[] = [];
  let bigramData: any[] = [];

  useEffect(() => {}, [data]);

  const letter = [
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
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
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
    ".",
    ",",
    "+",
    "-",
    "=",
    "!",
    "?",
    ":",
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "ө",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ү",
    "ф",
    "х",
    "ц",
    "ч",
    "ш",
    "щ",
    "ъ",
    "ы",
    "ь",
    "э",
    "ю",
    "я",
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "Ө",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ү",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
  ];
  const counter = () => {
    let count = 0;
    var Arr:number[]= [];

    for (var i = 0; i < letter.length; i++) {
      for (let j = 0; j < text.length; j++) {
        if (letter[i] === text[j]) {
          count = count + 1;
        }
      }

      Arr.push(count);

      count = 0;
    }

    return Arr;
  };
  const counterBigramm = () => {
    var bigramArr = bigram(text);

    var uniqArr = [...new Set(bigramArr)]; // remove duplicate strings

    return uniqArr;
  };
  const Calculate = () => {
    let A = counter();
    let uniqBigram = counterBigramm();
    let count = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] !== 0) {
        mydata.push({ key: letter[i], data: A[i] });
      }
    }

    for (let i = 0; i < uniqBigram.length; i++) {
      for (let j = 0; j < text.length - 1; j++) {
        if (uniqBigram[i] === "" + text[j] + text[j + 1]) {
          count++;
        }
      }

      bigramData.push({ key: uniqBigram[i], data: count });
      count = 0;
    }

    setdata(mydata);
    setBigrammData(bigramData);
  };

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  const dropdownClick = (endpoint: string) => {
    if (endpoint == "eng") {
      setStatisticMgl(false);
      setStatisticEng(true);
      setAnaliz(false);
    } else if (endpoint == "mgl") {
      setStatisticEng(false);
      setStatisticMgl(true);
      setAnaliz(false);
    } else {
      setAnaliz(true);
      setStatisticEng(false);
      setStatisticMgl(false);
    }
  };

  return (
    <div className="container">
      <Intro
        title="Криптоанализ!"
        description="Бүх шинжлэх ухааны хаан нь МАТЕМАТИК юм."
      />
      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            // width={130}
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
          Статистикийн криптоанализ
        </div>

        <div className="column" style={{ alignSelf: "center" }}>
          <Dropdown
            color={"red"}
            url={"/analysis/statistic"}
            info={"Туршилт"}
            data={[
              {
                text: "Туршилт хийх",
                endpoint: "analiz",
              },
              {
                text: "Англи хэлний үг, үеийн статистик",
                endpoint: "eng",
              },
              {
                text: "Монгол хэлний үг, үеийн статистик",
                endpoint: "mgl",
              },
            ]}
            onClick={(endpoint: any) => dropdownClick(endpoint)}
          />
        </div>
      </div>

      <div>
        Тухайн шифр текстэнд орсон <strong>тэмдэгтүүд дээр анализ </strong>хийж
        довтолдог нэгэн төрлийн арга юм. Өөрөөр хэлбэл орлуулгын төрлийн шифрүүд
        нь тухайн хэлний бүтцэд байдаг эгшиг, гийгүүлэгчийн харилцаа, хамаарал,
        тэдгээрийн <strong>шинж чанарыг нууцалж чаддаггүй</strong>. Энэхүү эмзэг
        чанарыг ашиглан тухайн шифрийг эвдэж, тайлж уншиж болдог. Энэхүү арга нь
        шифр мэдээний уртаас хамааралтай бөгөөд{" "}
        <strong>хэдий том хэмжээний мэдээлэл </strong>
        байна, <strong>
          статистик үзүүлэлтүүд нь төдий чинээ бодитой
        </strong>{" "}
        гарч ирдэг.
        {statisticEng && (
          <div className="column">
            Доор Англи хэл дээрх өгүүллийн хувьд үсгүүдийн өгүүлбэрт ордог
            статистик үзүүлэлтүүдийг харуулж байна.
            <StatisticLanguage language={"eng"} />
          </div>
        )}
        {statisticMgl && (
          <div className="column">
            Доор Монгол хэл дээрх өгүүллийн хувьд үсгүүдийн өгүүлбэрт ордог
            статистик үзүүлэлтүүдийг харуулж байна.
            <StatisticLanguage language={"mgl"} />
          </div>
        )}
      </div>
      {analiz == true && (
        <div>
          <div>
            <div className="notification is-info">{"Туршилт хийх"} </div>
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
              id="text"
              className="textarea"
              placeholder="Анализ хийх текстээ оруулна уу"
              rows={6}
              value={text}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          <div
            style={{
              marginTop: 10,
            }}
          >
            <button
              className="button is-info"
              style={{ margin: 15, color: "white", fontWeight: "initial" }}
              onClick={Calculate}
            >
              Тооцоолох!
            </button>
            
          </div>

          {data.length != 0 && (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <div className="notification is-danger" style={{ margin: 15 }}>
                График дараах байдалтай байна.  (жижиг болон том үсгүүд нь ялгаатай дүрслэгдэнэ).
              </div>

              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3" />
                  <XAxis dataKey="key" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="data" fill="#3E8ED0" />
                </BarChart>
              </ResponsiveContainer>

              <div style={{ marginTop: 15 }}>
                <div className="notification is-danger" style={{ margin: 15 }}>
                  Биграмм буюу дараалсан 2 тэмдэгтүүдийн статистик дараах
                  байдалтай дүрслэгдэв.
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={bigrammData}>
                    <CartesianGrid strokeDasharray="3" />
                    <XAxis dataKey="key" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="data" fill="#3E8ED0" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Analys_statistic;
