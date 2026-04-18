"use client";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  BriefcaseIcon,
  CalendarHeartIcon,
  GiftIcon,
  HandCoinsIcon,
  MegaphoneIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

type Option = {
  title: string;
  description: string;
  Icon: LucideIcon;
  tag: string;
};

const options: Option[] = [
  {
    tag: "Strategic Giving",
    title: "Strategic giving",
    description:
      "Multi-year commitments aligned with your corporate social responsibility goals and our priority programmes.",
    Icon: HandCoinsIcon,
  },
  {
    tag: "Cause Marketing",
    title: "Cause marketing",
    description:
      "Co-branded campaigns and product partnerships that drive awareness, sales, and real social outcomes together.",
    Icon: MegaphoneIcon,
  },
  {
    tag: "Employee Engagement",
    title: "Employee engagement",
    description:
      "Workplace giving, matched donations, team volunteering days and immersive learning experiences for your teams.",
    Icon: UsersIcon,
  },
  {
    tag: "Gifts In Kind",
    title: "Gifts in kind",
    description:
      "Donate products, services or expertise — from medical supplies and technology to pro-bono consulting hours.",
    Icon: GiftIcon,
  },
  {
    tag: "Event Partnership",
    title: "Event partnerships",
    description:
      "Sponsor flagship events, field visits and donor experiences that bring your brand close to the impact.",
    Icon: CalendarHeartIcon,
  },
  {
    tag: "Custom",
    title: "A custom partnership",
    description:
      "Have a specific idea? Our partnerships team will design a bespoke engagement tailored to your goals.",
    Icon: BriefcaseIcon,
  },
];

export default function PartnershipTypes() {
  return (
    <section className="section-y bg-neutral-200/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Ways to partner"
          title="Find the shape of partnership that fits you"
          description="Every organisation is unique. Choose the engagement model that matches your vision — or combine several for deeper impact."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {options.map((option, i) => (
            <Reveal key={option.title} delay={(i % 3) * 0.08}>
              <div className="card-surface card-hover h-full p-7 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center">
                    <option.Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-primary-700/60">
                    {option.tag}
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
          ))}
        </div>
      </Container>
    </section>
  );
}
