import Image from "next/image";

interface ImageGridProps {
  /** 画像の配列 { src, alt } */
  images: { src: string; alt: string }[];
  /** 2 or 3 列。未指定時は images.length に応じて自動 */
  columns?: 2 | 3;
  /** アスペクト比。default 4/3 */
  aspect?: "video" | "square" | "wide";
}

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[16/10]",
};

export function ImageGrid({
  images,
  columns,
  aspect = "video",
}: ImageGridProps) {
  const cols =
    columns ?? (images.length >= 3 ? 3 : 2);
  const gridClass =
    cols === 3
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`${gridClass} gap-4 md:gap-6`}>
      {images.map(({ src, alt }) => (
        <div
          key={src}
          className="relative overflow-hidden rounded-xl shadow-medium"
        >
          <div className={`relative w-full ${aspectClass[aspect]}`}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
