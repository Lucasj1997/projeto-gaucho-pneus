import { ConversionCtas } from "@/components/conversion-ctas";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/mock-data";
import {
  PATH_SERVICOS_COLHEITADEIRA,
  PATH_SERVICOS_DUPLAGEM,
  PATH_SERVICOS_TRATOR,
} from "@/lib/routes";
import { getSiteUrl, seo } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = getSiteUrl();
const path = "/ajuda/como-ler-a-medida-do-pneu";

export const metadata: Metadata = {
  title: "Como ler a medida do pneu agrícola",
  description:
    "Entenda o que significam os números na lateral do pneu (radial e diagonal), para trator, colheitadeira e implementos — Gaúcho Pneus.",
  alternates: { canonical: `${siteUrl}${path}` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${siteUrl}${path}`,
    siteName: company.name,
    title: `Como ler a medida do pneu | ${company.name}`,
    description: seo.description,
  },
};

export default function AjudaMedidaPneuPage() {
  return (
    <>
      <SiteHeader />
      <article className="pt-below-site-header border-b border-zinc-200 bg-zinc-100 pb-16 text-zinc-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-medium text-zinc-500">Ajuda</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance">
            Como ler a medida do pneu na lateral
          </h1>
          <p className="mt-3 text-zinc-600">
            Guia rápido para anotar ou fotografar a informação que a equipe usa para orçamento e
            compatibilidade.
          </p>

          <div className="mt-10 space-y-8 text-zinc-700">
            <section>
              <h2 className="text-lg font-semibold text-zinc-900">Pneu radial (ex.: 420/85 R 30)</h2>
              <p className="mt-2 leading-relaxed">
                Em muitos pneus de trator e colheitadeira você verá três grupos principais, lidos de
                frente para o lado de fora do pneu:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 leading-relaxed">
                <li>
                  <strong className="text-zinc-900">420</strong> — largura do pneu em milímetros
                  (secção nominal).
                </li>
                <li>
                  <strong className="text-zinc-900">85</strong> — série ou perfil (altura da
                  lateral em % da largura).
                </li>
                <li>
                  <strong className="text-zinc-900">R</strong> — construção radial.
                </li>
                <li>
                  <strong className="text-zinc-900">30</strong> — diâmetro da roda em polegadas (aro).
                </li>
              </ul>
              <p className="mt-3 leading-relaxed">
                Variações como <strong>620/70 R 42</strong> seguem a mesma lógica: largura / perfil{" "}
                <strong>R</strong> aro.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900">
                Pneu diagonal ou flotação (ex.: 23.1-26)
              </h2>
              <p className="mt-2 leading-relaxed">
                Em medidas no padrão polegadas, a sequência costuma indicar largura nominal e aro,
                com traço entre elas (ex.: <strong>23.1-26</strong>, <strong>30.5L-32</strong>). A
                letra no meio pode indicar tipo de construção — em dúvida, envie foto da lateral
                inteira.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900">Carga, velocidade e DOT</h2>
              <p className="mt-2 leading-relaxed">
                Próximo à medida principal aparecem índices de carga e velocidade (ex.: números e
                letras como <strong>151 A8/B</strong>). Eles importam para segurança e homologação.
                Se possível, inclua também uma foto da faixa completa ou anote como está gravado.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-zinc-900">O que enviar no contato</h2>
              <p className="mt-2 leading-relaxed">
                Foto nítida da lateral do pneu (luz de dia), marca e modelo da máquina, e se troca
                um pneu só ou o conjunto. Isso evita retrabalho e agiliza o orçamento.
              </p>
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm">
              <p className="font-semibold text-zinc-900">Leia também no site</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href={PATH_SERVICOS_TRATOR}
                    className="text-zinc-800 underline underline-offset-2 hover:text-zinc-950"
                  >
                    Pneus para trator
                  </Link>
                </li>
                <li>
                  <Link
                    href={PATH_SERVICOS_COLHEITADEIRA}
                    className="text-zinc-800 underline underline-offset-2 hover:text-zinc-950"
                  >
                    Pneus para colheitadeira
                  </Link>
                </li>
                <li>
                  <Link
                    href={PATH_SERVICOS_DUPLAGEM}
                    className="text-zinc-800 underline underline-offset-2 hover:text-zinc-950"
                  >
                    Duplagem
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-10">
            <ConversionCtas variant="onLight" />
          </div>

          <p className="mt-10 text-sm text-zinc-600">
            <Link href="/" className="font-medium text-zinc-900 underline underline-offset-2">
              Voltar ao início
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
