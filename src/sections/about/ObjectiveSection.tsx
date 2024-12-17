"use client";

import { motion } from "framer-motion";
import Container from "@/components/layouts/Container";
import {
  ChartNoAxesCombinedIcon,
  GraduationCapIcon,
  HeartPulseIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function ObjectiveSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.2 },
    }),
  };

  const translate = useTranslations("AboutPage.objectives");

  return (
    <motion.section
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <Container>
        <motion.div
          className="text-center flex flex-col space-y-3 items-center mb-8"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="font-bold text-primary subtitle">
            {translate("title")}
          </h2>
          <p className=" lg:w-[55%]">{translate("description")}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 md:w-full md:mx-auto gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="bg-gray-50 shadow-sm hover:border hover:border-secondary-200 border border-gray-50 rounded-xl p-4"
            custom={0}
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-200 text-white p-2">
                <GraduationCapIcon />
              </div>
              <h3 className="font-bold">{translate("listOne.title")}</h3>
            </div>
            <p className="text-neutral-300 text-sm mt-3">
              {translate("listOne.description")}
            </p>
          </motion.div>

          <div className="flex flex-col space-y-4">
            <motion.div
              className="bg-gray-50 shadow-sm hover:border hover:border-secondary-200 border border-gray-50 rounded-xl p-4"
              custom={1}
              variants={itemVariants}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-200 text-white p-2">
                  <HeartPulseIcon />
                </div>
                <h3 className="font-bold">{translate("listTwo.title")}</h3>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {translate("listTwo.description")}
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 shadow-sm hover:border hover:border-secondary-200 border border-gray-50 rounded-xl p-4"
              custom={2}
              variants={itemVariants}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary-200 text-white p-2">
                  <ChartNoAxesCombinedIcon />
                </div>
                <h3 className="font-bold">{translate("listThree.title")}</h3>
              </div>
              <p className="text-neutral-300 text-sm mt-3">
                {translate("listThree.description")}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
