"use client";

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import * as React from "react";
import styles from "./toggle-group.module.css";
import toggleStyles from "./toggle.module.css";

import { cn } from "./utils";

type ToggleVariant = "default" | "outline";
type ToggleSize = "default" | "sm" | "lg";

const ToggleGroupContext = React.createContext<{
  size?: ToggleSize;
  variant?: ToggleVariant;
}>({
  size: "default",
  variant: "default",
});

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & { variant?: ToggleVariant; size?: ToggleSize }) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(styles.root, className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & { variant?: ToggleVariant; size?: ToggleSize }) {
  const context = React.useContext(ToggleGroupContext);

  const appliedVariant = context.variant || variant || "default";
  const appliedSize = context.size || size || "default";
  const variantClass = `variant${appliedVariant.charAt(0).toUpperCase() + appliedVariant.slice(1)}`;
  const sizeClass = `size${appliedSize.charAt(0).toUpperCase() + appliedSize.slice(1)}`;

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={appliedVariant}
      data-size={appliedSize}
      className={cn(
        toggleStyles.root,
        (toggleStyles as any)[variantClass],
        (toggleStyles as any)[sizeClass],
        styles.itemExtra || undefined,
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
