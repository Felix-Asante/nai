"use client";

import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/utils";
import {
  ArrowRightIcon,
  BookOpenIcon,
  HandshakeIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
} from "lucide-react";

const impactAreas = [
  {
    Icon: BookOpenIcon,
    title: "Expand access to education",
    accent: "bg-sky-50 text-sky-700",
  },
  {
    Icon: HeartPulseIcon,
    title: "Improve healthcare delivery",
    accent: "bg-rose-50 text-rose-700",
  },
  {
    Icon: HandshakeIcon,
    title: "Support vulnerable communities",
    accent: "bg-emerald-50 text-emerald-700",
  },
];

export default function WhyPartner() {
  return (
    <section className="section-y bg-white">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-brand-gradient text-white">
          <div
            className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.25),transparent_60%)]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(50%_70%_at_0%_100%,rgba(255,255,255,0.1),transparent_60%)]"
            aria-hidden
          />

          <div className="relative p-8 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Why partner with us"
                tone="light"
                title="A mission focused on real impact"
                description="By partnering with Noble Alms International, your organization becomes part of a mission focused on real impact. Together, we can expand access to education, improve healthcare delivery, and support vulnerable communities."
              />

              <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed">
                Your partnership helps create lasting change while positioning
                your organization as a socially responsible leader committed to
                making a difference.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#partner-inquiry"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30"
                  )}
                >
                  <HandshakeIcon className="w-4 h-4" />
                  Become a partner today
                </Link>
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700"
                  )}
                >
                  See our work
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid gap-4">
                {impactAreas.map((area, i) => {
                  const Icon = area.Icon;
                  return (
                    <Reveal key={area.title} delay={i * 0.08}>
                      <div className="flex items-center gap-5 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-5 md:p-6 hover:bg-white/15 transition-colors">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="font-semibold text-white text-lg">
                          {area.title}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}

                <Reveal delay={0.3}>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-5">
                      <ShieldCheckIcon className="w-5 h-5 text-secondary-200" />
                      <p className="mt-3 font-semibold text-white">
                        Trusted stewardship
                      </p>
                      <p className="mt-1 text-sm text-white/80 leading-relaxed">
                        Transparent reporting and donor-first governance.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-5">
                      <TrendingUpIcon className="w-5 h-5 text-secondary-200" />
                      <p className="mt-3 font-semibold text-white">
                        Measurable outcomes
                      </p>
                      <p className="mt-1 text-sm text-white/80 leading-relaxed">
                        Programmes designed to deliver real, trackable impact.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
