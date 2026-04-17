"use client";
import { Link } from "@/i18n/routing";
import { urlFor } from "@/lib/sanity/sanity.image";
import { Projects } from "@/types/sanity";
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

  const formattedDate = project?.date
    ? new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "2-digit",
      }).format(new Date(project.date))
    : null;

  const isUpcomingProject =
    project?.date && new Date() < new Date(project.date);

  const href = `/projects/${project?.slug}`;

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col card-surface card-hover overflow-hidden h-full"
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={urlFor(project?.image.url).url()}
          alt={project.image.alt || project.title}
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden
        />

        {isUpcomingProject && !isUpcoming && (
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-secondary text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 shadow-md">
            Upcoming
          </span>
        )}

        {isUpcoming && formattedDate && (
          <div className="absolute top-3 right-3 rounded-xl bg-white/95 backdrop-blur px-3 py-2 shadow-md text-center">
            <div className="text-lg font-bold leading-none text-primary-700">
              {formattedDate.split(" ")[1]}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 mt-0.5">
              {formattedDate.split(" ")[0]}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        {project?.category && (
          <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
            {project.category}
          </span>
        )}
        <h3 className="mt-2 text-lg md:text-xl font-semibold text-primary-700 group-hover:text-primary-500 transition-colors leading-snug">
          {project?.title}
        </h3>
        {project?.excerpt && (
          <p className="mt-3 text-sm text-neutral-500 leading-relaxed line-clamp-3">
            {project.excerpt}
          </p>
        )}
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
          {translate("readMore")}
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
