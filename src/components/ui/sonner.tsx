"use client";

import { useEffect, useState } from "react";
import { Toaster as Sonner, ToasterProps } from "sonner";
import styles from "./sonner.module.css";

const Toaster = ({ ...props }: ToasterProps) => {
  // Fallback: ler o tema atual do atributo data-theme no <html>
  const [theme, setTheme] = useState<ToasterProps["theme"]>(() => {
    if (typeof document === "undefined") return "system";
    return (document.documentElement.getAttribute("data-theme") as ToasterProps["theme"]) || "system";
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const t = (document.documentElement.getAttribute("data-theme") as ToasterProps["theme"]) || "system";
      setTheme(t);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return (
    <Sonner
      theme={theme}
      className={styles.toaster}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
