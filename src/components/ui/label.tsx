"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";
import styles from "./label.module.css";
import { cn } from "./utils";

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return <LabelPrimitive.Root data-slot="label" className={cn(styles.label, className)} {...props} />;
}

export { Label };
