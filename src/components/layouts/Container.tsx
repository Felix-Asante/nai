import { cn } from "@/utils";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string }>;
export default function Container({ children, className }: Props) {
  return (
    <div className={cn("container mx-auto px-6 xl:px-12", className)}>
      {children}
    </div>
  );
}
