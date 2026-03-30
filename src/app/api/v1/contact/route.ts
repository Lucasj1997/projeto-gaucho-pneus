import { sendContactEmail } from "@/lib/email/send-contact";
import { clientKeyFromRequest, rateLimitContact } from "@/lib/security/rate-limit";
import { contactSchema } from "@/lib/validations/contact";
import { NextResponse } from "next/server";

const MAX_BODY = 16_384;

export async function POST(req: Request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_APP_URL ?? "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const limited = rateLimitContact(
    `contact:${clientKeyFromRequest(req.headers)}`,
  );
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde e tente novamente.", code: "RATE_LIMIT" },
      {
        status: 429,
        headers: {
          ...corsHeaders,
          "Retry-After": String(limited.retryAfter),
        },
      },
    );
  }

  const raw = await req.text();
  if (raw.length > MAX_BODY) {
    return NextResponse.json(
      { error: "Corpo da requisição inválido", code: "PAYLOAD_TOO_LARGE" },
      { status: 413, headers: corsHeaders },
    );
  }

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { error: "JSON inválido", code: "BAD_JSON" },
      { status: 400, headers: corsHeaders },
    );
  }

  if (typeof json !== "object" || json === null || Array.isArray(json)) {
    return NextResponse.json(
      { error: "Payload inválido", code: "INVALID_BODY" },
      { status: 400, headers: corsHeaders },
    );
  }

  const body = json as Record<string, unknown>;
  const payload = {
    name: body.name,
    email: body.email,
    message: body.message,
    phone: typeof body.phone === "string" ? body.phone : "",
  };
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Dados inválidos",
        code: "VALIDATION",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400, headers: corsHeaders },
    );
  }

  const data = parsed.data;

  const hasResend =
    Boolean(process.env.RESEND_API_KEY?.trim()) &&
    Boolean(process.env.CONTACT_EMAIL_TO?.trim());
  const isDev = process.env.NODE_ENV === "development";

  if (!hasResend) {
    if (isDev) {
      console.info("[contact] DEV — e-mail não configurado. Dados:", data);
      return NextResponse.json(
        {
          ok: true,
          message:
            "Modo desenvolvimento: os dados foram registrados no terminal do servidor (Resend não configurado). Em produção configure RESEND_API_KEY e CONTACT_EMAIL_TO.",
        },
        { status: 200, headers: corsHeaders },
      );
    }
    return NextResponse.json(
      {
        error:
          "O envio pelo formulário não está disponível no momento. Use o WhatsApp ou o e-mail de contato indicado na página.",
        code: "EMAIL_NOT_CONFIGURED",
      },
      { status: 503, headers: corsHeaders },
    );
  }

  const sent = await sendContactEmail(data);
  if (!sent.ok) {
    return NextResponse.json(
      {
        error:
          "Não foi possível enviar sua mensagem agora. Tente pelo WhatsApp ou envie e-mail direto para contato.",
        code: "SEND_FAILED",
      },
      { status: 502, headers: corsHeaders },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message:
        "Mensagem enviada. Retornaremos pelo e-mail ou telefone informados em breve.",
    },
    { status: 200, headers: corsHeaders },
  );
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_APP_URL ?? "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
