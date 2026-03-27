import { WhatsappBrandIcon } from "@/components/whatsapp-float";
import { buttonVariants } from "@/components/ui/button-variants";
import { company } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import Link from "next/link";

export function MobileContactBar() {
  const contactNames = company.contacts.map((contact) => contact.name).join(" / ");

  return (
    <div className="fixed inset-x-0 bottom-0 z-[65] border-t border-zinc-200 bg-white/95 p-3 shadow-[0_-6px_24px_rgb(0,0,0,0.08)] backdrop-blur animate-in slide-in-from-bottom-4 fade-in duration-500 md:hidden">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-zinc-700">
          <span className="inline-flex size-2 rounded-full bg-[#25D366] animate-pulse" />
          Fale agora com {contactNames}
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl gap-2">
        <Link
          href={company.phoneHref}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-11 flex-1 gap-2 rounded-full border-zinc-300 bg-white",
          )}
        >
          <Phone className="size-4" aria-hidden />
          Ligar
        </Link>
        <Link
          href={company.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 flex-1 gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#20BD5A]",
          )}
        >
          <WhatsappBrandIcon className="size-4" />
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
