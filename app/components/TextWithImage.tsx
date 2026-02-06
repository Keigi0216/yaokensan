"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

const ROTATE_INTERVAL_MS = 5000;
const FADE_DURATION_MS = 500;

export interface TextWithImageProps {
  imageSide: "left" | "right";
  imageSrc?: string;
  imageAlt?: string;
  images?: { src: string; alt: string }[];
  rotateIntervalMs?: number;
  /** 文章背景のCSS変数（セクション背景と揃える）。未指定は --background */
  textBackgroundVar?: string;
  children: ReactNode;
}

export function TextWithImage({
  imageSide,
  imageSrc,
  imageAlt = "",
  images,
  rotateIntervalMs = ROTATE_INTERVAL_MS,
  textBackgroundVar = "--background",
  children,
}: TextWithImageProps) {
  const list =
    images && images.length > 0
      ? images
      : imageSrc
        ? [{ src: imageSrc, alt: imageAlt }]
        : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const current = list[currentIndex];

  useEffect(() => {
    if (list.length <= 1) return;
    let timeoutId: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setIsFadingOut(true);
      timeoutId = setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % list.length);
        setIsFadingOut(false);
      }, FADE_DURATION_MS);
    }, rotateIntervalMs);
    return () => {
      clearInterval(id);
      if (timeoutId != null) clearTimeout(timeoutId);
    };
  }, [list.length, rotateIntervalMs]);

  const isRight = imageSide === "right";

  return (
    <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-12">
      <div
        className={`min-w-0 space-y-6 py-4 md:py-6 ${!isRight ? "md:order-2" : ""}`}
        style={{
          lineHeight: "var(--leading-body)",
          backgroundColor: `var(${textBackgroundVar})`,
        }}
      >
        {children}
      </div>

      <div
        className={`relative min-h-[240px] md:min-h-0 ${isRight ? "md:order-2" : "md:order-1"}`}
      >
        <div className="relative h-full min-h-[240px] w-full overflow-hidden rounded-lg md:min-h-0">
          {current && (
            <div
              className="absolute inset-0 transition-opacity ease-out"
              style={{
                opacity: isFadingOut ? 0 : 1,
                transitionDuration: `${FADE_DURATION_MS}ms`,
              }}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
