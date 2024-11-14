"use client";
import React from "react";
import Intro from "@/components/Intro";

interface Data {
  who: string;
  popularity: string;
  text: string;
}

const DataQuotes = [
  {
    who: "Benjamin Franklin",
    popularity: "American polymath",
    text: "The trouble with quotes on the Internet is that you never know if they are genuine.",
  },
  {
    who: "French proverb",
    popularity: "",
    text: "If you reveal your secrets to the wind, you should not blame the wind for revealing them to the trees.",
  },
  {
    who: "Neal Stephenson",
    popularity: "Cryptonomicon",
    text: "How long do you want these messages to remain secret? I want them to remain secret for as long as men are capable of evil.",
  },
  {
    who: "Austin Grossman",
    popularity: "American author and video game designer",
    text: "Computers had their origin in military cryptography.",
  },
  {
    who: "Tim Newsome",
    popularity: "",
    text: "In God we trust. Everybody else we verify using PGP!",
  },
  {
    who: "Bruce Schneier",
    popularity: "Technologist",
    text: "There are two kinds of cryptography in this world: cryptography that will stop your kid sister from reading your files, and cryptography that will stop major governments from reading your files",
  },
  {
    who: "Adi Shamir",
    popularity: "Cryptographer",
    text: "Cryptography is typically bypassed, not penetrated.",
  },
  {
    who: "Bruce Schneier",
    popularity: "Technologist",
    text: "Security is a process, not a product.",
  },
  {
    who: "Claude Shannon",
    popularity: "Mathematician",
    text: "The enemy knows the system.",
  },
  {
    who: "Bruce Schneier",
    popularity: "Technologist",
    text: "Anyone, from the most clueless amateur to the best cryptographer, can create an algorithm that he(she) himself(herself) can't break.",
  },
  {
    who: "Donald Knuth",
    popularity: "Mathematician and computer scientist",
    text: "Random numbers should not be generated with a method chosen at random.",
  },
  {
    who: "Robert Morris",
    popularity: "",
    text: "Rule 1 of cryptanalysis: check for plaintext.",
  },
  {
    who: "Ken Thompson",
    popularity: "Computer scientist",
    text: "When in doubt, use brute force.",
  },
  {
    who: "NSA",
    popularity: "National Security Agency",
    text: "Your voice is always heard.",
  },
  {
    who: "Michael Hayden",
    popularity: "NSA",
    text: "We kill people based on metadata.",
  },

  {
    who: "Philip Zimmermann",
    popularity: "Cryptographer",
    text: "If privacy is outlawed, only outlaws will have privacy.",
  },

  {
    who: "Ken Thompson",
    popularity: "Computer scientist",
    text: "You can’t trust code that you did not totally create yourself.",
  },
];

function News_Quotes() {
  return (
    <div className="container">
      <Intro
        title="Wonderful Cryptography Quotes"
        description="Криптографын тухай сонирхолтой ишлэлүүд"
      />
      <br></br>
      {DataQuotes.map((item, index) => (
        <Quote key={index} data={item} />
      ))}
    </div>
  );
}

function Quote({ data }: { data: Data }): JSX.Element {
  return (
    <div className="max-w-screen-md mx-auto text-center mb-4 mt-2 p-2 rounded-lg border border-2 border-current">
      <svg
        className="mx-auto mb-2 text-gray-300"
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="7" cy="12" r="1" stroke="#000000" />
        <circle cx="12.5" cy="12" r="1" stroke="#000000" />
        <circle cx="18" cy="12" r="1" stroke="#000000" />
      </svg>
      <blockquote>
        <p className="text-md italic font-medium text-gray-900">
          "{data.text}"
        </p>
      </blockquote>

      <figcaption className="flex items-center justify-center mt-5">
        <cite className="pe-3 font-medium text-gray-900 pr-2">{data.who}</cite>

        {data.popularity !== "" && (
          <>
            |
            <cite className="ps-3 text-sm text-gray-500 pl-2">
              {data.popularity}
            </cite>
          </>
        )}
      </figcaption>
    </div>
  );
}

export default News_Quotes;
