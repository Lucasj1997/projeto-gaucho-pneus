import { ConversionCtas } from "@/components/conversion-ctas";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/mock-data";
import {
  PATH_AJUDA_MEDIDA_PNEU,
  PATH_SERVICOS_DUPLAGEM,
  PATH_SERVICOS_TRATOR,
} from "@/lib/routes";
import { getSiteUrl, seo } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = getSiteUrl();
const path = "/servicos/pneus-para-colheitadeira";

export const metadata: Metadata = {
  title: "Pneus para colheitadeira",
  description:
    "Pneus de alta capacidade para colheitadeira: tração em terreiro, fileira e transporte. Orçamento e medidas na Gaúcho Pneus, Vila Lângaro RS.",
  alternates: { canonical: `${siteUrl}${path}` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${siteUrl}${path}`,
    siteName: company.name,
    title: `Pneus para colheitadeira | ${company.name}`,
    description: seo.description,
  },
};

export default function ServicosColheitadeiraPage() {
  return (
    <>
      <SiteHeader />
      <article className="pt-below-site-header border-b border-zinc-200 bg-zinc-100 pb-16 text-zinc-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-medium text-zinc-500">Serviços</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance">
            Pneus para colheitadeira
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Soluções para <strong>alta carga</strong>, desempenho em terreiro e deslocamento entre
            talhões — com atenção ao conjunto por eixo e ao tipo de colheita.
          </p>

          <div className="mt-10 space-y-8 text-zinc-700">
            <section>
              <h2 className="text-lg font-semibold text-zinc-900">Compatibilidade por máquina</h2>
              <p className="mt-2 leading-relaxed">
                John Deere, CNH, AGCO e demais linhas têm recomendações de medida e índice de carga.
                Ao pedir orçamento, informe modelo e ano da máquina, medida gravada na lateral do
                pneu e, se possível, fotos da placa de identificação e do pneu atual.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-zinc-900">Linhas e estoque</h2>
              <p className="mt-2 leading-relaxed">
                Atendemos marcas como Pirelli, Michelin, Mitas, Trelleborg e equivalentes para o
                segmento agrícola, conforme disponibilidade. Cada safra pode alterar prazos —
                consulte a equipe para pronta entrega ou encomenda.
              </p>
            </section>
            <section className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm">
              <p className="font-semibold text-zinc-900">Também pode interessar</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href={PATH_AJUDA_MEDIDA_PNEU}
                    className="text-zinc-800 underline underline-offset-2 hover:text-zinc-950"
                  >
                    Como ler a medida do pneu
                  </Link>
                </li>
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
