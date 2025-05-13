"use client";
import Link from "next/link";
import { type FC } from "react";

interface MenuItemProps {
  url: string;
  label: string;
}

export const MenuItem: FC<MenuItemProps> = ({ url, label }) => {
  return (
    <Link
      href={url}
      passHref
      className="block py-2 px-3 rounded hover:bg-gray-100 md:p-0"
    >
      <span className="text-xl font-primary font-bold tracking-tight pt-1 mx-4">
        {label}
      </span>
    </Link>
  );
};
