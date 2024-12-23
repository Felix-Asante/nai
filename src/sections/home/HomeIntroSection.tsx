"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/layouts/Container";
import { buttonVariants } from "@/components/ui/button";

export default function HomeIntroSection() {
  return (
    <Container className="px-6 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-20 gap-y-12">
        {/* Text Section */}
        <motion.div
          className="space-y-6 lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="subtitle font-bold text-neutral-800">
            At Noble Alms International, we prioritize compassion, integrity,
            and inclusivity.
          </h2>
          <p className="text-neutral-600  leading-relaxed">
            Noble Alms International is a forward-thinking non-profit
            organization dedicated to creating a positive impact in communities.
            Our mission is rooted in the belief that compassion has the power to
            transform lives. We work tirelessly to bridge gaps in education,
            health, and empowerment, striving to create a world where everyone
            has access to the support they need to thrive.
          </p>
          <Link
            href="/about-us"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            About Us
          </Link>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/images/img-31.jpg"
            alt="About Us - Noble Alms International"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>
    </Container>
  );
}
