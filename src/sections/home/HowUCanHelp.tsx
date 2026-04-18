"use client";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "@/i18n/routing";
import { cn } from "@/utils";
import {
  ArrowRightIcon,
  BanknoteIcon,
  HandshakeIcon,
  HeartIcon,
  RefreshCcwIcon,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type HelpOption = {
  title: string;
  description: string;
  Icon: LucideIcon;
  accent: string;
  cta: string;
  action: "link";
  href: string;
};

export default function HowUCanHelp() {
  const translate = useTranslations();

  const options: HelpOption[] = [
    {
      title: translate("HowUCanHelp.itemOne.title"),
      description: translate("HowUCanHelp.itemOne.description"),
      Icon: BanknoteIcon,
      accent: "bg-primary-50 text-primary-700",
      cta: translate("donateNow"),
      action: "link",
      href: "/donate",
    },
    {
      title: translate("HowUCanHelp.itemTwo.title"),
      description: translate("HowUCanHelp.itemTwo.description"),
      Icon: RefreshCcwIcon,
      accent: "bg-secondary-50 text-secondary-600",
      cta: "Give monthly",
      action: "link",
      href: "/donate?frequency=monthly",
    },
    {
      title: translate("HowUCanHelp.itemThree.title"),
      description: translate("HowUCanHelp.itemThree.description"),
      Icon: HandshakeIcon,
      accent: "bg-emerald-50 text-emerald-700",
      cta: "Explore partnerships",
      action: "link",
      href: "/partners",
    },
    {
      title: translate("HowUCanHelp.itemFour.title"),
      description: translate("HowUCanHelp.itemFour.description"),
      Icon: HeartIcon,
      accent: "bg-violet-50 text-violet-700",
      cta: "Start volunteering",
      action: "link",
      href: "/volunteer",
    },
  ];

  return (
    <section className="section-y bg-neutral-200/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Get involved"
          title={translate("HowUCanHelp.headline")}
          description={translate("HowUCanHelp.description")}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {options.map((option, index) => {
            const content = (
              <div className="card-surface card-hover h-full p-6 flex flex-col text-left">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    option.accent
                  )}
                >
                  <option.Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary-700">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed flex-1">
                  {option.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 group-hover:text-secondary transition-colors">
                  {option.cta}
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            );

            return (
              <Reveal
                key={option.title}
                delay={index * 0.08}
                className="group h-full"
              >
                <Link
                  href={option.href}
                  className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-2xl"
                >
                  {content}
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-secondary transition-colors"
          >
            Looking to partner as an organization?
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
