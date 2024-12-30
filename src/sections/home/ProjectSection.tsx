"use client";
import Container from "@/components/layouts/Container";
import { Projects } from "@/types/sanity";
import { motion } from "framer-motion";
import ProjectsList from "../ProjectsList";
import { useTranslations } from "next-intl";

type ProjectSectionProps = {
  projects: Projects[];
};

export default function ProjectsSection({ projects }: ProjectSectionProps) {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const translate = useTranslations("homePage.projects");

  if (projects?.length === 0) return null;

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
        <div className="flex flex-col xl:flex-row justify-between items-center text-center md:text-left mb-12 gap-x-6">
          <h2 className="text-4xl font-bold leading-[1.18] text-primary w-full xl:w-[55%]">
            {translate("title")}
          </h2>
          <p className="mt-4 text-gray-600 xl:w-[45%]">
            {translate("description")}
          </p>
        </div>

        <ProjectsList projects={projects} />
      </motion.div>
    </Container>
  );
}
