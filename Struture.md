# Visão Geral (meta) — Estrutura Feature-based

Objetivo: agrupar tudo relacionado ao "feature resume" (dados, resolução de assets, hooks e componentes) em uma estrutura coesa, testável e fácil de navegar; manter `components/ui` para primitives reutilizáveis; reduzir acoplamento entre provider, transformação e UI.

## Por que isso importa

- Facilita encontrar e modificar o código relacionado ao currículo (dados + UI).
- Separa responsabilidades: resolução de assets, transformação de dados, provisionamento (Provider) e apresentação (components).
- Torna mais simples migrar a origem dos dados (por exemplo trocar `resume.json` por uma API) sem tocar na UI.

## Design Pattern aplicado

Organização de código / estrutura de pastas

- Feature-based: agrupar por recurso/feature (ex.: `components/sections/experience/*`, `components/ui/*`). O projeto já está organizado dessa forma; a sugestão é manter e reforçar essa convenção.
- Cada pasta de feature deve conter, quando aplicável:

  - `index.ts` (barrel export) — exporta a API pública da pasta;
  - `ComponentName.tsx` — componente principal (PascalCase);
  - `ComponentName.module.css` — estilos em CSS Modules;
  - `types.ts` — tipos específicos da feature;

- Convenção de nomes: componentes em PascalCase (`AboutSection.tsx`), hooks com prefixo `use` (`useResume.ts`), arquivos de serviço em camelCase (`assetResolver.ts`).

Por que usar esse padrão

- Reduz imports relativos longos e melhora navegação.
- Facilita mover ou reescrever uma feature inteira sem tocar outras partes do app.
- Barrels (`index.ts`) tornam os imports mais limpos e explícitos.

## Estrutura proposta (feature-based)

```txt
src/
  features/
    resume/
      context/
        DataProvider.tsx       # Provider refatorado a partir de DataContext.tsx
        index.ts               # exporta Provider e hooks públicos
      services/
        assetResolver.ts       # lógica de import.meta.glob e resolveAssetReference
        transformResume.ts     # função de traverse/transform do objeto resume
      hooks/
        useResume.ts           # hook simples que consome o context
        useResumeSelector.ts   # (opcional) selector para reduzir re-renders
      types/
        resume.ts              # tipos exportados (Resume)
      components/
        ResumeContainer.tsx    # container opcional que injeta props nas sections
  components/
    ui/                      # primitives reutilizáveis (buttons, avatar, etc.)
  data/
    resume.json
  assets/
```

## Passo a passo resumido

- [x] 1. Criar `src/features/resume/services/assetResolver.ts`

  - mover a lógica de `import.meta.glob` e exportar `resolveAsset`.

- [x] 2. Criar `src/features/resume/services/transformResume.ts`

  - implementar a função que clona `resume.json` e substitui referências de imagem por URLs usando `resolveAsset`.

- [x] 3. Criar `src/features/resume/context/DataProvider.tsx` e `context/index.ts`

  - mover e simplificar `DataContext.tsx` para `DataProvider` que usa `transformResume` e fornece o contexto.
  - exportar `DataProvider` e `useResume` no `context/index.ts`.

- [x] 4.  Criar `src/features/resume/hooks/useResume.ts`

- mover o hook atual `useResume` para aqui e exportar via `context/index.ts`.

- [x] 5.  Adicionar barrels (`index.ts`) nas subpastas e no feature root

- atualizar imports em `src/main.tsx` e `src/App.tsx` para apontar para `features/resume` quando aplicável.

- [x] 6.  (Opcional) Criar `ResumeContainer.tsx` e tornar as sections apresentacionais

- refatorar seções para receber props ao invés de chamar `useResume` diretamente.

- [x] 7.  Rodar build/checar aplicação
- executar `npm run build` e abrir a versão local para garantir que assets e favicon foram resolvidos corretamente.

## Riscos e assunções

- Assumi que não há SSR — se houver, efeitos que usam `document`/`window` precisam de guards adicionais.
- `import.meta.glob` é Vite-specific; o `assetResolver` manterá essa dependência.

## Observações finais

- A reorganização melhora navegabilidade e desacoplamento. É um conjunto de mudanças de baixo risco e facilmente reversível; atualizações dos imports podem ser automatizadas por uma simples busca/replace.
- Se quiser que eu aplique essa migração automaticamente, posso começar movendo `DataContext.tsx` e criando `assetResolver` e `transformResume` agora, atualizando os imports e validando a build.
