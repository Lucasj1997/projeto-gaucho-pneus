import { buttonVariants } from "@/components/ui/button-variants";
import { whatsappQuickHref } from "@/lib/mock-data";
import { whatsappWithPrefill } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  /** Fundo escuro (seções zinc-800) ou claro (cards / fundo zinc-100). */
  variant?: "onDark" | "onLight";
  size?: "default" | "sm";
  className?: string;
  /** Em páginas sem âncora local (ex.: 404), use `/#formulario-contato`. */
  budgetHref?: string;
};

export function ConversionCtas({
  variant = "onDark",
  size = "default",
  className,
  budgetHref = "#formulario-contato",
}: Props) {
  const wa = whatsappWithPrefill(whatsappQuickHref);
  const isDark = variant === "onDark";
  const btnSize = size === "sm" ? "sm" : "lg";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Link
        href={budgetHref}
        className={cn(
          buttonVariants({ size: btnSize }),
          "rounded-full",
          isDark
            ? "bg-white text-black hover:bg-zinc-200"
            : "border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800",
        )}
      >
        Orçamento
      </Link>
      <Link
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ size: btnSize }),
          "rounded-full",
          isDark
            ? "bg-white text-black hover:bg-zinc-200"
            : "border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800",
        )}
      >
        WhatsApp
      </Link>
    </div>
  );
}
