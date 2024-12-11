"use client";
import Container from "@/components/layouts/Container";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OurImpact() {
  const [count, setCount] = useState(0);

  // Animate the counter number
  useEffect(() => {
    const target = 139364; // Target number
    const duration = 2000; // Animation duration in ms
    const increment = Math.ceil(target / (duration / 16)); // Increment per frame (60 FPS)

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, 16);

    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section className="py-16">
      <Container className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 px-4">
        {/* Left Images */}
        <div className="flex flex-row md:flex-col lg:gap-24 gap-5 lg:w-[20%]">
          {["/images/img-1.jpg", "/images/img-2.jpg"].map((src, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={src}
                alt={`Impact ${index + 1}`}
                className={cn(
                  "rounded-lg shadow-md w-full h-48 lg:h-60 object-cover"
                )}
              />
            </motion.div>
          ))}
        </div>

        {/* Center Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary-300">
            Together, we&apos;ve made a tremendous impact!
          </h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-6 text-6xl lg:text-8xl font-bold text-primary-300"
          >
            {count.toLocaleString()}+
          </motion.div>
          <p className="mt-2 text-gray-600 text-lg">
            Lives impacted and communities transformed through our collective
            efforts.
          </p>
          <motion.div
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <button className="px-6 py-3 bg-primary text-white rounded-lg text-lg hover:bg-primary-300 transition">
              Join Our Movement
            </button>
          </motion.div>
        </motion.div>

        {/* Right Images */}
        <div className="flex flex-row md:flex-col lg:gap-24 gap-5 lg:w-[20%] relative">
          {["/images/img-3.jpg", "/images/img-4.jpg"].map((src, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              className={index === 1 ? "" : ""}
            >
              <img
                src={src}
                alt={`Impact ${index + 3}`}
                className={cn(
                  "rounded-lg shadow-md w-full h-48 lg:h-60 object-cover"
                )}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
