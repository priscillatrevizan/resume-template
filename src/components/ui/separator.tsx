"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";
import styles from "./separator.module.css";

import { cn } from "./utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(styles.root, className)}
      {...props}
    />
  );
}

export { Separator };
