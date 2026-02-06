import Image from "next/image";

interface HeroProps {
  /** ヒーロー画像のパス（例: /hero.jpg）。未指定時はプレースホルダーを表示 */
  imageSrc?: string;
}

export function Hero({ imageSrc }: HeroProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <header
      className={`relative overflow-hidden ${
        hasImage
          ? "min-h-screen"
          : "bg-gradient-to-b from-[var(--warm-beige)] to-[var(--background)] py-20 md:py-32"
      }`}
    >
      {hasImage && (
        <>
          <Image
            src={imageSrc}
            alt="花貫フルーツほおずき"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" aria-hidden />
        </>
      )}

      <div
        className={`relative z-10 mx-auto max-w-6xl px-6 text-center md:px-8 lg:px-12 ${
          hasImage ? "flex min-h-screen flex-col justify-center py-24 md:py-32" : ""
        }`}
      >
        <div>
          <h1
            className={`font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${
              hasImage ? "text-white drop-shadow-md" : "text-[var(--earth-brown)]"
            }`}
          >
            八百研産
          </h1>
          <p
            className={`mt-2 text-lg md:text-xl ${
              hasImage ? "text-white/90" : "text-[var(--earth-brown-muted)]"
            }`}
            style={{ letterSpacing: "var(--tracking-sub)" }}
          >
            やおけんさん
          </p>
          <p
            className={`mx-auto mt-12 max-w-2xl font-heading text-2xl font-medium leading-relaxed md:text-3xl lg:text-4xl ${
              hasImage ? "text-white drop-shadow" : "text-[var(--foreground)]"
            }`}
          >
            その土地にしかないものを、全国へ。
          </p>
          <p
            className={`mx-auto mt-6 max-w-xl text-sm md:text-base ${
              hasImage ? "text-white/85" : "text-[var(--foreground-muted)]"
            }`}
          >
            茨城県高萩市・花貫フルーツほおずきから、地域の魅力を発信する学生団体
          </p>
        </div>

        {!hasImage && (
          <div className="mt-12 flex justify-center">
            <div className="h-48 w-full max-w-sm rounded-lg bg-[var(--warm-beige)] md:h-64">
              <div className="flex h-full items-center justify-center text-[var(--earth-brown)]">
                <span className="text-sm">花貫フルーツほおずき</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
