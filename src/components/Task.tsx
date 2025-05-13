import Intro from "./Intro";
import Footer from "./Footer";
import Listings from "./Listings";
import Nav from "./Nav";

export default function Task(): JSX.Element {
  const Items: any = [
    {
      move: "Task_solve",
      imgSrc: "/img/task/logo.gif",
      imgAlt: "end-to-end encryption",
      title: "Сонирхолтой бодлогууд",
      description: "Математик бол бүх шинжлэх ухааны хаан мөн.",
    },

    {
      move: "Task_solved",
      imgSrc: "/img/task/logo_solved.gif",
      imgAlt: "end-to-end encryption",
      title: "Зарим бодолтууд",
      description:
        "Зуун бодлогыг нэг аргаар бодох бус нэг бодлогыг зуун аргаар бодох нь чухал.",
    },
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Nav />
      <main>
        <div className="mx-auto max-w-6xl">
          <Intro
            title="Сонирхолтой бодлого"
            description="'Computers had their origin in military cryptography.'  - Austin Grossman"
          />
          <Listings Items={Items} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
