# Regras para Assistentes de IA

## Contexto do Projeto
Gaúcho Pneus — Site institucional de pneus e rodas agrícolas (Next.js, TypeScript, Shadcn/ui).

## Regras Obrigatórias

### 1. Segurança (OWASP Top 10)
- SEMPRE validar inputs com Zod
- NUNCA expor dados sensíveis em logs
- IMPLEMENTAR rate limiting em APIs sensíveis
- VALIDAR permissões antes de ações
- SANITIZAR outputs para prevenir XSS

### 2. Padrões de Código
- USE TypeScript strict mode
- SIGA convenções de nomenclatura do projeto
- USE async/await ao invés de callbacks
- MANTENHA componentes pequenos e focados

### 3. Performance
- IMPLEMENTE lazy loading para imagens
- USE React.memo() quando apropriado
- OTIMIZE bundle size

### 4. Documentação
- ATUALIZE docs ao modificar APIs
- DOCUMENTE decisões arquiteturais relevantes

## Checklist Antes de Commit
- [ ] Código passa no TypeScript sem erros
- [ ] Sem dados sensíveis expostos
- [ ] Documentação atualizada quando aplicável
- [ ] Segurança verificada (OWASP)
