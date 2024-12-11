"use client";
import Container from "@/components/layouts/Container";
import MainNavbar from "@/components/navbars/MainNavbar";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <div>
      {/* Navbar */}
      <MainNavbar />
      <section
        className="relative py-10 md:h-[18rem] text-neutral-100 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img-6.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-75"></div>

        <Container className="relative z-10 h-full flex flex-col items-center justify-center">
          <motion.div
            className="text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="title font-bold">Contact us</h1>
            <p className="text-base md:paragraph-large">
              We are a dynamic charity organization committed to making a
              positive impact on communities around the world. Whether you have
              a question, want to know more about our organization, or would
              like to get involved, please don&apos;t hesitate to contact us.
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
