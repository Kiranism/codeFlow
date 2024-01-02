import * as React from "react";

import { Icons } from "../Icons";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: keyof typeof Icons;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const SelectedIcon = (Icons as unknown as { [key: string]: LucideIcon })[
      icon ?? "add"
    ];
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-input  pl-1 text-sm ring-offset-background",
          className
        )}
      >
        <span>
          <SelectedIcon className="h-5 w-5" />
        </span>

        <input
          {...props}
          type={type}
          ref={ref}
          className="w-full bg-transparent text-base p-2 placeholder:text-muted-foreground border-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
