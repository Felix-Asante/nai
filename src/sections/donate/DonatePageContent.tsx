"use client";

import Container from "@/components/layouts/Container";
import { buttonVariants } from "@/components/ui/button";
import { charityInfo } from "@/constants";
import { Link } from "@/i18n/routing";
import DonateDetailedSections from "@/sections/donate/DonateDetailedSections";
import { cn } from "@/utils";
import { ArrowRightIcon, HeartHandshakeIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function DonatePageContent() {
  const t = useTranslations("DonatePage");

  return (
    <main>
      <header className="relative overflow-hidden bg-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/img-30.jpg')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary-600/70"
          aria-hidden
        />
        <Container className="relative z-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-secondary-200 before:bg-secondary-200/70 justify-center">
              {t("hero.eyebrow")}
            </span>
            <h1 className="mt-5 display">{t("hero.title")}</h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed">
              {t("hero.description")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={charityInfo.donationUrl}
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 shadow-lg shadow-secondary/30",
                )}
              >
                <HeartHandshakeIcon className="w-4 h-4" />
                {t("hero.donateNow")}
              </Link>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700",
                )}
              >
                {t("hero.seeProjects")}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <nav
              aria-label={t("hero.waysNavLabel")}
              className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm"
            >
              {[
                { href: "#monetary", label: t("hero.jumpMonetary") },
                { href: "#monthly", label: t("hero.jumpMonthly") },
                { href: "#sponsor", label: t("hero.jumpSponsor") },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </header>

      <DonateDetailedSections />

      {/* <section id="donate" className="section-y bg-neutral-200/40 scroll-mt-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow={t("formSection.eyebrow")}
            title={t("formSection.title")}
            description={t("formSection.description")}
          />
          <Reveal className="mt-10">
            <DonationForm />
          </Reveal>
        </Container>
      </section> */}
    </main>
  );
}
