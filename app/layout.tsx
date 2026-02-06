import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import { AppNav } from "./components/AppNav";
import "./globals.css";

const shipporiMincho = Shippori_Mincho({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext", "japanese"] as ("latin" | "latin-ext")[],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "japanese"] as ("latin" | "latin-ext")[],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "八百研産 | その土地にしかないものを、全国へ。",
    template: "%s | 八百研産",
  },
  description:
    "私たち八百研産は、茨城県高萩市・花貫フルーツほおずきから、地域の魅力を発信する学生団体です。",
  keywords: ["ほおずき", "学生団体", "まちおこし"],
  verification: {
    google: "2itCVI5JwcZo6kVz7Be7vNCyx7mK5T401zcJpAbvc6g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${shipporiMincho.variable} ${zenKakuGothicNew.variable} antialiased`}>
        <AppNav />
        {children}
      </body>
    </html>
  );
}
