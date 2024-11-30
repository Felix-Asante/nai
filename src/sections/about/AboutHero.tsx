"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layouts/Container";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="mt-16">
      {/* Hero Section */}
      <Container className="py-16 md:py-20">
        <motion.h1
          className="text-3xl md:text-4xl bg-secondary-200 text-primary px-3 py-1 w-fit font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Noble Alms International
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transforming lives, promoting happiness, and unleashing potential
          through education, health, and charity.
        </motion.p>
      </Container>

      {/* About NAI Section */}
      <section className="bg-gray-50 py-16">
        <Container className="text-left flex flex-col-reverse lg:flex-row lg:items-center gap-5 lg:gap-10">
          <motion.div
            className="lg:w-1/2 mt-10 lg:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, staggerChildren: 0.3 }}
          >
            <motion.div className="overflow-hidden rounded-xl shadow-lg w-full h-full">
              <Image
                width={100}
                height={100}
                src={`/images/img-1.jpg`}
                alt={`NAI image 1`}
                className="w-full h-full object-cover"
                unoptimized
                priority
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="subtitle font-bold text-primary">Who We Are</h2>
            <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
              Noble Alms International was founded in 2020 with the mission to
              transform lives, promote happiness, and unleash potential. From
              humble beginnings, we&apos;ve grown into an organization that
              impacts communities through educational, medical, and charity
              outreaches.
            </p>
            <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
              NAI operates under the laws of the Republic of Ghana with the
              vision:{" "}
              <strong>
                Rooting in the foundational development of noble men in the
                society, through financial, educational, and health support.
              </strong>
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
