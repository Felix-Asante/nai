"use client";

import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/utils";
import {
  ChartNoAxesCombinedIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type Objective = {
  title: string;
  description: string;
  Icon: LucideIcon;
  accent: string;
};

export default function ObjectiveSection() {
  const translate = useTranslations("AboutPage.objectives");

  const objectives: Objective[] = [
    {
      title: translate("listOne.title"),
      description: translate("listOne.description"),
      Icon: GraduationCapIcon,
      accent: "bg-primary-50 text-primary-700",
    },
    {
      title: translate("listTwo.title"),
      description: translate("listTwo.description"),
      Icon: HeartPulseIcon,
      accent: "bg-secondary-50 text-secondary-600",
    },
    {
      title: translate("listThree.title"),
      description: translate("listThree.description"),
      Icon: ChartNoAxesCombinedIcon,
      accent: "bg-emerald-50 text-emerald-700",
    },
  ];

  return (
    <section className="section-y bg-neutral-200/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our priorities"
          title={translate("title")}
          description={translate("description")}
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {objectives.map((o, index) => (
            <Reveal key={o.title} delay={index * 0.1}>
              <div className="card-surface card-hover h-full p-6 md:p-7">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    o.accent
                  )}
                >
                  <o.Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary-700">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-neutral-500 leading-relaxed">
                  {o.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
