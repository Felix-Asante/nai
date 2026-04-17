"use client";

import ProjectsCard from "@/components/cards/ProjectsCard";
import Reveal from "@/components/Reveal";
import { Projects } from "@/types/sanity";
import React from "react";

type Props = {
  projects: Projects[];
  isUpcoming?: boolean;
};
export default function ProjectsList({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Reveal key={index} delay={(index % 3) * 0.08}>
          <ProjectsCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
