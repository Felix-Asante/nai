"use client";
import React from "react";
import Container from "@/components/layouts/Container";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRightIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/utils";

export default function HomeIntroSection() {
  const translate = useTranslations();

  return (
    <section className="section-y bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-4 headline text-primary-700">
              {translate("homePage.whoWeAre.headline")}
            </h2>
            <p className="mt-5 lead">
              {translate("homePage.whoWeAre.description")}
            </p>
            <Link
              href="/about-us"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 rounded-full px-6 h-12 bg-primary-700 hover:bg-primary-800"
              )}
            >
              {translate("Navbar.aboutUs")}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <div
                className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-secondary/15 hidden md:block"
                aria-hidden
              />
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary-100 hidden md:block"
                aria-hidden
              />
              <img
                src="/images/img-31.jpg"
                alt="Noble Alms community outreach"
                className="relative w-full rounded-3xl shadow-elevated object-cover aspect-[4/3]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
