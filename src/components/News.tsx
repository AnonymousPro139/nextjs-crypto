import Intro from "./Intro";
import Footer from "./Footer";
import Listings from "./Listings";
import Nav from "./Nav";

export default function News(): JSX.Element {
  const Items: any = [
    {
      move: "News_Quotes",
      imgSrc: "/img/news_quotes.jpg",
      imgAlt: "quotes",
      title: "Wonderful Cryptography Quotes",
      description: "Криптографын тухай сонирхолтой ишлэлүүд",
    },

    {
      move: "News_IntermedData",
      imgSrc: "/img/intermed.jpg",
      imgAlt: "intermed_lost_Data",
      title: "Интермед эмнэлэгийн дата?",
      description:
        "Цахим аюулгүй байдлын менежмент, заналхийллийн эсрэг үйл ажиллагаа явуулдаг 'HackManac'-ийн мэдээлснээр, аравдугаар сарын 30-ны өдөр тус эмнэлгийн цахим дата руу халдсан гэгдээд байгаа",
    },

    {
      move: "News_PostQuantum",
      imgSrc: "/img/news/quantum.png",
      imgAlt: "postquantum",
      title: "Квантын дараах криптограф",
      description:
        "Квантын компьютерууд хөгжихийн хэрээр криптографын ландшафт үндсэн өөрчлөлттэй тулгарч байна. RSA болон ECC (Elliptic Curve Cryptography) зэрэг математик хүндрэлүүд болох том тооны факторизаци /үржигдэхүүнд задлах/ хийх, дискрет логарифмын хүндрэлд суурилсан байдаг",
    },
    {
      move: "News_Lattice",
      imgSrc: "/img/news/lattice.png",
      imgAlt: "lattice",
      title: "Латтисд суурилсан криптограф",
      description:
        "Латтисд суурилсан криптографыг криптографын ирээдүйтэй салбар гэж үзэж буй тул онолын болон практикийн илүү их судалгаа, шинжилгээ, сайжруулалтуудыг дэлхийн өнцөг булан бүрт эрдэмтэн, судлаачид хийсээр байна",
    },
    {
      move: "News_IntroCipher",
      imgSrc: "/img/news/intro_cipher.png",
      imgAlt: "cipher",
      title: "Шифрлэлтийн үндсэн ойлголтууд",
      description:
        "Шифрлэлт болон кодчилолын тусламжтайгаар өгөгдөл нууцлах, хамгаалах шинжлэх ухааныг криптограф нэрлэдэг.",
    },
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>
        <div className="mx-auto max-w-6xl">
          <Intro
            title="Мэдээлэл"
            description="'Computers had their origin in military cryptography.'  - Austin Grossman"
          />
          <Listings Items={Items} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
