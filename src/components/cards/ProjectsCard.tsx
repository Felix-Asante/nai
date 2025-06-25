"use client";
import { Link } from "@/i18n/routing";
import { urlFor } from "@/lib/sanity/sanity.image";
import { Projects } from "@/types/sanity";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

type Props = {
  project: Projects;
  isUpcoming?: boolean;
};

export default function ProjectsCard({ project, isUpcoming = false }: Props) {
  const translate = useTranslations();
  const locale = useLocale();

  const date = project?.date
    ? new Intl.DateTimeFormat(locale, {
        month: "short",
        day: "2-digit",
      }).format(new Date(project?.date))
    : null;

  const isUpcomingProject =
    project?.date && new Date() < new Date(project?.date);

  return (
    <div className="bg-white  overflow-hidden transition-shadow duration-300">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <motion.img
          src={urlFor(project?.image.url).url()}
          alt={project.image.alt || project.title}
          className="w-full h-56 object-cover transition-transform duration-300"
          whileHover={{
            scale: 1.1,
          }}
        />
        {isUpcomingProject && !isUpcoming && (
          <div className="absolute top-2 left-2">
            <div className="bg-primary rounded-sm text-white py-1 px-2">
              Upcoming
            </div>
          </div>
        )}

        {isUpcoming && (
          <div className="absolute top-2 right-2">
            <div className="rounded-lg p-3 bg-primary text-white font-bold text-center text-lg md:text-xl">
              <p> {date?.split(" ")?.at(1)}</p>
              <p> {date?.split(" ")?.at(0)}</p>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="pr-6 py-6">
        <h3 className="text-sm font-medium text-primary">
          {project?.category}
        </h3>
        <Link
          href={`/projects/${project?.slug}`}
          className="mt-2 text-xl font-semibold text-gray-800 hover:text-primary-300"
        >
          {project?.title}
        </Link>
        <p className="mt-4 text-gray-600">{project?.excerpt}</p>
        <Link
          href={`/projects/${project?.slug}`}
          className="mt-4 inline-flex items-center text-primary hover:text-primary-200 duration-300 hover:translate-x-4 font-medium"
        >
          {translate("readMore")}
          <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
