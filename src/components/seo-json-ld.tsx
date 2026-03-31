import { buildSiteJsonLdDocument } from "@/lib/json-ld/site-graph";
import { getSiteUrl } from "@/lib/seo";

function safeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/** JSON-LD com @graph: Organization, LocalBusiness, WebSite. */
export function SeoJsonLd() {
  const doc = buildSiteJsonLdDocument(getSiteUrl());
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(doc) }}
    />
  );
}
