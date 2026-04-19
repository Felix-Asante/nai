"use client";
import { Link } from "@/i18n/routing";
import { urlFor } from "@/lib/sanity/sanity.image";
import { Projects } from "@/types/sanity";
import {
  getProjectYearAndStatus,
  projectTimelineBadgeClass,
} from "@/utils/projectTimeline";
import { cn } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

type Props = {
  project: Projects;
  isUpcoming?: boolean;
};

export default function ProjectsCard({ project, isUpcoming = false }: Props) {
  const translate = useTranslations();
  const locale = useLocale();

  const { year, status } = getProjectYearAndStatus(project?.date);

  const formattedDate = project?.date
    ? new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "2-digit",
      }).format(new Date(project.date))
    : null;

  const href = `/projects/${project?.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col card-surface card-hover overflow-hidden h-full",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={urlFor(project?.image.url).url()}
          alt={project.image.alt || project.title}
          className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />

        {status !== "unknown" && (
          <span
            className={cn(
              "absolute left-3 top-3 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider shadow-md",
              projectTimelineBadgeClass(status),
            )}
          >
            {translate(`projectTimeline.${status}`)}
          </span>
        )}

        {year != null && (
          <div className="absolute right-3 top-3 rounded-xl bg-white/95 px-3 py-2 text-center shadow-md backdrop-blur">
            <div className="text-2xl font-bold leading-none tabular-nums text-primary-700 sm:text-3xl">
              {year}
            </div>
            {isUpcoming && formattedDate && (
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                {formattedDate}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {project?.category && (
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            {project.category}
          </span>
        )}
        <h3 className="mt-2 text-lg font-semibold leading-snug text-primary-700 transition-colors group-hover:text-primary-500 md:text-xl">
          {project?.title}
        </h3>
        {project?.excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-500">
            {project.excerpt}
          </p>
        )}
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
          {translate("readMore")}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
