import Intro from "./Intro";
import Footer from "./Footer";
import Listings from "./Listings";
import Nav from "./Nav";

export default function Analysis(): JSX.Element {
  const Items = [
    {
      move: "Analys_statistic",
      imgSrc: "/img/frequency.png",
      imgAlt: "frequency analysis",
      title: "Статистикийн криптоанализ",
      description:
        "Зарим алгоритмыг магадлалын онол, статистик тооцооллын тусламжтайгаар эвдэх боломжтой байдаг.",
    },
    {
      move: "Analys_caeser",
      imgSrc: "/img/caeser.jpg",
      imgAlt: "caeser",
      title: "Цезарийн шифр болон түүнд хийгдэх довтолгоо",
      description:
        "Цезарын хаант улсын үед ч холбоотой улс гүрнүүдтэйгээ харилцахдаа мэдээгээ хэрхэн шифрлэдэг байсан талаар мөн хэрхэн довтолж тайлах талаар",
    },
    {
      move: "Analys_afin",
      imgSrc: "/img/afin.jpg",
      imgAlt: "afin",
      title: "Афины шифр түүнд хийгдэх довтолгоо",
      description:
        "Математикийн шугаман хувиргалтыг криптологийн ертөнцөд хэрхэн ашигладаг талаар болон түүн дээр хийгдэх криптоанализын талаар",
    },
    {
      move: "Analys_vigener",
      imgSrc: "/img/vigenere.png",
      imgAlt: "vigener",
      title: "Вижинерийн шифр түүнд хийгдэх довтолгоо",
      description:
        "Нэгэн төрлийн олон үсэгт /polyalphabetic/ шифр алгоритм бөгөөд түүн дээр анализ хийх нь криптоанализын чиглэлийн сонгодог жишээ болдог.",
    },
    {
      move: "Analys_rsa",
      imgSrc: "/img/rsa.svg",
      imgAlt: "rsa",
      title: "RSA болон түүнд хийгдэх довтолгоо",
      description:
        "Rivest–Shamir–Adleman гэх нийтийн түлхүүрийн криптосистем дээр суурилсан алгоритм бөгөөд сертификат баталгаажуулалт, түлхүүр солилцох зэрэг олон төрлийн арга алгоритмд түгээмэл ашиглагддаг.",
    },
    {
      move: "Analys_feal4",
      imgSrc: "/img/differential_analys.png",
      imgAlt: "rsa",
      title: "Feal4-т дифференциал довтолгоо хийх",
      description:
        "Дифференциал довтолгоо нь криптографын блок төрлийн алгоритмд хийгдэх боломжтой, шифр мэдээн дээр анализ хийж тайлах арга юм.",
    },
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>
        <div className="mx-auto max-w-6xl">
          <Intro
            title="Криптоанализ!"
            description="Бүх шинжлэх ухааны хаан нь МАТЕМАТИК юм."
          />
          <Listings Items={Items} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
