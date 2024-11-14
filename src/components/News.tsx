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
