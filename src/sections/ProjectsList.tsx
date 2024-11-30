"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import React from "react";

type Props = {
  projects: any[];
};
export default function ProjectsList({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          //   whileHover="hover"
          //   variants={cardHoverVariants}
          className="bg-white  overflow-hidden transition-shadow duration-300"
        >
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-300"
              whileHover={{
                scale: 1.1,
              }}
            />
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-sm font-medium text-primary">
              {project.category}
            </h3>
            <h2 className="mt-2 text-xl font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="mt-4 text-gray-600">{project.description}</p>
            <Link
              href="#"
              className="mt-4 inline-flex items-center text-primary hover:text-primary-200 duration-300 hover:translate-x-4 font-medium"
            >
              Read more <span className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
