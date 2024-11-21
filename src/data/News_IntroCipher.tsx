"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/news/intro_cipher.png";

function News() {
  return (
    <div className="container">
      <Intro
        title="Криптограф шифрлэлтийн үндсэн ойлголтууд"
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
            Шифрлэлт болон кодлолын тусламжтайгаар өгөгдөл нууцлах, хамгаалах
            шинжлэх ухааныг <strong>криптограф</strong> гэж нэрлэдэг. Энэ нь
            дижитал болон дижитал бус харилцаа холбооны нууцлал, бүрэн бүтэн
            байдлыг хамгаалах зорилготой юм. Криптографын үндсэн зорилго нь нууц
            мэдээллийг зөвшөөрөлгүй өөрчлөх, хувиргах, тайлах зэргээс
            хамгаалахыг хэлнэ.
          </div>

          <div className="mt-2">
            Криптографын шинжлэх ухаанд нэрлэгддэг үндсэн хэдэн нэршилүүдтэй
            танилцая.
          </div>

          <ul className="mt-2">
            <li>
              <strong>1. Ил текст</strong>(plaintext) : Таны нууцлаагүй мэдээ,
              мэдээллийг нэрлэдэг.
            </li>
            <li className="mt-1">
              <strong>2. Шифр текст</strong>(ciphertext) : Ил текстийг шифрлэсэн
              /нууцалсан/ хэлбэрийг хэлдэг.
            </li>
            <li className="mt-1">
              <strong>3. Шифр тайлах</strong> : Шифрлэлтийн урвуу процесс юм.
              Шифр текстээс түлхүүр алгоритм ашиглаж ил текст гаргаж авах
              хувиргалтыг нэрлэнэ.
            </li>
            <li className="mt-1">
              <strong>4. Түлхүүр</strong>: Шифрлэлт болон шифрийг тайлахад
              ашигладаг тэмдэгтүүд эсвэл тоонуудын цуваа байдаг. Шифрийн хүндрэл
              нь ихэвчлэн түлхүүрийн уртаас хамаардаг.
            </li>
          </ul>
        </div>
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div>
            <div className="flex items-center justify-center">
              <strong>Криптографын төрөл</strong>
            </div>
            <div className="mt-4 mb-4">
              <strong>*</strong> Тэгш хэмт <strong>/симметрик/</strong>{" "}
              криптограф. Ижил түлхүүрийг шифрлэх болон тайлахад ашигладаг
              шифрлэлтийг тэгш хэмт буюу симметрик криптограф гэж нэрлэгдэг.
              Илгээгч болон хүлээн авагч хоёулаа ижил түлхүүртэй байх ёстой
              бөгөөд түлхүүрийн хадгалалт хамгаалалтаас шифрийн нууцлал
              хамааралтай байдаг.
            </div>

            <div>
              Жишээ алгоритмууд: <strong>AES</strong> (Advanced Encryption
              Standard), <strong>DES</strong> (Data Encryption Standard),{" "}
              <strong>RC4</strong> ...
            </div>

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

            <div>
              Жишээ алгоритмууд: <strong>RSA</strong>, <strong>ECC</strong>{" "}
              (эллиптик муруйн криптограф), <strong>DSA</strong> (тоон гарын
              үсгийн алгоритм) ...
            </div>

            <div className="flex items-center justify-center">
              <strong>Криптографын хэш функц</strong>
            </div>

            <div className="mt-2">
              Хэш функцийн үндсэн үүрэг бол аливаа өгөгдлийг тодорхой урттай
              санамсаргүй мэт өгөгдөлрүү хувиргах явдал юм. Өөрөөр хэш функцийг{" "}
              <strong>нэг чиглэлт функц</strong> (one-way function) гэж нэрлэх
              ба гаралтын утгаас оролтын утгыг тооцоолох боломжгүй байхаар
              зохиогдсон байх ёстой.
              <div className="mt-2">
                Жишээ: <strong>SHA-256</strong>, <strong>MD5</strong> гэх мэт..
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="flex items-center justify-center">
            <strong>Тоон гарын үсэг</strong>
          </div>

          <div className="mt-2">
            Тоон гарын үсэг нь мэдээллийн бүрэн бүтэн байдал, өөрчлөлт орсон
            зэргийг шалгах үндсэн үүрэгтэй нийтийн түлхүүрийн криптограф
            ашигласан алгоритм юм. Илгээгч тал өөрийн нууц түлхүүр ашиглан
            мэдээлэлд гарын үсэг зурна. Түүнийг хүлээн авагч тал илгээгчийн
            нийтийн түлхүүрийг ашиглан тус гарын үсгийг мөн эсэхийг шалгадаг.
            Гарын үсэг нь мэдээлэл өөрчлөлт ороогүйг шалгаж баталгаажуулдаг
            хэрэгсэл болдог.
          </div>

          <div className="flex items-center justify-center mt-1">
            <strong>Криптографын өргөн ашигладаг алгоритмууд</strong>
          </div>

          <div className="mt-2">
            <strong>AES</strong> - Тэгш хэмт буюу симметрик шифр алгоритм ба
            128, 192, 256 гэсэн түлхүүрийн урттай хувилбарууд байдаг. Хамгийн
            өргөнөөр ашигладаг шифр алгоритм юм. Нэмж хэлэхэд{" "}
            <strong>NIST</strong>-ээс{" "}
            <strong>DES(Data Encryption Standard)</strong> алгоритмыг сольж
            стандарт симметрик алгоритмаар баталгаажуулсан.
          </div>

          <div className="mt-2">
            <strong>RSA</strong> - Нийтийн түлхүүрт криптографын анхны
            төлөөлөгчдийн нэг бөгөөд том тооны факторизацийн хүндрэл дээр
            суурилсан шифр алгоритм юм. RSA ихэнхдээ орчин үеийн шифр систем дэх
            тэгш хэмт шифр алгоритмын түлхүүрийг нууцлах мөн бага хэмжээтэй
            өгөгдөл нууцлахад ашиглагддаг.
          </div>
          <div className="mt-2">
            <strong>Эллиптик муруйн криптограф (ECC)</strong> - Гүйцэтгэх үүрэг
            нь RSA төстэй ба гол ялгаа нь эллиптик муруйд суурилсан байдаг.
            RSA-аас бага түлхүүрийн урттайгаар давуу талтай. Түүнийг орчин үед
            гар утасны програм хангамж зэрэг ресурс бага шаарддаг тооцоололд
            илүү ихээр ашиглаж байна.
          </div>

          <div className="mt-2">
            <strong>SHA (Secure Hash Algorithms)</strong> - NSA зохион бүтээсэн
            криптографын хэш функц. Одоогоор маш өргөнөөр ашигладаг. SHA-256,
            SHA-3 гэсэн төрлүүдтэй. Ихэнхдээ тоон гарын үсэг болон мэдээллийн
            бүрэн бүтэн байдлыг шалгахад ашигладаг.
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
          - published by <strong style={{ color: "gray" }}>mONESy</strong> -
          <br></br>
          <p
            className="flex justify-center items-center mt-1"
            style={{ color: "gray" }}
          >
            2024.11.16
          </p>
        </p>
      </div>
    </div>
  );
}

export default News;
