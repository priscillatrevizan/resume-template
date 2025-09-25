import styles from "./skeleton.module.css";
import { cn } from "./utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="skeleton" className={cn(styles.root, className)} {...props} />;
}

export { Skeleton };
