import { buildFaqJsonLdDocument } from "@/lib/json-ld/faq-graph";

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export function FaqJsonLd() {
  const doc = buildFaqJsonLdDocument();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(doc) }}
    />
  );
}
