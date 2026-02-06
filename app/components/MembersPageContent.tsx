"use client";

import dynamic from "next/dynamic";

const MemberPdfViewer = dynamic(
  () =>
    import("./MemberPdfViewer").then((mod) => mod.MemberPdfViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[50vh] items-center justify-center text-[var(--earth-brown)]">
        読み込み中…
      </div>
    ),
  }
);

export function MembersPageContent() {
  return <MemberPdfViewer />;
}
