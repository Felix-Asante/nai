"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Healthcare Access Initiative",
    category: "Education",
    description:
      "Improve healthcare access in underserved communities, with a focus on preventive care and medical assistance.",
    image: "/images/img-1.jpg",
  },
  {
    title: "Environmental Conservation and Sustainability Initiative",
    category: "Emergency",
    description:
      "Promote environmental awareness and conservation efforts for a sustainable future.",
    image: "/images/img-2.jpg",
  },
  {
    title: "Chari Emergency Relief Response",
    category: "Infrastructure",
    description:
      "Establish a rapid response mechanism for immediate assistance during disasters and humanitarian crises.",
    image: "/images/img-3.jpg",
  },
];

export default function ProjectsSection() {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const cardHoverVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <section className="py-16">
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
            These projects showcase Chari's commitment to addressing a diverse
            range of issues, including education, healthcare, economic
            empowerment, community development, emergency relief, and
            environmental sustainability.
          </p>
        </div>

        {/* Project Cards */}
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
      </motion.div>
    </section>
  );
}
