"use client";
import Container from "@/components/layouts/Container";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const helpOptions = (translate: any) => [
  {
    title: translate("HowUCanHelp.itemOne.title"),
    description: translate("HowUCanHelp.itemOne.description"),
    icon: "💸",
  },
  {
    title: translate("HowUCanHelp.itemTwo.title"),
    description: translate("HowUCanHelp.itemTwo.description"),
    icon: "🔄",
  },
  {
    title: translate("HowUCanHelp.itemThree.title"),
    description: translate("HowUCanHelp.itemThree.description"),
    icon: "🤝",
  },
  {
    title: translate("HowUCanHelp.itemFour.title"),
    description: translate("HowUCanHelp.itemFour.description"),
    icon: "🙌",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6 },
  }),
};

export default function HowUCanHelp() {
  const translate = useTranslations();

  return (
    <section className="py-16 bg-gray-50 my-24">
      <Container className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-primary-300 mb-4">
            {translate("HowUCanHelp.headline")}
          </h2>
          <p className="text-gray-600 text-lg md:w-[80%] mx-auto">
            {translate("HowUCanHelp.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpOptions(translate).map((option, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-white rounded-lg border border-primary-100 p-6 text-center transition-shadow duration-300"
            >
              <div className="flex  mb-4">
                <div className="text-4xl">{option.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2 text-left">
                {option.title}
              </h3>
              <p className="text-neutral-300 text-left">{option.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link href="/contact-us" className={buttonVariants({ size: "lg" })}>
            {translate("supportUs")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
