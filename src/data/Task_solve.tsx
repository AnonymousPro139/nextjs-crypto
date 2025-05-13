"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/news/e2ee1.png";
const img2 = "/img/news/e2ee2.png";

function Task() {
  return (
    <div className="container">
      <Intro
        title="Сонирхолтой бодлого"
        description="'The enemy knows the system' -Claude Shannon"
      />
      <div className="mt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem id
        iusto ipsam repudiandae sapiente exercitationem, voluptate aut
        dignissimos minima sequi.
      </div>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum,
        maxime numquam harum rerum sed pariatur, voluptatum mollitia vel vitae,
        commodi ea odit ipsum? Nobis voluptatum recusandae neque voluptatibus
        veritatis eos odio odit cum sed, saepe magni iure inventore itaque! Ut
        eos aspernatur placeat. Iste aut molestiae iusto vero numquam sed magnam
        vel, illum corporis deserunt veniam illo earum, repudiandae dicta
        perferendis quia modi! Repudiandae, minima veritatis tempora est libero
        nam amet at aperiam totam animi? Reiciendis, tempore? Odit harum quis
        repellat vel alias ipsa atque laboriosam consequuntur. Itaque obcaecati
        mollitia asperiores, a minima tenetur non at quaerat magni sit!
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

export default Task;
