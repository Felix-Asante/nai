"use client";
import MainNavbar from "@/components/navbars/MainNavbar";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function MainHeroSection() {
  const translate = useTranslations();

  return (
    <div>
      {/* Navbar */}
      <MainNavbar />
      <section
        className="relative lg:h-screen text-neutral-100 overflow-hidden bg-cover bg-center pt-20 pb-20"
        style={{
          backgroundImage: "url('/images/img-6.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-75"></div>

        <div className="relative z-10 container mx-auto flex flex-col-reverse gap-8 xl:gap-24 md:flex-row items-center justify-between h-full px-6">
          <motion.div
            className="text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="title font-bold">
              Noble Alms International - {translate("homePage.headline")}
            </h1>
            <p className="paragraph-large">
              {translate("homePage.subHeadline")}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="/about-us"
                className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-200"
              >
                {translate("learnMore")}
              </Link>
              <Link
                href="/donate"
                className="bg-secondary text-white px-6 py-3 rounded hover:bg-secondary-200"
              >
                {translate("donateNow")}
              </Link>
            </div>
          </motion.div>
          <motion.img
            src="/images/img-5.jpg"
            alt="Helping Hands"
            className="hidden lg:block w-80 md:w-[40%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>
    </div>
  );
}
