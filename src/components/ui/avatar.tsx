"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";
import styles from "./avatar.module.css";

import { cn } from "./utils";

function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return <AvatarPrimitive.Root data-slot="avatar" className={cn(styles.root, className)} {...props} />;
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return <AvatarPrimitive.Image data-slot="avatar-image" className={cn(styles.image, className)} {...props} />;
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return <AvatarPrimitive.Fallback data-slot="avatar-fallback" className={cn(styles.fallback, className)} {...props} />;
}

export { Avatar, AvatarFallback, AvatarImage };
