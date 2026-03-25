/** Ordem alinhada à sequência visual da marca (UUID no nome do arquivo do WhatsApp). */

export type CampaignItem = {
  /** Caminho em `public/` */
  src: string;
  alt: string;
  /** Rótulo curto para leitores de tela e chips */
  tag: string;
};

const base = "/images/campanhas";

export const campaignHero: CampaignItem = {
  src: `${base}/campanha-01.png`,
  alt: "Arte Gaúcho Pneus: trator Massey Ferguson em barracão metálico, destaque para pneu agrícola e mensagem sobre tração e rendimento operacional.",
  tag: "Destaque",
};

/** Itens 2–16: galeria (a primeira é só o hero para não repetir). */
export const campaignGallery: CampaignItem[] = [
  {
    src: `${base}/campanha-02.png`,
    alt: "Colheitadeira New Holland ao pôr do sol; texto sobre alinhamento da operação em campo — Gaúcho Pneus.",
    tag: "Operação",
  },
  {
    src: `${base}/campanha-03.png`,
    alt: "Máquina agrícola ao entardecer com mensagem: máquina equipada para a próxima jornada.",
    tag: "Equipamento",
  },
  {
    src: `${base}/campanha-04.png`,
    alt: "Colheitadeira frontal ao pôr do sol; texto sobre medida conforme o porte da máquina.",
    tag: "Medida",
  },
  {
    src: `${base}/campanha-05.png`,
    alt: "Trator com duplagem ao pôr do sol; mensagem sobre peso, potência e aplicação do conjunto de pneus.",
    tag: "Duplagem",
  },
  {
    src: `${base}/campanha-06.png`,
    alt: "Trator Massey Ferguson em campo ao entardecer; frase: modelos diferentes, mesma necessidade no campo.",
    tag: "Campo",
  },
  {
    src: `${base}/campanha-07.png`,
    alt: "Close de pneus em duplagem ao entardecer; texto sobre estabilidade e estrutura da máquina no solo.",
    tag: "Duplagem",
  },
  {
    src: `${base}/campanha-08.png`,
    alt: "John Deere em galpão; texto educativo sobre força aplicada e duplagem em operações agrícolas.",
    tag: "Conteúdo",
  },
  {
    src: `${base}/campanha-09.png`,
    alt: "Colheitadeira verde de frente ao pôr do sol; arte promocional Gaúcho Pneus e Rodas Agrícolas.",
    tag: "Colheita",
  },
  {
    src: `${base}/campanha-10.png`,
    alt: "Trator New Holland T8 com duplagem ao entardecer; mensagem sobre tração e peso bem distribuído.",
    tag: "T8 · duplagem",
  },
  {
    src: `${base}/campanha-11.png`,
    alt: "Peça Duplagem agrícola com colheitadeira Massey Ferguson ao pôr do sol; marcações de medida na arte.",
    tag: "Duplagem agrícola",
  },
  {
    src: `${base}/campanha-12.png`,
    alt: "John Deere elevado em oficina com pergunta: por que alguns tratores usam duplagem?",
    tag: "FAQ",
  },
  {
    src: `${base}/campanha-13.png`,
    alt: "Trator em oficina com CTA: duplagem para transmitir força ao solo com mais estabilidade.",
    tag: "Oficina",
  },
  {
    src: `${base}/campanha-14.png`,
    alt: "Trator laranja com duplagem; slogan força no campo depende do apoio — Gaúcho Pneus.",
    tag: "Tração",
  },
  {
    src: `${base}/campanha-15.png`,
    alt: "Colheitadeira John Deere em campo ao pôr do sol; entrega realizada no Paraná.",
    tag: "Entregas",
  },
  {
    src: `${base}/campanha-16.png`,
    alt: "Close de pneu Pirelli e conjunto de duplagem em ambiente de fazenda ao entardecer.",
    tag: "Detalhe técnico",
  },
];
