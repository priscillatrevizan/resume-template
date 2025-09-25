// Serviço para resolver referências de imagem usando import.meta.glob com a opção moderna do Vite
// Usa: import.meta.glob(pattern, { query: '?url', import: 'default', eager: true })

// estende o tipo ImportMeta localmente para evitar erros do TypeScript quando o projeto
// não possui declarações para import.meta.glob
declare global {
  interface ImportMeta {
    glob?: any;
  }
}

const images: Record<string, string> = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,gif,svg,webp}", {
  query: "?url",
  import: "default",
  eager: true,
}) as Record<string, string>;

function normalizePath(p: string) {
  return p.replace(/\\\\/g, "/").toLowerCase();
}

function stripFragmentOrQuery(s: string) {
  return s.split(/[?#]/)[0];
}

export function getImageMap() {
  return images;
}

export function resolveAsset(ref?: string): string | undefined {
  if (!ref) return undefined;

  let key = ref;

  if (key.startsWith("#file:")) {
    key = key.slice(6);
  }

  key = stripFragmentOrQuery(key);
  // remove leading ./ or / for comparison
  key = key.replace(/^\.\//, "").replace(/^\//, "");
  const normalizedKey = normalizePath(key);

  // 1) Try exact endsWith match against the glob keys
  for (const p of Object.keys(images)) {
    const np = normalizePath(p);
    if (np.endsWith(normalizedKey)) return images[p];
  }

  // 2) fallback: search by filename only
  const fileName = normalizedKey.split("/").pop();
  if (fileName) {
    for (const p of Object.keys(images)) {
      const np = normalizePath(p);
      if (np.endsWith(`/${fileName}`) || np.endsWith(fileName)) return images[p];
    }
  }

  return undefined;
}

export default resolveAsset;
