"use client";
import Container from "@/components/layouts/Container";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon, HeartHandshakeIcon } from "lucide-react";
import { cn } from "@/utils";

const stats = [
  { value: "139K+", label: "Lives impacted" },
  { value: "60+", label: "Active projects" },
  { value: "3", label: "Countries served" },
];

export default function MainHeroSection() {
  const translate = useTranslations();

  return (
    <section className="relative isolate overflow-hidden bg-primary-800 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/img-6.jpg')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary-700/80 to-primary-500/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(70%_80%_at_20%_10%,rgba(255,255,255,0.16),transparent_65%)]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid md:grid-cols-12 gap-10 items-center py-20 md:py-28 lg:py-32">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow text-secondary-200 before:bg-secondary-200/70">
              Noble Alms International
            </span>
            <h1 className="mt-5 display">
              {translate("homePage.headline")}
            </h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-white/85">
              {translate("homePage.subHeadline")}
            </p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/donate"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 shadow-lg shadow-secondary/30"
                )}
              >
                <HeartHandshakeIcon className="w-4 h-4" />
                {translate("donateNow")}
              </Link>
              <Link
                href="/about-us"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700"
                )}
              >
                {translate("learnMore")}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-5 hidden md:block"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-secondary/20 blur-2xl" aria-hidden />
              <img
                src="/images/img-5.jpg"
                alt="Helping hands"
                className="relative w-full rounded-[2rem] shadow-2xl aspect-[4/5] object-cover ring-1 ring-white/20"
              />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 max-w-[240px] bg-white rounded-2xl p-4 shadow-xl text-neutral-700"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["img-12", "img-13", "img-14"].map((n) => (
                      <img
                        key={n}
                        src={`/images/${n}.jpg`}
                        alt=""
                        className="w-9 h-9 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary-700">
                      Join 2,400+
                    </div>
                    <div className="text-xs text-neutral-500">
                      compassionate donors
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative -mb-10 md:-mb-16 translate-y-10 md:translate-y-16"
        >
          <div className="grid grid-cols-3 rounded-2xl bg-white text-neutral-700 shadow-elevated overflow-hidden">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "p-5 md:p-7 text-center md:text-left",
                  i !== stats.length - 1 && "border-r border-neutral-200/80"
                )}
              >
                <div className="text-2xl md:text-4xl font-bold text-primary-700 tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-xs md:text-sm text-neutral-500 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
      <div className="h-10 md:h-16" aria-hidden />
    </section>
  );
}
