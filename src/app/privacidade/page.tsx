import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/mock-data";
import { getSiteUrl, seo } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Privacidade e dados pessoais",
  description:
    "Como a Gaúcho Pneus trata dados enviados pelo site e canais de contato. Informações mínimas em linha com a LGPD.",
  alternates: { canonical: `${siteUrl}/privacidade` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: `${siteUrl}/privacidade`,
    siteName: company.name,
    title: `Privacidade e dados | ${company.name}`,
    description: seo.description,
  },
};

export default function PrivacidadePage() {
  return (
    <>
      <SiteHeader />
      <article className="pt-below-site-header border-b border-zinc-200 bg-zinc-100 pb-16 text-zinc-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-medium text-zinc-500">Transparência</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Privacidade e dados pessoais
          </h1>
          <p className="mt-3 text-sm text-zinc-600">
            Última atualização: março de 2026 · Responsável: {company.name}
          </p>

          <div className="mt-10 space-y-8 text-zinc-700">
            <section aria-labelledby="p1">
              <h2 id="p1" className="text-lg font-semibold text-zinc-900">
                1. Quem somos
              </h2>
              <p>
                Este site é operado por <strong>{company.name}</strong>, com foco em pneus e
                rodas agrícolas. Nosso contato: {company.email}, telefones e WhatsApp divulgados
                na página inicial, endereço em {company.address}.
              </p>
            </section>

            <section aria-labelledby="p2">
              <h2 id="p2" className="text-lg font-semibold text-zinc-900">
                2. Quais dados coletamos pelo site
              </h2>
              <p className="mt-2 leading-relaxed">
                Quando você preenche o <strong>formulário de contato</strong>, podemos receber:
                nome, e-mail, telefone (opcional) e o texto da mensagem. Esses dados servem
                exclusivamente para responder pedidos de orçamento, dúvidas ou atendimento
                comercial.
              </p>
              <p>
                Ao usar o <strong>WhatsApp</strong> ou <strong>e-mail</strong>, aplicam-se também
                as políticas desses serviços (Meta / provedor de e-mail).
              </p>
            </section>

            <section aria-labelledby="p3">
              <h2 id="p3" className="text-lg font-semibold text-zinc-900">
                3. Base legal e finalidade (LGPD)
              </h2>
              <p>
                Tratamos os dados com base no seu <strong>consentimento</strong> ao enviar o
                formulário ou iniciar contato, e na <strong>execução de medidas pré-contratuais</strong>{" "}
                ou de <strong>contrato</strong>, quando houver negócio. Não vendemos dados a
                terceiros.
              </p>
            </section>

            <section aria-labelledby="p4">
              <h2 id="p4" className="text-lg font-semibold text-zinc-900">
                4. Armazenamento e segurança
              </h2>
              <p>
                Mensagens podem ser encaminhadas ao e-mail comercial da empresa via serviço de
                envio (por exemplo, Resend). Adotamos boas práticas no site (validação de
                dados, limite de envios por endereço IP), mas nenhum sistema é totalmente isento
                de risco, recomendando não enviar informações bancárias ou sensíveis pelo
                formulário.
              </p>
            </section>

            <section aria-labelledby="p5">
              <h2 id="p5" className="text-lg font-semibold text-zinc-900">
                5. Seus direitos
              </h2>
              <p>
                Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso,
                correção, anonimização, portabilidade ou eliminação de dados desnecessários,
                entre outros. Para isso, entre em contato pelo e-mail {company.email} ou pelos
                canais indicados no site, informando seu nome e a solicitação.
              </p>
            </section>

            <section aria-labelledby="p6">
              <h2 id="p6" className="text-lg font-semibold text-zinc-900">
                6. Cookies e navegação
              </h2>
              <p>
                Este site institucional não utiliza cookies de publicidade obrigatórios. Podem
                existir cookies técnicos do navegador ou da hospedagem para funcionamento básico.
                Se no futuro forem adicionadas ferramentas de métricas ou marketing, esta página
                será atualizada.
              </p>
            </section>

            <section aria-labelledby="p7">
              <h2 id="p7" className="text-lg font-semibold text-zinc-900">
                7. Alterações
              </h2>
              <p>
                Podemos atualizar este texto para refletir mudanças no site ou na lei. A data no
                topo indica a revisão vigente.
              </p>
            </section>
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
