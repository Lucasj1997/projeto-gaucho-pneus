import { buildFaqJsonLdDocument } from "@/lib/json-ld/faq-graph";

export function FaqJsonLd() {
  const doc = buildFaqJsonLdDocument();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(doc) }}
    />
  );
}
