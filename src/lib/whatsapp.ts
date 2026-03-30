import { PATH_AJUDA_MEDIDA_PNEU } from "@/lib/routes";
import { getSiteUrl } from "@/lib/seo";

/** Mensagem padrão com link para o guia de medida (URL absoluta). */
export function buildWhatsappOrcamentoMessage(): string {
  const guia = `${getSiteUrl()}${PATH_AJUDA_MEDIDA_PNEU}`;
  return `Olá! Vim do site Gaúcho Pneus e quero orçamento.\n\nComo ler a medida do pneu: ${guia}`;
}

/** Anexa `?text=` à URL `https://wa.me/...` de forma segura. */
export function whatsappWithPrefill(
  baseWaMeUrl: string,
  message: string = buildWhatsappOrcamentoMessage(),
): string {
  try {
    const u = new URL(baseWaMeUrl);
    u.searchParams.set("text", message);
    return u.toString();
  } catch {
    return baseWaMeUrl;
  }
}
