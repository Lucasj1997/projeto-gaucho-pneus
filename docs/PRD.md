# PRD — Gaúcho Pneus (site institucional)

## Visão Geral
Site responsivo para a **Gaúcho Pneus**, empresa de **pneus e rodas para equipamentos agrícolas**, com presença profissional, conteúdo claro sobre serviços e produtos (mock) e canal de contato com validação server-side.

## Objetivos
- Objetivo principal: gerar leads (orçamento / WhatsApp / formulário) e transmitir confiança técnica.
- Objetivos secundários: apresentar linhas de produto; destacar atendimento a produtores e revendas; base pronta para SEO local.

## Público-Alvo
Produtores rurais, cooperativas, oficinas e revendas que buscam pneus e rodas para trator, colheitadeira e implementos.

## Funcionalidades Core
1. Página inicial com hero, serviços, produtos (dados mockados), sobre e contato.
2. Formulário de contato com validação (Zod + React Hook Form) e API `POST /api/v1/contact`.
3. Rate limiting básico por IP no endpoint de contato.
4. Cabeçalho responsivo com menu mobile (Sheet).
5. Headers de segurança via middleware (alinhado a boas práticas OWASP).

## Requisitos Técnicos
- Framework: Next.js (App Router) com TypeScript
- UI: Shadcn/ui + Tailwind CSS
- Linguagem: TypeScript
- Autenticação: não requerida neste escopo (site público)
- Dados: mock em `src/lib/mock-data` (sem banco)
- Deploy: a definir (ex.: Vercel) com HTTPS obrigatório em produção

## Requisitos de Segurança (OWASP Top 10)
1. **Broken Access Control**: escopo público; evitar exposição de rotas administrativas não implementadas.
2. **Cryptographic Failures**: HTTPS em produção; sem armazenamento de senhas neste MVP.
3. **Injection**: validação e sanitização de inputs (Zod); parsing seguro de JSON com limite de tamanho.
4. **Insecure Design**: menor privilégio; API de contato sem escrita em DB até integração futura.
5. **Security Misconfiguration**: headers de segurança; CORS restrito à origem pública quando possível.
6. **Vulnerable Components**: auditoria periódica de dependências (`npm audit`).
7. **Authentication Failures**: não aplicável ao formulário público; rate limit reduz abuso.
8. **Data Integrity Failures**: validação estrita de payload; respostas JSON consistentes.
9. **Security Logging**: evitar logar PII em produção quando integrar backend.
10. **SSRF**: não há fetch a URLs arbitrárias do usuário neste MVP.

## Métricas de Sucesso
- Performance: LCP &lt; 2,5s alvo em conexões médias; FID baixo em interações do formulário.
- Segurança: 0 vulnerabilidades críticas conhecidas nas dependências.
- UX: formulário utilizável em mobile; taxa de conclusão elevada após ajustes de conteúdo real.
