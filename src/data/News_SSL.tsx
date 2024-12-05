"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/news/ssl1.PNG";
const img2 = "/img/news/ssl2.PNG";

function News() {
  return (
    <div className="container">
      <Intro
        title="SSL протокол гэж юу вэ?"
        description="'The enemy knows the system' -Claude Shannon"
      />

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2 flex items-center justify-center">
            <Image
              src={img}
              width={400}
              height={500}
              alt="photo"
              priority={true}
              style={{ width: "auto" }}
            />
          </div>
        </div>

        <div className="column">
          <div className="mt-2">
            <strong>
              {" "}
              SSL/TLS (Secure Socket Layer/Transport Layer Security){" "}
            </strong>
            протокол нь интернэт сүлжээгээр бидний өгөгдлийг нууцалж дамжуулдаг
            протокол юм. Өөрөөр хэлбэл бидний банкны картын мэдээлэл, хувийн
            эмзэг мэдээлэл, нэвтрэх нэр, нууц үг гэх мэт бүхий л өгөгдлүүдийг
            дундаас нь хэн нэгэн тайлж унших боломжгүй байхаар нууцалж
            дамжуулдаг.
            <br></br>
            <br></br>Хэрэв бид тухайн протоколыг ашиглаагүй вэб сайтаар орж
            худалдан авалт хийх, хувийн мэдээллээ бүртгүүлэх гэх мэт үед таны
            мэдээлэл алдагдах бүрэн боломжтой гэж ойлгож болно.
            <br></br>
            <br></br>
            Тухайн протокол нь сертификат олгогч дундын хүлээн зөвшөөрөгдсөн
            байгууллагын <strong>(certificate authority)</strong> тусламжтайгаар
            ажилладаг бөгөөд өөрт олгогдсон сертификат дээрх ил түлхүүрийг
            ашиглан өгөгдлөө нууцалдаг. Сертификат нь сервэрийн мэдээлэл, домайн
            хаягийн мэдээлэл, ил түлхүүр зэрэг шаардлагатай мэдээллүүдийг
            агуулдаг бөгөөд бидний хөтөч нь тус сертификатын хүчинтэй эсэхийг
            цаанаа шалгаж ажиллаж байдаг.
          </div>
        </div>
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2 m-2">
            <Image
              src={img2}
              width={500}
              height={600}
              alt="photo2"
              priority={true}
              style={{ width: "auto" }}
            />
          </div>
        </div>

        <div className="column">
          <div className="mt-2">
            Дараах дарааллын дагуу хэрэглэгч болон сервэрийн хооронд холболт
            тогтооно.
          </div>
          <ul className="mt-2">
            <li>
              <strong>1. Холболт тогтоох (Handshake)</strong>: Хэрэглэгч тал
              холбогдох гэж буй тухайн сервэрт "hello" мессэж илгээдэг. Үүнд
              хэрэглэгчийн санамсаргүй утга (client random), хэрэглэгчийн
              ашиглах боломжтой шифр алгоритмуудын жагсаалт зэрэг мэдээллүүд
              багтдаг.
            </li>
            <li className="mt-1">
              <strong>2. Сервэрийн хариулт (Server Response)</strong>: Сервэр
              тал хариу болгож "hello" мессэжийг сонгосон шифр алгоритм,
              сервэрийн санамсаргүй үүсгэсэн утга болон үүсгэсэн SSL/TLS
              сертификатын хамт илгээдэг. Сертификат нь дотроо сервэрийн ил
              түлхүүр болон сертификат олгогч байгууллагын тухайн түлхүүрийг
              баталгаажуулсан гарын үсгийн хамт байна.
            </li>
            <li className="mt-1">
              <strong>3. Сертификат шалгах (Certificate Verification)</strong>:
              Хэрэглэгч тал тухайн сертификатын хүчинтэй, бүрэн бүтэн байдлыг
              гарын үсгийг ашиглан баталгаажуулна. Хэрэв хугацаа нь дууссан
              эсвэл гарын үсгийн баталгаажуулт нь амжилтгүй болбол холболт
              тогтоох боломжгүй болж зогсоно. Амжилттай болбол дараагийн үйлдэл
              хийгдэнэ.
            </li>

            <li className="mt-1">
              <strong> 4. Түлхүүр солилцох (Key Exchange)</strong>: Хэрэглэгч
              тал өөр дээрээ дахин нэг санамсаргүй утга (pre-master secret key)
              үүсгээд түүнийгээ сертификат дээрх сервэрийн ил түлхүүрээр нууцалж
              сервэрт илгээнэ. Хоёр тал хоёулаа санамсаргүй үүсгэсэн утгуудаа
              ашиглан дундын нууц түлхүүрээ гаргаж авна.
            </li>
            <li className="mt-1">
              <strong>5. Өгөгдөл нууцлах (Encryption)</strong>: Хэрэглэгч болон
              сервэр тал харилцан солилцсон санам саргүй утгуудын тусламжтайгаар
              дундын нууц түлхүүрээ гаргаж авсан бөгөөд үүнээс хойш хоорондын
              бүх өгөгдөл нь тухайн түлхүүрийн тусламжтайгаар, сонгосон шифр
              алгоритмын дагуу нууцлагдаж явна.
            </li>
          </ul>

          <div className="mt-4">
            Тухайн протоколын сайжруулалт, хөгжүүлэлт өнөөдрийг хүртэл хийгдсээр
            байгаа бөгөөд төрөл бүрийн аюулгүй байдлын заналхийллүүд байсаар
            байдаг. Хэрэв сертификат олгогч байгууллага нь эсвэл тухайн сервэр
            нь аливаа халдлагад өртөж нууц түлхүүрээ алдсан тохиолдолд бидний
            өгөгдлийг тайлж унших бүрэн боломжтой болно.
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-2 text-sm">
        <p
          style={{
            color: "gray",
            font: "inherit",
          }}
        >
          - published by <strong style={{ color: "gray" }}>Coder</strong> -
          <br></br>
          <p
            className="flex justify-center items-center mt-1"
            style={{ color: "gray" }}
          >
            2024.11.25
          </p>
        </p>
      </div>
    </div>
  );
}

export default News;
