import PageHero from "@/components/PageHero";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { causes, getCauseBySlug } from "@/constants/causes";
import { Link } from "@/i18n/routing";
import { cn } from "@/utils";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  HeartHandshakeIcon,
  SparklesIcon,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { SupportedLanguages } from "@/types";
import { charityInfo } from "@/constants";

type Props = {
  params: Promise<{
    slug: string;
    locale: SupportedLanguages;
  }>;
};

export async function generateStaticParams() {
  return causes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: Props) {
  const { slug, locale } = await props.params;
  const cause = getCauseBySlug(slug);
  if (!cause) return {};
  return {
    title: `${cause.title[locale]} — Noble Alms International`,
    description: cause.shortDescription[locale],
    openGraph: {
      title: cause.title[locale],
      description: cause.shortDescription[locale],
      images: [{ url: cause.image }],
    },
  };
}

export default async function CauseDetailPage(props: Props) {
  const { slug, locale } = await props.params;
  const cause = getCauseBySlug(slug);

  if (!cause) notFound();

  const translate = await getTranslations("SupportOurCauses");
  const Icon = cause.Icon;
  const otherCauses = causes.filter((c) => c.slug !== cause.slug);

  return (
    <main>
      <PageHero
        eyebrow={translate("eyebrow")}
        title={
          <span className="inline-flex items-center gap-3 flex-wrap">
            <span aria-hidden className="text-4xl md:text-5xl">
              {cause.emoji}
            </span>
            {cause.title[locale]}
          </span>
        }
        description={cause.heroTagline[locale]}
        image={cause.image}
      >
        <Link
          href={charityInfo.donationUrl}
          target="_blank"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30",
          )}
        >
          <HeartHandshakeIcon className="w-4 h-4" />
          {translate("donateNow")}
        </Link>
        <Link
          href="#support"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }),
            "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700",
          )}
        >
          {translate("supportEyebrow")}
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </PageHero>

      <section className="section-y bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-8">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 hover:text-primary-500 transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                {translate("backHome")}
              </Link>

              <Reveal className="mt-8">
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
                    cause.accent.badge,
                  )}
                >
                  <span aria-hidden>{cause.emoji}</span>
                  <span>{cause.sdgLabel[locale]}</span>
                </span>
                <p className="mt-6 text-lg md:text-xl text-neutral-700 leading-relaxed">
                  {cause.article.intro[locale]}
                </p>
              </Reveal>

              <Reveal delay={0.1} className="mt-10">
                <div className="overflow-hidden rounded-3xl shadow-elevated">
                  <Image
                    src={cause.image}
                    alt={cause.title[locale]}
                    width={1600}
                    height={900}
                    className="w-full h-[260px] sm:h-[360px] md:h-[460px] object-cover"
                    priority
                  />
                </div>
              </Reveal>

              <div className="mt-10 md:mt-12 space-y-6 text-base md:text-lg leading-relaxed text-neutral-700">
                {cause.article.paragraphs[locale].map((paragraph, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-5">
                {cause.highlight && (
                  <Reveal>
                    <div className="card-surface p-6 md:p-7">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center",
                            cause.accent.badge,
                          )}
                        >
                          <SparklesIcon className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-primary-700">
                          {translate("ourImpact")}
                        </h3>
                      </div>
                      <p className="mt-4 text-neutral-700 leading-relaxed">
                        {cause.highlight[locale]}
                      </p>
                    </div>
                  </Reveal>
                )}

                <Reveal delay={0.1}>
                  <div className="relative overflow-hidden rounded-2xl bg-brand-gradient text-white p-6 md:p-7">
                    <div
                      className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.3),transparent_60%)]"
                      aria-hidden
                    />
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-white/15 ring-1 ring-white/25 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="mt-5 font-semibold text-lg text-white">
                        {translate("makeDifference")}
                      </h3>
                      <p className="mt-2 text-white/85 text-sm leading-relaxed">
                        {translate("makeDifferenceDescription")}
                      </p>
                      <Link
                        href={charityInfo.donationUrl}
                        target="_blank"
                        className={cn(
                          buttonVariants({ size: "lg" }),
                          "mt-5 w-full rounded-full h-11 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30",
                        )}
                      >
                        <HeartHandshakeIcon className="w-4 h-4" />
                        {translate("donateNow")}
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section
        id="support"
        className="section-y bg-neutral-200/40 scroll-mt-24"
      >
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-brand-gradient text-white">
            <div
              className="absolute inset-0 bg-[radial-gradient(60%_80%_at_100%_0%,rgba(244,81,30,0.25),transparent_60%)]"
              aria-hidden
            />
            <div className="relative p-8 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow={translate("supportEyebrow")}
                  tone="light"
                  title={
                    <span className="inline-flex items-center gap-2 flex-wrap">
                      <span aria-hidden>🤝</span>
                      {cause.article.supportTitle[locale]}
                    </span>
                  }
                  description={cause.article.supportIntro[locale]}
                />
                <Link
                  href={charityInfo.donationUrl}
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-8 rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 text-white shadow-lg shadow-secondary/30",
                  )}
                >
                  <HeartHandshakeIcon className="w-4 h-4" />
                  {translate("donateNow")}
                </Link>
              </div>

              <div className="lg:col-span-7">
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  {cause.article.supportListIntro[locale]}
                </p>
                <ul className="mt-6 grid gap-3">
                  {cause.article.supportList[locale].map((item, i) => (
                    <Reveal key={i} delay={i * 0.06}>
                      <li className="flex gap-3 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-4 md:p-5">
                        <CheckCircle2Icon className="w-5 h-5 text-secondary-200 shrink-0 mt-0.5" />
                        <span className="text-white/90 text-sm md:text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <p className="mt-6 text-white/85 text-sm md:text-base leading-relaxed">
                  {cause.article.supportClosing[locale]}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow={translate("otherCausesEyebrow")}
            title={translate("otherCausesTitle")}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {otherCauses.map((other, i) => (
              <Reveal key={other.slug} delay={i * 0.08}>
                <Link
                  href={`/causes/${other.slug}`}
                  className="group card-surface card-hover flex flex-col sm:flex-row overflow-hidden h-full"
                >
                  <div className="relative sm:w-48 shrink-0 aspect-[16/10] sm:aspect-auto overflow-hidden">
                    <img
                      src={other.image}
                      alt={other.title[locale]}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold",
                        other.accent.badge,
                      )}
                    >
                      <span aria-hidden>{other.emoji}</span>
                      <span>{other.sdgLabel[locale]}</span>
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-primary-700">
                      {other.title[locale]}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500 leading-relaxed line-clamp-3">
                      {other.shortDescription[locale]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 group-hover:text-primary-500 transition-colors">
                      {translate("learnMore")}
                      <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
