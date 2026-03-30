import { company } from "@/lib/mock-data";
import { seo } from "@/lib/seo";

const telE164 = company.phoneHref.replace("tel:", "");

/** Objeto JSON-LD (antes de stringificar) — Organization + LocalBusiness + WebSite. */
export function buildSiteGraph(base: string) {
  const logoUrl = `${base}/logo-gaucho-pneus-horizontal.png`;
  const imageUrl = `${base}${seo.ogImagePath}`;

  return [
    {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: company.name,
      description: seo.description,
      url: base,
      logo: { "@type": "ImageObject", url: logoUrl },
      image: imageUrl,
      email: company.email,
      telephone: telE164,
      sameAs: [company.socialLinks.facebook, company.socialLinks.instagram],
      address: {
        "@type": "PostalAddress",
        streetAddress: "RS-463",
        addressLocality: "Vila Lângaro",
        addressRegion: "RS",
        postalCode: "99955-000",
        addressCountry: "BR",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${base}/#localbusiness`,
      name: company.name,
      description: seo.description,
      url: base,
      image: imageUrl,
      telephone: telE164,
      email: company.email,
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "RS-463",
        addressLocality: "Vila Lângaro",
        addressRegion: "RS",
        postalCode: "99955-000",
        addressCountry: "BR",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Rio Grande do Sul",
      },
      parentOrganization: { "@id": `${base}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      name: company.name,
      description: seo.description,
      url: base,
      publisher: { "@id": `${base}/#organization` },
      inLanguage: "pt-BR",
    },
  ];
}

export function buildSiteJsonLdDocument(base: string) {
  return {
    "@context": "https://schema.org",
    "@graph": buildSiteGraph(base),
  };
}
