"use client";

import type { CampaignItem } from "@/lib/mock-data/campanhas";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef } from "react";

type Props = {
  items: CampaignItem[];
};

export function CampaignGallery({ items }: Props) {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scrollByCards = useCallback((direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-gallery-card]");
    const delta =
      card != null
        ? card.offsetWidth +
          (parseFloat(getComputedStyle(el).gap || "16") || 16)
        : Math.min(el.clientWidth * 0.88, 320);
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * delta, behavior: smooth ? "smooth" : "auto" });
  }, []);

  return (
    <div role="region" aria-roledescription="carrossel" aria-label="Galeria de imagens dos serviços">
      <div className="relative">
        <ul
          ref={scrollerRef}
          className={cn(
            "flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 pt-1",
            "scroll-px-4 [-webkit-overflow-scrolling:touch]",
            "[scrollbar-width:thin] [scrollbar-color:rgb(161_161_170)_transparent]",
          )}
        >
          {items.map((item) => (
            <li
              key={item.src}
              data-gallery-card
              className="w-[min(19rem,calc(100vw-3.5rem))] shrink-0 snap-center sm:w-72 md:w-80"
            >
              <figure className="group overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm transition hover:shadow-md">
                <div className="relative aspect-[3/4] w-full bg-zinc-200">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) min(19rem, calc(100vw - 3.5rem)), (max-width: 768px) 18rem, 20rem"
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="sr-only">{item.tag}</figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="pointer-events-auto flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-400/80 bg-zinc-900/85 text-white shadow-md backdrop-blur-sm transition hover:bg-zinc-800 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 sm:-ml-1"
            aria-label="Ver imagens anteriores"
          >
            <ChevronLeft className="size-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="pointer-events-auto flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-400/80 bg-zinc-900/85 text-white shadow-md backdrop-blur-sm transition hover:bg-zinc-800 focus-visible:outline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 sm:-mr-1"
            aria-label="Ver próximas imagens"
          >
            <ChevronRight className="size-6" aria-hidden />
          </button>
        </div>
      </div>

      <p className="mt-1 text-center text-xs text-zinc-500">
        Deslize para o lado ou use as setas para ver mais fotos.
      </p>
    </div>
  );
}
