"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import * as React from "react";

import styles from "./aspect-ratio.module.css";
import { cn } from "./utils";

function AspectRatio({ className, ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" className={cn(styles.root, className)} {...props} />;
}

export { AspectRatio };
