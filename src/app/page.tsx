import { ContactForm } from "@/components/contact-form";
import { CampaignGallery } from "@/components/campaign-gallery";
import { HeroVideoBackground } from "@/components/hero-video-background";
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
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        className="relative min-h-[min(92vh,880px)] overflow-hidden border-b border-zinc-200 text-white"
        aria-label="Destaque principal"
      >
        <HeroVideoBackground
          posterSrc={campaignHero.src}
          objectPositionClass="object-[center_78%] sm:object-[center_72%] md:object-[center_70%]"
        />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/45 to-black/25 md:bg-gradient-to-r md:from-black/80 md:via-black/45 md:to-black/15"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-[min(92vh,880px)] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 md:justify-center md:pb-20 md:pt-24">
          <p className="sr-only">{campaignHero.alt}</p>
          <div className="max-w-xl space-y-4 md:max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              {company.tagline}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Tração e durabilidade para o seu negócio no campo
            </h1>
            <p className="text-lg text-white/90">
              Pneus, rodas e duplagem para máquinas agrícolas — com orientação
              técnica e foco em rendimento operacional.
            </p>
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
            <p className="pt-2 text-xs text-white/65 md:max-w-md">
              As imagens na galeria trazem textos e logos já incorporados à arte.
            </p>
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50 py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
              Fotos
            </h2>
            <p className="mt-2 text-zinc-600">
              Imagens em formato vertical com máquinas, pneus e rodados no
              campo. Em telas largas, o recorte mantém o foco no equipamento e
              nas mensagens já incluídas em cada imagem.
            </p>
          </div>
          <div className="mt-10">
            <CampaignGallery items={campaignGallery} />
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="border-y border-zinc-200 bg-white py-16 scroll-mt-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
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
              <Card key={p.id} className="border-zinc-200 shadow-sm">
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

      <section id="sobre" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Sobre a Gaúcho Pneus</h2>
            <p className="mt-4 text-zinc-600">
              A {company.name} reúne experiência em pneus e rodas para o agronegócio,
              com atendimento consultivo para produtores, cooperativas e oficinas.
              Nossa prioridade é manter suas máquinas rodando com segurança.
            </p>
            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2 text-zinc-800">
                  <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-100/80 p-8 shadow-inner">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Identidade
            </p>
            <p className="mt-3 text-lg font-medium text-zinc-900">
              Preto e branco, visual industrial e leitura clara no campo ou na
              cidade — alinhado à presença digital da marca.
            </p>
            <p className="mt-4 text-zinc-600">
              Substitua textos genéricos por história real da empresa, CNPJ,
              horários e localização exata quando publicar.
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-zinc-200 bg-white py-16 scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Contato</h2>
            <p className="mt-2 text-zinc-600">
              Envie sua necessidade (medida, máquina, quantidade). Validamos os
              dados no servidor e respondemos pelo canal preferido.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              <li className="leading-snug">
                <span className="font-medium">Localização: </span>
                <span className="block sm:inline">{company.address}</span>
                <span className="mt-1 block">
                  <Link
                    className="font-medium text-zinc-900 underline underline-offset-2"
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
                <span className="font-medium">WhatsApp: </span>
                <Link
                  className="underline underline-offset-2"
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir conversa
                </Link>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
