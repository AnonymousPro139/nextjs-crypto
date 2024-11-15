"use client";
import React from "react";
import Image from "next/image";
import Intro from "@/components/Intro";
const img = "/img/news/lattice.png";
const img2 = "/img/news/lattice2.png";

function News() {
  return (
    <div className="container">
      <Intro
        title="Латтисд суурилсан криптограф"
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
            Квант компьютер хөгжихийн хэрээр түүний тусламжтайгаар криптографд
            ашиглагдаж буй математикийн зарим хүндрэлүүд болох маш том бүхэл
            тоог үржигдэхүүнд задлах, дискрет логарифмийн асуудлуудыг шийдэж
            болох юм. Үүний улмаас орчин үед өргөн хэрэглэгддэг уламжлалт
            криптограф системүүд болох <strong>RSA</strong> болон{" "}
            <strong>ECC</strong>-г квант компьютер болон <strong>Шор</strong>-ын
            алгоритм зэрэг алгоритмуудыг ашиглан эвдэх боломжтойг судлаачид
            харуулсан. Үүнээс шалтгаалан квантад тэсвэртэй криптограф систем
            буюу постквант криптограф системүүдийн шаардлага үүсэж буйг дэлхий
            дахинд онцолж олон олон судалгааны ажлууд, уралдаан тэмцээнүүд
            зохиогдох болсон. Эдгээр уралдаан тэмцээнүүдийн дунд{" "}
            <strong>NIST</strong>-ээс 2016 онд зарласан постквант криптографыг
            стандартчлах уралдаан нь голлох байр суурийг эзэлнэ. Энэхүү уралдаан
            нь 4 үе шаттай явагдсан бөгөөд 2022 онд уралдааны ялагчдаар 4
            алгоритмыг зарласан. Энэхүү 4 алгоритмуудын 3 нь латтисд суурилсан
            криптограф алгоритм юм. Тийм учраас ч латтисд суурилсан криптографыг
            криптографын ирээдүйтэй салбар гэж үзэж буй тул онолын болон
            практикийн илүү их судалгаа, шинжилгээ, сайжруулалтуудыг дэлхийн
            өнцөг булан бүрт эрдэмтэн, судлаачид хийсээр байна.
          </div>
        </div>
      </div>

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-second">
          <div className="p-2 m-2">
            <div className="mt-4 mb-4">
              Латтисд суурилсан криптограф{" "}
              <strong>(lattice-based cryptography)</strong> гэж яг юуг хэлж
              байна вэ? Энэ асуултад хариулахын тулд эхлээд латтис (lattice) гэх
              ойлголтын талаар мэдэх ёстой юм. Хэрэв математикийн хэллэгээр
              латтисыг тодорхойлбол доорх байдлаар тодорхойлогдоно.
            </div>

            <Image
              src={img2}
              width={500}
              height={600}
              alt="photo2"
              priority={true}
              style={{ width: "auto" }}
            />

            {/* <p className="mt-1">Тодорхойлолт</p> */}
            <div className="mt-4">
              Гэвч энэхүү тодорхойлолтыг бүлгийн онолын мэдлэггүй хүн ойлгоход
              бэрх юм. Тэгвэл хэрхэн энгийнээр үүнийг тодорхойлж болох вэ? Бид
              бүхэн сургуульд байхдаа вектор гэдэг ухагдахуун болон түүн дээр
              хийгдэх үйлдлүүдийн талаар судалж байсан билээ. Тэгвэл латтис гэж
              төгсгөлөг тооны векторууд болон тэдгээр хийгдэх үйлдлүүдийн
              тусламжтайгаар үүсгэгдэх шинэ векторуудын олонлогийг хэлж болох ба
              өдгөө латтисын онол болон хөгжүүлэгдсээр байна.
            </div>
          </div>
        </div>

        <div className="column">
          <div className="mt-2">
            Латтисд суурилсан криптограф системүүд нь латтисын онол дахь
            хүндрэлүүдэд суурилж аюулгүй байдлыг хангадаг системүүд юм. Латтисын
            онол дахь хүндрэлүүдэд дараах гол хүндрэлүүдийг хамааруулж болно.
          </div>
          <ul className="mt-2">
            <li>
              <strong> - Shortest vector problem (SVP)</strong>: Өгөгдсөн латтис
              дахь хамгийн богино тэг биш векторыг олох;
            </li>
            <li className="mt-1">
              <strong>- Closest vector problem (CVP)</strong>: Өгөгдсөн
              вектортой хамгийн ойр латтисын векторыг олох;
            </li>
            <li className="mt-1">
              <strong> - Shortest independent vectors problem (SIVP)</strong>: n
              шугаман хамааралгүй, богино векторуудыг олох;
            </li>
          </ul>

          <div className="mt-2">
            Эдгээр хүндрэлүүдээс гадна тэдгээрийн өөр бусад хэлбэрүүд болох{" "}
            <strong>SVPγ, GapSVPγ, SIVPγ, BDDγ</strong> хүндрэлүүд нь мөн
            латтисд суурилсан криптографд чухал үүрэгтэй оролцдог.
          </div>

          <div className="mt-2">
            NIST-ээс зарласан постквант криптографын стандартчлалын уралдаанд
            дэвшигдсэн латтисд суурилсан криптограф системүүд нь SVPγ, SIVPγ,
            BDDγ зэрэг хүндрэлүүдэд суурилсан{" "}
            <strong>NTRU, LWE, Ring-LWE болон Module-LWE</strong> зэрэг
            алгоритмуудыг ашигласан байгааг ажиглаж болно. Эдгээр алгоритмуудын
            латтистай хэрхэн холбогдож буйг болон латтисд суурилсан криптограф
            илүү гүнзгий судлахыг хүссэн хэн бүхэнд{" "}
            <strong>“A decade of lattice cryptography” by Chris Peikert</strong>{" "}
            номыг та бүхэнд санал болгож байна.{" "}
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
          - published by <strong style={{ color: "gray" }}>Feedly</strong> -
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
