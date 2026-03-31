"use client";

import { buttonVariants } from "@/components/ui/button-variants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsappBrandIcon } from "@/components/whatsapp-float";
import { company } from "@/lib/mock-data";
import { whatsappWithPrefill } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const SCROLL_SOLID_THRESHOLD_PX = 32;

function useNavContext() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links = useMemo(() => {
    if (isHome) {
      return [
        { href: "/", label: "Início" },
        { href: "#galeria", label: "Serviços" },
        { href: "#produtos", label: "Produtos" },
        { href: "#sobre", label: "Sobre" },
        { href: "#faq", label: "Dúvidas" },
        { href: "#contato", label: "Contato" },
      ] as const;
    }
    return [
      { href: "/", label: "Início" },
      { href: "/#galeria", label: "Serviços" },
      { href: "/#produtos", label: "Produtos" },
      { href: "/#sobre", label: "Sobre" },
      { href: "/#faq", label: "Dúvidas" },
      { href: "/#contato", label: "Contato" },
    ] as const;
  }, [isHome]);
  const formularioHref = isHome ? "#formulario-contato" : "/#formulario-contato";
  return { links, isHome, formularioHref };
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm9.25 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 22v-8h2.7l.6-3h-3.3V9.2c0-.9.3-1.6 1.7-1.6H17V5.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.8v3h2.5v8h3.2Z" />
    </svg>
  );
}

export function SiteHeader({ className }: { className?: string }) {
  const marcianoWa =
    company.contacts.find((contact) => contact.name === "Marciano")?.whatsappHref ??
    company.whatsappHref;
  const wa = whatsappWithPrefill(marcianoWa);
  const { links, isHome, formularioHref } = useNavContext();
  const [heroScrolled, setHeroScrolled] = useState(false);
  const headerSolid = !isHome || heroScrolled;

  useEffect(() => {
    if (!isHome) return;
    const update = () => {
      setHeroScrolled(window.scrollY > SCROLL_SOLID_THRESHOLD_PX);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isHome]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out",
        headerSolid
          ? "border-b border-white/10 bg-brand-logo-bg/92 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent shadow-none backdrop-blur-none",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:gap-8 sm:px-6 sm:py-5 md:gap-10 lg:gap-12">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-3 rounded-lg pr-2 outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:gap-5 sm:pr-4 md:gap-6 md:pr-8 lg:pr-12"
          aria-label={`${company.name} — início`}
        >
          <span
            className={cn(
              "inline-flex shrink-0 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.55)] ring-4 ring-white/95 transition group-hover:ring-white",
            )}
          >
            <span
              className={cn(
                "relative overflow-hidden rounded-full bg-black p-[9%] sm:p-[10%] md:p-[11%]",
                "size-[5.5rem] sm:size-32 md:size-36 lg:size-40",
              )}
            >
              <Image
                src="/logo-gaucho-pneus-horizontal.png"
                alt="Gaúcho Pneus — ícone de pneu agrícola e nome da marca em branco sobre fundo preto"
                fill
                priority
                sizes="(max-width: 640px) 5.5rem, (max-width: 768px) 8rem, (max-width: 1024px) 9rem, 10rem"
                className="object-contain object-center"
              />
            </span>
          </span>
          <span className="min-w-0 text-left leading-tight">
            <span className="block text-base font-bold tracking-tight text-white sm:text-xl md:text-2xl">
              {company.name}
            </span>
            <span className="mt-0.5 block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/95 sm:text-xs">
              {company.tagline}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-bold uppercase tracking-wide text-white md:ml-4 md:flex lg:ml-8 lg:gap-8 xl:ml-12 xl:gap-10"
          aria-label="Principal"
        >
          {links.map((l) => (
            <Link
              key={`${l.label}-${l.href}`}
              href={l.href}
              className="transition hover:text-white/85 hover:underline hover:decoration-white/60 hover:underline-offset-8"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={formularioHref}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "rounded-full border-0 px-6 py-2.5 text-xs font-bold uppercase tracking-wide shadow-lg",
            )}
          >
            Orçamento
          </Link>
          <Link
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "rounded-full border-0 px-5 py-2.5 text-xs font-bold uppercase tracking-wide shadow-lg",
            )}
          >
            WhatsApp
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={formularioHref}
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "rounded-full border-0 px-4 text-[0.65rem] font-bold uppercase tracking-wide",
            )}
          >
            Orçamento
          </Link>
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20",
              )}
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] border-zinc-600 bg-zinc-900 text-zinc-100"
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {links.map((l) => (
                  <Link
                    key={`${l.label}-${l.href}`}
                    href={l.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/10"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-4 flex gap-2 border-t border-white/10 pt-4">
                  <Link
                    href={company.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon" }),
                      "rounded-full border-white/30 bg-transparent text-white hover:bg-white/10",
                    )}
                    aria-label="Instagram da Gaúcho Pneus"
                  >
                    <InstagramIcon className="size-4" />
                  </Link>
                  <Link
                    href={company.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon" }),
                      "rounded-full border-white/30 bg-transparent text-white hover:bg-white/10",
                    )}
                    aria-label="Facebook da Gaúcho Pneus"
                  >
                    <FacebookIcon className="size-4" />
                  </Link>
                  <Link
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon" }),
                      "rounded-full border-white/30 bg-transparent text-white hover:bg-white/10",
                    )}
                    aria-label="WhatsApp da Gaúcho Pneus"
                  >
                    <WhatsappBrandIcon className="size-4" />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
