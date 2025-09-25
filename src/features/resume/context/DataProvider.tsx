import React, { createContext, useContext, useMemo } from "react";
import resumeData from "../../../data/resume.json";
import { getImageMap, resolveAsset } from "../services/assetResolver";
import { transformResume } from "../services/transformResume";

export type Resume = typeof resumeData;

const DataContext = createContext<Resume | null>(null);

// images map is provided by the assetResolver service
const images = getImageMap();

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useMemo(() => {
    const cloned: any = transformResume(resumeData, resolveAsset);

    // Set favicon in the document head if we can find one.
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
