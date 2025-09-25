// Serviço para resolver referências de assets usando import.meta.glob (Vite)
// Exporta uma função resolveAsset(ref?: string) que retorna a URL ou undefined

const images = (import.meta as any).glob("../../../assets/**/*", { eager: true, as: "url" }) as Record<string, string>;

export function resolveAsset(ref?: string): string | undefined {
  if (!ref) return undefined;
  let name = ref;
  if (name.startsWith("#file:")) name = name.replace("#file:", "");
  name = name.replace(/^\.\//, "");
  name = name.replace(/\\/g, "/");

  const key = `../../../assets/${name}`;
  if (images[key]) return images[key];

  const keys = Object.keys(images);
  const found = keys.find(k => k.endsWith(`/${name}`) || k.endsWith(name));
  if (found) return images[found];

  return ref;
}

export function getImageMap() {
  return images;
}
