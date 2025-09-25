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

    // Set favicon in the document head if we can find one.
    // Priority: cloned.profile.favicon -> cloned.favicon -> search assets for favicon-32x32.png
    let faviconUrl: string | undefined;
    if (cloned?.profile?.favicon) faviconUrl = cloned.profile.favicon;
    else if (cloned?.favicon) faviconUrl = cloned.favicon;
    else {
      const keys = Object.keys(images);
      const found = keys.find(k => k.endsWith("/favicon-32x32.png") || k.endsWith("favicon-32x32.png"));
      if (found) faviconUrl = images[found];
    }

    if (faviconUrl && typeof document !== "undefined") {
      try {
        // Prefer an existing <link rel="icon" sizes="32x32"> or fallbacks
        let link: HTMLLinkElement | null = document.querySelector("link[rel='icon'][sizes='32x32']");
        if (!link) link = document.querySelector("link[rel='icon']");
        if (!link) link = document.querySelector("link[rel='shortcut icon']");

        if (link) {
          link.href = faviconUrl;
        } else {
          const el = document.createElement("link");
          el.rel = "icon";
          el.sizes = "32x32";
          el.href = faviconUrl;
          document.head.appendChild(el);
        }
      } catch (e) {
        // silently ignore in non-browser environments
        // console.warn('Could not set favicon', e);
      }
    }

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
