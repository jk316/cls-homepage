import { cn } from "@/lib/utils";
import { LinkHTMLAttributes, forwardRef } from "react";

export interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "primary" | "accent";
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant = "default", href, ...props }, ref) => {
    const variants = {
      default:
        "text-primary-600 hover:text-primary-700 hover:underline",
      primary:
        "text-primary-600 font-medium hover:text-primary-700",
      accent:
        "text-accent-600 hover:text-accent-700",
    };

    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "inline-flex items-center gap-1 transition-colors",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Link.displayName = "Link";

export { Link };
