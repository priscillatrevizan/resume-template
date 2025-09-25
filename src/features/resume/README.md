# Feature: resume

Esta pasta agrupa tudo relacionado ao feature `resume` (dados do currículo, resolução de assets, hooks e components).

Exportações principais:

- `context` — Provider (`DataProvider`) e hook `useResume` (barrel em `context/index.ts`).
- `services` — `assetResolver` e `transformResume` (barrel em `services/index.ts`).
- `hooks` — hooks específicos do feature (ex.: `useResume`).
- `components` — componentes específicos do feature (ex.: `ResumeContainer`).

Estrutura recomendada:

```
features/resume/
  context/
  services/
  hooks/
  components/
  types/
```

Visão geral da API

- DataProvider (context)

  - Props: children
  - Responsabilidade: carregar `resume.json`, transformar referências de assets via `transformResume`, prover `useResume()` para consumir os dados tipados.

- useResume() (hook)

  - Retorna: objeto `Resume` (tipado) com campo `profile`, `sections`, etc.
  - Erros: lança se chamado fora do Provider.

- services
  - `resolveAsset(ref?: string): string | undefined` — resolve referências como `#file:foto.png` para URLs geradas pelo bundler.
  - `transformResume(data, resolver?)` — faz deep-clone do JSON do currículo e substitui referências por URLs via `resolver`.

Exemplo de uso (em `main.tsx`):

```tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { DataProvider } from "./features/resume/context";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
```

Exemplo de consumer (component):

```tsx
import { useResume } from "./features/resume/context";

export function Header() {
  const resume = useResume();
  return <h1>{resume.profile?.name}</h1>;
}
```

Notas:

- `assetResolver` usa `import.meta.glob(..., { query: '?url', import: 'default', eager: true })` para gerar um mapeamento de assets em tempo de build — isso evita fetch em runtime.
- Se o projeto adotar um servidor remoto para assets, `resolveAsset` pode ser trocado por uma implementação que retorne URLs CDN.

Próximos passos sugeridos:

- adicionar `README.md` com exemplos de testes para `transformResume`.
- exportar tipos em `features/resume/types` para melhorar a tipagem dos consumers.
