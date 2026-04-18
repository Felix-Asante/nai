"use client";

import Container from "@/components/layouts/Container";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CompassIcon,
  HeartHandshakeIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const translate = useTranslations("NotFound");

  const quickLinks = [
    {
      title: translate("links.home"),
      description: translate("links.homeDescription"),
      href: "/",
      Icon: HomeIcon,
      accent: "bg-primary-50 text-primary-700",
    },
    {
      title: translate("links.projects"),
      description: translate("links.projectsDescription"),
      href: "/projects",
      Icon: CompassIcon,
      accent: "bg-emerald-50 text-emerald-700",
    },
    {
      title: translate("links.donate"),
      description: translate("links.donateDescription"),
      href: "/donate",
      Icon: HeartHandshakeIcon,
      accent: "bg-secondary-50 text-secondary-600",
    },
    {
      title: translate("links.contact"),
      description: translate("links.contactDescription"),
      href: "/contact-us",
      Icon: MailIcon,
      accent: "bg-violet-50 text-violet-700",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(11,60,117,0.08),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-primary-100/40 blur-3xl -z-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-secondary-100/40 blur-3xl -z-10"
        aria-hidden
      />

      <Container>
        <section className="section-y flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span className="block text-[120px] sm:text-[180px] md:text-[220px] leading-none font-bold tracking-tighter bg-gradient-to-br from-primary-700 via-primary-600 to-secondary bg-clip-text text-transparent">
              404
            </span>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute inset-x-0 -bottom-2 md:-bottom-4 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-soft ring-1 ring-neutral-200 text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                <SearchIcon className="w-3.5 h-3.5 text-secondary" />
                {translate("badge")}
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 md:mt-14 headline text-primary-700 max-w-2xl"
          >
            {translate("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl"
          >
            {translate("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-6 h-12 bg-primary-700 hover:bg-primary-800"
              )}
            >
              <HomeIcon className="w-4 h-4" />
              {translate("actions.backHome")}
            </Link>
            <Link
              href="/contact-us"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "rounded-full px-6 h-12 border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              )}
            >
              <ArrowLeftIcon className="w-4 h-4" />
              {translate("actions.contactUs")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-16 md:mt-20 w-full"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-px w-10 bg-neutral-200" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {translate("exploreInstead")}
              </span>
              <span className="h-px w-10 bg-neutral-200" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
              {quickLinks.map((link, i) => {
                const Icon = link.Icon;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.55 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="group card-surface card-hover h-full flex flex-col p-5 md:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center",
                          link.accent
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="mt-4 font-semibold text-primary-700">
                        {link.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-neutral-500 leading-relaxed">
                        {link.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 group-hover:text-primary-500 transition-colors">
                        {translate("visit")}
                        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
      </Container>
    </main>
  );
}
