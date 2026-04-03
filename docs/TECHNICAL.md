# Documentação Técnica — Gaúcho Pneus

## Arquitetura

### Frontend
- **Framework**: Next.js com App Router (`src/app`)
- **Estilização**: Tailwind CSS v4 + Shadcn/ui
- **Estado**: React local; formulário com React Hook Form
- **Validação**: Zod + `@hookform/resolvers`

### Backend
- **API Routes**: `src/app/api/v1/contact/route.ts`
- **Validação**: Zod (`src/lib/validations/contact.ts`)
- **Rate limiting**: `src/lib/security/rate-limit.ts` (em memória, adequado a dev/MVP)
- **Dados**: mock em `src/lib/mock-data/index.ts`

### Segurança
- Middleware em `src/middleware.ts` com headers (CSP, XFO, XCTO, etc.)
- Limite de tamanho do corpo na API de contato
- CORS configurável via `NEXT_PUBLIC_APP_URL`

## Estrutura de Pastas (parcial)

```
src/
├── app/                 # Rotas e layouts
├── components/          # UI e blocos do site
│   └── ui/              # Shadcn
├── lib/
│   ├── mock-data/
│   ├── security/
│   └── validations/
└── middleware.ts
```

## APIs

- **POST** `/api/v1/contact` — corpo JSON `{ name, email, message, phone? }` validado por Zod.
- **OPTIONS** `/api/v1/contact` — pré-voo CORS quando necessário.

## Mock Data Strategy
- Conteúdo institucional e listagens em `/src/lib/mock-data/`
- Estrutura preparada para substituição por CMS ou banco

## Variáveis de Ambiente
Ver `.env.local` (não versionar). Principal: `NEXT_PUBLIC_APP_URL`.

## Domínio personalizado (produção)

O site usa `NEXT_PUBLIC_APP_URL` como URL canônica (`metadataBase`, Open Graph, JSON-LD). Ela deve ser **exatamente** a URL que o visitante usa no navegador, **com HTTPS** e **sem barra no final** (ex.: `https://www.gauchopneus.com.br` ou `https://gauchopneus.com.br`).

### 1. Onde o site está hospedado (ex.: Vercel)

1. No projeto, abra **Settings → Domains** (ou equivalente).
2. Adicione o domínio raiz (`seudominio.com.br`) e, se quiser, `www.seudominio.com.br`.
3. Siga as instruções do painel para o DNS no registrador (normalmente **A/AAAA** para o apex ou **CNAME** para `www` apontando para o host indicado).
4. Ative redirecionamento de uma variante para a outra (ex.: apex → `www`) se preferir um único endereço oficial.

### 2. Variável de ambiente em produção

No mesmo serviço de hospedagem, em **Environment Variables**, defina:

- `NEXT_PUBLIC_APP_URL` = URL canônica escolhida, por exemplo `https://www.seudominio.com.br`

Depois dispare um novo deploy para a alteração valer (variáveis `NEXT_PUBLIC_*` entram no build do Next.js).

### 3. Desenvolvimento local

Em `.env.local` pode manter `NEXT_PUBLIC_APP_URL=http://localhost:3000`. Não é necessário colocar o domínio de produção no arquivo local para o site funcionar online; o valor de produção fica só no painel da hospedagem.

### 4. E-mail (Resend)

Se usar remetente no próprio domínio (`RESEND_FROM_EMAIL`), conclua a verificação de domínio no Resend e os registros DNS (SPF/DKIM) que eles indicarem — é independente do passo do site, mas usa o mesmo domínio.

## Comandos

```bash
npm run dev
npm run build
npm run lint
npm run type-check
```
