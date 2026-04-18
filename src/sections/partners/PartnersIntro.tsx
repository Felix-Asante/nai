"use client";

import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { BadgeCheckIcon, GlobeIcon, SparklesIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PartnersIntro() {
  const t = useTranslations("PartnersPage.intro");

  const cards = [
    {
      Icon: BadgeCheckIcon,
      title: t("card1Title"),
      description: t("card1Desc"),
    },
    {
      Icon: GlobeIcon,
      title: t("card2Title"),
      description: t("card2Desc"),
    },
    {
      Icon: SparklesIcon,
      title: t("card3Title"),
      description: t("card3Desc"),
    },
  ];

  const stats = [
    { value: "139K+", label: t("statLives") },
    { value: "60+", label: t("statProjects") },
    { value: "3", label: t("statCountries") },
  ];

  return (
    <section className="section-y bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
            />
            <div className="mt-8 grid gap-4">
              {cards.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                    <item.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-700">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-neutral-700">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
              <p>{t("body3")}</p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-surface p-5 text-center"
                >
                  <div className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-br from-primary-700 to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs md:text-sm font-medium text-neutral-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
