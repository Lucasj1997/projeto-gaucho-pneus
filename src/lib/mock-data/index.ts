export type Product = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

export const company = {
  name: "Gaúcho Pneus",
  tagline: "Pneus e rodas agrícolas",
  phoneDisplay: "(XX) XXXX-XXXX",
  whatsappHref: "https://wa.me/5551999999999",
  email: "contato@gauchopneus.com.br",
  address: "Interior, RS — Brasil",
  hours: "Balcão: segunda a sexta, 08h–18h",
} as const;

export const services = [
  {
    title: "Pneus para trator e colheitadeira",
    body: "Linha completa para tração e direção, com indicação por máquina e terreno.",
  },
  {
    title: "Rodas e implementos",
    body: "Rodas para plantio, pulverização e distribuição — montagem alinhada à bitola.",
  },
  {
    title: "Montagem e orientação técnica",
    body: "Apoio na troca, pressão recomendada e boas práticas de segurança no campo.",
  },
] as const;

export const products: Product[] = [
  {
    id: "radial-ag",
    title: "Pneu radial agrícola",
    description:
      "Alto desempenho em aderência e conforto para operações com solo variável.",
    tag: "Trator",
  },
  {
    id: "flutuacao",
    title: "Pneu flutuativo",
    description:
      "Redução de compactação em preparo e transporte, ideal para lotes sensíveis.",
    tag: "Flotação",
  },
  {
    id: "roda-implemento",
    title: "Conjunto roda + disco",
    description:
      "Soluções para plantadeiras e carretas, com foco em durabilidade e manutenção simples.",
    tag: "Implemento",
  },
];

export const highlights = [
  "Atendimento a revendas e produtores",
  "Foco em custo por hora-máquina",
  "Prazo e disponibilidade sob consulta",
] as const;

export const mockUsers = [
  { id: 1, name: "João Silva", email: "joao@example.com" },
  { id: 2, name: "Maria Santos", email: "maria@example.com" },
];

export const simulateDelay = (ms: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export async function getMockUser(id: number) {
  await simulateDelay(500);
  return mockUsers.find((user) => user.id === id);
}
