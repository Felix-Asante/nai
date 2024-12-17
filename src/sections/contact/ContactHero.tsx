"use client";
import Container from "@/components/layouts/Container";
import MainNavbar from "@/components/navbars/MainNavbar";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContactHero() {
  const t = useTranslations("ContactUsPage");

  return (
    <div>
      {/* Navbar */}
      <MainNavbar />
      <section
        className="relative py-10 md:h-[18rem] text-neutral-100 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img-6.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-75"></div>

        <Container className="relative z-10 h-full flex flex-col items-center justify-center">
          <motion.div
            className="text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="title font-bold">{t("title")}</h1>
            <p className="text-base md:paragraph-large">{t("description")}</p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
