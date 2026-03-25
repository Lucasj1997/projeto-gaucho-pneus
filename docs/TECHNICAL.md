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

## Comandos

```bash
npm run dev
npm run build
npm run lint
npm run type-check
```
