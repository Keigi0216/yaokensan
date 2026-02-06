interface FooterProps {
  /** ホームページの場合 true、リンクを # アンカーに。メンバー等の場合は /# に */
  isHome?: boolean;
}

const prefix = (isHome: boolean) => (isHome ? "#" : "/#");

export function Footer({ isHome = false }: FooterProps) {
  const p = prefix(isHome);

  return (
    <footer className="border-t border-black/5 bg-[var(--forest-green)] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <p className="font-heading text-xl font-semibold tracking-[var(--tracking-heading)]">八百研産</p>
        <p className="mt-1.5 text-sm text-white/85" style={{ letterSpacing: "var(--tracking-sub)" }}>やおけんさん</p>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/90">
          <a href={`${p}member`} className="transition-opacity hover:opacity-100">メンバーについて</a>
          <a href={`${p}stage`} className="transition-opacity hover:opacity-100">活動の舞台</a>
          <a href={`${p}activity`} className="transition-opacity hover:opacity-100">活動内容</a>
          <a href={`${p}partners`} className="transition-opacity hover:opacity-100">パートナー</a>
          <a href={`${p}outline`} className="transition-opacity hover:opacity-100">団体概要</a>
        </nav>
        <a
          href="#"
          className="mt-10 inline-block min-h-[44px] rounded-full border border-white/80 px-8 py-3 text-sm font-medium transition-all duration-200 hover:scale-[1.02] hover:bg-white hover:text-[var(--forest-green)]"
        >
          クラウドファンディングで支援する
        </a>
        <p className="mt-10 text-xs text-white/70">© 八百研産</p>
      </div>
    </footer>
  );
}
