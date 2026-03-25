import type { CampaignItem } from "@/lib/mock-data/campanhas";
import Image from "next/image";

type Props = {
  items: CampaignItem[];
};

export function CampaignGallery({ items }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <li key={item.src}>
          <figure className="group overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm transition hover:shadow-md">
            <div className="relative aspect-[3/4] w-full bg-zinc-200">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="sr-only">{item.tag}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
