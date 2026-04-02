/** Consulta única para link e iframe do Google Maps (evita divergência). */
const MAPS_SEARCH_QUERY =
  "RS-463, Vila Lângaro, RS, 99955-000, Brasil" as const;

export type Product = {
  id: string;
  title: string;
  tag: string;
  /** Foto ilustrativa para referência visual de medida/modelo. */
  imagemExemplo: {
    src: string;
    alt: string;
  };
  /** Medidas em destaque para leitura rápida em chips. */
  medidasExemplo: readonly string[];
  /** Medidas comuns indicadas para consulta (não implica item em pronta entrega). */
  medidasReferencia: string;
  /** Linhas e marcas trabalhadas ou equivalentes — confirmar disponibilidade no balcão. */
  marcas: string;
};

export const company = {
  name: "Gaúcho Pneus",
  tagline: "Pneus e rodas agrícolas",
  /** Mensagem de alcance (hero, rodapé e pontos estratégicos). */
  coverageClaim: "Atendemos todo o Brasil",
  phoneDisplay: "(54) 98400-9415",
  phoneHref: "tel:+5554984009415",
  /** DDD 54 — número informado pelo cliente (formato internacional para wa.me). */
  whatsappHref: "https://wa.me/5554984009415",
  contacts: [
    {
      name: "Marciano",
      phoneDisplay: "(54) 99955-4898",
      whatsappHref: "https://wa.me/5554999554898",
    },
    {
      name: "Edson",
      phoneDisplay: "(54) 98400-9415",
      whatsappHref: "https://wa.me/5554984009415",
    },
  ] as const,
  socialLinks: {
    facebook: "https://www.facebook.com/share/14c3P2LE2Tu/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/gaucho.pneus?igsh=MXcyb21keDhmb24wNQ==",
  } as const,
  email: "gauchopneusrs@hotmail.com",
  /** Endereço para exibição */
  address: "RS-463, Vila Lângaro — RS · CEP 99955-000",
  /** Link “Como chegar” no Google Maps (nova aba). */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(MAPS_SEARCH_QUERY),
  /** iframe embed — mesmo local do `mapsUrl` (sem chave de API). */
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(MAPS_SEARCH_QUERY) +
    "&output=embed&hl=pt-BR&z=16",
  hours: "Balcão: segunda a sexta, 08h–18h",
};

/** Número do Marciano para CTAs e atalhos rápidos de WhatsApp (botões, header, flutuante). */
export const whatsappQuickHref =
  company.contacts.find((c) => c.name === "Marciano")?.whatsappHref ??
  company.whatsappHref;

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
  {
    title: "Fabricamos rodas de acordo com a necessidade",
    body: "Desenvolvimento e fabricação alinhados ao projeto da máquina — medidas, furação e acabamento sob consulta técnica.",
  },
] as const;

export const products: Product[] = [
  {
    id: "radial-tracao",
    title: "Pneu radial — tração (trator)",
    tag: "Trator · tração",
    imagemExemplo: {
      src: "/images/produtos/pneu-radial-pirelli.png",
      alt: "Pneu radial agrícola para tração, com banda de rodagem profunda.",
    },
    medidasExemplo: ["420/85R30", "460/85R38", "620/70R42"],
    medidasReferencia:
      "Ex.: 420/85R30, 460/85R38, 520/85R38, 620/70R42 — outras sob consulta.",
    marcas:
      "Trabalhamos com Pirelli, Michelin, Mitas, Alliance e demais fornecedores conforme projeto.",
  },
  {
    id: "diagonal-flutuacao",
    title: "Pneu diagonal / flotação",
    tag: "Flotação · diagonal",
    imagemExemplo: {
      src: "/images/produtos/pneu-diagonal-flotacao.png",
      alt: "Pneu diagonal para flotação com banda de rodagem em blocos largos.",
    },
    medidasExemplo: ["23.1-26", "24.5-32", "30.5L-32"],
    medidasReferencia:
      "Ex.: 23.1-26, 24.5-32, 30.5L-32 — demais medidas mediante consulta.",
    marcas:
      "Linhas Firestone, Maggion, Goodyear e similares, conforme carga e aplicação.",
  },
  {
    id: "direcao-dianteiro",
    title: "Pneu de direção (eixo dianteiro)",
    tag: "Trator · direção",
    imagemExemplo: {
      src: "/images/produtos/pneu-direcao-dianteiro.png",
      alt: "Pneu para direção dianteira com desenho de banda para controle e estabilidade.",
    },
    medidasExemplo: ["320/85R24", "380/85R28", "420/85R28"],
    medidasReferencia:
      "Ex.: 320/85R24, 380/85R28, 420/85R28 — compatibilidade conforme bitola e frente.",
    marcas:
      "Pirelli, Michelin, Mitas e outras marcas alinhadas ao fabricante da máquina.",
  },
  {
    id: "colheitadeira",
    title: "Pneus para colheitadeira",
    tag: "Colheitadeira",
    imagemExemplo: {
      src: "/images/produtos/pneu-colheitadeira.png",
      alt: "Pneu agrícola para colheitadeira com banda de tração reforçada.",
    },
    medidasExemplo: ["620/75R30", "800/70R38", "900/60R42"],
    medidasReferencia:
      "Ex.: 620/75R30, 800/70R38, 900/60R42 — varia conforme modelo (John Deere, CNH, AGCO, etc.).",
    marcas:
      "Pirelli, Michelin, Mitas, Trelleborg e linhas equivalentes para segmento agrícola.",
  },
  {
    id: "roda-implemento",
    title: "Rodas e aros para implementos",
    tag: "Rodado · implemento",
    imagemExemplo: {
      src: "/images/produtos/roda-aro-implemento.png",
      alt: "Aro agrícola amarelo para implementos e montagem em rodado.",
    },
    medidasExemplo: ["W15 x 38", "W18 x 38", "DW27 x 32"],
    medidasReferencia:
      "Aros e cilindros conforme projeto: ex. W15 x 38, W18 x 38, DW27 x 32 — sempre validar com a máquina.",
    marcas:
      "Fabricantes nacionais e importados; pintura, furação e calço sob especificação técnica.",
  },
  {
    id: "duplagem-conjunto",
    title: "Duplagem — conjuntos e espaçadores",
    tag: "Duplagem",
    imagemExemplo: {
      src: "/images/produtos/duplagem-conjunto-espacadores.png",
      alt: "Conjunto de duplagem agrícola com pneus e rodas amarelas.",
    },
    medidasExemplo: ["18.4-38", "520/85R38", "620/70R42"],
    medidasReferencia:
      "Compatível com medidas de pneu e eixo informadas (ex. 18.4-38, 620/70R42). Projeto sob medida.",
    marcas:
      "Espáçadores, parafusos e componentes homologados ou equivalentes ao original, conforme norma de uso.",
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
