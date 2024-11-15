"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/news/quantum.png";
const img2 = "/img/news/quantum2.png";

function News() {
  return (
    <div className="container">
      <Intro
        title="Квантын дараах криптограф"
        description="'The enemy knows the system' -Claude Shannon"
      />

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2">
            <Image
              src={img}
              width={500}
              height={600}
              alt="photo"
              priority={true}
              style={{ width: "auto" }}
            />
          </div>
        </div>

        <div className="column">
          <div className="mt-2">
            Квантын компьютерууд хөгжихийн хэрээр криптографын ландшафт үндсэн
            өөрчлөлттэй тулгарч байна. <strong>RSA</strong> болон{" "}
            <strong>ECC (Elliptic Curve Cryptography)</strong> зэрэг математик
            хүндрэлүүд нь том тооны факторизаци /үржигдэхүүнд задлах/ хийх,
            дискрет логарифмын хүндрэлд суурилсан байдаг ба уламжлалт
            шифрлэлтийн алгоритмууд нь өнөөгийн компьютеруудад тооцоолоход хэцүү
            боловч хангалттай хүчирхэг квант компьютерээр харьцангуй амархан
            шийдэж болохыг баталсан байдаг.
            <div className="mt-2">
              Пост квант криптограф /квантын дараах криптограф/{" "}
              <strong>(PQC)</strong> нь квант компьютерын халдлагад тэсвэртэй
              криптограф алгоритмуудыг боловсруулахад чиглэсэн салбар юм.
            </div>
            <div className="mt-2">
              <strong>NIST</strong> нь квант тооцоолол бүхий квант компьютерт
              тэсвэртэй криптографын стандарт алгоритм шалгаруулах олон улсын
              уралдааныг 2016 онд зарласан ба торонд суурилсан криптограф
              /lattice cryptograph/, хэшт суурилсан гарын үсэг, код дээр
              суурилсан криптограф зэрэгт үндэслэн нэр дэвшигчдийг сонгосон
              байдаг. Энэхүү уралдаан нийт 4 үе шаттайгаар 8 жилийн турш
              алгоритмуудыг тестэлж, ажиллагаа, нууцлал, хурд, практик
              хэрэглээний боломж зэрэгт үндэслэн шалгаруулалт явуулж байна.
            </div>
          </div>
        </div>
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2">
            <Image
              src={img2}
              width={500}
              height={600}
              alt="photo2"
              priority={true}
              style={{ width: "auto" }}
            />

            <p className="mt-1">
              Тус уралдааны PQC стандартчиллын үйл явцыг зургаар харуулав.
            </p>
          </div>
        </div>

        <div className="column">
          <div>
            Энэ онд <strong>криптограф судлаачдад</strong> пост квант
            криптографын хөгжүүлэлт, нууцлалын технологи (privacy technologies),
            практик хэрэглээний дэвшлээс үүдэлтэй хэд хэдэн гайхалтай зүйлс
            тохиосон.
          </div>

          <ul className="mt-2">
            <li>
              <strong>-</strong> NIST-ийн PQC буюу квант тооцоололд тэсвэртэй
              алгоритмын сонгон шалгаруулах уралдаан эцсийн шатандаа явагдаж
              байна.
            </li>
            <li className="mt-1">
              <strong>-</strong> Уралдааны сүүлийн шатны алгоритмууд:{" "}
              <strong>Kyber</strong> болон <strong>NTRU</strong> алгоритмуудыг
              нийтийн түлхүүрийн шифрлэлтийн{" "}
              <strong>/Publickey encryption/</strong> стандарт алгоритмд,{" "}
              <strong>FrodoKEM</strong>-ийг түлхүүр солилцох системийн
              стандартад сонгохоор болоод байна. Эдгээр алгоритмууд нь торны
              онолд суурилсан <strong>/Lattice/</strong> байдаг.
            </li>
            <li className="mt-1">
              <strong>-</strong> Квантын аюулгүй түлхүүрийн менежмент: NIST нь
              мөн түлхүүр солилцооны протоколд зориулсан сонгодог болон квантаас
              хойшхи криптографийн алгоритмуудыг хослуулсан эрлийз шийдлүүдийг
              санал болгохоор ажиллаж байна.
            </li>
            <li className="mt-1">
              <strong>-</strong> Квант тэсвэртэй тоон гарын үсэг: Хөгжлийн өөр
              нэг гол талбар бол квантад тэсвэртэй тоон гарын үсэг юм.
              <strong>**SPHINCS+**</strong> (хэш-д суурилсан гарын үсэг) болон
              <strong>**Falcon**</strong> (торон дээр суурилсан гарын үсгийн
              схем) зэрэг алгоритмуудыг бодит системд туршиж, хэрэгжүүлж байна.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center mt-2 text-sm">
        <p
          style={{
            color: "gray",
            font: "inherit",
          }}
        >
          - published by <strong style={{ color: "gray" }}>mONESy</strong> -
          <br></br>
          <p
            className="flex justify-center items-center mt-1"
            style={{ color: "gray" }}
          >
            2024.11.15
          </p>
        </p>
      </div>
    </div>
  );
}

export default News;
