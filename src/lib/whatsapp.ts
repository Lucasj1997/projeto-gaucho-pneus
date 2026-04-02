/** Mensagem padrão do CTA de orçamento no WhatsApp. */
export function buildWhatsappOrcamentoMessage(): string {
  return "Olá! Vim do site Gaúcho Pneus e quero orçamento.";
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
