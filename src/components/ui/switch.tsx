"use client";

import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";
import styles from "./switch.module.css";

import { cn } from "./utils";

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root data-slot="switch" className={cn(styles.root, className)} {...props}>
      <SwitchPrimitive.Thumb data-slot="switch-thumb" className={cn(styles.thumb)} />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
