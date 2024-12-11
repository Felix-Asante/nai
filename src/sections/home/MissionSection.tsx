"use client";
import React from "react";
import { motion } from "framer-motion";
import { MISSIONS } from "@/constants/content";
import Container from "@/components/layouts/Container";

export default function MissionSection() {
  const listVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <Container className="px-6 my-10">
      <div className="bg-primary text-neutral-100 p-6 lg:p-12 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between mb-12 md:mb-14 gap-4">
          <h2 className="text-3xl font-bold  md:w-1/2">
            The mission of our organization
          </h2>
          <p className="md:w-1/2">
            {" "}
            At Noble Alms International, we are driven by compassion, integrity,
            and inclusivity. These principles guide our efforts to empower
            communities, transform lives, and create lasting positive change
            through education, health, and support initiatives.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Mission List */}
          <div>
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {MISSIONS.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-primary-300/40 rounded-lg flex items-start space-x-5"
                  variants={listVariants}
                  custom={index}
                >
                  <div className="text-3xl md:text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-neutral-100">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={imageVariants}
          >
            <img
              src="/images/img-29.jpg"
              alt="Donation"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
