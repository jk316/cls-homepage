import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-100 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 hover:shadow-primary active:bg-primary-800",
      secondary:
        "border border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100",
      ghost:
        "text-secondary hover:bg-tertiary hover:text-primary",
      accent:
        "bg-accent-500 text-white hover:bg-accent-600 hover:shadow-accent active:bg-accent-700",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
