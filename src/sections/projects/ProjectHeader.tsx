"use client";

import Container from "@/components/layouts/Container";
import { Categories } from "@/types/sanity";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  categories: Categories[];
};
export default function ProjectHeader(props: Props) {
  const { categories } = props;

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: index * 0.1 },
    }),
  };

  return (
    <motion.header
      className="pt-5 md:pt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex items-center text-center flex-col gap-y-7 mb-12 md:mb-20 px-3"
        variants={headerVariants}
      >
        <motion.h2 className="title" variants={headerVariants}>
          Projects
        </motion.h2>
        <motion.p
          className="md:paragraph-large md:w-[80%] xl:w-[60%]"
          variants={textVariants}
        >
          These projects showcase NAI&apos;s commitment to addressing a diverse
          range of issues, including education, healthcare, economic
          empowerment, community development, emergency relief, and
          environmental sustainability.
        </motion.p>
      </motion.div>

      <Container>
        <motion.div
          className="border-b flex gap-7 items-center overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={categoryVariants} custom={0}>
            <Link
              href="/projects"
              className="pb-1 w-fit shrink-0 border-b-2 border-primary font-semibold text-primary transition-all duration-300"
            >
              All
            </Link>
          </motion.div>

          {categories?.map((category, index) => (
            <motion.button
              key={index}
              variants={categoryVariants}
              custom={index + 1}
              className=" capitalize pb-1 w-fit shrink-0 text-neutral-300 font-medium hover:text-primary transition-all duration-300"
            >
              {category?.title}
            </motion.button>
          ))}
        </motion.div>
      </Container>
    </motion.header>
  );
}
