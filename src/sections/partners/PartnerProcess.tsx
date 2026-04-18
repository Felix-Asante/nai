"use client";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function PartnerProcess() {
  const t = useTranslations("PartnersPage.process");

  const steps = useMemo(
    () => [
      {
        title: t("step1Title"),
        description: t("step1Desc"),
      },
      {
        title: t("step2Title"),
        description: t("step2Desc"),
      },
      {
        title: t("step3Title"),
        description: t("step3Desc"),
      },
    ],
    [t]
  );

  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <li
                className={cn(
                  "relative card-surface h-full p-7",
                  "before:absolute before:-top-3 before:left-6 before:inline-flex",
                  "before:items-center before:justify-center before:w-8 before:h-8",
                  "before:rounded-full before:bg-secondary before:text-white",
                  "before:text-sm before:font-bold",
                  "before:shadow-sm before:content-[attr(data-step)]"
                )}
                data-step={`0${i + 1}`}
              >
                <h3 className="mt-2 text-lg font-semibold text-primary-700">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
