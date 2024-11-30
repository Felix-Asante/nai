import Container from "@/components/layouts/Container";
import MainNavbar from "@/components/navbars/MainNavbar";
import { PROJECTS } from "@/constants/content";
import ProjectHeader from "@/sections/projects/ProjectHeader";
import ProjectsList from "@/sections/ProjectsList";
import React from "react";

export default function ProjectPage() {
  return (
    <main>
      <MainNavbar className="text-neutral-300 bg-white" />
      <ProjectHeader />

      <Container className="my-10">
        <ProjectsList projects={PROJECTS} />
      </Container>
    </main>
  );
}
