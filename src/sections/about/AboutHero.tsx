"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Container from "@/components/layouts/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export default function AboutHero() {
  const translate = useTranslations("AboutPage");

  return (
    <div>
      <PageHero
        eyebrow="About us"
        title={translate("title")}
        description={translate("description")}
        image="/images/img-28.jpg"
      />

      <section className="section-y bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative">
                <div
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-primary-100 hidden md:block"
                  aria-hidden
                />
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-secondary/15 hidden md:block"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                  <Image
                    width={900}
                    height={700}
                    src="/images/img-28.jpg"
                    alt="Noble Alms International team"
                    className="w-full h-full object-cover aspect-[4/3]"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-6">
              <span className="eyebrow">Who we are</span>
              <h2 className="mt-4 headline text-primary-700">
                {translate("whoWeAre.title")}
              </h2>
              <p className="mt-5 lead">{translate("whoWeAre.firstLine")}</p>
              <p className="mt-4 lead">
                {translate.rich("whoWeAre.secondLine", {
                  strong: (chunk) => (
                    <strong className="text-primary-700 font-semibold">
                      {chunk}
                    </strong>
                  ),
                })}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
