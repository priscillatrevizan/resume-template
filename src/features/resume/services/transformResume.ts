import { resolveAsset as defaultResolve } from "./assetResolver";

export function transformResume(resumeData: any, resolver: (ref?: string) => string | undefined = defaultResolve) {
  const cloned: any = JSON.parse(JSON.stringify(resumeData));

  const isImageReference = (s: string) => {
    if (!s) return false;
    if (s.startsWith("#file:")) return true;
    return /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(s) || /^\.\//.test(s);
  };

  function traverseAndResolve(node: any) {
    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        if (typeof node[i] === "string") {
          const val = node[i] as string;
          if (isImageReference(val)) node[i] = resolver(val);
        } else if (typeof node[i] === "object" && node[i] !== null) {
          traverseAndResolve(node[i]);
        }
      }
    } else if (typeof node === "object" && node !== null) {
      for (const key of Object.keys(node)) {
        const val = node[key];
        if (typeof val === "string") {
          if (isImageReference(val)) {
            node[key] = resolver(val);
          }
        } else if (typeof val === "object" && val !== null) {
          traverseAndResolve(val);
        }
      }
    }
  }

  traverseAndResolve(cloned);

  return cloned;
}

export default transformResume;
