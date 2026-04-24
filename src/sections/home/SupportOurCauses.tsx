"use client";

import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { causes } from "@/constants/causes";
import type { SupportedLanguages } from "@/types";
import { cn } from "@/utils";
import { ArrowRightIcon, HeartHandshakeIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { charityInfo } from "@/constants";

export default function SupportOurCauses() {
  const translate = useTranslations("SupportOurCauses");
  const locale = useLocale() as SupportedLanguages;

  return (
    <section className="section-y">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-brand-gradient text-white">
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.25),transparent_60%)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(50%_70%_at_0%_100%,rgba(255,255,255,0.12),transparent_60%)]"
            aria-hidden
          />

          <div className="relative p-6 sm:p-10 md:p-14 lg:p-16">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow={translate("eyebrow")}
                tone="light"
                title={translate("title")}
                description={translate("description")}
              />
            </div>

            <div className="mt-10 md:mt-14 grid gap-6 md:gap-7 md:grid-cols-2 lg:grid-cols-3">
              {causes.map((cause, i) => {
                const Icon = cause.Icon;
                return (
                  <Reveal key={cause.slug} delay={i * 0.08}>
                    <Link
                      href={`/causes/${cause.slug}`}
                      className={cn(
                        "group relative flex flex-col h-full overflow-hidden rounded-2xl",
                        "bg-white/10 backdrop-blur-sm ring-1 ring-white/15",
                        "hover:bg-white/15 hover:ring-white/25",
                        "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
                      )}
                      aria-label={`${translate("learnMoreAbout")} ${cause.title[locale]}`}
                    >
                      <div className="flex flex-col flex-1 p-6 md:p-7">
                        <div className="flex items-center gap-3">
                          <div className="shrink-0 w-10 h-10 rounded-xl bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-semibold text-xl text-white">
                            {cause.title[locale]}
                          </h3>
                        </div>

                        <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
                          {cause.shortDescription[locale]}
                        </p>

                        <div className="mt-auto pt-6">
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary-200 group-hover:text-white transition-colors">
                            {translate("learnMore")}
                            <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <p className="text-white/85 text-sm md:text-base max-w-xl">
                  {translate("donateCallout")}
                </p>
                <Link
                  href={charityInfo.donationUrl}
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30 shrink-0",
                  )}
                >
                  <HeartHandshakeIcon className="w-4 h-4" />
                  {translate("donateNow")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
