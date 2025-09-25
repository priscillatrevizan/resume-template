import * as React from "react";
import styles from "./alert.module.css";
import { cn } from "./utils";

type AlertVariant = "default" | "destructive";

function Alert({ className, variant = "default", ...props }: React.ComponentProps<"div"> & { variant?: AlertVariant }) {
  const variantClass = `variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`;

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(styles.root, (styles as any)[variantClass], className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-title" className={cn(styles.title, className)} {...props} />;
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-description" className={cn(styles.description, className)} {...props} />;
}

export { Alert, AlertDescription, AlertTitle };
