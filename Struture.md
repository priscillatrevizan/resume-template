# Estrutura Feature-based — Guia para Devs

Este projeto utiliza uma estrutura **feature-based** para facilitar manutenção, testes e evolução do código.

## Objetivo

- Agrupar tudo relacionado ao currículo (dados, assets, hooks, componentes) em uma estrutura coesa e fácil de navegar.
- Manter `components/ui` para primitives reutilizáveis.
- Reduzir acoplamento entre provider, transformação e UI.

## Vantagens

- Encontrar e modificar o código do currículo fica mais rápido.
- Separação clara de responsabilidades: assets, dados, provider, UI.
- Facilita migrar a origem dos dados (ex: trocar `resume.json` por API) sem mexer na UI.

## Padrão de Organização

- **Feature-based:** agrupe por recurso/feature (ex: `components/sections/experience/*`, `components/ui/*`).
- Cada pasta de feature pode conter:
  - `index.ts` (barrel export) — exporta a API pública da pasta
  - `ComponentName.tsx` — componente principal (PascalCase)
  - `ComponentName.module.css` — estilos em CSS Modules
  - `types.ts` — tipos específicos da feature

### Convenção de nomes

- Componentes: PascalCase (`AboutSection.tsx`)
- Hooks: prefixo `use` (`useResume.ts`)
- Serviços: camelCase (`assetResolver.ts`)

## Por que usar esse padrão?

- Imports mais curtos e navegação facilitada.
- Possível mover/refatorar uma feature sem afetar o resto do app.
- Barrels (`index.ts`) deixam os imports limpos e explícitos.

## Exemplo de Estrutura

```txt
src/
  features/
    resume/
      context/
        DataProvider.tsx       # Provider do contexto
        index.ts               # Barrel export
      services/
        assetResolver.ts       # Resolve assets via import.meta.glob
        transformResume.ts     # Transforma dados do resume
      hooks/
        useResume.ts           # Hook principal
        useResumeSelector.ts   # (opcional) selector para otimizar re-render
      types/
        resume.ts              # Tipos do currículo
      components/
        ResumeContainer.tsx    # Container opcional para injetar props
  components/
    ui/                      # Primitives reutilizáveis (buttons, avatar, etc.)
  data/
    resume.json
  assets/
```

## Passo a Passo para Refatoração

1. Criar `src/features/resume/services/assetResolver.ts` (mover lógica de assets)
2. Criar `src/features/resume/services/transformResume.ts` (função para transformar dados)
3. Refatorar `DataContext.tsx` para `DataProvider.tsx` e exportar via barrel
4. Mover hook `useResume` para pasta de hooks
5. Adicionar barrels (`index.ts`) nas subpastas
6. Atualizar imports em `main.tsx` e `App.tsx`
7. (Opcional) Criar `ResumeContainer.tsx` e tornar sections apresentacionais
8. Rodar `npm run build` e validar assets/favicon

## Riscos e Assunções

- Não há SSR (Server Side Rendering) — se houver, proteja efeitos que usam `document`/`window`.
- `import.meta.glob` é específico do Vite.

## Dicas Finais

- Reorganizar melhora navegabilidade e desacoplamento.
- Mudanças são de baixo risco e reversíveis.
- Atualizações de imports podem ser automatizadas por busca/replace.

---

Se quiser aplicar essa migração automaticamente, posso iniciar movendo arquivos e atualizando imports para você!
