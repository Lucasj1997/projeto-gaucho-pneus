import { resolveFaqAnswerText } from "@/lib/faq-resolve";
import { faqItems } from "@/lib/mock-data/faq";

export function buildFaqJsonLdDocument() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: resolveFaqAnswerText(item.answer),
      },
    })),
  };
}
