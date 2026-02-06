import Image from "next/image";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  /** タイトル直下のサブタイトル */
  subtitle?: string;
  /** Kokuu風の小さな英語ラベル（例: About） */
  label?: string;
  /** セクション内に表示する画像（Kokuu風） */
  imageSrc?: string;
  imageAlt?: string;
  /** 画像下のキャプション */
  imageCaption?: string;
  children: ReactNode;
  className?: string;
  bgAlt?: boolean;
  /** 本文を幅いっぱいにする（グリッド等）。未指定時は max-w-prose で読みやすく */
  contentFullWidth?: boolean;
}

export function Section({
  id,
  title,
  subtitle,
  label,
  imageSrc,
  imageAlt = "",
  imageCaption,
  children,
  className = "",
  bgAlt = false,
  contentFullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${bgAlt ? "bg-[var(--warm-beige)]" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <header className="mb-14">
          {label && (
            <span className="block text-xs font-medium uppercase tracking-widest text-[var(--earth-brown-muted)]">
              （{label}）
            </span>
          )}
          <h2
            className={`font-heading font-semibold tracking-[var(--tracking-heading)] text-[var(--earth-brown)] ${label ? "mt-2 text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}
            style={{ lineHeight: "var(--leading-tight)" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-lg font-medium text-[var(--earth-brown-muted)] md:text-xl">
              {subtitle}
            </p>
          )}
        </header>

        {imageSrc && (
          <figure className="mb-12">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg shadow-medium">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
            {imageCaption && (
              <figcaption className="mt-3 text-center text-sm font-medium tracking-widest text-[var(--earth-brown-muted)]">
                {imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        <div
          className={`space-y-6 text-[var(--foreground)] ${contentFullWidth ? "" : "max-w-prose"}`}
          style={{ lineHeight: "var(--leading-body)" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
