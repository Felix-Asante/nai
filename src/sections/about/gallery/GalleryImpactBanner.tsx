"use client";

import Reveal from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/layouts/Container";
import { cn } from "@/utils";
import { Link } from "@/i18n/routing";
import { HeartPulseIcon, ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function GalleryImpactBanner() {
  const t = useTranslations("gallery");

  const items = [t("impactList1"), t("impactList2"), t("impactList3")];

  return (
    <section className="section-y-sm bg-white">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient text-white p-8 md:p-14 lg:p-16">
            <div
              className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.25),transparent_60%)]"
              aria-hidden
            />
            <div className="relative grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow text-secondary-200 before:bg-secondary-200/70">
                  {t("impactEyebrow")}
                </span>
                <h2 className="mt-4 headline text-white max-w-2xl">
                  {t("impactTitle")}
                </h2>
                <p className="mt-4 text-white/85 text-lg leading-relaxed max-w-xl">
                  {t("impactBody")}
                </p>
              </div>
              <div className="lg:col-span-5">
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <HeartPulseIcon className="h-5 w-5 mt-0.5 text-secondary-200 shrink-0" />
                      <span className="text-white/90 text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/donate#donate"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-7 rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600"
                  )}
                >
                  {t("donateCta")}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
