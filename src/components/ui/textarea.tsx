import * as React from "react";
import styles from "./textarea.module.css";
import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={cn(styles.textarea, className)} {...props} />;
}

export { Textarea };
