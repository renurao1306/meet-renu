'use client';
import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

export const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(
      `p-4 sm:p-8 relative overflow-visible flex flex-col justify-start items-start`,
      className
    )}>
      {children}
    </div>
  );
};

export const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl text-left tracking-tight text-white-100 text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

export const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-400 text-center font-normal",
        "text-left mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const FeatureButton = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => {
  return (
    <button className="relative inline-flex h-16 w-100 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-200" onClick={onClick}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-8 gap-4 text-sm font-medium text-white backdrop-blur-3xl">
        {label}
      </span>
    </button>
  );
};