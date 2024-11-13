"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// function Nav1() {
//   return (
//     <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6 md:w-full">
//       <div className="flex items-center justify-between">
//         <Link href="/" passHref className=" cursor-pointer">
//           <h2 className="flex no-underline">
//             <Image
//               height="64"
//               width="64"
//               alt="logo"
//               className="h-12 w-12 mr-1 object-contain"
//               src="/icon.png"
//             />
//             <span className="text-4xl font-primary font-bold tracking-tight pt-1">
//               Криптологи
//             </span>
//           </h2>
//         </Link>

//         <Link href="/cryptography" passHref className=" cursor-pointer">
//           <span className="text-xl font-primary font-bold tracking-tight pt-1 ml-8">
//             Криптограф
//           </span>
//         </Link>
//         <Link href="/analysis" passHref className=" cursor-pointer">
//           <span className="text-xl font-primary font-bold tracking-tight pt-1 ml-8">
//             Криптоанализ
//           </span>
//         </Link>
//         <Link href="/coding" passHref className=" cursor-pointer">
//           <span className="text-xl font-primary font-bold tracking-tight pt-1 ml-8">
//             Кодлол
//           </span>
//         </Link>
//         <div
//           className="mt-2"
//           style={{ fontSize: "10px", color: "black", fontWeight: "bold" }}
//         >
//           version-2.0
//         </div>
//       </div>
//     </header>
//   );
// }
function Nav() {
  const [isShow, setShow] = React.useState(false);
  const showHandle = () => setShow(!isShow);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link href="/" passHref className="cursor-pointer">
            <h2 className="flex no-underline">
              <Image
                height="64"
                width="64"
                alt="logo"
                className="h-12 w-12 mr-1 object-contain"
                src="/icon.png"
              />
              <span className="self-center text-4xl font-primary font-bold tracking-tight pt-1">
                Криптологи
              </span>
            </h2>
          </Link>
        </div>
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
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isShow ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-1 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <div className="block py-2 px-3 md:p-0">
                <Link href="/cryptography" passHref className="cursor-pointer">
                  <span className="text-xl font-primary font-bold tracking-tight pt-1 ml-8">
                    Криптограф
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div>
                <Link
                  href="/analysis"
                  passHref
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:p-0"
                >
                  <span className="text-xl font-primary font-bold tracking-tight pt-1 ml-8">
                    Криптоанализ
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                <Link href="/coding" passHref className="cursor-pointer">
                  <span className="text-xl font-primary font-bold tracking-tight pt-1 ml-8">
                    Кодлол
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 text-gray-900 rounded">
                <Link href="#" passHref>
                  <span className="text-xs text-gray-500 pt-1 ml-8">
                    version-2.1
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
