import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import styles from "./button.module.css";
import { cn } from "./utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

function Button({ className, variant = "default", size = "default", asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const buttonClasses = cn(
    styles.button,
    styles[variant],
    styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
    className
  );

  return <Comp data-slot="button" className={buttonClasses} {...props} />;
}

export { Button, type ButtonProps };
