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

  return NextResponse.json(
    {
      ok: true,
      message: "Recebemos sua mensagem. Em breve retornamos o contato.",
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
