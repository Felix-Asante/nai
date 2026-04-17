"use client";
import { motion, type MotionProps } from "framer-motion";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<
  {
    delay?: number;
    y?: number;
    className?: string;
  } & Omit<MotionProps, "initial" | "whileInView" | "viewport" | "transition">
>;

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
