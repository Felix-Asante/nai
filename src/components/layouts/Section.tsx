import React, { PropsWithChildren } from "react";
import { cn } from "@/utils";
import Container from "./Container";

type Props = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Tone applied to section background */
  tone?: "default" | "muted" | "primary" | "brand";
  /** Vertical rhythm */
  size?: "sm" | "md";
  as?: keyof JSX.IntrinsicElements;
}>;

const toneClasses: Record<NonNullable<Props["tone"]>, string> = {
  default: "bg-white",
  muted: "bg-neutral-200/50",
  primary: "bg-primary-700 text-white",
  brand: "bg-brand-gradient text-white",
};

export default function Section({
  id,
  as: Tag = "section",
  children,
  className,
  containerClassName,
  tone = "default",
  size = "md",
}: Props) {
  return (
    <Tag
      id={id}
      className={cn(
        toneClasses[tone],
        size === "md" ? "section-y" : "section-y-sm",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
