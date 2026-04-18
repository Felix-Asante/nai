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
  type LucideIcon,
} from "lucide-react";

type Option = {
  emoji: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  accent: string;
};

const options: Option[] = [
  {
    emoji: "💼",
    title: "Strategic Giving",
    description:
      "Make a meaningful impact by aligning your financial contributions with programs that reflect your company's values and social priorities. Your support can be directed toward education, health, or community development initiatives.",
    Icon: HandCoinsIcon,
    accent: "bg-primary-50 text-primary-700",
  },
  {
    emoji: "📢",
    title: "Cause Support & Sponsorship",
    description:
      "Support specific projects, campaigns, or outreach programs such as educational seminars, medical missions, or community relief efforts. This allows your organization to see direct and visible impact.",
    Icon: MegaphoneIcon,
    accent: "bg-secondary-50 text-secondary-600",
  },
  {
    emoji: "🎁",
    title: "In-Kind Corporate Donations",
    description:
      "Support our programs by donating goods or resources such as educational materials, medical supplies, or essential items. These contributions are directly distributed to communities in need.",
    Icon: GiftIcon,
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    emoji: "🌍",
    title: "Brand Visibility & Recognition",
    description:
      "Partnering with Noble Alms International provides opportunities for brand recognition through sponsored initiatives, events, and outreach programs — helping your organization demonstrate social impact.",
    Icon: GlobeIcon,
    accent: "bg-sky-50 text-sky-700",
  },
  {
    emoji: "👥",
    title: "Employee Engagement",
    description:
      "Encourage team participation through volunteer programs, outreach activities, and community engagement opportunities. This strengthens team culture while contributing to meaningful social change.",
    Icon: UsersIcon,
    accent: "bg-rose-50 text-rose-700",
  },
  {
    emoji: "🤝",
    title: "Long-Term Strategic Partnerships",
    description:
      "Build long-term relationships that go beyond one-time contributions. Work with us to develop sustainable programs that align with both corporate goals and community needs.",
    Icon: HandshakeIcon,
    accent: "bg-secondary-50 text-secondary-600",
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
          description="We offer flexible partnership opportunities designed to align with your business objectives and social responsibility goals."
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
