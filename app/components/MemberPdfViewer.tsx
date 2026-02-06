"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function MemberPdfViewer() {
  const [numPages, setNumPages] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center gap-10 py-8">
      <Document
        file="/member-intro.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex min-h-[400px] items-center justify-center text-[var(--earth-brown)]">
            読み込み中…
          </div>
        }
      >
        {Array.from(new Array(numPages), (_, index) => (
          <div
            key={`page-${index + 1}`}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-full max-w-[600px] overflow-x-auto rounded-lg shadow-lg">
              <Page
                pageNumber={index + 1}
                width={560}
                renderTextLayer
                renderAnnotationLayer
                className="!w-full"
              />
            </div>
            <span className="text-sm text-[var(--earth-brown)]">
              {index + 1} / {numPages}
            </span>
          </div>
        ))}
      </Document>
    </div>
  );
}
