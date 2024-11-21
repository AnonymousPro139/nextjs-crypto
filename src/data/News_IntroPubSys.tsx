"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/news/pubkeysys1.png";
const img2 = "/img/news/pubkeysys3.png";
const img3 = "/img/news/pubkeysys2.png";

function News() {
  return (
    <div className="container">
      <Intro
        title="Нийтийн түлхүүрт криптограф гэж юу вэ?"
        description="'Public Key Cryptosystem'"
      />

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2 flex items-center justify-center">
            <Image
              src={img}
              width={500}
              height={600}
              alt="photo"
              priority={true}
              style={{ width: "90%" }}
            />
          </div>
        </div>

        <div className="column">
          <div className="mt-2">
            Нийтийн түлхүүрт криптограф{" "}
            <strong> (Public key cryptography)</strong> буюу асимметр криптограф
            нь орчин үеийн нууцлал, аюулгүй байдлын үндсэн ойлголт юм. Энэ нь{" "}
            <strong>нийтийн түлхүүр</strong> (public key) ба{" "}
            <strong>хувийн түлхүүр</strong> (private key) гэсэн хос түлхүүр
            ашигладаг ба өгөгдлийг шифрлэх, тайлах, дижитал орчинд аюулгүй
            харилцаа холбоо үүсгэх, баталгаажуулалтыг хангахад хэрэглэгддэг.
          </div>

          <div className="mt-2 flex items-center justify-center">
            <strong>1. Үндсэн ойлголт</strong>
          </div>

          <ul className="mt-2">
            <li>
              <strong>1. Тодорхойлолт</strong>: Математик уялдаатай хоёр түлхүүр
              (нэг нь нийтийн, нэг нь хувийн) ашигладаг криптографын систем.
            </li>
            <li className="mt-1">
              <strong>2. Зорилго</strong>: Өгөгдөл дамжуулах, цахим гарын үсгийн
              аюулгүй байдлыг хангах.
            </li>
            <li className="mt-1">
              <strong>3. Түлхүүрийн бүрдэл</strong>: Нийтийн түлхүүр (нээлттэй
              хуваалцдаг) ба хувийн түлхүүр (нууцаар хадгалдаг).
            </li>
            <li className="mt-1">
              <strong>4. Процедур</strong>:<br></br> • Шифрлэлт: Илгээгч хүлээн
              авагчийн нийтийн түлхүүрийг ашиглана.<br></br> • Шифр тайлах:
              Хүлээн авагч хувийн түлхүүрээ ашиглана.
            </li>
            <li className="mt-1">
              <strong>4. Нийтлэг хэрэглээ</strong>: Аюулгүй имэйл, SSL/TLS вэб
              протокол, тоон гарын үсэг.
            </li>
          </ul>
        </div>
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div>
            <div className="flex items-center justify-center">
              <strong>
                2. Нийтийн түлхүүрт криптограф хэрхэн ажилладаг вэ?
              </strong>
            </div>
            <div className="mt-4 mb-4">
              Нийтийн түлхүүрт криптограф нь алгоритмаар үүсгэгдсэн хос
              түлхүүрүүдийг ашиглахад суурилна. Хос бүр нь чөлөөтэй тарааж болох
              нийтийн түлхүүр, эзэмшигч нь нууцлах ёстой хувийн түлхүүрээс
              бүрдэнэ. Эдгээр түлхүүрүүд нь математик хамааралтай боловч нэгнээс
              нь нөгөөг нь гаргаж авах бараг боломжгүй.
            </div>

            <div>Үндсэн процедур нь дараах байдлаар ажилладаг.</div>

            <ul>
              <li className="mt-1">
                <strong>1. Түлхүүр үүсгэлт:</strong>
                <br></br> • Алгоритм нь түлхүүрийн хосыг үүсгэнэ: нийтийн болон
                хувийн түлхүүрүүд.
                <br></br> • Нийтийн түлхүүрийг нээлттэй түгээнэ.
                <br></br> • Хувийн түлхүүрийг эзэмшигч нь нууцална.
              </li>

              <li className="mt-1">
                <strong>2. Шифрлэлт:</strong>
                <br></br> • Илгээгч нь мессежийг шифрлэхийн тулд хүлээн авагчийн
                нийтийн түлхүүрийг ашиглана.
                <br></br> • Шифрлэгдсэн мессежийг зөвхөн холбогдох хувийн
                түлхүүрээр тайлна.
              </li>

              <li className="mt-1">
                <strong>3. Шифр тайлах::</strong>
                <br></br> • Хүлээн авагч нь шифрлэгдсэн мессежийг тайлахын тулд
                хувийн түлхүүрээ ашиглана.
                <br></br>• Энэ нь зөвхөн хүссэн хүлээн авагч нь мессежийг уншиж
                чадна гэдгийг баталгаажуулдаг.
              </li>
            </ul>

            <div className="mt-4 mb-4">
              <strong>*</strong> <strong>Нийтийн түлхүүрт</strong> криптограф
              (public key cryptography). Нийтийн ба хувийн түлхүүр{" "}
              <strong>(public, private key)</strong> гэгдэх 2 ялгаатай түлхүүр
              ашигладаг шифр алгоритмыг нийтийн түлхүүрт криптографын төрөлд
              хамааруулдаг ба нийтийн түлхүүрийг хэн ч мэдэж байж болно, харин
              хувийн түлхүүрийг нууцлах шаардлагатай. Нийтийн түлхүүрийн
              тусламжтайгаар мэдээллийг шифрлэх ба тус мэдээг харгалзах хувийн
              түлхүүрээр л зөвхөн тайлж болдог.
            </div>
          </div>
        </div>

        <div className="column">
          <div className="p-2 flex items-center justify-center">
            <Image
              src={img2}
              width={500}
              height={600}
              alt="photo"
              priority={true}
              style={{ width: "90%" }}
            />
          </div>
          <div className="flex items-center justify-center mt-4 mb-2">
            <strong>3. Нийтийн түлхүүрт криптографын давуу тал</strong>
          </div>
          <ul>
            <li className="mt-1">
              <strong>1. Аюулгүй түлхүүр солилцоо:</strong> Аюулгүй түлхүүр
              солилцох сувгийн хэрэгцээг хангана.
            </li>
            <li className="mt-1">
              <strong>2. Тоон гарын үсэг:</strong> Баталгаажуулалт болон үл
              татгалзах байдлыг хангана.
            </li>
            <li className="mt-1">
              <strong> 3. Өргөтгөх чадвар: </strong>Симметр түлхүүрт системтэй
              харьцуулахад том сүлжээнүүдийг удирдахад хялбар.
            </li>
            <li className="mt-1">
              <strong> 4. Нууцлал:</strong> Зөвхөн зорьсон хүлээн авагч нь
              мессежийг унших боломжтой болохыг баталгаажуулна.
            </li>
          </ul>
        </div>
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2 flex items-center justify-center">
            <Image
              src={img3}
              width={400}
              height={500}
              alt="photo"
              priority={true}
              style={{ width: "80%" }}
            />
          </div>
        </div>

        <div className="column">
          <div className="flex items-center justify-center">
            <strong>4. Практик хэрэглээ</strong>
          </div>

          <div className="mt-2">
            Нийтийн түлхүүрт шифрлэлт нь HTTP протоколын аюулгүй хувилбар болох
            HTTPS-ээр дамжуулан аюулгүй онлайн харилцааг идэвхжүүлдэг. HTTPS веб
            сайтын хувьд SSL /TLS сертификатуудын нийтийн түлхүүрийг нийтэд ил
            харуулдаг бол хувийн түлхүүр нь вэб сайтын эх сервер дээр
            хадгалагддаг. Энэ систем нь вэб сайтын аюулгүй байдлыг шалгах,
            ялангуяа зээлийн картын мэдээлэл гэх мэт эмзэг мэдээлэлтэй ажилладаг
            сайтуудад чухал ач холбогдолтой. Интернэтийн орчины эмзэг байдлыг үл
            харгалзан энэхүү криптограф систем нь сүлжээнд аюулгүй холболтыг бий
            болгоно.
            <br></br>
            <br></br>
            Нийтийн түлхүүрт алгоритмууд нь дижитал харилцаа, өгөгдөл хадгалах
            аюулгүй байдлын үндэс суурь юм. Мөн энэ нь цахим зурвасын жинхэнэ,
            бүрэн бүтэн, нууцлал, аюулгүй байдлыг хангадаг{" "}
            <strong>S/MIME</strong> зэрэг интернетийн стандартын суурь болдог.
            Нэмж дурдахад кодоор гарын үсэг зурах, цахим баримт бичигт гарын
            үсэг зурах, хэрэглэгчийн баталгаажуулалт, болон дангаар нэвтрэх
            системүүд нь нийтийн түлхүүрт криптографт суурилдаг.
          </div>
        </div>
      </div>
      {/* Publisher */}
      <div className="flex flex-col items-center mt-2 text-sm">
        <p
          style={{
            color: "gray",
            font: "inherit",
          }}
        >
          - published by <strong style={{ color: "gray" }}>sodMath</strong> -
          <br></br>
          <p
            className="flex justify-center items-center mt-1"
            style={{ color: "gray" }}
          >
            2024.11.21
          </p>
        </p>
      </div>
    </div>
  );
}

export default News;
