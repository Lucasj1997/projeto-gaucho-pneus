import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  const isDev = process.env.NODE_ENV !== "production";

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin",
  );
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );

  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains",
    );
  }

  const scriptSrc = isDev
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'";
  response.headers.set(
    "Content-Security-Policy",
    `default-src 'self'; ${scriptSrc}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; media-src 'self' https://videos.pexels.com; font-src 'self' data:; connect-src 'self'; frame-src 'self' https://www.google.com https://maps.google.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`,
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
