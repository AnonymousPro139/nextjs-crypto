import React from "react";
import Intro from "@/components/Intro";
import Image from "next/image";
import logo from "../../public/img/bacon.png";
import table from "../../public/img/bacon_table.png";

function Coding_bacon() {
  return (
    <div className="container">
      <Intro
        title="Кодлол!"
        description="Бүх шинжлэх ухааны хаан нь МАТЕМАТИК юм."
      />

      <div className="columns" style={{ margin: 10 }}>
        <div className="column is-one-third">
          <Image
            src={logo}
            height={130}
            alt="photo"
            priority={true}
            style={{ width: "auto" }}
          />
        </div>

        <div
          className="column"
          style={{
            alignSelf: "center",
            color: "black",
            fontSize: 24,
            fontWeight: "bolder",
          }}
        >
          Bacon код
        </div>
      </div>

      <div className="column">
        <strong>Сэр Фрэнсис Бэкон</strong>{" "}
        <strong style={{ color: "red" }}>нууц мессежийг</strong> гадны хүнд
        мессеж болгон харуулахгүй байхаар кодлох аргыг боловсруулсан. Үүнийг
        <strong>стеганографи буюу мэдээллийг нуух шинжлэх ухаан </strong>гэж
        нэрлэдэг.
        <br></br>
        <br></br>
        Текстийн тэмдэгт бүрийг <strong style={{ color: "red" }}>5 </strong>
        тэмдэгтээс бүрдсэн үгээр кодлодог бөгөөд зөвхөн <strong>a, b </strong>
        тэмдэгтүүдийг агуулна.
        <br></br>
        <div
          style={{
            backgroundColor: "white",
            marginTop: 20,
            marginLeft: 15,
            marginRight: 10,
          }}
        >
          <Image
            src={table}
            height={400}
            alt="photo"
            priority={true}
            style={{ width: "auto" }}
          />
        </div>
        <br></br>
        Жишээлбэл <strong>SECRET</strong> гэх үгийг дараах байдлаар кодлоно.
        <br></br>
        <strong>baaab aabaa aaaba baaaa aabaa baaba</strong>
        <br></br>
        <br></br>
        Одоо түүнийг дараах байдлаар өгүүлбэрт <strong>нууж </strong> болно.Үүнд
        bacon хүснэгтээс гарч ирсэн мэдээний b үсэг бүрт харгалзах халхавчийн
        мэдээллийн үсгийг жижгээр бичнэ.
        <br></br>
        <br></br>
        Энд бид халхавчийн мэдээг <strong>өөрсдөө зохиож </strong>бичнэ.
        <div style={{ fontSize: 22, margin: 15 }}>
          <strong>
            <strong style={{ color: "red" }}>b</strong>aaa
            <strong style={{ color: "red" }}>b</strong> aa
            <strong style={{ color: "red" }}>b</strong>aa aaa
            <strong style={{ color: "red" }}>b</strong>a{" "}
            <strong style={{ color: "red" }}>b</strong>aaaa aa
            <strong style={{ color: "red" }}>b</strong>aa{" "}
            <strong style={{ color: "red" }}>b</strong>aa
            <strong style={{ color: "red" }}>b</strong>a
          </strong>
          <br></br>
          <strong style={{ color: "red" }}>s</strong>OIN
          <strong style={{ color: "red" }}>e</strong> VE
          <strong style={{ color: "red" }}>r</strong>ME ANT
          <strong style={{ color: "red" }}>t</strong>O{" "}
          <strong style={{ color: "red" }}>c</strong>AUSE YO
          <strong style={{ color: "red" }}>u</strong>TR{" "}
          <strong style={{ color: "red" }}>o</strong>UB
          <strong style={{ color: "red" }}>l</strong>E<br></br>
        </div>
        <br></br>
        Одоо бид дараах мэдээлийг хүлээн авагч талдаа илгээхэд хангалттай .{" "}
        <strong>"sO I NeVEr MEANT tO cAUSE YOu TRoUBlE“</strong> (So I never
        meant to cause you trouble | Би хэзээ ч чамд төвөг учруулахыг хүсээгүй)
        <br></br>
        <br></br>
        <strong>
          Эндээс бид уншигдахуйц ил мэдээн дотор нууц мэдээг мөн нууж болдогийг
          харж байна.
        </strong>
        <br></br> <br></br>
        Хүлээн авагч тал нь хүснэгтээ ашиглан{" "}
        <strong>"sO I NeVEr MEANT tO cAUSE YOu TRoUBlE"</strong> гэх мэдээнээс
        анхны нуусан <strong>SECRET</strong> гэх мессежийг тайлж унших болно.
      </div>
    </div>
  );
}

export default Coding_bacon;
