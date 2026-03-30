import { ConversionCtas } from "@/components/conversion-ctas";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/mock-data";
import {
  PATH_AJUDA_MEDIDA_PNEU,
  PATH_SERVICOS_COLHEITADEIRA,
  PATH_SERVICOS_TRATOR,
} from "@/lib/routes";
import { getSiteUrl, seo } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = getSiteUrl();
const path = "/servicos/duplagem";

export const metadata: Metadata = {
  title: "Duplagem de pneus agrícolas",
  description:
    "Duplagem traseira e dianteira: distribuição de peso, espaçadores e montagem com orientação técnica — Gaúcho Pneus, Vila Lângaro RS.",
  alternates: { canonical: `${siteUrl}${path}` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${siteUrl}${path}`,
    siteName: company.name,
    title: `Duplagem | ${company.name}`,
    description: seo.description,
  },
};

export default function ServicosDuplagemPage() {
  return (
    <>
      <SiteHeader />
      <article className="pt-below-site-header border-b border-zinc-200 bg-zinc-100 pb-16 text-zinc-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-medium text-zinc-500">Serviços</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance">
            Duplagem agrícola
          </h1>
          <p className="mt-3 text-lg text-zinc-700">
            Conjuntos duplos para <strong>maior área de contato</strong> e melhor distribuição de
            peso — com projeto alinhado ao eixo, normas de uso e segurança no campo.
          </p>

          <div className="mt-10 space-y-8 text-zinc-700">
            <section>
              <h2 className="text-lg font-semibold text-zinc-900">Quando entra duplagem</h2>
              <p className="mt-2 leading-relaxed">
                A duplagem é indicada conforme tipo de operação, solo e capacidade do eixo. A
                equipe avalia medida do pneu, bitola, espaçadores e torque para evitar sobrecarga e
                desgaste irregular.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-zinc-900">Montagem e componentes</h2>
              <p className="mt-2 leading-relaxed">
                Trabalhamos com espaçadores, parafusos e acessórios conforme especificação técnica
                e normas aplicáveis. Projetos sob medida exigem dados da máquina e, em muitos casos,
                inspeção presencial ou fotos detalhadas.
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
                    href={PATH_SERVICOS_COLHEITADEIRA}
                    className="text-zinc-800 underline underline-offset-2 hover:text-zinc-950"
                  >
                    Pneus para colheitadeira
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
