"use client";
import Container from "@/components/layouts/Container";
import { Link } from "@/i18n/routing";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const volunteers = [
  { name: "Alex Johnson", image: "/images/img-11.jpg" },
  { name: "Mia Taylor", image: "/images/img-12.jpg" },
  { name: "Ethan Brown", image: "/images/img-13.jpg" },
  { name: "Sophia Wilson", image: "/images/img-14.jpg" },
  { name: "Liam Martinez", image: "/images/img-15.jpg" },
  { name: "Emma Davis", image: "/images/img-16.jpg" },
  { name: "Noah Garcia", image: "/images/img-17.jpg" },
  { name: "Olivia Anderson", image: "/images/img-25.jpg" },
];

export default function VolunteersSection() {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  const translate = useTranslations("volunteers");
  return (
    <Container>
      <motion.section
        className="pt-5 mb-32 bg-neutral-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-4xl font-bold text-primary">
              {translate("title")}
            </h2>
            <p className="mt-2 text-neutral-500">{translate("description")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <div className="flex flex-col sm:flex-row md:flex-col gap-6 w-full h-full md:mt-16">
              <motion.div
                className={cn("relative group shrink-0 flex-1")}
                variants={imageVariants}
                custom={0}
              >
                <img
                  src={volunteers[0].image}
                  alt={volunteers[0].name}
                  className={cn(
                    "w-full object-cover h-64 md:h-full rounded-3xl"
                  )}
                />

                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <p className="text-white text-lg font-semibold">
                    {volunteers[0].name}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className={cn("relative group shrink-0 flex-1")}
                variants={imageVariants}
                custom={1}
              >
                <img
                  src={volunteers[1].image}
                  alt={volunteers[1].name}
                  className={cn(
                    "w-full object-cover rounded-3xl h-64  md:h-[150px] lg:h-[220px] xl:h-[295px] 2xl:h-[395px]"
                  )}
                />

                <div className="absolute h-64  md:h-[150px] lg:h-[220px] xl:h-[295px] 2xl:h-[395px] inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <p className="text-white text-lg font-semibold">
                    {volunteers[1].name}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-6 w-full h-full">
              <motion.div
                className={cn("relative group shrink-0 flex-1")}
                variants={imageVariants}
                custom={2}
              >
                <img
                  src={volunteers[2].image}
                  alt={volunteers[2].name}
                  className={cn(
                    "w-full object-cover rounded-3xl h-64 md:h-full"
                  )}
                />

                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <p className="text-white text-lg font-semibold">
                    {volunteers[2].name}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className={cn("relative group shrink-0 flex-1")}
                variants={imageVariants}
                custom={3}
              >
                <img
                  src={volunteers[3].image}
                  alt={volunteers[3].name}
                  className={cn(
                    "w-full object-cover rounded-3xl h-64 md:h-full"
                  )}
                />

                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <p className="text-white text-lg font-semibold">
                    {volunteers[3].name}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-6 w-full h-full">
              <motion.div
                className={cn("relative group shrink-0 flex-1")}
                variants={imageVariants}
                custom={4}
              >
                <img
                  src={volunteers[4].image}
                  alt={volunteers[4].name}
                  className={cn(
                    "w-full object-cover rounded-3xl h-64 md:h-full"
                  )}
                />

                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <p className="text-white text-lg font-semibold">
                    {volunteers[4].name}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className={cn("relative group shrink-0 flex-1")}
                variants={imageVariants}
                custom={5}
              >
                <img
                  src={volunteers[5].image}
                  alt={volunteers[5].name}
                  className={cn(
                    "w-full object-cover rounded-3xl h-64 md:h-full"
                  )}
                />

                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <p className="text-white text-lg font-semibold">
                    {volunteers[5].name}
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-6 w-full h-full md:mt-16">
              <motion.div
                className={cn("relative group shrink-0 flex-1")}
                variants={imageVariants}
                custom={6}
              >
                <img
                  src={volunteers[6].image}
                  alt={volunteers[6].name}
                  className={cn(
                    "w-full object-cover rounded-3xl h-64 md:h-full"
                  )}
                />

                <div className="absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <p className="text-white text-lg font-semibold">
                    {volunteers[6].name}
                  </p>
                </div>
              </motion.div>
              <motion.div
                className={cn("relative group shrink-0 flex-1")}
                variants={imageVariants}
                custom={7}
              >
                <img
                  src={volunteers[7].image}
                  alt={volunteers[7].name}
                  className={cn(
                    "w-full object-cover rounded-3xl h-64 md:h-[150px] lg:h-[220px] xl:h-[295px] 2xl:h-[395px]"
                  )}
                />

                <div className="absolute inset-0 h-64 md:h-[150px] lg:h-[220px] xl:h-[295px] 2xl:h-[395px] bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl">
                  <p className="text-white text-lg font-semibold">
                    {volunteers[7].name}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact-us"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-200"
            >
              {translate("becomeVolunteer")}
            </Link>
          </div>
        </div>
      </motion.section>
    </Container>
  );
}
