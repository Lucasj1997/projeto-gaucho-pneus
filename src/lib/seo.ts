/** URL pública do site — usar em metadados, JSON-LD e sitemap. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  return raw.replace(/\/$/, "");
}

export const seo = {
  /**
   * Título para SERP (~50–60 caracteres visíveis): palavra-chave + local + marca.
   */
  title: "Pneus e rodas agrícolas em Vila Lângaro, RS | Gaúcho Pneus",
  /**
   * Meta description ~150–155 caracteres: serviço, local, público e CTA.
   */
  description:
    "Pneus, rodas e duplagem para trator, colheitadeira e implementos na RS-463, Vila Lângaro. Produtores e revendas. Orçamento pelo WhatsApp ou formulário.",
  keywords: [
    "pneus agrícolas",
    "rodas para trator",
    "duplagem agrícola",
    "pneus colheitadeira",
    "Vila Lângaro",
    "pneus RS",
    "Gaúcho Pneus",
    "implementos agrícolas",
    "orçamento pneu trator",
  ] as const,
  ogImagePath: "/images/hero-trator-john-deere.png",
} as const;
