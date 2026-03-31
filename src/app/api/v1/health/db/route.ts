import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const TOKEN_HEADER = "x-health-token";

function unauthorized() {
  return NextResponse.json(
    { ok: false, code: "UNAUTHORIZED", message: "Nao autorizado" },
    { status: 401 },
  );
}

function serviceUnavailable(message: string, extra?: Record<string, unknown>) {
  return NextResponse.json(
    { ok: false, code: "DB_UNAVAILABLE", message, ...extra },
    { status: 503 },
  );
}

export async function GET(req: Request) {
  const isProd = process.env.NODE_ENV === "production";
  const expectedToken = process.env.HEALTHCHECK_TOKEN?.trim();
  const sentToken = req.headers.get(TOKEN_HEADER)?.trim();

  // Hardening: em producao, o health-check exige token obrigatorio.
  if (isProd && !expectedToken) {
    return NextResponse.json(
      {
        ok: false,
        code: "MISCONFIGURATION",
        message: "HEALTHCHECK_TOKEN nao configurado em producao",
      },
      { status: 503 },
    );
  }

  if (expectedToken && (!sentToken || sentToken !== expectedToken)) {
    return unauthorized();
  }

  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) {
    return serviceUnavailable("DATABASE_URL nao configurada");
  }

  const startedAt = Date.now();

  try {
    const sql = neon(databaseUrl);
    await sql`SELECT 1 AS ok`;

    return NextResponse.json({
      ok: true,
      service: "database",
      latencyMs: Date.now() - startedAt,
    });
  } catch (error) {
    const isDev = process.env.NODE_ENV !== "production";

    return serviceUnavailable(
      "Falha ao conectar no banco",
      isDev && error instanceof Error ? { error: error.message } : undefined,
    );
  }
}
