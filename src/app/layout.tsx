import { MobileContactBar } from "@/components/mobile-contact-bar";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { company } from "@/lib/mock-data";
import { getSiteUrl, seo } from "@/lib/seo";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

/** Remove prefixo `content=` e aspas se o usuário colar o trecho errado da instrução do Google. */
function normalizeGoogleSiteVerificationToken(raw: string): string {
  let v = raw.trim();
  if (v.toLowerCase().startsWith("content=")) {
    v = v.slice("content=".length).trim();
  }
  if (
    (v.startsWith('"') && v.endsWith('"')) ||
    (v.startsWith("'") && v.endsWith("'"))
  ) {
    v = v.slice(1, -1).trim();
  }
  return v;
}

/** Token do Search Console — aceita os dois nomes usados na Vercel. */
function getGoogleSiteVerification(): string | undefined {
  const a = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const b = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  const raw = a || b;
  if (!raw) return undefined;
  const normalized = normalizeGoogleSiteVerificationToken(raw);
  return normalized || undefined;
}

const googleSiteVerification = getGoogleSiteVerification();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: "%s | Gaúcho Pneus",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon-gaucho-v2.png", type: "image/png" }],
    shortcut: ["/favicon-gaucho-v2.png"],
    apple: [{ url: "/favicon-gaucho-v2.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: company.name,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Trator John Deere em operação ao entardecer — pneus e máquinas agrícolas, Gaúcho Pneus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  category: "business",
  /** Google Search Console — no App Router, use `metadata.verification` (head manual no layout pode não ir ao HTML). */
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  other: {
    googlebot: "index, follow",
    bingbot: "index, follow",
    "ai-content-type": "commercial",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth scroll-pt-36 antialiased md:scroll-pt-44 lg:scroll-pt-52`}
    >
      <body className="min-h-full flex flex-col bg-brand-logo-bg pb-28 text-zinc-100 md:pb-0">
        <SeoJsonLd />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsappFloat />
        <MobileContactBar />
      </body>
    </html>
  );
}
