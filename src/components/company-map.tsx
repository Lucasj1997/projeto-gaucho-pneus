import { company } from "@/lib/mock-data";
import Link from "next/link";

export function CompanyMap() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
        Localização no mapa
      </h3>
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
        <iframe
          title={`Google Maps — ${company.name} — ${company.address}`}
          src={company.mapsEmbedSrc}
          className="aspect-[4/3] w-full min-h-[240px] border-0 sm:min-h-[300px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="text-xs text-zinc-500">
        Vista aproximada pelo endereço cadastrado.{" "}
        <Link
          className="font-medium text-zinc-800 underline underline-offset-2 hover:text-zinc-950"
          href={company.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir rotas no Google Maps
        </Link>
      </p>
    </div>
  );
}
