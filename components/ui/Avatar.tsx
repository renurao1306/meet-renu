import React from "react";
import { cn } from "@/lib/utils";

export const Avatar = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={cn("relative flex items-center justify-center rounded-full overflow-hidden", className)}>{children}</div>;
};

export const AvatarImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return <img src={src} alt={alt} className={cn("h-full w-full object-cover", className)} />;
};

export const AvatarFallback = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("flex items-center justify-center h-full w-full bg-gray-300 text-gray-700", className)}>
      {children}
    </div>
  );
};
