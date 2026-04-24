"use client";

import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { charityInfo } from "@/constants";
import { Link } from "@/i18n/routing";
import { cn } from "@/utils";
import {
  ArrowRightIcon,
  BanknoteIcon,
  CheckCircle2Icon,
  HandshakeIcon,
  HeartHandshakeIcon,
  RefreshCcwIcon,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type SectionId = "monetary" | "monthly" | "sponsor";

type SectionConfig = {
  id: SectionId;
  emoji: string;
  Icon: LucideIcon;
  accent: string;
  image: string;
  reverse?: boolean;
  secondaryCta?: boolean;
};

const sectionConfigs: SectionConfig[] = [
  {
    id: "monetary",
    emoji: "💸",
    Icon: BanknoteIcon,
    accent: "bg-primary-50 text-primary-700",
    image: "/images/img-9.jpg",
  },
  {
    id: "monthly",
    emoji: "🔄",
    Icon: RefreshCcwIcon,
    accent: "bg-secondary-50 text-secondary-600",
    image: "/images/img-17.jpg",
    reverse: true,
  },
  {
    id: "sponsor",
    emoji: "🤝",
    Icon: HandshakeIcon,
    accent: "bg-primary-50 text-primary-700",
    image: "/images/img-22.jpg",
    secondaryCta: true,
  },
];

export default function DonateDetailedSections() {
  const t = useTranslations("DonatePage.sections");

  return (
    <section className="bg-white">
      {sectionConfigs.map((config, index) => {
        const Icon = config.Icon;
        const isReversed = config.reverse;
        const id = config.id;
        const paragraphs = [
          t(`${id}.p1`),
          t(`${id}.p2`),
          t(`${id}.p3`),
          t(`${id}.p4`),
        ];
        const highlights = [t(`${id}.h1`), t(`${id}.h2`), t(`${id}.h3`)];

        return (
          <div
            key={id}
            id={id}
            className={cn(
              "section-y-sm scroll-mt-24",
              index === sectionConfigs.length - 1 && "section-y",
              index % 2 === 1 && "bg-neutral-200/40",
            )}
          >
            <Container>
              <div
                className={cn(
                  "grid lg:grid-cols-12 gap-10 lg:gap-14 items-center",
                )}
              >
                <Reveal
                  className={cn(
                    "lg:col-span-6",
                    isReversed ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center",
                        config.accent,
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="eyebrow">{t(`${id}.eyebrow`)}</span>
                  </div>
                  <h2 className="mt-5 headline text-primary-700 inline-flex items-center gap-3 flex-wrap">
                    <span aria-hidden className="text-3xl md:text-4xl">
                      {config.emoji}
                    </span>
                    {t(`${id}.title`)}
                  </h2>

                  <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-neutral-700">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm md:text-base text-neutral-600"
                      >
                        <CheckCircle2Icon className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={charityInfo.donationUrl}
                      target="_blank"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30",
                      )}
                    >
                      <HeartHandshakeIcon className="w-4 h-4" />
                      {t(`${id}.cta`)}
                    </Link>
                    {config.secondaryCta && (
                      <Link
                        href="/projects"
                        className={cn(
                          buttonVariants({ size: "lg", variant: "outline" }),
                          "rounded-full px-6 h-12 border-neutral-300 text-neutral-700 hover:bg-neutral-100",
                        )}
                      >
                        {t("sponsor.secondaryCta")}
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </Reveal>

                <Reveal
                  delay={0.15}
                  className={cn(
                    "lg:col-span-6",
                    isReversed ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <div className="relative">
                    <div
                      className={cn(
                        "absolute -top-5 -left-5 w-24 h-24 rounded-2xl hidden md:block",
                        isReversed ? "bg-primary-100" : "bg-secondary/15",
                      )}
                      aria-hidden
                    />
                    <div
                      className={cn(
                        "absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl hidden md:block",
                        isReversed ? "bg-secondary/15" : "bg-primary-100",
                      )}
                      aria-hidden
                    />
                    <img
                      src={config.image}
                      alt={t(`${id}.title`)}
                      className="relative w-full rounded-3xl shadow-elevated object-cover aspect-[4/3]"
                    />
                  </div>
                </Reveal>
              </div>
            </Container>
          </div>
        );
      })}
    </section>
  );
}
