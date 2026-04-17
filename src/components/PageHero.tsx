"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layouts/Container";
import { cn } from "@/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image = "/images/img-6.jpg",
  children,
  className,
  align = "left",
}: Props) {
  const isCenter = align === "center";

  return (
    <header className={cn("relative overflow-hidden bg-primary-700", className)}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary-700/85 to-primary-600/75"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(255,255,255,0.18),transparent_60%)]"
        aria-hidden
      />

      <Container className="relative z-10 py-20 md:py-28">
        <div
          className={cn(
            "max-w-3xl",
            isCenter && "mx-auto text-center"
          )}
        >
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow text-secondary-200 before:bg-secondary-200/70"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 display text-white"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-lg md:text-xl leading-relaxed text-white/85"
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={cn(
                "mt-8 flex flex-wrap gap-3",
                isCenter && "justify-center"
              )}
            >
              {children}
            </motion.div>
          )}
        </div>
      </Container>
    </header>
  );
}
