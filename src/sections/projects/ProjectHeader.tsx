import React from "react";
import { PROJECT_CATEGORY } from "@/constants/content";
import Container from "@/components/layouts/Container";
import Link from "next/link";

export default function ProjectHeader() {
  return (
    <header className="pt-5 md:pt-12">
      <div className="flex items-center text-center flex-col gap-y-7 mb-12 md:mb-20 px-3">
        <h2 className="title">Projects</h2>
        <p className="md:paragraph-large md:w-[80%] xl:w-[60%]">
          These projects showcase NAI&apos;s commitment to addressing a diverse
          range of issues, including education, healthcare, economic
          empowerment, community development, emergency relief, and
          environmental sustainability.
          {/* Transforming lives through education, health, and charity. We strive
          to improve the living conditions of vulnerable populations and provide
          access to quality education and healthcare. */}
        </p>
      </div>

      <Container>
        <div className="border-b flex gap-7 items-center overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <Link
            href="/projects"
            className="pb-1 w-fit shrink-0 border-b-2 border-primary font-semibold text-primary transition-all duration-300"
          >
            All
          </Link>
          {PROJECT_CATEGORY.map((category, index) => (
            <button
              key={index}
              className="pb-1 w-fit shrink-0 text-neutral-300 font-medium hover:text-primary transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </header>
  );
}
