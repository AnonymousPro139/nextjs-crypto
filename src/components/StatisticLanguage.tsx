import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CategoryTitle from "./CategoryTitle";

interface Props {
  language: string;
}

const StatisticLanguage = (props: Props) => {
  const dataEng = [
    {
      key: "A",
      data: 7.96,
    },
    {
      key: "B",
      data: 1.6,
    },
    {
      key: "C",
      data: 2.84,
    },
    {
      key: "D",
      data: 4.01,
    },
    {
      key: "E",
      data: 12.86,
    },
    {
      key: "F",
      data: 2.62,
    },
    {
      key: "G",
      data: 1.99,
    },
    {
      key: "H",
      data: 5.39,
    },
    {
      key: "I",
      data: 7.77,
    },
    {
      key: "J",
      data: 0.16,
    },
    {
      key: "K",
      data: 0.41,
    },
    {
      key: "L",
      data: 3.51,
    },
    {
      key: "M",
      data: 2.43,
    },
    {
      key: "N",
      data: 7.51,
    },
    {
      key: "O",
      data: 6.62,
    },
    {
      key: "P",
      data: 1.81,
    },
    {
      key: "Q",
      data: 0.17,
    },
    {
      key: "R",
      data: 6.83,
    },
    {
      key: "S",
      data: 6.62,
    },
    {
      key: "T",
      data: 9.72,
    },
    {
      key: "U",
      data: 2.48,
    },
    {
      key: "V",
      data: 1.15,
    },
    {
      key: "W",
      data: 1.8,
    },
    {
      key: "X",
      data: 0.17,
    },
    {
      key: "Y",
      data: 1.52,
    },
    {
      key: "Z",
      data: 0.05,
    },
  ];
  const dataMgl = [
    {
      key: "А",
      data: 117,
    },
    {
      key: "Б",
      data: 40,
    },
    {
      key: "В",
      data: 20,
    },
    {
      key: "Г",
      data: 101,
    },
    {
      key: "Д",
      data: 71,
    },

    {
      key: "Е",
      data: 0,
    },
    {
      key: "Ё",
      data: 0,
    },
    {
      key: "Ж",
      data: 27,
    },
    {
      key: "З",
      data: 15,
    },
    {
      key: "И",
      data: 37,
    },
    {
      key: "Й",
      data: 0,
    },
    {
      key: "К",
      data: 0,
    },
    {
      key: "Л",
      data: 90,
    },
    {
      key: "М",
      data: 36,
    },
    {
      key: "Н",
      data: 130,
    },
    {
      key: "О",
      data: 52,
    },
    {
      key: "Ө",
      data: 19,
    },
    {
      key: "П",
      data: 0,
    },
    {
      key: "Р",
      data: 82,
    },
    {
      key: "С",
      data: 45,
    },
    {
      key: "Т",
      data: 50,
    },
    {
      key: "У",
      data: 20,
    },
    {
      key: "Ү",
      data: 10,
    },
    {
      key: "Х",
      data: 74,
    },
    {
      key: "Ц",
      data: 10,
    },
    {
      key: "Ч",
      data: 19,
    },
    {
      key: "Ш",
      data: 11,
    },
    {
      key: "Щ",
      data: 0,
    },
    {
      key: "Ъ",
      data: 0,
    },
    {
      key: "Ы",
      data: 14,
    },
    {
      key: "Ь",
      data: 11,
    },
    {
      key: "Э",
      data: 78,
    },
    {
      key: "Ю",
      data: 0,
    },
    {
      key: "Я",
      data: 7,
    },
  ];

  const bigrammMgl = [
    {
      key: "БАЙ",
      data: 175000,
    },
    {
      key: "ГА",
      data: 139000,
    },
    {
      key: "САН",
      data: 105000,
    },
    {
      key: "НА",
      data: 104000,
    },
    {
      key: "НЬ",
      data: 103000,
    },
    {
      key: "НЭ",
      data: 100000,
    },
    {
      key: "ГҮЙ",
      data: 99000,
    },
    {
      key: "НЫ",
      data: 90000,
    },

    {
      key: "ГЭ",
      data: 81000,
    },
    {
      key: "НИЙ",
      data: 79000,
    },
    {
      key: "ГИЙН",
      data: 78000,
    },
    {
      key: "ГАА",
      data: 77000,
    },
    {
      key: "БО",
      data: 75000,
    },
    {
      key: "ЛА",
      data: 74000,
    },
    {
      key: "ХЭ",
      data: 71000,
    },
    {
      key: "СЭН",
      data: 62000,
    },
    {
      key: "БА",
      data: 61500,
    },
  ];

  const bigrammEng = [
    {
      key: "th",
      data: 3.88,
    },
    {
      key: "he",
      data: 3.68,
    },
    {
      key: "in",
      data: 2.28,
    },
    {
      key: "er",
      data: 2.17,
    },
    {
      key: "an",
      data: 2.14,
    },
    {
      key: "re",
      data: 1.74,
    },
    {
      key: "nd",
      data: 1.57,
    },
    {
      key: "on",
      data: 1.41,
    },
    {
      key: "en",
      data: 1.38,
    },
    {
      key: "at",
      data: 1.33,
    },

    {
      key: "ou",
      data: 1.28,
    },
    {
      key: "ed",
      data: 1.27,
    },
    {
      key: "ha",
      data: 1.27,
    },
    {
      key: "to",
      data: 1.16,
    },
    {
      key: "or",
      data: 1.38,
    },
    {
      key: "it",
      data: 1.13,
    },
    {
      key: "the",
      data: 3.5,
    },
    {
      key: "and",
      data: 1.59,
    },
    {
      key: "ing",
      data: 1.14,
    },
    {
      key: "her",
      data: 0.82,
    },
    {
      key: "hat",
      data: 0.65,
    },
    {
      key: "his",
      data: 0.59,
    },
    {
      key: "tha",
      data: 0.59,
    },
    {
      key: "ere",
      data: 0.56,
    },
    {
      key: "for",
      data: 0.55,
    },
    {
      key: "ent",
      data: 0.53,
    },
    {
      key: "ion",
      data: 0.5,
    },
    {
      key: "ter",
      data: 0.46,
    },
    {
      key: "was",
      data: 0.4604,
    },
    {
      key: "you",
      data: 0.43,
    },
    {
      key: "ith",
      data: 0.437,
    },
  ];

  let data: { key: string; data: number; }[]= [];
  let bigrammData: { key: string; data: number; }[]= [];
  let title = "";

  if (props.language === "eng") {
    data = dataEng;
    bigrammData = bigrammEng;
    title = "Англи хэлний үсгүүдийн текстэнд эзлэх хувь";
  } else {
    data = dataMgl;
    bigrammData = bigrammMgl;
    title = "Монгол хэлний үсгүүдийн текстэнд эзлэх хувь";
  }

  return (
    <div style={{ marginBottom: 35 }}>
      <div style={{ margin: 35 }}>
        <CategoryTitle title={title} color={"black"} fontSize={15} />
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="data" fill="#28B463" />
        </BarChart>
      </ResponsiveContainer>

      <div style={{ margin: 35 }}>
        <CategoryTitle
          title={"Тус хэлэнд хамгийн их тохиолддог үе"}
          color={"black"}
          fontSize={15}
        />
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={bigrammData}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="data" fill="#28B463"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticLanguage;
