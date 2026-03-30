import { buildSiteJsonLdDocument } from "@/lib/json-ld/site-graph";
import { getSiteUrl } from "@/lib/seo";

/** JSON-LD com @graph: Organization, LocalBusiness, WebSite. */
export function SeoJsonLd() {
  const doc = buildSiteJsonLdDocument(getSiteUrl());
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(doc) }}
    />
  );
}
