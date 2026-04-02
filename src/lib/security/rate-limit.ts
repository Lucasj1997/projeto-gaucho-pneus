import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type Bucket = { count: number; resetAt: number };
type RateLimitResult = { ok: true } | { ok: false; retryAfter: number };

const store = new Map<string, Bucket>();

const WINDOW_MS = 60_000;
const MAX = 10;
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL?.trim();
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

const upstashLimiter =
  UPSTASH_URL && UPSTASH_TOKEN
    ? new Ratelimit({
        redis: new Redis({ url: UPSTASH_URL, token: UPSTASH_TOKEN }),
        limiter: Ratelimit.slidingWindow(MAX, "60 s"),
        analytics: true,
        prefix: "rate-limit:contact",
      })
    : null;

function rateLimitLocal(key: string): RateLimitResult {
  const now = Date.now();
  const bucket = store.get(key);

  if (!bucket || now > bucket.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (bucket.count >= MAX) {
    const retryAfter = Math.ceil((bucket.resetAt - now) / 1000);
    return { ok: false, retryAfter };
  }

  bucket.count += 1;
  return { ok: true };
}

export async function rateLimitContact(key: string): Promise<RateLimitResult> {
  if (!upstashLimiter) return rateLimitLocal(key);

  try {
    const result = await upstashLimiter.limit(key);
    if (result.success) return { ok: true };

    const retryAfter = Math.max(1, Math.ceil((result.reset - Date.now()) / 1000));
    return { ok: false, retryAfter };
  } catch {
    // Fallback defensivo caso Upstash esteja indisponível.
    return rateLimitLocal(key);
  }
}

export function clientKeyFromRequest(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}
