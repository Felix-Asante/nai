"use client";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
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
};

export default function HowUCanHelp() {
  const translate = useTranslations();

  const options: HelpOption[] = [
    {
      title: translate("HowUCanHelp.itemOne.title"),
      description: translate("HowUCanHelp.itemOne.description"),
      Icon: BanknoteIcon,
      accent: "bg-primary-50 text-primary-700",
    },
    {
      title: translate("HowUCanHelp.itemTwo.title"),
      description: translate("HowUCanHelp.itemTwo.description"),
      Icon: RefreshCcwIcon,
      accent: "bg-secondary-50 text-secondary-600",
    },
    {
      title: translate("HowUCanHelp.itemThree.title"),
      description: translate("HowUCanHelp.itemThree.description"),
      Icon: HandshakeIcon,
      accent: "bg-emerald-50 text-emerald-700",
    },
    {
      title: translate("HowUCanHelp.itemFour.title"),
      description: translate("HowUCanHelp.itemFour.description"),
      Icon: HeartIcon,
      accent: "bg-violet-50 text-violet-700",
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
          {options.map((option, index) => (
            <Reveal key={option.title} delay={index * 0.08}>
              <div className="card-surface card-hover h-full p-6 flex flex-col">
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
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {option.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact-us"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-6 h-12 bg-primary-700 hover:bg-primary-800"
            )}
          >
            {translate("supportUs")}
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
