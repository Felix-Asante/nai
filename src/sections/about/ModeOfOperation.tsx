"use client";

import { motion } from "framer-motion";
import Container from "@/components/layouts/Container";
import React from "react";
import { useTranslations } from "next-intl";

export default function ModeOfOperation() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: index * 0.2 },
    }),
  };
  const translate = useTranslations("AboutPage.modeOfOperation");

  const GOALS = [
    {
      title: translate("listOne.title"),
      description: translate("listOne.description"),
    },
    {
      title: translate("listTwo.title"),
      description: translate("listTwo.description"),
    },
    {
      title: translate("listThree.title"),
      description: translate("listThree.description"),
    },
  ];

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
          className="rounded-xl relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-85 rounded-xl z-[1]"></div>

          <div className="relative z-10 p-8 lg:p-10">
            <motion.h2
              className="subtitle mb-5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              {translate("title")}
            </motion.h2>
            <p className="text-neutral-100 font-medium paragraph-large mb-7">
              {translate("description")}
            </p>

            <motion.ol
              className="flex flex-col space-y-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {GOALS.map((text, index) => (
                <motion.li
                  key={index}
                  className="text-neutral-100 font-medium paragraph-large"
                  custom={index}
                  variants={itemVariants}
                >
                  <strong>{text.title}</strong>
                  <p> {text.description}</p>
                </motion.li>
              ))}
            </motion.ol>
            <p className=" font-medium paragraph-large mt-7">
              {translate("closingText")}
            </p>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
