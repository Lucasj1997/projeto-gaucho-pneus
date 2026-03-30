import { getSiteUrl } from "@/lib/seo";
import { PATH_AJUDA_MEDIDA_PNEU } from "@/lib/routes";

/** Substitui placeholders nas respostas do FAQ (URLs absolutas para JSON-LD e página). */
export function resolveFaqAnswerText(text: string): string {
  const base = getSiteUrl();
  return text.replace(
    /\{\{AJUDA_MEDIDA_URL\}\}/g,
    `${base}${PATH_AJUDA_MEDIDA_PNEU}`,
  );
}
