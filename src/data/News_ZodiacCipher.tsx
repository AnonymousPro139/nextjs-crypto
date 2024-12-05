"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/news/zodiac.PNG";
const img2 = "/img/news/zodiac1.PNG";
const img3 = "/img/news/zodiac2.PNG";

function News() {
  return (
    <div className="container">
      <Intro
        title="Алуурчин Зодиакийн шифр тайлагдав"
        description="The Zodiac Killer's Cipher Is Finally Cracked After 51 Years"
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
            Урт хугацааны турш тайлагдашгүй байсан цуврал алуурчин{" "}
            <strong>Зодиак</strong>
            (Zodiac)-ийн үлдээсэн нууц кодыг өдгөө хүртэл хэн ч тайлж чадаагүй
            байсан бөгөөд АНУ-ын тусгай албаны криптографчид урт хугацаанд
            оролдлого хийж байсны үндсэн дээр амжилттай тайлжээ.
            <br></br>
            <br></br>1968, 1969 онуудад хойд Калифорниад газар дээр нь 5 хүнийг
            алж, үлдсэн 2 хүнийг нь алах гэж оролдсон аймшигт хэрэг гарсан
            бөгөөд удалгүй түүнийг алуурчин Зодиак гэж олон нийт мэдэх болсон
            юм. Эхний халдлагын хохирогчид нь хосууд байсан бөгөөд дараах нь
            ахлах ангийн сурагчид байжээ.
            <br></br>
            <br></br>
            Хамгийн аймшигтай нь хүн амины хэргийн мөрдлөгийн үеэр алуурчин нь
            хэвлэл мэдээллийн хэрэгслээр аллага үйлдсэн гэх хэд хэдэн захидал
            илгээж байсан. 1969 оны 8 сард, таван хохирогчийн гурвыг нь
            хөнөөсний дараа <strong>Bay Area</strong>-ийн гурван сонинд бараг
            ижил гурван захидал илгээжээ.
            <br></br>
            <br></br>
            Захидал бүрт сэжигтний хэлснээр түүний хэн болохыг илчлэх 408
            тэмдэгт <strong>криптограмын (нууц кодлол)</strong> гуравны нэг нь
            багтсан байв. Алуурчин сониноос захидлыг бүрэн эхээр нь нийтлэхийг
            шаардаж байсан бөгөөд эс тэгвээс дахин аллага үйлдэнэ хэмээн
            заналхийлж байжээ.
            <br></br>
            <br></br>
            Захидлуудыг илгээснээс хойш долоо хоногийн дараа Калифорниа мужийн
            Салинас хотын нэгэн хос шифрийг тайлж чадсан байна. Захидалд тухайн
            алуурчин нь хойд насандаа өөрт нь үйлчлэх боолуудыг цуглуулж байгаа
            бөгөөд өөрийгөө хэн болохоо хараахан зарлахгүй хэмээсэн байв.
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
            1969 онд үйлдсэн аллагынхаа дараа алуурчин{" "}
            <strong>San Francisco Chronicle</strong> сонинд дахин шинэ захидал
            илгээсэн бөгөөд дараах оньсыг агуулсан байв. Энэ криптограмм нь 340
            тэмдэгт агуулсан байсан тул <strong>Z-340</strong> буюу энгийнээр
            340 гэж тухайн үед нэрлэгддэг байв.
          </div>

          <div className="mt-2">
            Түүнээс хойш криптографчид болон сонирхогчид тус мэдээг тайлж
            уншихыг их оролддог байсан бөгөөд АНУ-ын тусгай албаны криптографчид
            {"  "}
            <strong>51</strong> жилийн турш нууц байсан тус захидлыг тайлж уншиж
            чаджээ.
          </div>

          <div className="p-1 m-2">
            <Image
              src={img3}
              width={500}
              height={600}
              alt="photo2"
              priority={true}
              style={{ width: "auto" }}
            />
          </div>

          <div>
            Захидалдаа алуурчин "диваажин" <strong>(paradise)</strong> гэдэг
            үгийг ижил үсгийн алдаатай ашигласан байсан. Мэдээжийн хэрэг хойд
            насандаа боол цуглуулах тухай урьд өмнө дурдсан байдагтай холбоотой
            байсан болов уу.
          </div>

          <div className="mt-2">
            Тухайн криптограмын хувьд орлуулга төрлийн шифр байсан гэж үзсэн
            бөгөөд орчин үеийн шифр алгоритмуудаас ялгаатай, тухайн үед өргөн
            ашиглагдаж байсан арга билээ. Амжилттай тайлсан багийн гишүүдийн
            хувьд тухайн криптограмыг 2006 оноос хойш тайлахыг оролдсон бөгөөд{" "}
            <strong>
              криптографич, математикч, програм хангамжийн инженер
            </strong>{" "}
            хүмүүс байсан байна.
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
          - published by <strong style={{ color: "gray" }}>Cryptor</strong> -
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
