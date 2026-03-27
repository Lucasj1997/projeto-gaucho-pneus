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
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#galeria", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

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

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-600 bg-zinc-800 text-zinc-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-800"
          aria-label={`${company.name} — início`}
        >
          <span className="flex h-28 w-28 shrink-0 overflow-hidden rounded-full bg-transparent shadow-sm ring-1 ring-zinc-500 sm:h-32 sm:w-32 md:h-36 md:w-36">
            <Image
              src="/logo-gaucho-pneus-horizontal.png"
              alt="Gaúcho Pneus e Rodas Agrícolas — logotipo com ícone de pneu agrícola"
              width={1024}
              height={1024}
              priority
              className="h-full w-full object-contain"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-200 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={company.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "rounded-full border-zinc-500 bg-zinc-700 text-zinc-100 hover:bg-zinc-600 hover:text-white",
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
              "rounded-full border-zinc-500 bg-zinc-700 text-zinc-100 hover:bg-zinc-600 hover:text-white",
            )}
            aria-label="Facebook da Gaúcho Pneus"
          >
            <FacebookIcon className="size-4" />
          </Link>
          <Link
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "rounded-full border-zinc-500 bg-zinc-700 text-zinc-100 hover:bg-zinc-600 hover:text-white",
            )}
            aria-label="WhatsApp da Gaúcho Pneus"
          >
            <WhatsappBrandIcon className="size-4" />
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "rounded-full border-zinc-500 bg-zinc-700 text-zinc-100 hover:bg-zinc-600 hover:text-white",
              )}
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] border-zinc-600 bg-zinc-800 text-zinc-100">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-3" aria-label="Mobile">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2 text-base font-medium text-zinc-100 hover:bg-zinc-600"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-1 flex gap-2">
                  <Link
                    href={company.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon" }),
                      "rounded-full border-zinc-500 bg-zinc-700 text-zinc-100 hover:bg-zinc-600 hover:text-white",
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
                      "rounded-full border-zinc-500 bg-zinc-700 text-zinc-100 hover:bg-zinc-600 hover:text-white",
                    )}
                    aria-label="Facebook da Gaúcho Pneus"
                  >
                    <FacebookIcon className="size-4" />
                  </Link>
                  <Link
                    href={company.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon" }),
                      "rounded-full border-zinc-500 bg-zinc-700 text-zinc-100 hover:bg-zinc-600 hover:text-white",
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
