import { company } from "@/lib/mock-data";
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

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-600 bg-zinc-800 text-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">{company.name}</p>
          <p className="text-sm text-zinc-400">{company.tagline}</p>
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
          <Link
            className="w-fit font-medium text-[#25D366] underline-offset-4 hover:text-[#20BD5A] hover:underline"
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {company.phoneDisplay}
          </Link>
          <div className="mt-1 flex items-center gap-3">
            <Link
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white"
              href={company.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Gaúcho Pneus"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </Link>
            <Link
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white"
              href={company.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Gaúcho Pneus"
            >
              <FacebookIcon className="size-4" />
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        © {year} {company.name}. Site institucional.
      </div>
    </footer>
  );
}
