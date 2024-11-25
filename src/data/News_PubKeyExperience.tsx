"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img3 = "/img/news/pubkey.jpg";
const img2 = "/img/news/pubkeysys4.gif";
const img = "/img/news/pubkeysys5.jpg";

function News() {
  return (
    <div className="container">
      <Intro
        title="Нийтийн түлхүүрт криптографын хүндрэл, туршлага болон ирээдүй"
        description="'Please encrypt your data anywhere ...'"
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
              style={{ width: "70%" }}
            />
          </div>
        </div>

        <div className="column">
          <div className="mt-2 flex items-center justify-center">
            <strong>1. Хэрэгжүүлэхэд тулгарч буй хүндрэлүүд</strong>
          </div>

          <ul className="mt-2">
            <li>
              <strong>1. Түлхүүр удирдлага (Key Management):</strong>
              <br></br> • Түлхүүрийг найдвартай үүсгэх, хадгалах, түгээх нь маш
              чухал.<br></br>• Эвдэрсэн хувийн түлхүүрүүд нь аюулгүй байдлын
              зөрчилд хүргэж болзошгүй.
            </li>

            <li className="mt-1">
              <strong>2. Тооцооллын нэмэлт зардал:</strong>
              <br></br>• Нийтийн түлхүүрийн үйлдлүүд нь симметр түлхүүрийн
              үйлдлээс илүү тооцоолол их шаарддаг.<br></br>• Тооцоолыг илүү үр
              ашигтай ашиглахын тулд ихэвчлэн симметр шифрлэлттэй хослуулан
              ашигладаг.
            </li>
            <li className="mt-1">
              <strong>
                3. Гэрчилгээний эрх бүхий байгууллагууд (Certificate
                Authorities):
              </strong>
              <br></br>• Нийтийн түлхүүрүүдийн жинхэнэ эсэхийг шалгахын тулд
              итгэмжлэгдсэн гуравдагч этгээдүүд шаардлагатай.<br></br>•
              Сертификатуудыг удирдах, баталгаажуулах нь системд төвөгтэй
              байдлыг нэмэгдүүлдэг.
            </li>
            <li className="mt-1">
              <strong>4. Квант тооцооллын аюул:</strong>
              <br></br>• Ирээдүйн квант компьютерууд одоогийн нийтийн түлхүүр
              бүхий криптографын системийг эвдэж болзошгүй.<br></br>• Квантад
              тэсвэртэй алгоритмуудын судалгаа үргэлжилж байна.
            </li>
          </ul>
        </div>
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div>
            <div className="flex items-center justify-center">
              <strong>
                2. Нийтийн түлхүүрт криптографыг ашиглах сайн туршлага
              </strong>
            </div>

            <ul className="mt-2">
              <li>
                <strong>1. Хүчтэй түлхүүрийн хэмжээг ашиглах:</strong>
                <br></br> • RSA-ийн хувьд хамгийн багадаа 4096 битийн түлхүүр
                ашиглах.<br></br>• ECC-ийн хувьд хамгийн багадаа 256 битийн
                түлхүүр ашиглах.
              </li>

              <li className="mt-1">
                <strong>2. Хувийн түлхүүрүүдийг хамгаалах:</strong>
                <br></br>• Хувийн түлхүүрүүдийг аюулгүйгээр, илүү тохиромжтой
                техник хангамжийн аюулгүй байдлын модулиудад (HSM) хадгалах.
                <br></br>• Хувийн түлхүүрүүдийг шифрлэхийн тулд хүчтэй нууц үг
                ашиглах.
              </li>
              <li className="mt-1">
                <strong>3. Түлхүүрүүдийг тогтмол шинэчлэх:</strong>
                <br></br>• Эрсдэлийг бууруулахын тулд түлхүүрүүдийг үе шаттай
                солих.<br></br>• Түлхүүрийг шинэчлэх циклд салбарын стандарт
                болон шаардлагыг дагаж мөрдөнө.
              </li>
              <li className="mt-1">
                <strong>4. Нийтийн түлхүүрүүдийг баталгаажуулах:</strong>
                <br></br>• Итгэмжлэгдсэн гэрчилгээний байгууллага эсвэл бусад
                аюулгүй хэрэгслээр дамжуулан нийтийн түлхүүрийн жинхэнэ эсэхийг
                үргэлж шалгах.
              </li>

              <li className="mt-1">
                <strong>5. Симметрик шифрлэлттэй хослуулах:</strong>
                <br></br>• Түлхүүр солилцохдоо нийтийн түлхүүрт криптографыг
                ашиглаад дараа нь их хэмжээний өгөгдөлд илүү хурдан симметр
                шифрлэлт рүү шилжих.
              </li>

              <li className="mt-1">
                <strong>6. Мэдээллээ шинэчлэх:</strong>
                <br></br>• Криптографын хамгийн сүүлийн үеийн хөгжлийг дагаж
                байх.<br></br>• Хэрэв эмзэг байдал илэрсэн бол илүү хүчтэй
                алгоритм руу шилжихэд бэлэн байх.
              </li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="p-2 flex items-center justify-center">
            <Image
              src={img2}
              width={400}
              height={500}
              alt="photo"
              priority={true}
              style={{ width: "75%" }}
            />
          </div>
        </div>
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2 flex items-center justify-center">
            <Image
              src={img3}
              width={300}
              height={400}
              alt="photo"
              priority={true}
              style={{ width: "75%" }}
            />
          </div>
        </div>

        <div className="column">
          <div className="flex items-center justify-center">
            <strong>3. Нийтийн түлхүүрт криптографын ирээдүй</strong>
          </div>

          <div className="mt-2">
            Технологи хөгжихийн хэрээр нийтийн түлхүүрт криптографын дараах шинэ
            чиглэлүүд хөгжсөөр байна.
            <br></br>
            <ul className="mt-2">
              <li>
                <strong>
                  1. Пост квантын криптограф (Post-Quantum Cryptography):
                </strong>
                <br></br> • Квантын тооцооллын халдлагад тэсвэртэй алгоритм
                боловсруулах.<br></br>• NIST нь квантын дараах криптографийн
                алгоритмуудыг стандартчилах шатандаа явж байна.
              </li>

              <li className="mt-1">
                <strong>2. Гомоморф шифрлэлт (Homomorphic Encryption):</strong>
                <br></br>• Шифрлэгдсэн өгөгдлийг тайлахгүйгээр тооцоолох
                боломжийг олгодог.
                <br></br>• Үүлэн тооцоолол болон өгөгдлийн нууцлал дахь боломжит
                програмууд.
              </li>
              <li className="mt-1">
                <strong>3. Блокчейн ба төвлөрсөн бус системүүд:</strong>
                <br></br>• Төвлөрсөн бус сүлжээ, ухаалаг гэрээнд нийтийн
                түлхүүрийн криптографын хэрэглээг нэмэгдүүлэх.
              </li>
              <li className="mt-1">
                <strong>4. AI болон Machine Learning-тэй нэгтгэх:</strong>
                <br></br>• Криптограф техник ашиглан нууцлалыг хамгаалах машин
                сургалтын судалгаа.
              </li>
            </ul>
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
            2024.11.25
          </p>
        </p>
      </div>
    </div>
  );
}

export default News;
