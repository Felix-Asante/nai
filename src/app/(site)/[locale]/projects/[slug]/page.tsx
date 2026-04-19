import ProjectsCard from "@/components/cards/ProjectsCard";
import Container from "@/components/layouts/Container";
import DisplayPortableText from "@/components/portableText";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "@/i18n/routing";
import { getSingleProject } from "@/lib/sanity/api/projects";
import { urlFor } from "@/lib/sanity/sanity.image";
import ProjectGallery from "@/sections/ProjectGallery";
import ProjectShareSection from "@/sections/projects/ProjectShareSection";
import { SupportedLanguages } from "@/types";
import {
  getProjectYearAndStatus,
  projectTimelineBadgeClass,
} from "@/utils/projectTimeline";
import { cn } from "@/utils";
import { ArrowLeftIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
    locale: SupportedLanguages;
  }>;
};

export async function generateMetadata(props: Props) {
  const { slug, locale } = await props.params;
  const project = await getSingleProject(slug, locale);

  return {
    title: `NAI-${project.title}`,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: [
        {
          url: urlFor(project?.image.url).url(),
          width: 400,
          height: 400,
          alt: project.image.alt,
        },
      ],
    },
  };
}

export default async function SingleProject(props: Props) {
  const { slug, locale } = await props.params;
  const project = await getSingleProject(slug, locale);
  const translate = await getTranslations();
  const { year, status } = getProjectYearAndStatus(project.date);

  return (
    <main>
      <article className="pt-10 md:pt-16 pb-20 md:pb-28 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 hover:text-primary-500 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              {translate("ProjectsPage.backToProjects")}
            </Link>

            {project?.category && (
              <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-secondary">
                {project.category}
              </span>
            )}
            {(year != null || status !== "unknown") && (
              <div
                className={cn(
                  "flex flex-wrap items-center gap-2",
                  project?.category ? "mt-4" : "mt-6",
                )}
              >
                {year != null && (
                  <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold tabular-nums text-primary-800 ring-1 ring-primary-100">
                    {year}
                  </span>
                )}
                {status !== "unknown" && (
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm",
                      projectTimelineBadgeClass(status),
                    )}
                  >
                    {translate(`projectTimeline.${status}`)}
                  </span>
                )}
              </div>
            )}
            <h1 className="mt-2 display text-primary-700">{project?.title}</h1>
            {project?.excerpt && (
              <p className="mt-5 lead">{project.excerpt}</p>
            )}
          </div>

          <Reveal className="mt-10 md:mt-14 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-elevated">
              <Image
                className="w-full h-[320px] md:h-[560px] object-cover"
                src={urlFor(project?.image.url).url()}
                placeholder={project?.image.lqip ? "blur" : "empty"}
                blurDataURL={project?.image?.lqip || ""}
                alt={project?.image?.alt || project?.title}
                height={1000}
                width={1600}
                unoptimized
              />
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            <ProjectShareSection project={project} />
            <div className="mt-8 prose prose-neutral max-w-none prose-headings:text-primary-700 prose-a:text-primary-700">
              <DisplayPortableText value={project?.content} />
            </div>
            <div className="mt-10">
              <ProjectGallery gallery={project.gallery} />
            </div>
          </div>

          {project?.related?.length > 0 && (
            <div className="mt-20 md:mt-28">
              <SectionHeading
                eyebrow={translate("SupportOurCauses.otherCausesEyebrow")}
                title={translate("relatedProjects")}
              />
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                {project.related.map((p, index) => (
                  <Reveal key={index} delay={index * 0.08}>
                    <ProjectsCard project={p} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </Container>
      </article>
    </main>
  );
}
