"use client";
import Container from "@/components/layouts/Container";
import { Projects } from "@/types/sanity";
import { motion } from "framer-motion";
import ProjectsList from "../ProjectsList";

type ProjectSectionProps = {
  projects: Projects[];
};

export default function ProjectsSection({ projects }: ProjectSectionProps) {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Container className="py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="container mx-auto px-4"
      >
        {/* Section Heading */}
        <div className="flex flex-col xl:flex-row justify-between items-center text-center md:text-left mb-12">
          <h2 className="text-4xl font-bold leading-[1.18] text-primary w-full xl:w-[55%]">
            Projects for the charity donation organization
          </h2>
          <p className="mt-4 text-gray-600 xl:w-[45%]">
            These projects showcase NAI&apos;s commitment to addressing a
            diverse range of issues, including education, healthcare, economic
            empowerment, community development, emergency relief, and
            environmental sustainability.
          </p>
        </div>

        <ProjectsList projects={projects} />
      </motion.div>
    </Container>
  );
}
