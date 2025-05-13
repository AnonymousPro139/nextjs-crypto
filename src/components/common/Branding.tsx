"use client";

import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

export const Branding: FC = () => {
  return (
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
  );
};
