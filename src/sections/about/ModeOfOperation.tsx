"use client";

import Container from "@/components/layouts/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { useTranslations } from "next-intl";
import {
  BookOpenIcon,
  HeartPulseIcon,
  HandHeartIcon,
} from "lucide-react";

const icons = [BookOpenIcon, HeartPulseIcon, HandHeartIcon];

export default function ModeOfOperation() {
  const translate = useTranslations("AboutPage.modeOfOperation");
  const about = useTranslations("AboutPage");

  const goals = [
    {
      title: translate("listOne.title"),
      description: translate("listOne.description"),
    },
    {
      title: translate("listTwo.title"),
      description: translate("listTwo.description"),
    },
    {
      title: translate("listThree.title"),
      description: translate("listThree.description"),
    },
  ];

  return (
    <section className="section-y">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-brand-gradient text-white">
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.25),transparent_60%)]"
            aria-hidden
          />
          <div className="relative p-8 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={about("modeEyebrow")}
                tone="light"
                title={translate("title")}
                description={translate("description")}
              />
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4">
                {goals.map((goal, i) => {
                  const Icon = icons[i] ?? BookOpenIcon;
                  return (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="flex gap-5 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-5 md:p-6 hover:bg-white/15 transition-colors">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-white">
                            {goal.title}
                          </h3>
                          <p className="mt-1.5 text-white/80 text-sm md:text-base leading-relaxed">
                            {goal.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal delay={0.35}>
                <p className="mt-6 text-white/75 text-sm md:text-base leading-relaxed">
                  {translate("closingText")}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
