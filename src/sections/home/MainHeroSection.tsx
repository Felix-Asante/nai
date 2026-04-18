"use client";
import Container from "@/components/layouts/Container";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon, HeartHandshakeIcon } from "lucide-react";
import { cn } from "@/utils";

export default function MainHeroSection() {
  const translate = useTranslations();

  const stats = [
    { value: "139K+", label: translate("homePage.heroStats.livesImpacted") },
    { value: "60+", label: translate("homePage.heroStats.activeProjects") },
    { value: "3", label: translate("homePage.heroStats.countriesServed") },
  ] as const;

  return (
    <section className="relative mb-16 overflow-visible sm:mb-20 md:mb-24">
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-b-[2.5rem] bg-primary-800 md:rounded-b-[3rem]"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/img-6.jpg')" }}
        />
        {/* Original hero overlay weight — strong navy wash over the photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary-700/80 to-primary-500/60" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_20%_10%,rgba(255,255,255,0.16),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-900/40 to-transparent" />
      </div>

      <Container className="relative z-10 px-4 pt-16 pb-28 text-white md:px-6 md:pt-20 md:pb-32 lg:pt-24 lg:pb-36">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow text-secondary-200 before:bg-secondary-200/70">
              {translate("homePage.brandName")}
            </span>
            <h1 className="mt-5 display">{translate("homePage.headline")}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              {translate("homePage.subHeadline")}
            </p>
            <p className="mt-5 max-w-2xl text-sm font-medium tracking-wide text-white/90 md:text-base">
              {translate("homePage.heroTagline")}
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
                  "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 shadow-lg shadow-secondary/30",
                )}
              >
                <HeartHandshakeIcon className="w-4 h-4" />
                {translate("donateNow")}
              </Link>
              <Link
                href="/about-us"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700",
                )}
              >
                {translate("learnMore")}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:col-span-5 md:block"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-secondary/20 blur-2xl"
                aria-hidden
              />
              <img
                src="/images/img-5.jpg"
                alt={translate("homePage.heroImageAlt")}
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/20"
              />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 max-w-[240px] rounded-2xl bg-white p-4 text-neutral-700 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["img-12", "img-13", "img-14"].map((n) => (
                      <img
                        key={n}
                        src={`/images/${n}.jpg`}
                        alt=""
                        className="h-9 w-9 rounded-full border-2 border-white object-cover"
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
      </Container>

      {/* Stats: absolutely positioned at bottom of hero; centered on the seam (half over hero, half over next section) */}
      <div className="pointer-events-none absolute left-0 right-0 top-full z-20 -translate-y-1/2 px-4 sm:px-6">
        <Container className="pointer-events-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className={cn(
                "grid grid-cols-3 overflow-hidden rounded-2xl border border-white/25",
                "bg-white/95 text-neutral-700 shadow-elevated backdrop-blur-md",
                "md:rounded-3xl",
              )}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={cn(
                    "flex min-h-[5.5rem] flex-col justify-center px-2 py-5 sm:min-h-[6rem] sm:px-4 md:min-h-[6.5rem] md:px-8 md:py-7",
                    "text-center md:text-left",
                    i !== stats.length - 1 && "border-r border-neutral-200/90",
                  )}
                >
                  <div className="text-xl font-bold tabular-nums tracking-tight text-primary-700 sm:text-2xl md:text-3xl lg:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[0.65rem] font-medium leading-snug text-neutral-500 sm:text-xs md:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
