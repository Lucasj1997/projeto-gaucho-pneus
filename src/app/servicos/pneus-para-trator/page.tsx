import { ConversionCtas } from "@/components/conversion-ctas";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/mock-data";
import {
  PATH_AJUDA_MEDIDA_PNEU,
  PATH_SERVICOS_COLHEITADEIRA,
  PATH_SERVICOS_DUPLAGEM,
} from "@/lib/routes";
import { getSiteUrl, seo } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = getSiteUrl();
const path = "/servicos/pneus-para-trator";

export const metadata: Metadata = {
  title: "Pneus para trator — tração e direção",
  description:
    "Pneus radiais e diagonais para trator: tração, direção e flotação. Medidas, marcas e orientação técnica na RS-463, Vila Lângaro — Gaúcho Pneus.",
  alternates: { canonical: `${siteUrl}${path}` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${siteUrl}${path}`,
    siteName: company.name,
    title: `Pneus para trator | ${company.name}`,
    description: seo.description,
  },
};

export default function ServicosTratorPage() {
  return (
    <>
      <SiteHeader />
      <article className="pt-below-site-header border-b border-zinc-200 bg-zinc-100 pb-16 text-zinc-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-medium text-zinc-500">Serviços</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance">
            Pneus para trator
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Tração, direção e linhas de flotação para operações de preparo, plantio e transporte —
            com indicação conforme <strong>máquina</strong>, <strong>lastro</strong> e{" "}
            <strong>tipo de solo</strong>.
          </p>

          <div className="mt-10 space-y-8 text-zinc-700">
            <section>
              <h2 className="text-lg font-semibold text-zinc-900">O que considerar no orçamento</h2>
              <p className="mt-2 leading-relaxed">
                O eixo traseiro costuma concentrar a tração; o dianteiro exige boa estabilidade em
                manobra e estrada. Informe marca e modelo do trator, medida atual (ou da roda) e se
                há implemento acoplado de forma permanente — isso muda carga por pneu e pressão
                recomendada.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-zinc-900">Marcas e disponibilidade</h2>
              <p className="mt-2 leading-relaxed">
                Trabalhamos com fabricantes de referência no agronegócio (Pirelli, Michelin, Mitas,
                Alliance e outras conforme projeto). A disponibilidade real depende do estoque do
                dia — confirme sempre com a equipe antes de deslocar.
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
