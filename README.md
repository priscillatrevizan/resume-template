# Currículo Dev Responsivo

> Projeto open-source para criar, personalizar e exportar seu currículo em formato web responsivo e PDF.

## Demonstração

Veja o design original aplicado em [Priscilla.dev](https://www.priscilla.dev).

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Acesse `http://localhost:3000` no navegador.

## Personalização do currículo

O arquivo principal de dados é:

- `src/data/resume.json`: Edite este arquivo para alterar todas as informações do currículo (dados pessoais, experiências, projetos, habilidades, idiomas, interesses, etc).

Exemplo de campos:

```json
{
  "profile": { "name": "Seu Nome", ... },
  "education": [ ... ],
  "experiences": [ ... ],
  "projects": [ ... ],
  "skills": [ ... ],
  "languages": [ ... ],
  "interests": [ ... ]
}
```

## Exportação para PDF

- Clique no botão **Exportar PDF** no topo da página para abrir a visualização de impressão.
- Use o botão **Imprimir** para salvar como PDF.
- Para um PDF limpo, desmarque a opção "Cabeçalhos e rodapés" na caixa de impressão do navegador.

## Estrutura do projeto

- `src/components/`: Componentes reutilizáveis da interface
- `src/features/`: Lógicas de funcionalidades (ex: impressão, dados)
- `src/pages/`: Páginas principais do app
- `src/data/resume.json`: Dados do currículo
- `src/styles/`: Estilos globais e de impressão

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS Modules

## Como clonar para suas personalizações

> **Importante:** Não altere o projeto original! Para criar seu próprio currículo personalizado:

1. Faça login no GitHub.
2. Acesse o repositório do projeto.
3. Clique em **Fork** (no canto superior direito) para criar uma cópia no seu perfil.
4. Clone o seu fork:

```bash
git clone https://github.com/seuusuario/resume-template.git
```

5. Personalize à vontade!

## Estrele o projeto no GitHub ⭐

Se achou útil, clique em **Star** no topo da página do repositório para apoiar e ajudar mais pessoas a encontrarem!

**Desenvolvido por Priscilla Trevizan**
