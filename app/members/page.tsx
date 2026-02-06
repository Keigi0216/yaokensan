import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { MembersPageContent } from "../components/MembersPageContent";

export const metadata: Metadata = {
  title: "メンバー紹介 | 八百研産",
  description: "八百研産で活動するメンバーの紹介です。",
};

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-20">
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-12">
        <header className="mb-12">
          <span className="block text-xs font-medium uppercase tracking-widest text-[var(--earth-brown-muted)]">
            （Member）
          </span>
          <h1 className="mt-2 font-heading text-3xl font-semibold text-[var(--earth-brown)] md:text-4xl">
            メンバー紹介
          </h1>
          <p className="mt-4 max-w-prose text-[var(--foreground)]">
            八百研産で活動するメンバーを紹介します。
          </p>
        </header>
        <MembersPageContent />
      </div>
      <Footer isHome={false} />
    </div>
  );
}
