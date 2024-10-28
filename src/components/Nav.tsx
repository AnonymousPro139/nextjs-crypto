"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between  mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link href="/" passHref className=" cursor-pointer">
          <h2 className="flex no-underline">
            <Image
              height="64"
              width="64"
              alt="logo"
              className="h-12 w-12 mr-1 object-contain"
              src="/icon.png"
            />
            <span className="text-4xl font-primary font-bold tracking-tight pt-1">
              Криптологи
            </span>
          </h2>
        </Link>

        <Link href="/cryptography" passHref className=" cursor-pointer">
          <span className="text-xl font-primary font-bold tracking-tight pt-1 ml-8">
            Криптограф
          </span>
        </Link>
        <Link href="/analysis" passHref className=" cursor-pointer">
          <span className="text-xl font-primary font-bold tracking-tight pt-1 ml-8">
            Криптоанализ
          </span>
        </Link>
        <Link href="/coding" passHref className=" cursor-pointer">
          <span className="text-xl font-primary font-bold tracking-tight pt-1 ml-8">
            Кодлол
          </span>
        </Link>
        <div className="mt-2" style={{ fontSize: "10px", color: "black", fontWeight: "bold" }}>
          version-2.0
        </div>
      </div>
    </header>
  );
}

export default Nav;
