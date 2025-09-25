import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import styles from "./badge.module.css";

import { cn } from "./utils";

type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "pastel-blue"
  | "pastel-green"
  | "pastel-purple"
  | "pastel-orange"
  | "pastel-pink"
  | "pastel-cyan"
  | "pastel-yellow"
  | "pastel-indigo";

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & { variant?: BadgeVariant; asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";
  const variantClass = `variant${
    variant.charAt(0).toUpperCase() + variant.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase())
  }`;

  return <Comp data-slot="badge" className={cn(styles.root, (styles as any)[variantClass], className)} {...props} />;
}

export { Badge };
