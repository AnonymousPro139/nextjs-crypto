"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/news/e2ee1.png";
const img2 = "/img/news/e2ee2.png";

function News() {
  return (
    <div className="container">
      <Intro
        title="End-to-end шифрлэлт"
        description="'The enemy knows the system' -Claude Shannon"
      />
      <div className="mt-4">
        <strong>End-to-end</strong> шифрлэлтийн хэрэглээ хэдийнээ бидний
        амьдралын салшгүй нэг хэсэг болсон байгаа билээ. Судалгаанаас харахад
        Монгол улсын 13 ба түүнээс дээш насны иргэдийн 80-аас дээш хувь нь
        Facebook Messenger-ийг хэрэглэж байна гэсэн тоо баримт харагдаж байна.
        Тэгвэл Meta буюу бидний мэдэхээр Facebook компани 2023 оны 12 дугаар
        сараас эхлэн Facebook Messenger үйлчилгээндээ анхдагч (default) байдлаар
        хувийн зурвас болон дуудлагыг end-to-end шифрлэлтийн арга хэрэглэн илүү
        чанд нууцлалтай, таниас өөр хэн ч "мэдэх болон чагнах” боломжгүйгээр
        эзэндээ хүрэх тийм боломжийг олгож эхэлсэн. Үүнээс гадна{" "}
        <strong>WhatsApp, Viber, Skype, Wire болон Signal</strong> зэрэг чат
        апплейкешнүүд мөн адил end-to-end шифрлэлтийн зарчмыг ашиглан нууцлал
        аюулгүй байдлаа хангадаг.
      </div>
      <div className="mt-4">
        Бидний дээр дурьдсанчлан end-to-end шифрлэлтийн арга нь илгээгч болон
        хүлээн авагч 2 талаас өөр{" "}
        <strong>хэн ч "мэдэх болон чагнах” боломжгүй</strong> байдлыг олгох юм.
        Энэ нь таны илгээж буй зурвас таны төхөөрөмжөөс илгээгдэхдээ нууцлагдах
        бөгөөд хүлээн авагч зурвасыг хүлээн авах үед хүлээн авагчийн төхөөрөмж
        дээр нууцлагдсан мэдээлэл тайлагдана гэсэн үг. Үүний цаана криптографын
        олон арга, техникүүд ашиглагдаж байгаа бөгөөд эдгээрийг нэгтгэсэн
        криптограф протоколуудын тусламжтайгаар энэ бүхнийг зохицуулдаг. Чат
        апплейкешн бүр өөр өөрсдийн хөгжүүлсэн криптограф протоколуудыг ашиглах
        боловч эдгээр протоколуудын ихэнх нь
        <a href="https://signal.org/docs/" target="_blank">
          {" "}
          <strong>Signal</strong>{" "}
        </a>{" "}
        протоколын зарчим дээр суурилдаг.
      </div>

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

          <div className="flex items-center justify-center text-red-300">
            Зураг 1. X3DH algorithm
          </div>
        </div>

        <div className="column">
          <div className="mt-2">
            Signal протокол нь хэрэглэгчид хоорондоо зурвас солилцох үед
            зурвасын нууцлалыг хангахад зориулан зохиогдсон, нийтэд нээлттэй
            протокол юм.
            <div className="mt-2 flex items-center justify-center text-gray-800">
              <strong> - Үндсэн 3 үе шаттай -</strong>
            </div>
            <div className="mt-4">
              Эхний шат бол <strong>бүртгэлийн үе шат</strong>. Энэ үе шат дээр
              хэрэглэгчид бүртгэл үүсгэн шинээр нэвтрэх үед хэрэглэгч бүрд
              криптограф хос түлхүүрүүдийг үүсгэнэ. Шаардлагатай нийтийн
              түлхүүрүүдийг серверт илгээх процесс явагдана.
            </div>
            <div className="mt-4">
              2 дахь шат бол{" "}
              <strong>дундын нууц түлхүүр үүсгэж холболт тогтоох үе шат</strong>
              . Энэ үе шат дээр серверийн тусламжтайгаар илгээгч тал хүлээн
              авагч талын нийтийн түлхүүрүүдийг авч өөрийн хувийн түлхүүрүүдийг
              ашиглан дундын нууц түлхүүрийг үүсгэх процесс явагдана. Signal
              протоколын хувьд{" "}
              <a
                href="https://signal.org/docs/specifications/x3dh/"
                target="_blank"
              >
                {" "}
                <strong>X3DH</strong>{" "}
              </a>{" "}
              алгоритмыг ашиглан гүйцэтгэдэг. Энэхүү алгоритмын давуу тал нь
              хүлээн авагч тал заавал онлайн байх шаардлагагүй юм. X3DH
              алгоритмын схем зураглалыг <strong>Зураг 1-д</strong> харуулав.
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
          </div>
          <div className="flex items-center justify-center text-red-300">
            Зураг 2. Chain key болон Message Key үүсгэх алгоритм
          </div>
        </div>

        <div className="column">
          <div>
            3 дахь үе шат бол{" "}
            <strong>нууцлалтай зурвас илгээж харилцах үе шат</strong>. Дундын
            нууц түлхүүр үүсгэж холболт тогтоосны дараа илгээж буй зурвасыг
            нууцалж илгээх процесс явагдана. Signal протоколын хувьд энэ нь
            хамгийн чухал үе шат бөгөөд <strong>Double Ratchet</strong>{" "}
            алгоритмын тусламжтайгаар илгээж буй зурвас бүрийг шинэ түлхүүрээр
            шифрлэж нууцлах боломжтой юм. <strong>Double Ratchet</strong>{" "}
            алгоритм нь <strong>Diffie-Hellman ratchet</strong> болон{" "}
            <strong>Symmetric ratchet</strong> гэсэн 2 үндсэн хэсгээс бүрдэх
            бөгөөд түлхүүр үүсгэх функцийн тусламжтайгаар (
            <strong>key derivation function (KDF)</strong>) тэдгээрээс харгалзан{" "}
            <strong>chain key</strong> болон <strong>message key</strong>-үүдийг
            гарган авч зурвас шифрлэхдээ ашигладаг.{" "}
            <a
              href="https://signal.org/docs/specifications/doubleratchet/"
              target="_blank"
            >
              <strong>Double Ratchet</strong>{" "}
            </a>
            алгоритмын ажиллагааг доорх схемээс харж болно.
          </div>
        </div>
      </div>

      <div>
        Ийнхүү дээр тэмдэглэснээр Signal протоколд криптографын олон ойлголтууд
        хэрэг болж байгаа ба хэрэгжүүлэхэд ч багагүй ярвигтай гэдэг нь харагдаж
        байгаа байх. Гэсэн хэдий ч end-to-end шифрлэлтийг хэрэгжүүлэх нь
        өгөгдлийн аюулгүй байдал чухал асуудлуудын нэг болсон өнөө цаг үед
        зайлшгүй шаардлагатай байгааг дэлхийн олон орнууд хүлээн зөвшөөрч, хууль
        дүрэм журмын хүрээнд ч зохицуулалтуудыг хийж байна.
      </div>
      <div className="flex flex-col items-center mt-4 text-sm">
        <p
          style={{
            color: "gray",
            font: "inherit",
          }}
        >
          - published by <strong style={{ color: "gray" }}>Feedly</strong> -
          <br></br>
          <p
            className="flex justify-center items-center mt-1"
            style={{ color: "gray" }}
          >
            2024.11.19
          </p>
        </p>
      </div>
    </div>
  );
}

export default News;
