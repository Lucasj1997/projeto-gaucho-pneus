"use client";

import { heroBackgroundVideo } from "@/lib/mock-data/hero-media";
import { useEffect, useRef } from "react";

type Props = {
  posterSrc: string;
  /** favorece a parte inferior do quadro (rodas / solo) */
  objectPositionClass?: string;
};

export function HeroVideoBackground({
  posterSrc,
  objectPositionClass = "object-[center_72%] sm:object-[center_68%]",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      if (media.matches) {
        video.pause();
        video.removeAttribute("autoplay");
        return;
      }
      video.setAttribute("autoplay", "");
      void video.play().catch(() => {
        /* autoplay bloqueado — poster permanece visível */
      });
    };

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      aria-hidden
      className={`absolute inset-0 z-0 h-full w-full ${objectPositionClass} object-cover`}
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      poster={posterSrc}
    >
      <source src={heroBackgroundVideo.src} type={heroBackgroundVideo.type} />
    </video>
  );
}
