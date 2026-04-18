"use client";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  GlobeIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  type LucideIcon,
} from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const benefits: Benefit[] = [
  {
    title: "Meaningful impact",
    description:
      "Invest in community-led programmes with measurable outcomes across education, health and livelihoods.",
    Icon: TrendingUpIcon,
  },
  {
    title: "Trusted stewardship",
    description:
      "A registered non-profit with transparent reporting, donor-first governance and rigorous compliance.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "Global reach, local teams",
    description:
      "Our field teams execute in Africa and beyond, giving your organisation a credible presence where it matters most.",
    Icon: GlobeIcon,
  },
];

export default function PartnerBenefits() {
  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why partner with Noble Alms"
          title="A partnership built on outcomes"
          description="We work alongside forward-thinking organisations to deliver programmes that protect vulnerable communities and scale what works."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="card-surface card-hover h-full p-7">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center">
                  <b.Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary-700">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
