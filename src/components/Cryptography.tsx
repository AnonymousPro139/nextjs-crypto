import Intro from "./Intro";
import Footer from "./Footer";
import Listings from "./Listings";
import Nav from "./Nav";

export default function Cryptography(): JSX.Element {
  const Items: any = [
    {
      move: "Crypto_adfgvx",
      imgSrc: "/img/adfgvx.png",
      imgAlt: "adfgvx cipher",
      title: "ADFGVX шифр",
      description:
        "Дэлхийн 1-р дайны үед ашиглагдаж байсан одоогийн Германы армийн шифр юм. ADFGX нь тус шифрийн эхний хувилбар нь бөгөөд 1918 оны 3 сарын 1-д анх ашиглагдаж байжээ.",
    },
    {
      move: "Crypto_enigma",
      imgSrc: "/img/enigma.png",
      imgAlt: "enigma cipher",
      title: "Энигма шифр",
      description:
        "Дэлхийн 2-р дайны үед ашиглагдаж байсан одоогийн Германы армийн маш нууц мэдээллүүдийг нууцлах зориулалттай машин юм.",
    },
    {
      move: "Crypto_des",
      imgSrc: "/img/des.png",
      imgAlt: "DES cipher",
      title: "DES шифр",
      description: "DES буюу Data Encryption Standart алгоритмыг 1971 онд IBM-ын криптографч Horst Feistel зохиосон."
    },
    {
      move: "Crypto_feal4",
      imgSrc: "/img/feal4.png",
      imgAlt: "feal4 cipher",
      title: "Feal-4 шифр",
      description: "1987 онд Японы Akihiro Shimizu, Shoji Miyaguchi нарын зохиосон фэйстэл бүтэц дээр суурилсан блок төрлийн алгоритм."
    },
    {
      move: "Crypto_aes",
      imgSrc: "/img/aes.png",
      imgAlt: "aes cipher",
      title: "AES шифр",
      description:
        "Rijndael буюу Advanced Encryption Standart. АНУ-ын Үндэсний Технологийн Газраас (NIST) баталгаажуулсан нууцлалын алгоритм.",
    },
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>
        <div className="mx-auto max-w-6xl">
          <Intro
            title="Криптограф!"
            description="Бүх шинжлэх ухааны хаан нь МАТЕМАТИК юм."
          />
          <Listings Items={Items} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
