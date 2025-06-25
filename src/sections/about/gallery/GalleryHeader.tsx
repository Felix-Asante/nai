"use client";
import { motion } from "framer-motion";
import React from "react";
import { useTranslations } from "next-intl";

export default function GalleryHeader() {
  const translate = useTranslations();
  return (
    <header className="mb-10 border-b pb-5">
      <motion.h1
        className="text-4xl md:text-5xl bg-secondary-200 uppercase px-3 py-1 w-fit font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {translate("gallery.title")}
      </motion.h1>
      <motion.p
        className="mt-4 text-xl md:text-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {translate("gallery.description")}
      </motion.p>
    </header>
  );
}
