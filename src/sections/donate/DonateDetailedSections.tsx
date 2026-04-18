"use client";

import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
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

type DonateSection = {
  id: string;
  emoji: string;
  eyebrow: string;
  title: string;
  Icon: LucideIcon;
  accent: string;
  image: string;
  paragraphs: string[];
  highlights?: string[];
  cta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  reverse?: boolean;
};

const sections: DonateSection[] = [
  {
    id: "monetary",
    emoji: "💸",
    eyebrow: "Give today",
    title: "Monetary Donations",
    Icon: BanknoteIcon,
    accent: "bg-primary-50 text-primary-700",
    image: "/images/img-9.jpg",
    paragraphs: [
      "Monetary donations are a vital part of sustaining the work of Noble Alms International. As a registered charitable organization in Canada, we rely on general financial contributions to support the overall delivery of our programs and respond to urgent community needs.",
      "Your donation is not restricted to one area but is instead directed to where it is most needed across our core initiatives. This includes education support for students, healthcare outreach in underserved communities, and emergency humanitarian assistance for families facing hardship.",
      "This flexibility allows us to respond quickly to real-time needs, ensuring that resources are allocated effectively to maximize impact. Whether it is providing learning materials for students, supporting medical screenings, or delivering essential supplies to vulnerable families, your contribution plays a direct role in improving lives.",
      "All eligible donations are used responsibly and transparently, with a strong focus on accountability and community impact.",
    ],
    highlights: [
      "Directed to where it is most needed across our programs",
      "Funds education, healthcare and humanitarian relief",
      "Transparent, accountable stewardship of every gift",
    ],
    cta: { label: "Donate Now", href: "#donate" },
  },
  {
    id: "monthly",
    emoji: "🔄",
    eyebrow: "Ongoing impact",
    title: "Become a Monthly Donor",
    Icon: RefreshCcwIcon,
    accent: "bg-secondary-50 text-secondary-600",
    image: "/images/img-17.jpg",
    paragraphs: [
      "Monthly donations provide the foundation for long-term sustainability at Noble Alms International. Regular giving allows us to plan ahead, expand our programs, and ensure consistent support for the communities we serve.",
      "Unlike one-time donations, monthly contributions create ongoing impact that helps us maintain and grow our initiatives in education, healthcare, and poverty relief. This includes continuous school outreach programs, regular medical support activities, and ongoing community development efforts.",
      "Your monthly support helps us respond more effectively to long-term challenges rather than short-term needs alone. It ensures that our work is not interrupted and that vulnerable communities continue to receive reliable assistance throughout the year.",
      "Even small monthly contributions add up to significant change over time, allowing us to reach more people and strengthen our long-term mission.",
    ],
    highlights: [
      "Reliable support that plans ahead for communities",
      "Continuous school, medical and community programs",
      "Small monthly gifts create large long-term impact",
    ],
    cta: { label: "Donate Now", href: "#donate?frequency=monthly" },
    reverse: true,
  },
  {
    id: "sponsor",
    emoji: "🤝",
    eyebrow: "Sponsor a project",
    title: "Sponsor a Project",
    Icon: HandshakeIcon,
    accent: "bg-emerald-50 text-emerald-700",
    image: "/images/img-22.jpg",
    paragraphs: [
      "Project sponsorship allows donors to directly support a specific initiative within Noble Alms International. This could include sponsoring an educational outreach program, a medical health screening event, or a community relief project.",
      "Unlike general donations, sponsorship provides a more focused and visible impact. You can choose a project that aligns with your values and directly contribute to its success.",
      "Sponsors are kept informed about the progress and outcomes of the project they support. This includes updates on activities carried out, communities reached, and the overall impact achieved through their contribution.",
      "This level of transparency ensures that sponsors can clearly see how their support is transforming lives in real time.",
    ],
    highlights: [
      "Choose a project that aligns with your values",
      "Receive progress updates and real outcomes",
      "See your support transform lives in real time",
    ],
    cta: { label: "Sponsor Now", href: "/projects" },
    secondaryCta: { label: "View active projects", href: "/projects" },
  },
];

export default function DonateDetailedSections() {
  return (
    <section className="bg-white">
      {sections.map((section, index) => {
        const Icon = section.Icon;
        const isReversed = section.reverse;
        return (
          <div
            key={section.id}
            id={section.id}
            className={cn(
              "section-y-sm scroll-mt-24",
              index === sections.length - 1 && "section-y",
              index % 2 === 1 && "bg-neutral-200/40"
            )}
          >
            <Container>
              <div
                className={cn(
                  "grid lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                )}
              >
                <Reveal
                  className={cn(
                    "lg:col-span-6",
                    isReversed ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center",
                        section.accent
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="eyebrow">{section.eyebrow}</span>
                  </div>
                  <h2 className="mt-5 headline text-primary-700 inline-flex items-center gap-3 flex-wrap">
                    <span aria-hidden className="text-3xl md:text-4xl">
                      {section.emoji}
                    </span>
                    {section.title}
                  </h2>

                  <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-neutral-700">
                    {section.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {section.highlights && (
                    <ul className="mt-6 space-y-2.5">
                      {section.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm md:text-base text-neutral-600"
                        >
                          <CheckCircle2Icon className="w-4 h-4 text-primary-600 shrink-0 mt-1" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={section.cta.href}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30"
                      )}
                    >
                      <HeartHandshakeIcon className="w-4 h-4" />
                      {section.cta.label}
                    </Link>
                    {section.secondaryCta && (
                      <Link
                        href={section.secondaryCta.href}
                        className={cn(
                          buttonVariants({ size: "lg", variant: "outline" }),
                          "rounded-full px-6 h-12 border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                        )}
                      >
                        {section.secondaryCta.label}
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </Reveal>

                <Reveal
                  delay={0.15}
                  className={cn(
                    "lg:col-span-6",
                    isReversed ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="relative">
                    <div
                      className={cn(
                        "absolute -top-5 -left-5 w-24 h-24 rounded-2xl hidden md:block",
                        isReversed ? "bg-primary-100" : "bg-secondary/15"
                      )}
                      aria-hidden
                    />
                    <div
                      className={cn(
                        "absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl hidden md:block",
                        isReversed ? "bg-secondary/15" : "bg-primary-100"
                      )}
                      aria-hidden
                    />
                    <img
                      src={section.image}
                      alt={section.title}
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
