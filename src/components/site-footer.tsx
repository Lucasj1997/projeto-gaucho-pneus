import { ConversionCtas } from "@/components/conversion-ctas";
import { WhatsappBrandIcon } from "@/components/whatsapp-float";
import { company } from "@/lib/mock-data";
import { whatsappWithPrefill } from "@/lib/whatsapp";
import {
  PATH_AJUDA_MEDIDA_PNEU,
  PATH_SERVICOS_COLHEITADEIRA,
  PATH_SERVICOS_DUPLAGEM,
  PATH_SERVICOS_TRATOR,
} from "@/lib/routes";
import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm9.25 2a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M13.5 22v-8h2.7l.6-3h-3.3V9.2c0-.9.3-1.6 1.7-1.6H17V5.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.8v3h2.5v8h3.2Z" />
    </svg>
  );
}

const socialLinkClass =
  "inline-flex min-h-11 w-full max-w-[14rem] items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-zinc-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white sm:max-w-none sm:flex-1 sm:basis-[calc(50%-0.375rem)]";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const wa = whatsappWithPrefill(company.whatsappHref);
  return (
    <footer className="border-t border-zinc-600 bg-brand-logo-bg text-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">{company.name}</p>
          <p className="text-sm text-zinc-400">{company.tagline}</p>
          <p className="mt-1 text-sm font-medium text-zinc-200">{company.coverageClaim}</p>
          <p className="mt-2 text-sm text-zinc-400">{company.hours}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="max-w-sm leading-snug">{company.address}</span>
          <Link
            className="w-fit text-white underline-offset-4 hover:underline"
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Como chegar no mapa
          </Link>
          <Link
            className="text-white underline-offset-4 hover:underline"
            href={`mailto:${company.email}`}
          >
            {company.email}
          </Link>
          <ConversionCtas variant="onDark" size="sm" className="mt-3" />
          <Link
            href="/privacidade"
            className="mt-2 w-fit text-zinc-400 underline-offset-4 hover:text-zinc-200 hover:underline"
          >
            Privacidade e dados
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Páginas do site
          </p>
          <nav className="flex flex-col gap-1.5 text-zinc-300" aria-label="Conteúdo">
            <Link className="w-fit hover:text-white hover:underline" href={PATH_SERVICOS_TRATOR}>
              Pneus para trator
            </Link>
            <Link
              className="w-fit hover:text-white hover:underline"
              href={PATH_SERVICOS_COLHEITADEIRA}
            >
              Pneus para colheitadeira
            </Link>
            <Link className="w-fit hover:text-white hover:underline" href={PATH_SERVICOS_DUPLAGEM}>
              Duplagem
            </Link>
            <Link className="w-fit hover:text-white hover:underline" href={PATH_AJUDA_MEDIDA_PNEU}>
              Como ler a medida do pneu
            </Link>
          </nav>

          <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Redes e WhatsApp
            </p>
            <ul
              className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
              aria-label="Redes sociais e mensagens"
            >
              <li>
                <Link
                  className={socialLinkClass}
                  href={company.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Gaúcho Pneus"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <InstagramIcon className="size-5" aria-hidden />
                  </span>
                  <span className="leading-snug">Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  className={socialLinkClass}
                  href={company.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook da Gaúcho Pneus"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <FacebookIcon className="size-5" aria-hidden />
                  </span>
                  <span className="leading-snug">Facebook</span>
                </Link>
              </li>
              <li className="sm:col-span-2 lg:col-span-1">
                <Link
                  className={`${socialLinkClass} border-[#25D366]/40 bg-[#128C7E]/25 hover:bg-[#128C7E]/40`}
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Gaúcho Pneus"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white">
                    <WhatsappBrandIcon className="size-5" aria-hidden />
                  </span>
                  <span className="leading-snug">WhatsApp</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] text-center text-xs leading-relaxed text-zinc-500 md:pb-4">
        © {year} {company.name}. Site institucional. Produzido por LS sites.
      </div>
    </footer>
  );
}
