"use client";
import React, { useState } from "react";
import Image from "next/image";
import CategoryTitle from "@/components/CategoryTitle";
import Intro from "@/components/Intro";
import Dropdown from "@/components/Dropdown";
import logo from "../../public/img/afin.jpg";
import photo from "../../public/img/affin-cipher.png";

function Analys_afin() {
  const [analys, setAnalys] = useState(false);
  const [color, setColor] = useState("is-primary");
  const [error, setError] = useState("");
  const [text, setText] = useState("afin cipher working");
  const [keyA, setkeyA] = useState<number>(3);
  const [keyB, setkeyB] = useState<number>(1);
  const [data, setData] = useState("");
  const [attackArr, setAttackArr] = useState<any[]>([]);
  var ElementsInv: number[] = [];
  var Str = "";
  var retArr: any[] = [];

  const setHandler = (e: any) => {
    setError("");
    setText("");
    if (e === "test") setAnalys(false);
    else setAnalys(true);
  };

  const switcher = (str: string) => {
    var ret = 0;

    switch (str) {
      case "a":
        ret = 0;
        break;
      case "b":
        ret = 1;
        break;
      case "c":
        ret = 2;
        break;
      case "d":
        ret = 3;
        break;
      case "e":
        ret = 4;
        break;
      case "f":
        ret = 5;
        break;
      case "g":
        ret = 6;
        break;
      case "h":
        ret = 7;
        break;
      case "i":
        ret = 8;
        break;
      case "j":
        ret = 9;
        break;
      case "k":
        ret = 10;
        break;
      case "l":
        ret = 11;
        break;
      case "m":
        ret = 12;
        break;

      case "n":
        ret = 13;
        break;
      case "o":
        ret = 14;
        break;
      case "p":
        ret = 15;
        break;
      case "q":
        ret = 16;
        break;
      case "r":
        ret = 17;
        break;
      case "s":
        ret = 18;
        break;
      case "t":
        ret = 19;
        break;
      case "u":
        ret = 20;
        break;
      case "v":
        ret = 21;
        break;
      case "w":
        ret = 22;
        break;
      case "x":
        ret = 23;
        break;
      case "y":
        ret = 24;
        break;
      case "z":
        ret = 25;
        break;

      default:
        ret = -1;
    }

    return ret;
  };

  const switchIntToChar = (int: number) => {
    var ret;

    switch (int) {
      case 0:
        ret = "a";
        break;
      case 1:
        ret = "b";
        break;
      case 2:
        ret = "c";
        break;
      case 3:
        ret = "d";
        break;
      case 4:
        ret = "e";
        break;
      case 5:
        ret = "f";
        break;
      case 6:
        ret = "g";
        break;
      case 7:
        ret = "h";
        break;
      case 8:
        ret = "i";
        break;
      case 9:
        ret = "j";
        break;
      case 10:
        ret = "k";
        break;
      case 11:
        ret = "l";
        break;
      case 12:
        ret = "m";
        break;

      case 13:
        ret = "n";
        break;
      case 14:
        ret = "o";
        break;
      case 15:
        ret = "p";
        break;
      case 16:
        ret = "q";
        break;
      case 17:
        ret = "r";
        break;
      case 18:
        ret = "s";
        break;
      case 19:
        ret = "t";
        break;
      case 20:
        ret = "u";
        break;
      case 21:
        ret = "v";
        break;
      case 22:
        ret = "w";
        break;
      case 23:
        ret = "x";
        break;
      case 24:
        ret = "y";
        break;
      case 25:
        ret = "z";
        break;

      default:
        ret = " ";
    }

    return ret;
  };

  const textToIntArr = (txt: string) => {
    let arr: number[] = [];
    for (let i = 0; i < txt.length; i++) {
      arr[i] = switcher(txt[i]);
    }

    return arr;
  };

  const encrypt = () => {
    if (isNaN(keyA) === true || isNaN(keyB) === true) {
      setError("Түлхүүрийг тоогоор оруулна уу");
      return;
    }

    if (keyA > 25 || keyB > 25) {
      setError("Түлхүүр хамгийн ихдээ 25 байна.");
      return;
    }

    if (text.length < 2) {
      setError("Текст богино байна");
      return;
    }

    const textArr = textToIntArr(text);

    const cipArr = linearFunc(keyA, keyB, textArr);

    var str = "";
    for (let i = 0; i < cipArr.length; i++) {
      str = str + switchIntToChar(cipArr[i]);
    }
    setData(str);
  };
  const decrypt = () => {
    if (isNaN(keyA) === true || isNaN(keyB) === true) {
      setError("Түлхүүрийн уртыг тоогоор оруулна уу");
      return;
    }

    if (keyA > 25 || keyB > 25) {
      setError("Түлхүүр хамгийн ихдээ 25 байна.");
      return;
    }

    if (text.length < 2) {
      setError("Текст богино байна");
      return;
    }

    const textArr = textToIntArr(text);
    const cipArr = InvLinearFunc(keyA, keyB, textArr);
    var str = "";
    for (let i = 0; i < cipArr.length; i++) {
      str = str + switchIntToChar(cipArr[i]);
    }
    setColor("is-warning");
    setData(str);
  };

  const InvLinearFunc = (a: number, b: number, plainArr: number[]) => {
    var cipArr: number[]= [];
    for (let i = 0; i < plainArr.length; i++) {
      cipArr[i] = (Number(a) * (Number(plainArr[i]) - Number(b))) % 26;

      if (cipArr[i] < 0) {
        cipArr[i] = 26 + Number(cipArr[i]);
      }
    }
    return cipArr;
  };

  const linearFunc = (a: number, b: number, plainArr: number[]) => {
    var cipArr: number[] = [];
    for (let i = 0; i < plainArr.length; i++) {
      cipArr[i] = (Number(a) * Number(plainArr[i]) + Number(b)) % 26;
    }

    return cipArr;
  };

  const analisDecrypt = (a: number, b: number, text: string) => {
    const textArr = textToIntArr(text);
    const cipArr = InvLinearFunc(a, b, textArr);
    var str = "";
    for (let i = 0; i < cipArr.length; i++) {
      str = str + switchIntToChar(cipArr[i]);
    }

    return str;
  };

  const findElementInv = () => {
    var Arr: number[]= [];
    Arr.push(1);
    for (let i = 1; i < 26; i++) {
      for (let j = i + 1; j < 26; j++) {
        let k = (i * j) % 26;
        if (k == 1) {
          Arr.push(i);
          Arr.push(j);
        }
      }
    }

    return Arr;
  };

  const analiz = () => {
    if (text.length < 2) {
      setError("Текстийн утга хэтэрхий бага байна.");
      return;
    }

    ElementsInv = findElementInv(); // buh urwuutai elementuuudiin array

    for (let B = 0; B < 26; B++) {
      for (let a = 0; a < ElementsInv.length; a++) {
        let str = analisDecrypt(ElementsInv[a], B, text);
        retArr.push({
          a: ElementsInv[a],
          b: B,
          txt: str,
        });
      }
    }

    setAttackArr(retArr);
  };

  return (
    <div className="container">
       <Intro
        title="Криптоанализ!"
        description="Бүх шинжлэх ухааны хаан нь МАТЕМАТИК юм."
      />

      <div className="columns" style={{ marginBottom: 2 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            height={430}
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
            fontSize: 20,
            fontWeight: "bolder",
          }}
        >
          Афины шифр алгоритм
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
          Тодорхой{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>a, b</span> гэх
          түлхүүрүүдийг сонгож авч <strong>c = a*x + b(mod26)</strong> гэх
          тэгшитгэлээр тодорхойлогдсон шифр алгоритмыг{" "}
          <strong>Афины шифр</strong> гэж нэрлэдэг.
          <br />
          Энд <span style={{ color: "red", fontWeight: "bold" }}>с </span>- шифр
          текст, <span style={{ color: "red", fontWeight: "bold" }}>x</span> -
          ил текст болно.
        </div>
        <div className=" column">
          <Image
            src={photo}
            height={400}
            width={930}
            alt="photo"
            style={{ width: "auto" }}
          />
        </div>
        <div className="column">
          <strong> Жишээлбэл:</strong> Дараах зураг дээр{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            TWENTY FIFTEEN{" "}
          </span>
          гэх текстийг{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>а=17, b=20</span>{" "}
          түлхүүрийн тусламжтай шифрлэж харуулсан байна. Харин буцаж тайлахдаа a
          тооны урвууг ашиглан тооцоолж гаргах юм.
          <br></br>
          Энд a=17 - ийн урвуу нь <strong>Z(26)</strong> талбар дээр 23 болно.
        </div>
      </div>

      <div>
        {analys ? (
          <div>
            <div>
              <strong>Brute force </strong> буюу боломжит бүх түлхүүрийг шавхаж
              ил текстийг унших гэж оролдоцгооё
            </div>
            {error && <div className="notification is-danger">{error}</div>}
            <br />
            <div>
              <span className="tag is-danger" style={{ marginBottom: 10 }}>
                Текст {text.length !== 0 && <div> - урт: {text.length}</div>}
              </span>
              <textarea
                id="txtarea1"
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
                onClick={analiz}
              >
                Довтлох!
              </button>
            </div>

            {attackArr.length > 0 && (
              <div>
                <table className="table is-fullwidth is-scrollable">
                  <thead>
                    <tr>
                      <th>b</th>
                      <th>a</th>
                      <th>текст</th>
                    </tr>
                  </thead>

                  <tbody style={{ height: "200px" }}>
                    {attackArr.map((el, index) => (
                      <tr key={index}>
                        <td>{el.b}</td>
                        <td>{el.a}</td>
                        <td>{el.txt}</td>
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
            <CategoryTitle title={"Санамж"} color="green" fontSize={15} />
              <div className="columns notification is-warning">
                1. a түлхүүр нь дараах утгуудаас байх боломжтой [
                {findElementInv().map((el, key) => (
                  <div key={key}>{el} ,</div>
                ))}
                ]
              </div>
              <div className="columns notification is-warning">
               2. Жижиг үсгүүд ашиглан текст оруулна
              </div>
              <CategoryTitle title={"Туршилт хийх"} color="red" fontSize={15} />

              {error && <div className="notification is-danger">{error}</div>}

              <div style={{ marginBottom: 30 }}>
                <span className="tag is-danger" style={{ marginBottom: 10 }}>
                  Түлхүүр a {keyA !== 0 && <div>: {keyA}</div>}
                </span>
                <textarea
                  id="txtarea2"
                  className="textarea"
                  placeholder="A түлхүүр оруулах"
                  rows={1}
                  value={keyA}
                  onChange={(e: any) => {
                    setkeyA(e.target.value);
                    setError("");
                    setData("");
                  }}
                ></textarea>
              </div>
              <div style={{ marginBottom: 30 }}>
                <span className="tag is-danger" style={{ marginBottom: 10 }}>
                  Түлхүүр b {keyB !== 0 && <div> : {keyB}</div>}
                </span>
                <textarea
                  id="txtarea3"
                  className="textarea"
                  placeholder="B түлхүүр оруулах"
                  rows={1}
                  value={keyB}
                  onChange={(e: any) => {
                    setkeyB(e.target.value);
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
                  id="txtarea4"
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
                  id="txtarea5"
                  className="textarea"
                  rows={5}
                  defaultValue={data}
                  onChange={(e) => {
                    setData("");
                  }}
                ></textarea>
              </div>
            )}
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
    </div>
  );
}

export default Analys_afin;
