import { Resend } from "resend";

export type ContactLead = {
  name: string;
  email: string;
  message: string;
  phone?: string;
};

/**
 * Envia o lead por e-mail (Resend). Exige `RESEND_API_KEY` e `CONTACT_EMAIL_TO`.
 * `RESEND_FROM_EMAIL` opcional (remetente verificado no Resend).
 */
export async function sendContactEmail(
  data: ContactLead,
): Promise<{ ok: true } | { ok: false; reason: "not_configured" | "send_failed" }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_EMAIL_TO?.trim();
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ??
    "Gaúcho Pneus <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return { ok: false, reason: "not_configured" };
  }

  const phoneBlock = data.phone ? `\nTelefone / WhatsApp: ${data.phone}` : "";
  const text = `Contato pelo site\n\nNome: ${data.name}\nE-mail: ${data.email}${phoneBlock}\n\nMensagem:\n${data.message}`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `[Site Gaúcho Pneus] Mensagem de ${data.name}`,
      text,
    });

    if (error) {
      console.error("[contact] Resend:", error);
      return { ok: false, reason: "send_failed" };
    }
    return { ok: true };
  } catch (e) {
    console.error("[contact] envio:", e);
    return { ok: false, reason: "send_failed" };
  }
}
