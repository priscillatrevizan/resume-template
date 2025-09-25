"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import styles from "./accordion.module.css";
import { cn } from "./utils";

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn(styles.item, className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className={styles.accordionTriggerHeader}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(styles.accordionTrigger, className)}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            styles.chevron
            // rotate when the trigger's state is open; Radix sets data-state on the trigger itself
            // We'll rely on attribute selectors in global CSS if needed, but also allow manual toggle via className
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content data-slot="accordion-content" className={cn(styles.accordionContent)} {...props}>
      <div className={cn(styles.contentInner, className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
