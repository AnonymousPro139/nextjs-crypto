"use client";

import { type FC, useState } from "react";
import { Branding, MenuItem, TodayDate } from "./common";
import { usePathname } from 'next/navigation'

const MAIN_MENUS = [
  {
    url: "/cryptography",
    label: "Криптограф",
  },
  {
    url: "/analysis",
    label: "Криптоанализ",
  },
  {
    url: "/coding",
    label: "Кодлол",
  },
  {
    url: "/news",
    label: "Мэдээ",
  },
] as const;

const Nav: FC = () => {
  const [isShow, setShow] = useState(false);
  const showHandle = () => setShow(!isShow);
  const pathName: string[] = [];

  usePathname().slice(1).split("/").forEach((part) => {
    pathName.push(...part.split("_"));
  });

  if(pathName.length === 0 || pathName.every(item => item === "")){
    pathName.length = 0;
    pathName.push(MAIN_MENUS[0].url.slice(1));
  }
    

  // TODO: move to footer. that is version-2.1 text

  return (
    <nav className="bg-white border-gray-200 border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Branding />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={showHandle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isShow ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-1 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:justify-around">
            {MAIN_MENUS.map(({ url, label }, index) => {
              const isActive = pathName.find((a) => {
                  return url.toLowerCase().slice(1).startsWith(a.toLowerCase())
              })
              
              return (
                <li 
                  key={index} 
                  className={isActive ? "w-fit border-b-4 border-[#485fc7]" : ""}
                >
                  <MenuItem url={url} label={label} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 pb-2 flex justify-between">
        <div className="text-xs text-gray-600">
          <div className="flex flex-col items-start py-2 px-3 rounded mx-2 ">
            <span>Монгол улс,</span>
            <span>Улаанбаатар хот</span>
          </div>
        </div>
        <div className="text-xs text-gray-600">
          <TodayDate />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
