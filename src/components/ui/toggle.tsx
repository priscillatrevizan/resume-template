"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import * as React from "react";
import styles from "./toggle.module.css";

import { cn } from "./utils";

type ToggleVariant = "default" | "outline";
type ToggleSize = "default" | "sm" | "lg";

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & { variant?: ToggleVariant; size?: ToggleSize }) {
  const sizeClass = `size${size.charAt(0).toUpperCase() + size.slice(1)}`;
  const variantClass = `variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`;

  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(styles.root, (styles as any)[variantClass], (styles as any)[sizeClass], className)}
      {...props}
    />
  );
}

export { Toggle };
