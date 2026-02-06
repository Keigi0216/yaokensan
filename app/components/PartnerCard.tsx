interface PartnerCardProps {
  name: string;
  description: string;
  url: string;
}

export function PartnerCard({ name, description, url }: PartnerCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-[var(--earth-brown)]/15 bg-white p-6 hover:border-[var(--earth-brown)]/25"
    >
      <h3 className="font-heading text-lg font-semibold text-[var(--earth-brown)]">
        {name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
        {description}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-[var(--hoozuki-orange)]">
        公式サイトへ →
      </span>
    </a>
  );
}
