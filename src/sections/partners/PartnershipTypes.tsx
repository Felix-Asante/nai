"use client";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  GiftIcon,
  GlobeIcon,
  HandCoinsIcon,
  HandshakeIcon,
  MegaphoneIcon,
  UsersIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function PartnershipTypes() {
  const t = useTranslations("PartnersPage.types");

  const options = useMemo(
    () =>
      [
        {
          emoji: "💼",
          title: t("strategicGiving"),
          description: t("strategicGivingDesc"),
          Icon: HandCoinsIcon,
          accent: "bg-primary-50 text-primary-700",
        },
        {
          emoji: "📢",
          title: t("causeSupport"),
          description: t("causeSupportDesc"),
          Icon: MegaphoneIcon,
          accent: "bg-secondary-50 text-secondary-600",
        },
        {
          emoji: "🎁",
          title: t("inKind"),
          description: t("inKindDesc"),
          Icon: GiftIcon,
          accent: "bg-emerald-50 text-emerald-700",
        },
        {
          emoji: "🌍",
          title: t("brand"),
          description: t("brandDesc"),
          Icon: GlobeIcon,
          accent: "bg-sky-50 text-sky-700",
        },
        {
          emoji: "👥",
          title: t("employee"),
          description: t("employeeDesc"),
          Icon: UsersIcon,
          accent: "bg-rose-50 text-rose-700",
        },
        {
          emoji: "🤝",
          title: t("longTerm"),
          description: t("longTermDesc"),
          Icon: HandshakeIcon,
          accent: "bg-secondary-50 text-secondary-600",
        },
      ],
    [t]
  );

  return (
    <section className="section-y bg-neutral-200/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {options.map((option, i) => {
            const Icon = option.Icon;
            return (
              <Reveal key={option.title} delay={(i % 3) * 0.08}>
                <div className="card-surface card-hover h-full p-7 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div
                      className={
                        "w-12 h-12 rounded-xl flex items-center justify-center " +
                        option.accent
                      }
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span aria-hidden className="text-2xl leading-none">
                      {option.emoji}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary-700">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed flex-1">
                    {option.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
