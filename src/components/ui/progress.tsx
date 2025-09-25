"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import styles from "./progress.module.css";
import { cn } from "./utils";

function Progress({ className, value, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root data-slot="progress" className={cn(styles.root, className)} {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={styles.indicator}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
