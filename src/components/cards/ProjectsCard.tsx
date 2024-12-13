"use client";
import { urlFor } from "@/lib/sanity/sanity.image";
import { Projects } from "@/types/sanity";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {
  project: Projects;
};

export default function ProjectsCard({ project }: Props) {
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
          Read more <span className="ml-2">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
