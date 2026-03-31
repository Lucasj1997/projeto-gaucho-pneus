import { WhatsappBrandIcon } from "@/components/whatsapp-float";
import { buttonVariants } from "@/components/ui/button-variants";
import { company } from "@/lib/mock-data";
import { whatsappWithPrefill } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function MobileContactBar() {
  const contactNames = company.contacts.map((contact) => contact.name).join(" / ");
  const marcianoWa =
    company.contacts.find((contact) => contact.name === "Marciano")?.whatsappHref ??
    company.whatsappHref;
  const wa = whatsappWithPrefill(marcianoWa);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[65] border-t-2 border-zinc-300 bg-white shadow-[0_-6px_24px_rgb(0,0,0,0.12)] animate-in slide-in-from-bottom-4 fade-in duration-500 md:hidden"
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
        paddingLeft: "max(0.75rem, env(safe-area-inset-left, 0px))",
        paddingRight: "max(0.75rem, env(safe-area-inset-right, 0px))",
        paddingTop: "0.75rem",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2.5 flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-zinc-900">
          <span
            className="inline-flex size-2.5 shrink-0 rounded-full bg-[#128C7E] ring-2 ring-[#25D366]/40 animate-pulse"
            aria-hidden
          />
          Fale agora com {contactNames}
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl gap-3">
        <Link
          href="#formulario-contato"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-zinc-800 bg-white px-4 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 active:bg-zinc-200",
          )}
        >
          Orçamento
        </Link>
        <Link
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-zinc-800 bg-white px-4 text-sm font-semibold text-zinc-950 hover:bg-zinc-100 active:bg-zinc-200",
          )}
        >
          <WhatsappBrandIcon className="size-5 shrink-0 text-zinc-950" aria-hidden />
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
