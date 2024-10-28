import Intro from "./Intro";
import Footer from "./Footer";
import Listings from "./Listings";
import Nav from "./Nav";

export default function Coding(): JSX.Element {
  const Items = [
    {
      move: "Coding_ascii",
      imgSrc: "/img/ascii.png",
      imgAlt: "ascii code",
      title: "ASCII кодлол",
      description: "ЦАХИМ ХАРИЛЦААНЫ ТЭМДЭГТ КОДЛОЛЫН СТАНДАРТ",
    },
    {
      move: "Coding_base64",
      imgSrc: "/img/base64.png",
      imgAlt: "base64 code",
      title: "BASE64 кодлол",
      description: "Base64 нь 8 битийн тэмдэгтүүдийг 6 битийн тэмдэгт болгон кодлодог. Энэ нь SMTP и-мэйл протоколын анхны хувилбарт шаардлагатай байсан бөгөөд тэмдэгтүүдэд зөвхөн дээд тал нь 7 битийг зөвшөөрдөг",
    },
    {
      move: "Coding_morse",
      imgSrc: "/img/morse2.png",
      imgAlt: "Morse code",
      title: "Морз кодлол",
      description: "Анхны цахилгаан соронзон телеграфыг 1833 онд бүтээжээ. Энэ төхөөрөмжөөр зөвхөн хувьсах урттай импульс илгээх боломжтой байв. Тиймээс тэмдэгтүүдийг богино ба урт импульсийн дарааллаар орчуулах шаардлагатай байлаа.",
    },
    {
      move: "Coding_bacon",
      imgSrc: "/img/bacon.png",
      imgAlt: "Bacon code",
      title: "Bacon кодлол",
      description: "Сэр Фрэнсис Бэкон нууц мессежийг гадны хүнд мессеж болгон харуулахгүй байхаар кодлох аргыг боловсруулсан. Үүнийг стеганографи буюу мэдээллийг нуух шинжлэх ухаан гэж нэрлэдэг.",
    },
  ];
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>
        <div className="mx-auto max-w-6xl">
          <Intro title="Кодлол!" description="Бүх шинжлэх ухааны хаан нь МАТЕМАТИК юм." />
          <Listings Items={Items} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
