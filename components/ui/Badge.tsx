import React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "success" | "warning" | "error"; // Variants for styling
};

export const Badge = ({ children, className, variant = "default" }: BadgeProps) => {
  const baseClasses = "inline-flex items-center rounded text-sm font-medium px-2.5 py-0.5";
  const variantClasses = {
    default: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-700",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
};
