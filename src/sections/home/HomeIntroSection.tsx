"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layouts/Container";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomeIntroSection() {
  const translate = useTranslations();

  return (
    <Container className="px-6 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-20 gap-y-12">
        {/* Text Section */}
        <motion.div
          className="space-y-6 lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="subtitle font-bold text-neutral-800">
            {translate("homePage.whoWeAre.headline")}
          </h2>
          <p className="text-neutral-600  leading-relaxed">
            {translate("homePage.whoWeAre.description")}
          </p>
          <Link href="/about-us" className={buttonVariants({ size: "lg" })}>
            {translate("Navbar.aboutUs")}
          </Link>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/images/img-31.jpg"
            alt="About Us - Noble Alms International"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>
    </Container>
  );
}
