import { company } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { whatsappWithPrefill } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

type Props = {
  className?: string;
  /** `hero` = números maiores (faixa no topo da página). */
  size?: "default" | "hero";
};

export function WhatsappCommercialPhones({ className, size = "default" }: Props) {
  const numClass =
    size === "hero"
      ? "text-center text-2xl font-bold tracking-tight text-[#25D366] underline decoration-2 underline-offset-[6px] transition-colors hover:text-[#6ee7a8] sm:text-right sm:text-3xl"
      : "text-center text-xl font-bold tracking-tight text-[#25D366] underline decoration-2 underline-offset-[6px] transition-colors hover:text-[#6ee7a8] sm:text-right sm:text-2xl";

  return (
    <div
      className={cn(
        "space-y-3 rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/55 via-zinc-900/70 to-zinc-950/90 p-4 shadow-[0_8px_30px_-8px_rgba(16,185,129,0.25)] ring-1 ring-emerald-400/15 sm:p-5",
        className,
      )}
      role="region"
      aria-label="Números de WhatsApp comercial"
    >
      {company.contacts.map((contact) => (
        <div
          key={contact.phoneDisplay}
          className="flex flex-col gap-2 rounded-xl border border-zinc-600/50 bg-zinc-950/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-zinc-200 sm:text-base">
            <MessageCircle className="size-5 shrink-0 text-[#25D366]" aria-hidden />
            {contact.name}
          </span>
          <Link
            className={numClass}
            href={whatsappWithPrefill(contact.whatsappHref)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.phoneDisplay}
          </Link>
        </div>
      ))}
    </div>
  );
}
