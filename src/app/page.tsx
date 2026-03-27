import { CompanyMap } from "@/components/company-map";
import { ContactForm } from "@/components/contact-form";
import { CampaignGallery } from "@/components/campaign-gallery";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardDescription,
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
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, CircleGauge, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const flowSteps = [
    {
      step: "01",
      title: "Recebimento técnico",
      body: "Coletamos medida, máquina e operação para orientar a melhor configuração.",
    },
    {
      step: "02",
      title: "Validação da aplicação",
      body: "Conferimos compatibilidade por eixo, carga e tipo de terreno.",
    },
    {
      step: "03",
      title: "Proposta e atendimento",
      body: "Retornamos com disponibilidade, opções e apoio comercial no WhatsApp.",
    },
  ] as const;

  return (
    <>
      <section
        className="relative min-h-[min(92vh,880px)] overflow-hidden border-b border-zinc-200 text-white"
        aria-label="Destaque principal"
      >
        <Image
          src="/images/hero-john-deere-fundo.jpg"
          alt={campaignHero.alt}
          fill
          priority
          className="absolute inset-0 z-0 h-full w-full object-cover object-[center_56%] md:object-center brightness-[0.72] contrast-110 saturate-[0.92]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/45 to-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/15"
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid min-h-[min(92vh,880px)] max-w-6xl gap-8 px-4 pb-12 pt-28 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:pb-20 md:pt-24 lg:items-center">
          <p className="sr-only">{campaignHero.alt}</p>
          <div className="max-w-xl space-y-4 md:max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              {company.tagline}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Tração certa para o campo
            </h1>
            <p className="text-lg text-white/90">
              Pneus, rodas e duplagem com orientação técnica.
            </p>
            <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-white/90">
              <li className="rounded-full border border-white/35 bg-black/25 px-3 py-1">
                Atendimento regional
              </li>
              <li className="rounded-full border border-white/35 bg-black/25 px-3 py-1">
                Revendas e produtores
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="#contato"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full bg-white text-black hover:bg-zinc-200",
                )}
              >
                Solicitar orçamento
              </Link>
              <Link
                href={company.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full border-white/45 bg-black/20 text-white backdrop-blur-sm hover:bg-white/15",
                )}
              >
                Falar no WhatsApp
              </Link>
            </div>
            <p className="pt-2 text-xs text-white/75 md:max-w-md">
              Resposta comercial via WhatsApp.
            </p>
          </div>
          <aside className="hidden w-full max-w-xs space-y-3 rounded-2xl border border-white/25 bg-black/45 p-4 text-white/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Painel de operação
            </p>
            <div className="space-y-2 text-sm">
              <div className="rounded-xl border border-white/20 bg-white/5 p-3">
                <p className="text-[0.7rem] uppercase tracking-wider text-white/70">Cobertura</p>
                <p className="mt-1 text-base font-semibold">Atendimento regional</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-3">
                <p className="text-[0.7rem] uppercase tracking-wider text-white/70">Especialidade</p>
                <p className="mt-1 text-base font-semibold">Pneus, rodas e duplagem</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-3">
                <p className="text-[0.7rem] uppercase tracking-wider text-white/70">Canal rápido</p>
                <p className="mt-1 text-base font-semibold">WhatsApp comercial</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="galeria"
        className="tech-grain tech-divider-top scroll-mt-24 border-b border-zinc-700 bg-zinc-800 py-16 text-zinc-100"
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const icons = [CircleGauge, Wrench, ShieldCheck] as const;
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
        </div>
      </section>

      <section className="tech-grain tech-divider-top border-b border-zinc-600 bg-zinc-800 py-16 text-zinc-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl reveal-on-scroll">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Fluxo de atendimento
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Como funciona</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {flowSteps.map((flowStep, index) => (
              <article
                key={flowStep.step}
                className="reveal-on-scroll relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Etapa {flowStep.step}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{flowStep.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{flowStep.body}</p>
                {index < flowSteps.length - 1 ? (
                  <ArrowRight
                    className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 text-zinc-500 md:block"
                    aria-hidden
                  />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="tech-divider-top border-y border-zinc-300 bg-zinc-100 py-16 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="reveal-on-scroll flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Produtos</h2>
              <p className="mt-2 text-zinc-600">
                Referências de medidas e marcas mais comuns no agronegócio. A
                disponibilidade real depende do estoque do dia — confirme com a
                equipe antes de deslocar.
              </p>
            </div>
            <Link
              href="#contato"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
            >
              Consulte estoque
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Card className="reveal-on-scroll border-zinc-300 bg-zinc-50 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-zinc-900/10" key={p.id}>
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    {p.tag}
                  </p>
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                  <CardDescription className="text-base text-zinc-600">
                    {p.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-zinc-700">
                  <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                    <Image
                      src={p.imageSrc}
                      alt={p.imageAlt}
                      width={1000}
                      height={700}
                      className="h-40 w-full object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
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
                <CardFooter className="text-sm font-semibold text-zinc-900">
                  {p.disponibilidade}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="tech-grain tech-divider-top border-y border-zinc-600 bg-zinc-800 py-16 text-zinc-100 scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="reveal-on-scroll">
            <h2 className="text-3xl font-bold tracking-tight text-white">Sobre a Gaúcho Pneus</h2>
            <p className="mt-4 text-zinc-300">
              A {company.name} reúne experiência em pneus e rodas para o agronegócio,
              com atendimento consultivo para produtores, cooperativas e oficinas.
              Nossa prioridade é manter suas máquinas rodando com segurança.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2 text-zinc-200">
                  <Check className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-on-scroll rounded-2xl border border-zinc-500 bg-zinc-700/70 p-8 shadow-inner">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Identidade
            </p>
            <p className="mt-3 text-lg font-medium text-zinc-100">
              Preto e branco, visual industrial e leitura clara no campo ou na
              cidade — alinhado à presença digital da marca.
            </p>
            <p className="mt-4 text-zinc-300">
              Substitua textos genéricos por história real da empresa, CNPJ,
              horários e localização exata quando publicar.
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="tech-grain tech-divider-top border-t border-zinc-600 bg-zinc-800 py-16 text-zinc-100 scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="reveal-on-scroll rounded-2xl border border-zinc-500 bg-zinc-700/70 p-6 sm:p-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">Contato</h2>
            <p className="mt-2 text-zinc-300">
              Envie sua necessidade (medida, máquina, quantidade). Validamos os
              dados no servidor e respondemos pelo canal preferido.
            </p>
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
                <div className="mt-2 space-y-1">
                  {company.contacts.map((contact) => (
                    <div key={contact.phoneDisplay} className="flex items-center gap-1.5">
                      <span className="text-zinc-300">{contact.name}:</span>
                      <Link
                        className="font-semibold text-[#25D366] underline underline-offset-2 hover:text-[#6ee7a8]"
                        href={contact.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.phoneDisplay}
                      </Link>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <CompanyMap />
            </div>
          </div>
          <div className="reveal-on-scroll">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
