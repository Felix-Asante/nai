"use client";

import ProjectsCard from "@/components/cards/ProjectsCard";
import React from "react";

type Props = {
  projects: {
    image: string;
    title: string;
    description: string;
    category: string;
  }[];
};
export default function ProjectsList({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectsCard key={index} project={project} />
      ))}
    </div>
  );
}
