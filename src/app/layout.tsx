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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: "%s | Gaúcho Pneus",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: "/" },
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
