type Bucket = { count: number; resetAt: number };

const store = new Map<string, Bucket>();

const WINDOW_MS = 60_000;
const MAX = 10;

export function rateLimitContact(
  key: string,
): { ok: true } | { ok: false; retryAfter: number } {
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

export function clientKeyFromRequest(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}
