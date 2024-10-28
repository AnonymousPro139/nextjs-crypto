"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
const enigmajs = require("enigma");
import logo from "../../public/img/enigma.png";
import machine2 from "../../public/img/enigma3.jpg";

import Intro from "@/components/Intro";

function Crypto_enigma() {
  const [text, setText] = useState(`Germany technology is black hole`);
  const [convertedTxt, setConvertedTxt] = useState("");

  const handleChange = (event: any) => {
    setText(event.target.value);
  };

  var rotorI = new enigmajs.Rotor("EKMFLGDQVZNTOWYHXUSPAIBRCJ", "Q");
  var rotorIII = new enigmajs.Rotor("BDFHJLCPRTXVZNYEIWGAKMUSQO", "V");
  var rotorIV = new enigmajs.Rotor("ESOVPZJAYQUIRHXLNFTGKDCMWB", "J");
  var reflector = new enigmajs.Reflector("YRUHQSLDPXNGOKMIEBFZCWVJAT");
  var plugboard = new enigmajs.Plugboard("AD CN ET FL GI JV KZ PU QY WX");
  var entryWheel = new enigmajs.EntryWheel("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  return (
    <div className="container">
      <Intro title="Криптограф!" description="Imitation game" />
      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            height={160}
            width={160}
            alt="photo"
            priority={true}
            style={{ borderRadius: 10 }}
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
          Энигма шифр | <strong style={{ color: "gray" }}>Enigma cipher</strong>
        </div>
      </div>

      <div className="column">
        <strong>Enigma машин</strong> нь 20-р зууны эхэн үеэс дунд үе хүртэл
        дипломат болон цэргийн харилцаа холбоог хамгаалах зорилгоор бүтээгдсэн{" "}
        <strong style={{ color: "red" }}>шифр төхөөрөмж</strong> юм.{" "}
        <strong>
          Дэлхийн 2-р дайны үед нацист Германы цэргийн бүх салбарт
        </strong>{" "}
        өргөнөөр ашиглаж байсан. Enigma машиныг маш найдвартай гэж үзсэн тул{" "}
        <strong style={{ color: "red" }}>хамгийн нууц мэдээг</strong> шифрлэхэд
        ашигладаг байжээ.
        <p className="mt-4" style={{ color: "gray" }}>
          Ажиллах зарчмыг нь дараах бичлэгээс үзээрэй :
        </p>
        <div className="columns mt-4">
          <div style={{ marginRight: "8rem" }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-WNKLUdGluU"
              height={400}
              controls={true}
            />
          </div>

          <div>
            <Image
              src={machine2}
              height={400}
              // width={400}
              alt="photo"
              priority={true}
              style={{ borderRadius: 10 }}
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <div className="notification is-info">{"Энигмаг турших"}</div>

        <strong>Дараах тохиргоотой байгааг анзаарна уу:</strong>
        <table
          className="table is-bordered  is-hoverable is-fullwidth"
          style={{ margin: 10 }}
        >
          <tbody>
            <tr>
              <th>РОТОР 1</th>
              <th>EKMFLGDQVZNTOWYHXUSPAIBRCJ, Q</th>
            </tr>
            <tr>
              <th>РОТОР 3</th>
              <th>BDFHJLCPRTXVZNYEIWGAKMUSQO, V</th>
            </tr>{" "}
            <tr>
              <th>РОТОР 4</th>
              <th>ESOVPZJAYQUIRHXLNFTGKDCMWB, J</th>
            </tr>
            <tr>
              <th>REFLECTOR | РЕФЛЕКТОР</th>
              <th>YRUHQSLDPXNGOKMIEBFZCWVJAT</th>
            </tr>
            <tr>
              <th>PLUGBOARD</th>
              <th>AD CN ET FL GI JV KZ PU QY WX</th>
            </tr>
          </tbody>
        </table>

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
                // encrypt by enigma
                var enigma = new enigmajs.Enigma(
                  [rotorI, rotorIV, rotorIII],
                  reflector,
                  plugboard,
                  entryWheel
                );

                setConvertedTxt(enigma.string(text));
              } else {
                alert("Утга оруулна уу");
              }
            }}
          >
            Нууцлах | Тайлах
          </button>
        </div>

        {convertedTxt.length !== 0 && text.length !== 0 && (
          <div style={{ marginTop: 20 }}>
            <div className="notification is-success">{"Амжилттай!"}</div>
            <textarea
              className="textarea"
              rows={5}
              value={convertedTxt}
              onChange={(e) => setConvertedTxt("")}
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
}

export default Crypto_enigma;
