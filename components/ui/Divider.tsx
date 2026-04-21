import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "default" | "accent" | "primary";
}

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", variant = "default", ...props }, ref) => {
    const variants = {
      default: "border-secondary-200",
      accent: "border-accent-300",
      primary: "border-primary-300",
    };

    return (
      <hr
        ref={ref}
        className={cn(
          "shrink-0 border-0",
          orientation === "horizontal"
            ? "h-px w-full bg-current"
            : "h-full w-px",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider };
