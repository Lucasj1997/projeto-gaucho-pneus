import { CompanyMap } from "@/components/company-map";
import { ContactForm } from "@/components/contact-form";
import { ConversionCtas } from "@/components/conversion-ctas";
import { CampaignGallery } from "@/components/campaign-gallery";
import { FaqJsonLd } from "@/components/faq-json-ld";
import { SiteHeader } from "@/components/site-header";
import { WhatsappCommercialPhones } from "@/components/whatsapp-commercial-phones";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  campaignGallery,
  campaignHero,
} from "@/lib/mock-data/campanhas";
import {
  company,
  highlights,
  products,
  services,
  whatsappQuickHref,
} from "@/lib/mock-data";
import { resolveFaqAnswerText } from "@/lib/faq-resolve";
import { faqItems } from "@/lib/mock-data/faq";
import { whatsappWithPrefill } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Check, CircleGauge, Factory, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const waPrincipal = whatsappWithPrefill(whatsappQuickHref);

  return (
    <>
      <SiteHeader />
      <section
        className="relative flex min-h-[min(92vh,880px)] flex-col overflow-hidden border-b border-zinc-200 text-white"
        aria-label="Destaque principal"
      >
        <Image
          src={campaignHero.src}
          alt={campaignHero.alt}
          fill
          priority
          className="absolute inset-0 z-0 h-full w-full object-cover object-[50%_58%] sm:object-[50%_52%] md:object-[50%_48%] lg:object-[center_45%] brightness-[0.72] contrast-105 saturate-[0.95]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/45 to-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/15"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-end px-4 pb-12 pt-6 sm:px-6 md:pb-20 md:pt-12 lg:justify-center lg:pb-24">
          <p className="sr-only">{campaignHero.alt}</p>
          <div className="max-w-xl space-y-6 md:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Tração certa para o campo
            </h1>
            <p className="text-lg font-medium text-white/90 sm:text-xl">
              {company.coverageClaim}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#formulario-contato"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-white text-black hover:bg-zinc-200",
                )}
              >
                Orçamento
              </Link>
              <Link
                href={waPrincipal}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-white text-black hover:bg-zinc-200",
                )}
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="whatsapp-comercial"
        className="scroll-mt-24 border-b border-emerald-800/35 bg-gradient-to-b from-zinc-950 via-emerald-950/35 to-zinc-950 py-8 text-zinc-100 sm:py-10"
        aria-labelledby="whatsapp-comercial-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="whatsapp-comercial-heading"
            className="text-center text-xl font-bold tracking-tight text-white sm:text-2xl"
          >
            WhatsApp comercial — fale direto com a equipe
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-zinc-400">
            Dois canais para orçamento e dúvidas. Toque no número para abrir o WhatsApp.
          </p>
          <div className="mx-auto mt-6 max-w-3xl">
            <WhatsappCommercialPhones size="hero" />
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="tech-grain tech-divider-top scroll-mt-24 border-b border-zinc-700 bg-brand-logo-bg py-16 text-zinc-100"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl reveal-on-scroll">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Alguns de nossos serviços
            </h2>
            <p className="mt-2 text-zinc-300">
              Soluções em pneus, rodas e duplagem para o campo, com atendimento
              técnico para indicar a configuração certa para cada operação.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, idx) => {
              const icons = [CircleGauge, Wrench, ShieldCheck, Factory] as const;
              const ServiceIcon = icons[idx % icons.length];

              return (
                <article
                  key={service.title}
                  className="reveal-on-scroll rounded-2xl border border-zinc-600 bg-zinc-700/80 p-6 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-white/20"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex rounded-xl bg-zinc-100 p-2 text-zinc-900">
                      <ServiceIcon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{service.body}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-10">
            <CampaignGallery items={campaignGallery} />
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-zinc-600 pt-10 reveal-on-scroll sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-300">
              Pronto para cotar medida e máquina?
            </p>
            <ConversionCtas variant="onDark" className="sm:justify-end" />
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="products-texture tech-divider-top border-y border-zinc-300 py-16 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="reveal-on-scroll flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Produtos</h2>
              <p className="mt-2 text-zinc-600">
                Medidas e marcas de referência no agronegócio. Disponibilidade e
                projeto sob consulta com a equipe.
              </p>
            </div>
            <ConversionCtas variant="onLight" className="md:justify-end" />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Card className="reveal-on-scroll border-zinc-300 bg-zinc-50 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-zinc-900/10" key={p.id}>
                <CardHeader className="pb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {p.tag}
                  </p>
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0 text-sm text-zinc-700">
                  <figure className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={p.imagemExemplo.src}
                        alt={p.imagemExemplo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="px-3 py-2 text-xs text-zinc-500">
                      Imagem ilustrativa de medida/modelo.
                    </figcaption>
                  </figure>
                  <div>
                    <p className="font-semibold text-zinc-900">Medidas em destaque</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {p.medidasExemplo.map((medida) => (
                        <span
                          key={medida}
                          className="rounded-full border border-zinc-300 bg-white px-2.5 py-1 text-xs font-medium text-zinc-800"
                        >
                          {medida}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">Medidas (referência)</p>
                    <p className="mt-0.5 leading-snug">{p.medidasReferencia}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">Marcas / linhas</p>
                    <p className="mt-0.5 leading-snug">{p.marcas}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-3 border-t border-zinc-200 pt-4">
                  <ConversionCtas variant="onLight" size="sm" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="tech-grain tech-divider-top border-y border-zinc-600 bg-brand-logo-bg py-16 text-zinc-100 scroll-mt-24"
        aria-labelledby="faq-heading"
      >
        <FaqJsonLd />
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-white">
            Perguntas frequentes
          </h2>
          <p className="mt-2 text-zinc-300">
            Respostas diretas sobre produtos, orçamento, atendimento e localização — pensado para
            quem busca pneus e rodas agrícolas na região.
          </p>
          <dl className="mt-10 space-y-8">
            {faqItems.map((item) => (
              <div key={item.question} className="reveal-on-scroll border-b border-zinc-600 pb-8 last:border-b-0">
                <dt className="text-lg font-semibold text-white">{item.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {resolveFaqAnswerText(item.answer)}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-col gap-3 border-t border-zinc-600 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-300">Não encontrou o que precisa?</p>
            <ConversionCtas variant="onDark" className="sm:justify-end" />
          </div>
        </div>
      </section>

      <section id="contato" className="tech-grain tech-divider-top border-t border-zinc-600 bg-brand-logo-bg py-16 text-zinc-100 scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="reveal-on-scroll rounded-2xl border border-zinc-500 bg-zinc-700/70 p-6 sm:p-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Contato</h2>
            <p className="mt-2 text-zinc-300">
              Envie medida, máquina e quantidade pelo formulário — a mensagem é
              encaminhada por e-mail à equipe quando o envio estiver ativo no
              servidor. Para resposta imediata, use o WhatsApp ou ligue.
            </p>
            <div className="mt-6">
              <ConversionCtas variant="onDark" />
            </div>
            <ul className="mt-6 space-y-3 text-sm text-zinc-200">
              <li className="leading-snug">
                <span className="font-medium">Localização: </span>
                <span className="block sm:inline">{company.address}</span>
                <span className="mt-1 block">
                  <Link
                    className="font-medium text-zinc-100 underline underline-offset-2"
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir no Google Maps
                  </Link>
                </span>
              </li>
              <li>
                <span className="font-medium">E-mail: </span>
                <Link className="underline underline-offset-2" href={`mailto:${company.email}`}>
                  {company.email}
                </Link>
              </li>
              <li>
                <span className="font-medium">WhatsApp comercial:</span>
                <div className="mt-3">
                  <WhatsappCommercialPhones />
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <CompanyMap />
            </div>
          </div>
          <div className="reveal-on-scroll flex flex-col gap-10 scroll-mt-28">
            <div id="formulario-contato" className="scroll-mt-28">
              <ContactForm />
            </div>
            <aside
              id="sobre"
              className="scroll-mt-28 border-t border-zinc-600 pt-10"
              aria-labelledby="sobre-heading"
            >
              <h2
                id="sobre-heading"
                className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                Sobre a Gaúcho Pneus
              </h2>
              <p className="mt-3 text-lg font-semibold text-zinc-100 sm:text-xl">
                {company.coverageClaim}
              </p>
              <p className="mt-4 text-zinc-300">
                A {company.name} reúne experiência em pneus e rodas para o agronegócio, com
                atendimento consultivo para produtores, cooperativas e oficinas. Nossa prioridade é
                manter suas máquinas rodando com segurança.
              </p>
              <ul className="mt-6 space-y-3">
                {highlights.map((h) => (
                  <li key={`contato-${h}`} className="flex gap-2 text-zinc-200">
                    <Check className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 border-t border-zinc-600 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-zinc-300">Solicite orçamento ou fale pelo WhatsApp.</p>
                <ConversionCtas variant="onDark" className="sm:justify-end" />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
