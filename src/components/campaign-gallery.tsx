"use client";

import type { CampaignItem } from "@/lib/mock-data/campanhas";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
  items: CampaignItem[];
};

export function CampaignGallery({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const closePreview = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const goToSibling = useCallback(
    (direction: -1 | 1) => {
      setActiveIndex((prev) => {
        if (prev === null) return prev;
        const next = (prev + direction + items.length) % items.length;
        return next;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePreview();
      if (event.key === "ArrowLeft") goToSibling(-1);
      if (event.key === "ArrowRight") goToSibling(1);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closePreview, goToSibling, isOpen]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <div role="region" aria-roledescription="galeria" aria-label="Galeria de imagens dos serviços">
      <ul
        className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-2 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:hidden"
        style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
      >
        {items.map((item, index) => (
          <li key={`mobile-${item.src}`} className="w-[78vw] shrink-0 snap-center">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 active:scale-[0.99]"
              aria-label={`Ampliar imagem: ${item.tag}`}
            >
              <div className="relative aspect-[4/3] w-full bg-zinc-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="78vw"
                  className="object-cover object-center transition duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-85 transition group-hover:opacity-100" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <Maximize2 className="size-3.5" aria-hidden />
                  Ampliar
                </span>
              </div>
              <span className="sr-only">{item.tag}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="relative md:hidden" aria-hidden>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-zinc-900/45 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-zinc-900/45 to-transparent" />
      </div>

      <ul className="hidden grid-cols-3 gap-3 lg:grid-cols-4 md:grid">
        {items.map((item, index) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 hover:-translate-y-0.5 hover:shadow-lg"
              aria-label={`Ampliar imagem: ${item.tag}`}
            >
              <div className="relative aspect-square w-full bg-zinc-200">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center transition duration-300 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-85 transition group-hover:opacity-100" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <Maximize2 className="size-3.5" aria-hidden />
                  Ampliar
                </span>
              </div>
              <span className="sr-only">{item.tag}</span>
            </button>
          </li>
        ))}
      </ul>

      {isOpen && activeItem ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada: ${activeItem.tag}`}
          onClick={closePreview}
        >
          <button
            type="button"
            onClick={closePreview}
            className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Fechar visualização"
          >
            <X className="size-5" aria-hidden />
          </button>

          <div
            className="relative mx-auto flex w-full max-w-5xl items-center gap-2 sm:gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => goToSibling(-1)}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="size-6" aria-hidden />
            </button>

            <figure className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-zinc-950/90">
              <div className="relative aspect-[16/10] w-full max-h-[80vh]">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-zinc-200">
                <span className="font-semibold text-white">{activeItem.tag}</span>
                <span className="mx-2 text-zinc-500">•</span>
                {activeIndex + 1} de {items.length}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => goToSibling(1)}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="size-6" aria-hidden />
            </button>
          </div>
        </div>
      ) : null}

      <p className="mt-3 text-center text-xs text-zinc-500 md:hidden">
        Deslize para o lado para ver mais fotos ou toque para ampliar.
      </p>
      <p className="mt-3 hidden text-center text-xs text-zinc-500 md:block">
        Clique em qualquer foto para ampliar e navegar entre as imagens.
      </p>
    </div>
  );
}
