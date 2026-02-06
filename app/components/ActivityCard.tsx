import Image from "next/image";

interface ActivityCardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function ActivityCard({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
}: ActivityCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-[var(--earth-brown)]/12 bg-white">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium tracking-widest text-[var(--earth-brown-muted)]">
          {number}
        </span>
        <h3 className="mt-2 font-heading text-xl font-semibold text-[var(--earth-brown)]">
          {title}
        </h3>
        <p
          className="mt-4 text-[var(--foreground)]"
          style={{ lineHeight: "var(--leading-body)" }}
        >
          {description}
        </p>
      </div>
    </article>
  );
}
