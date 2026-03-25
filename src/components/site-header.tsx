import { BrandLogo } from "@/components/brand-logo";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { company } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#produtos", label: "Produtos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-zinc-950" aria-label={`${company.name} — início`}>
          <BrandLogo className="scale-90 sm:scale-100" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-800 transition hover:text-zinc-950"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({}),
              "rounded-full bg-black text-white hover:bg-zinc-900",
            )}
          >
            WhatsApp
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "rounded-full",
              )}
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-3" aria-label="Mobile">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2 text-base font-medium text-zinc-900 hover:bg-zinc-100"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({}),
                    "mt-2 rounded-full bg-black text-white",
                  )}
                >
                  WhatsApp
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
