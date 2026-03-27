import { MobileContactBar } from "@/components/mobile-contact-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFloat } from "@/components/whatsapp-float";
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

export const metadata: Metadata = {
  title: {
    default: "Gaúcho Pneus — Pneus e rodas agrícolas",
    template: "%s | Gaúcho Pneus",
  },
  description:
    "Pneus e rodas para trator, colheitadeira e implementos. Vila Lângaro — RS (RS-463, CEP 99955-000). Atendimento a produtores e revendas.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-100 pb-20 text-zinc-950 md:pb-0">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsappFloat />
        <MobileContactBar />
      </body>
    </html>
  );
}
