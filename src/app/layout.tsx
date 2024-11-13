import "./globals.css";
import "bulma";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cryptology site",
  description: "about cryptography and cryptoanalysis for who interested",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ margin: 45 }}>{children}</div>
      </body>
    </html>
  );
}
