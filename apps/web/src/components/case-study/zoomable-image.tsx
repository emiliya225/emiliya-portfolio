"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

type ZoomableImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ZoomableImage({
  src,
  alt,
  className,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border text-left"
        aria-label={`Open larger preview of ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className={
            className ??
            "w-full rounded-2xl transition duration-300 group-hover:scale-[1.02]"
          }
        />

        <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-background/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground opacity-0 shadow-sm transition duration-200 group-hover:opacity-100">
          <ZoomIn className="size-4" />
          Zoom
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-neutral-200"
            aria-label="Close image preview"
          >
            <X className="size-5" />
          </button>

          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}