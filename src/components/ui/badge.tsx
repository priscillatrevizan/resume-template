import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        "pastel-blue":
          "border-transparent bg-pastel-blue text-pastel-blue-foreground [a&]:hover:bg-pastel-blue/90",
        "pastel-green":
          "border-transparent bg-pastel-green text-pastel-green-foreground [a&]:hover:bg-pastel-green/90",
        "pastel-purple":
          "border-transparent bg-pastel-purple text-pastel-purple-foreground [a&]:hover:bg-pastel-purple/90",
        "pastel-orange":
          "border-transparent bg-pastel-orange text-pastel-orange-foreground [a&]:hover:bg-pastel-orange/90",
        "pastel-pink":
          "border-transparent bg-pastel-pink text-pastel-pink-foreground [a&]:hover:bg-pastel-pink/90",
        "pastel-cyan":
          "border-transparent bg-pastel-cyan text-pastel-cyan-foreground [a&]:hover:bg-pastel-cyan/90",
        "pastel-yellow":
          "border-transparent bg-pastel-yellow text-pastel-yellow-foreground [a&]:hover:bg-pastel-yellow/90",
        "pastel-indigo":
          "border-transparent bg-pastel-indigo text-pastel-indigo-foreground [a&]:hover:bg-pastel-indigo/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
