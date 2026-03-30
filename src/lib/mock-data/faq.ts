export type FaqItem = {
  question: string;
  answer: string;
};

/** Perguntas frequentes — conversacionais para SEO/GEO e FAQPage schema. */
export const faqItems: readonly FaqItem[] = [
  {
    question: "O que a Gaúcho Pneus faz?",
    answer:
      "A Gaúcho Pneus comercializa pneus e rodas para equipamentos agrícolas, oferece apoio em duplagem e orientação técnica para escolher medida e conjunto conforme máquina, carga e tipo de operação.",
  },
  {
    question: "Como solicito um orçamento?",
    answer:
      "Você pode enviar mensagem pelo WhatsApp comercial (com medida, máquina e quantidade), ligar para os telefones divulgados no site ou preencher o formulário na seção Contato. A equipe retorna com disponibilidade e opções.",
  },
  {
    question: "Quais marcas e medidas de pneu vocês trabalham?",
    answer:
      "Trabalhamos com marcas como Pirelli, Michelin, Mitas, Alliance, Firestone e outras conforme estoque e projeto. As medidas variam por categoria (tração, direção, colheitadeira, flotação) — consulte sempre com a equipe antes de deslocar.",
  },
  {
    question: "Preciso informar medida e modelo da máquina?",
    answer:
      "Sim. Medida do pneu atual (ou da roda), modelo do trator ou colheitadeira e tipo de uso (solo, lastro, implemento) ajudam a indicar a configuração correta e evitar retrabalho.",
  },
  {
    question: "Como leio a medida do pneu na lateral?",
    answer:
      "Na lateral do pneu aparecem números como 420/85 R 30 (padrão radial) ou 23.1-26 (diagonal/flotação). Cada parte indica largura, perfil e diâmetro do aro. Há um guia passo a passo no site: {{AJUDA_MEDIDA_URL}}",
  },
  {
    question: "A Gaúcho Pneus faz duplagem?",
    answer:
      "Sim. Há linha de atendimento para duplagem e conjuntos, com montagem orientada pela equipe conforme especificação do eixo e normas de uso seguro.",
  },
  {
    question: "Onde fica a loja e qual o horário de atendimento?",
    answer:
      "O endereço é RS-463, Vila Lângaro, RS (CEP 99955-000). O balcão atende em horário comercial (segunda a sexta, conforme informado no rodapé). Confirme no mapa ou pelos canais de contato antes da visita.",
  },
  {
    question: "Vocês atendem revendas e produtores?",
    answer:
      "Sim. O atendimento inclui produtores rurais, cooperativas, oficinas e revendas, com foco em indicar solução técnica alinhada à operação no campo.",
  },
];
