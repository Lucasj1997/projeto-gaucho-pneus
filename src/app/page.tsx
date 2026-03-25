import { ContactForm } from "@/components/contact-form";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  company,
  highlights,
  products,
  services,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Check, Leaf, ShieldCheck, Tractor } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-900 text-white">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill='%23272727' fill-opacity='0.45' d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {company.tagline}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tração e durabilidade para o seu negócio no campo
            </h1>
            <p className="text-lg text-white/85">
              Consultoria técnica, linhas para máquinas agrícolas e rodas para
              implementos — com foco em performance e segurança na operação.
            </p>
            <div className="flex flex-wrap gap-3">
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
                  "rounded-full border-white/40 bg-transparent text-white hover:bg-white/10",
                )}
              >
                Falar no WhatsApp
              </Link>
            </div>
          </div>
          <div className="grid max-w-sm gap-4 rounded-2xl border border-white/15 bg-black/40 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <Tractor className="size-8 shrink-0" aria-hidden />
              <div>
                <p className="font-semibold">Máquinas agrícolas</p>
                <p className="text-sm text-white/75">
                  Medidas e aplicações sob demanda.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="size-8 shrink-0" aria-hidden />
              <div>
                <p className="font-semibold">Menos parada</p>
                <p className="text-sm text-white/75">
                  Indicação alinhada ao tipo de solo e ritmo de safra.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-8 shrink-0" aria-hidden />
              <div>
                <p className="font-semibold">Confiança</p>
                <p className="text-sm text-white/75">
                  Especificações técnicas e suporte próximo ao produtor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Serviços</h2>
          <p className="mt-2 text-zinc-600">
            Do diagnóstico à montagem: suporte para escolher pneus e rodas com
            melhor custo-benefício.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="border-zinc-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{s.title}</CardTitle>
                <CardDescription className="text-base text-zinc-600">
                  {s.body}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="produtos"
        className="border-y border-zinc-200 bg-white py-16"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Produtos</h2>
              <p className="mt-2 text-zinc-600">
                Exemplos de linha (dados mockados). Ajuste referências e preços
                conforme seu estoque.
              </p>
            </div>
            <Link
              href="#contato"
              className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
            >
              Pedir disponibilidade
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
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

      <section id="contato" className="border-t border-zinc-200 bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Contato</h2>
            <p className="mt-2 text-zinc-600">
              Envie sua necessidade (medida, máquina, quantidade). Validamos os
              dados no servidor e respondemos pelo canal preferido.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-700">
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
