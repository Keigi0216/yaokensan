"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/members", label: "メンバー" },
];

const homeAnchorItems = [
  { href: "/#member", label: "メンバーについて" },
  { href: "/#stage", label: "活動の舞台" },
  { href: "/#activity", label: "活動内容" },
  { href: "/#partners", label: "パートナー" },
  { href: "/#outline", label: "団体概要" },
];

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

export function Drawer({ open, onClose }: DrawerProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <div
        className={`fixed inset-0 z-[110] bg-black/40 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
        onClick={onClose}
      />
      <aside
        className={`fixed left-0 top-0 z-[120] h-full w-72 max-w-[85vw] bg-white shadow-xl transition-transform duration-200 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-label="メニュー"
        aria-hidden={!open}
      >
        <div className="flex h-14 items-center justify-between border-b border-[var(--earth-brown)]/20 px-4">
          <span className="font-heading text-lg font-semibold text-[var(--earth-brown)]">
            八百研産
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 min-h-[44px] w-10 min-w-[44px] items-center justify-center rounded-lg text-[var(--foreground)] transition-colors hover:bg-[var(--warm-beige)]"
            aria-label="メニューを閉じる"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className={`block rounded-lg px-4 py-3 font-medium transition-colors ${
                        pathname === href
                          ? "bg-[var(--warm-beige)] text-[var(--earth-brown)]"
                      : "text-[var(--foreground)] hover:bg-[var(--warm-beige)]/50"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            {isHome && (
              <>
                <li className="pt-2">
                  <span className="px-4 text-xs font-medium uppercase tracking-wider text-[var(--earth-brown)]">
                    ページ内リンク
                  </span>
                </li>
                {homeAnchorItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={onClose}
                      className="block rounded-lg px-4 py-3 font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--warm-beige)]/50"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
}
