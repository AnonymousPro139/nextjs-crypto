"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/intermed1.png";
const img2 = "/img/intermed2.png";
const img3 = "/img/intermed3.png";
function News_Quotes() {
  return (
    <div className="container">
      <Intro
        title="Интермед эмнэлэгийн дата?"
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
            Интермед эмнэлгийн өвчтөнүүдийн мэдээллийг Москвад төвтэй{" "}
            <strong>SpaceBears</strong> бүлгэм хакердаж, <strong>280</strong>{" "}
            мянган хүний хувийн мэдээлэл, утасны дугаар, эмнэлгийн дата зэргийг
            хулгайлаад байна. Тус бүлгэмийн үйл ажиллагаа нь дата барьцаалж,
            мөнгө шаардахад чиглэдэг бөгөөд мөнгө шилжүүлэхгүй бол хэрэглэгчдийн
            датаг олон нийтэд ил болгоно гэж сүрдүүлдэг.
            <div className="mt-2">
              "SpaceBears" нь одоогоор "Data Leak Site"-д бүртгэлтэй найман
              жижиг салбартай. Мөн АНУ, Португал, Канад, Герман, Норвеги,
              Марокко, Сингапур зэрэг орнуудын чухал эмнэлгийн байгууллага,
              үйлдвэрлэл, жижиг компаниудад халдаж байсан.
            </div>
            <div className="mt-2">
              Цахим аюулгүй байдлын менежмент, заналхийллийн эсрэг үйл ажиллагаа
              явуулдаг <strong>HackManac</strong>-ийн мэдээлснээр, 10 сарын
              30-ны өдөр тус эмнэлгийн цахим дата руу халдсан гэгдээд байгаа.
            </div>
            <div className="mt-2">
              Одоогийн байдлаар тус бүлгэм 50'000 доллараар зөвхөн 1 хүнд зарна
              гэж мэдээлэл тавьсан байгаа бөгөөд 11 сарын 07-ны өдөр{" "}
              <a href="https://www.anonfile.la/file/ZV8UKl7Dj" target="_blank">
                https://www.anonfile.la/file/ZV8UKl7Dj
              </a>{" "}
              сайтад 60'000 мөр бүхий дата ил цацсан байна.
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

            <p className="mt-1">2024.11.07-ны өдөр цацсан хэрэглэгчдийн дата</p>
          </div>
        </div>

        <div className="column">
          <div>
            Харин үүнээс 24 цагийн дараа буюу 11 сарын 14нд дахин хэрэглэгчийн
            өвчний түүх болон үр дүнгүүдийг нь ил тавина хэмээн сүрдүүлсэн.
          </div>

          <div className="mt-2 p-4">
            <Image
              src={img3}
              width={400}
              height={400}
              alt="photo3"
              priority={true}
              style={{ width: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News_Quotes;
