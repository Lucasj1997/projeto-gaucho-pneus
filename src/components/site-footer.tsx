import { company } from "@/lib/mock-data";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-100">
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
          <span className="text-zinc-400">{company.phoneDisplay} (ajustar)</span>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-500">
        © {year} {company.name}. Site institucional.
      </div>
    </footer>
  );
}
