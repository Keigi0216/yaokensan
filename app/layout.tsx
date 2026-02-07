import type { Metadata } from "next";
import { AppNav } from "./components/AppNav";
import "./globals.css";

const siteUrl = "https://yaokensan-two.vercel.app";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap";

export const metadata: Metadata = {
  title: {
    default: "八百研産 | その土地にしかないものを、全国へ。",
    template: "%s | 八百研産",
  },
  description:
    "私たち八百研産（やおけんさん）は、茨城県高萩市・花貫フルーツほおずきから、地域の魅力を発信する学生団体です。",
  keywords: ["やおけんさん", "ほおずき", "学生団体", "まちおこし","茨城県高萩市","花貫フルーツほおずき","八百研産"],
  icons: {
    icon: "/images/logo.png",
  },
  verification: {
    google: "2itCVI5JwcZo6kVz7Be7vNCyx7mK5T401zcJpAbvc6g",
  },
  openGraph: {
    title: "八百研産 | その土地にしかないものを、全国へ。",
    description:
      "私たち八百研産（やおけんさん）は、茨城県高萩市・花貫フルーツほおずきから、地域の魅力を発信する学生団体です。",
    url: siteUrl,
    siteName: "八百研産",
    images: [
      {
        url: `${siteUrl}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "八百研産",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "八百研産 | その土地にしかないものを、全国へ。",
    description:
      "私たち八百研産（やおけんさん）は、茨城県高萩市・花貫フルーツほおずきから、地域の魅力を発信する学生団体です。",
    images: [`${siteUrl}/images/logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "八百研産",
    alternateName: "やおけんさん",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
  };

  return (
    <html lang="ja">
      <head>
        <link href={FONTS_URL} rel="stylesheet" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <AppNav />
        {children}
      </body>
    </html>
  );
}
