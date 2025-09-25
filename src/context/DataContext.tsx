import React, { createContext, useContext, useMemo } from "react";
import resumeData from "../data/resume.json";

export type Resume = typeof resumeData;

const DataContext = createContext<Resume | null>(null);

// Preload all images from src/assets (including subfolders) as URLs (Vite will provide URLs)
// The glob is relative to this file (src/context)
const images = (import.meta as any).glob("../assets/**/*", { eager: true, as: "url" }) as Record<string, string>;

function resolveAssetReference(ref?: string) {
  if (!ref) return undefined;
  // support patterns: '#file:logo.png' or 'logo.png' or './logo.png'
  let name = ref;
  if (name.startsWith("#file:")) name = name.replace("#file:", "");
  name = name.replace(/^\.\//, "");

  // Normalize backslashes to forward slashes
  name = name.replace(/\\/g, "/");

  const key = `../assets/${name}`;
  if (images[key]) return images[key];

  // Fallback: try to find by filename (e.g. 'logo.png' or 'img/logo.png')
  const keys = Object.keys(images);
  const found = keys.find(k => k.endsWith(`/${name}`) || k.endsWith(name));
  if (found) return images[found];

  return ref;
}

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // useMemo to avoid re-creating object on each render
  const value = useMemo(() => {
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
            if (isImageReference(val)) node[i] = resolveAssetReference(val);
          } else if (typeof node[i] === "object" && node[i] !== null) {
            traverseAndResolve(node[i]);
          }
        }
      } else if (typeof node === "object" && node !== null) {
        for (const key of Object.keys(node)) {
          const val = node[key];
          if (typeof val === "string") {
            if (isImageReference(val)) {
              node[key] = resolveAssetReference(val);
            }
          } else if (typeof val === "object" && val !== null) {
            traverseAndResolve(val);
          }
        }
      }
    }

    traverseAndResolve(cloned);

    return cloned as Resume;
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export function useResume() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useResume must be used within a DataProvider");
  return ctx;
}

export default DataContext;
