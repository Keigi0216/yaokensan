"use client";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-[90] flex h-14 items-center justify-between border-b border-black/5 bg-white/95 px-4 backdrop-blur-sm md:px-6 lg:px-12">
      <a href="/" className="font-heading text-lg font-semibold tracking-[var(--tracking-heading)] text-[var(--earth-brown)]">
        八百研産
      </a>
      <button
        type="button"
        onClick={onMenuClick}
        className="text-sm font-medium uppercase tracking-widest text-[var(--foreground)] transition-opacity hover:opacity-70"
        aria-label="メニューを開く"
      >
        MENU
      </button>
    </header>
  );
}
