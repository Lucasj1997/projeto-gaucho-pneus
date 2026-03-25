export type Product = {
  id: string;
  title: string;
  description: string;
  tag: string;
  /** Medidas comuns indicadas para consulta (não implica item em pronta entrega). */
  medidasReferencia: string;
  /** Linhas e marcas trabalhadas ou equivalentes — confirmar disponibilidade no balcão. */
  marcas: string;
  /** Sempre orientar o cliente a confirmar estoque. */
  disponibilidade: string;
};

export const company = {
  name: "Gaúcho Pneus",
  tagline: "Pneus e rodas agrícolas",
  phoneDisplay: "(XX) XXXX-XXXX",
  whatsappHref: "https://wa.me/5551999999999",
  email: "contato@gauchopneus.com.br",
  /** Endereço para exibição */
  address: "RS-463, Vila Lângaro — RS · CEP 99955-000",
  /** Link “Como chegar” no Google Maps */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("RS-463, Vila Lângaro, RS, 99955-000, Brasil"),
  hours: "Balcão: segunda a sexta, 08h–18h",
};

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
    id: "radial-tracao",
    title: "Pneu radial — tração (trator)",
    description:
      "Linha para eixo traseiro e tração em operações de médio e alto porte. Indicação conforme máquina, lastro e tipo de solo.",
    tag: "Trator · tração",
    medidasReferencia:
      "Ex.: 420/85R30, 460/85R38, 520/85R38, 620/70R42 — outras sob consulta.",
    marcas:
      "Trabalhamos com Pirelli, Michelin, Mitas, Alliance e demais fornecedores conforme projeto.",
    disponibilidade: "Consulte estoque",
  },
  {
    id: "diagonal-flutuacao",
    title: "Pneu diagonal / flotação",
    description:
      "Para reduzir compactação em preparo, plantio e transporte em terreno sensível ou com necessidade de maior área de contato.",
    tag: "Flotação · diagonal",
    medidasReferencia:
      "Ex.: 23.1-26, 24.5-32, 30.5L-32 — demais medidas mediante consulta.",
    marcas:
      "Linhas Firestone, Maggion, Goodyear e similares, conforme carga e aplicação.",
    disponibilidade: "Consulte estoque",
  },
  {
    id: "direcao-dianteiro",
    title: "Pneu de direção (eixo dianteiro)",
    description:
      "Conjuntos para direção e estabilidade em velocidade de transporte e manobras no campo.",
    tag: "Trator · direção",
    medidasReferencia:
      "Ex.: 320/85R24, 380/85R28, 420/85R28 — compatibilidade conforme bitola e frente.",
    marcas:
      "Pirelli, Michelin, Mitas e outras marcas alinhadas ao fabricante da máquina.",
    disponibilidade: "Consulte estoque",
  },
  {
    id: "colheitadeira",
    title: "Pneus para colheitadeira",
    description:
      "Aplicações em máquinas de colheita com foco em suporte de carga, tração em terreiro e resposta em fileira.",
    tag: "Colheitadeira",
    medidasReferencia:
      "Ex.: 620/75R30, 800/70R38, 900/60R42 — varia conforme modelo (John Deere, CNH, AGCO, etc.).",
    marcas:
      "Pirelli, Michelin, Mitas, Trelleborg e linhas equivalentes para segmento agrícola.",
    disponibilidade: "Consulte estoque",
  },
  {
    id: "roda-implemento",
    title: "Rodas e aros para implementos",
    description:
      "Montagens para plantadeiras, pulverizadores, grades e carretas, com estudo de bitola e offset.",
    tag: "Rodado · implemento",
    medidasReferencia:
      "Aros e cilindros conforme projeto: ex. W15 x 38, W18 x 38, DW27 x 32 — sempre validar com a máquina.",
    marcas:
      "Fabricantes nacionais e importados; pintura, furação e calço sob especificação técnica.",
    disponibilidade: "Consulte estoque",
  },
  {
    id: "duplagem-conjunto",
    title: "Duplagem — conjuntos e espaçadores",
    description:
      "Duplagem traseira e dianteira para distribuição de peso e maior área de contato, com montagem orientada pela equipe.",
    tag: "Duplagem",
    medidasReferencia:
      "Compatível com medidas de pneu e eixo informadas (ex. 18.4-38, 620/70R42). Projeto sob medida.",
    marcas:
      "Espáçadores, parafusos e componentes homologados ou equivalentes ao original, conforme norma de uso.",
    disponibilidade: "Consulte estoque",
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
