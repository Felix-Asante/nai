"use client";

import { motion } from "framer-motion";
import Container from "@/components/layouts/Container";
import React from "react";

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
              className="subtitle mb-7"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              We operate under the Sustainable Development Goals (SDGs)
            </motion.h2>

            <motion.ol
              className="flex flex-col space-y-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {[
                "1. SDG 1/2: Zero Hunger/No poverty by Bridging the gap between agriculture and society by bringing innovative ideas such as agricultural projects as well as raising awareness through Communication and Advocacy Strategy.",
                "2. SDG 4: Quality Education; NAI will be a driving force for excellence and equity in higher education through Advocacy/Capacity Building and Providing Educational Materials to School Children.",
                "3. SDG 3: Good Health and well-being; through Health Promotion(Advocacy/ Health Screening and many more).",
                "4. SDG 5: Gender Equality: Boosting Equal Genders through empowerment.",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  className="text-neutral-100 font-medium paragraph-large"
                  custom={index}
                  variants={itemVariants}
                >
                  <strong>{text.split(":")[0]}:</strong>
                  {text.split(":")[1]}
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
