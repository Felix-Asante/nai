"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
  descriptionClassName,
}: Props) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          className={cn(
            "eyebrow mb-4",
            tone === "light" && "text-secondary-200 before:bg-secondary-200/70"
          )}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className={cn(
          "headline",
          tone === "dark" ? "text-primary-700" : "text-white",
          isCenter && "max-w-3xl",
          titleClassName
        )}
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            tone === "light" ? "text-white/85" : "text-neutral-600",
            isCenter && "max-w-2xl",
            descriptionClassName
          )}
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
