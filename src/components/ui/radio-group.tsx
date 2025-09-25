"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";
import * as React from "react";
import styles from "./radio-group.module.css";

import { cn } from "./utils";

function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn(styles.root, className)} {...props} />;
}

function RadioGroupItem({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item data-slot="radio-group-item" className={cn(styles.item, className)} {...props}>
      <RadioGroupPrimitive.Indicator data-slot="radio-group-indicator" className={styles.indicator}>
        <CircleIcon className={styles.icon} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
