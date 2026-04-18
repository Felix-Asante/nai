"use client";

import Container from "@/components/layouts/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import VolunteerApplicationForm from "@/sections/volunteer/VolunteerApplicationForm";
import { cn } from "@/utils";
import {
  ArrowRightIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CalendarCheck2Icon,
  CheckCircle2Icon,
  ClipboardListIcon,
  HandHeartIcon,
  HeartPulseIcon,
  MailIcon,
  MegaphoneIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

const skillIcons = [
  BookOpenIcon,
  HeartPulseIcon,
  ClipboardListIcon,
  MegaphoneIcon,
  HandHeartIcon,
  CalendarCheck2Icon,
] as const;

const whyIcons = [SparklesIcon, UsersIcon, HandHeartIcon, CheckCircle2Icon] as const;

export default function CareersVolunteersPageContent() {
  const t = useTranslations("VolunteerPage");

  const skillKeys = [
    "skill1",
    "skill2",
    "skill3",
    "skill4",
    "skill5",
    "skill6",
  ] as const;

  const oppKeys = ["list1", "list2", "list3", "list4"] as const;
  const whyLabels = ["pill1", "pill2", "pill3", "pill4"] as const;

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={
          <span className="inline-flex items-baseline gap-3 flex-wrap">
            <span aria-hidden className="text-3xl md:text-4xl">
              💙
            </span>
            {t("hero.title")}
          </span>
        }
        description={t("hero.description")}
        image="/images/img-20.jpg"
      >
        <Link
          href="#register"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 shadow-lg shadow-secondary/30"
          )}
        >
          <HandHeartIcon className="w-4 h-4" />
          {t("hero.register")}
        </Link>
        <Link
          href="#roles"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700"
          )}
        >
          {t("hero.openRoles")}
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </PageHero>

      <section className="section-y bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow justify-center">{t("intro.eyebrow")}</span>
            <h2 className="mt-4 headline text-primary-700">{t("intro.title")}</h2>
            <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed text-neutral-600">
              <p>{t("intro.p1")}</p>
              <p>{t("intro.p2")}</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="roles" className="section-y bg-neutral-200/40 scroll-mt-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow={t("mission.eyebrow")}
            title={t("mission.title")}
            description={t("mission.description")}
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillKeys.map((key, i) => {
              const Icon = skillIcons[i];
              return (
                <Reveal key={key} delay={(i % 3) * 0.08}>
                  <div className="card-surface card-hover h-full p-6 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-700">
                        {t(`mission.${key}`)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 card-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary-700 text-lg">
                  {t("openRoles.title")}
                </h3>
                <p className="mt-1 text-sm md:text-base text-neutral-600 leading-relaxed">
                  {t("openRoles.description")}
                </p>
              </div>
              <Link
                href="#register"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-5 h-11 bg-primary-700 hover:bg-primary-800 text-white shrink-0"
                )}
              >
                {t("openRoles.cta")}
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                eyebrow={t("volunteerOpps.eyebrow")}
                title={t("volunteerOpps.title")}
                description={t("volunteerOpps.description")}
              />

              <ul className="mt-8 space-y-3">
                {oppKeys.map((key) => (
                  <li
                    key={key}
                    className="flex items-start gap-3 text-base md:text-lg text-neutral-700"
                  >
                    <CheckCircle2Icon className="w-5 h-5 text-primary-600 shrink-0 mt-1" />
                    <span>{t(`volunteerOpps.${key}`)}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm md:text-base text-neutral-600 leading-relaxed">
                {t("volunteerOpps.closing")}
              </p>

              <div className="mt-8">
                <Link
                  href="#register"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30"
                  )}
                >
                  <HandHeartIcon className="w-4 h-4" />
                  {t("volunteerOpps.register")}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="lg:col-span-6">
              <div className="relative">
                <div
                  className="absolute -top-5 -left-5 w-24 h-24 rounded-2xl bg-primary-100 hidden md:block"
                  aria-hidden
                />
                <div
                  className="absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl bg-secondary/15 hidden md:block"
                  aria-hidden
                />
                <img
                  src="/images/img-21.jpg"
                  alt={t("volunteerOpps.imageAlt")}
                  className="relative w-full rounded-3xl shadow-elevated object-cover aspect-[4/3]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 max-w-4xl mx-auto card-surface p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <UsersIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-primary-700">
                  {t("whoCan.title")}
                </p>
                <p className="mt-1 text-sm md:text-base text-neutral-600 leading-relaxed">
                  {t("whoCan.description")}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-y bg-white pb-0">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient text-white">
            <div
              className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.25),transparent_60%)]"
              aria-hidden
            />
            <div className="relative p-8 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow={t("whyJoin.eyebrow")}
                  tone="light"
                  title={t("whyJoin.title")}
                  description={t("whyJoin.description")}
                />
              </div>

              <div className="lg:col-span-5 grid sm:grid-cols-2 gap-3">
                {whyLabels.map((key, i) => {
                  const Icon = whyIcons[i];
                  return (
                    <div
                      key={key}
                      className="flex items-center gap-3 rounded-2xl bg-white/10 ring-1 ring-white/15 p-4"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white">
                        {t(`whyJoin.${key}`)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="register" className="section-y bg-white scroll-mt-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow={t("register.eyebrow")}
            title={t("register.title")}
            description={t("register.description")}
          />

          <Reveal className="mt-12 max-w-3xl mx-auto">
            <div className="card-surface p-6 md:p-10">
              <VolunteerApplicationForm />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-neutral-100 ring-1 ring-neutral-200 p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center shrink-0">
                <MailIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-primary-700">
                  {t("register.questionsTitle")}
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  {t("register.questionsDescription")}
                </p>
              </div>
              <a
                href="mailto:info@noblealmsinternational.com"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-5 h-11 border-primary-200 text-primary-700 hover:bg-primary-50"
                )}
              >
                info@noblealmsinternational.com
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
