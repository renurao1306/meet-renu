import React from "react";
import { cn } from "@/lib/utils";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("rounded-lg shadow-md overflow-hidden bg-black text-white-100 ", className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};
