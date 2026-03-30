import { ConversionCtas } from "@/components/conversion-ctas";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <section
      className="pt-below-site-header flex min-h-[70vh] flex-col items-center justify-center bg-zinc-100 px-4 pb-16 text-center"
      aria-labelledby="not-found-title"
    >
      <p className="text-sm font-semibold uppercase tracking-wider text-zinc-600">
        Erro 404
      </p>
      <h1
        id="not-found-title"
        className="mt-2 text-2xl font-bold text-zinc-950 sm:text-3xl"
      >
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-base text-zinc-700">
        O endereço pode ter sido digitado errado ou a página mudou. Peça orçamento
        pelo site ou fale no WhatsApp.
      </p>
      <ConversionCtas
        variant="onLight"
        className="mt-8 justify-center"
        budgetHref="/#formulario-contato"
      />
      <Link
        href="/"
        className="mt-8 min-h-12 min-w-[12rem] inline-flex items-center justify-center rounded-full border-2 border-zinc-800 bg-white px-6 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
      >
        Voltar ao início
      </Link>
    </section>
    </>
  );
}
