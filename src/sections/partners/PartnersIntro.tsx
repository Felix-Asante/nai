"use client";

import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { BadgeCheckIcon, GlobeIcon, SparklesIcon } from "lucide-react";

export default function PartnersIntro() {
  return (
    <section className="section-y bg-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Partner with us"
              title="Create real, measurable change — together"
              description="Noble Alms International is a registered charitable organization in Canada dedicated to transforming lives through education, healthcare, and humanitarian support."
            />
            <div className="mt-8 grid gap-4">
              {[
                {
                  Icon: BadgeCheckIcon,
                  title: "Registered charitable organization",
                  description:
                    "Transparent, accountable stewardship grounded in Canadian non-profit governance.",
                },
                {
                  Icon: GlobeIcon,
                  title: "Global reach, local execution",
                  description:
                    "Field teams delivering programmes where the need is greatest, with real-time visibility for partners.",
                },
                {
                  Icon: SparklesIcon,
                  title: "Values-aligned partnership",
                  description:
                    "We shape every engagement around your goals, brand values and community priorities.",
                },
              ].map((item) => (
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
              <p>
                Our impact is made possible through the commitment of
                individuals, donors, and corporate partners who share our vision
                of sustainable community development.
              </p>
              <p>
                In today&apos;s world, corporate social responsibility is no
                longer optional. It is a key part of building strong, ethical,
                and impactful organizations. Partnering with a trusted
                charitable organization allows businesses to create meaningful
                social impact while strengthening their brand reputation and
                community engagement.
              </p>
              <p>
                Working with Noble Alms International gives your organization
                the opportunity to contribute to real, measurable change in
                underserved communities while aligning your business values
                with global development goals.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { value: "139K+", label: "Lives impacted" },
                { value: "60+", label: "Active projects" },
                { value: "3", label: "Countries served" },
              ].map((stat) => (
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
