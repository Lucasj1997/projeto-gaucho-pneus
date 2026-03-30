/**
 * Validação local do shape do JSON-LD (Zod) + serialização JSON.
 * Após o deploy: teste também em https://validator.schema.org/ e
 * https://search.google.com/test/rich-results (URL pública).
 */
import { z } from "zod";
import { buildFaqJsonLdDocument } from "../src/lib/json-ld/faq-graph";
import { buildSiteJsonLdDocument } from "../src/lib/json-ld/site-graph";

const base =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ??
  "https://example.com";

const acceptedAnswerSchema = z.object({
  "@type": z.literal("Answer"),
  text: z.string().min(10),
});

const questionEntitySchema = z.object({
  "@type": z.literal("Question"),
  name: z.string().min(5),
  acceptedAnswer: acceptedAnswerSchema,
});

const faqPageSchema = z.object({
  "@context": z.literal("https://schema.org"),
  "@type": z.literal("FAQPage"),
  mainEntity: z.array(questionEntitySchema).min(1),
});

const graphItemSchema = z.object({
  "@type": z.string().min(1),
  "@id": z.string().min(1).optional(),
});

const siteDocSchema = z.object({
  "@context": z.literal("https://schema.org"),
  "@graph": z.array(graphItemSchema).min(3),
});

function main() {
  const siteDoc = buildSiteJsonLdDocument(base);
  const faqDoc = buildFaqJsonLdDocument();

  siteDocSchema.parse(siteDoc);
  faqPageSchema.parse(faqDoc);

  JSON.stringify(siteDoc);
  JSON.stringify(faqDoc);

  const types = (siteDoc["@graph"] as { "@type": string }[]).map((n) => n["@type"]);
  console.log("validate-jsonld: OK");
  console.log(`  base (exemplo): ${base}`);
  console.log(`  @graph tipos: ${types.join(", ")}`);
  console.log(`  FAQ: ${faqDoc.mainEntity.length} perguntas`);
  console.log("");
  console.log(
    "Próximo passo com URL real: cole o HTML ou use 'Teste de resultados avançados' do Google.",
  );
}

main();
