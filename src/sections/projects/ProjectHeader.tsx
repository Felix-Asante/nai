"use client";

import Container from "@/components/layouts/Container";
import PageHero from "@/components/PageHero";
import { Link } from "@/i18n/routing";
import { Categories } from "@/types/sanity";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useQueryState } from "nuqs";

type Props = {
  categories: Categories[];
};

export default function ProjectHeader({ categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useQueryState("category", {
    shallow: false,
  });
  const translate = useTranslations();

  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={translate("Navbar.projects")}
        description={translate("ProjectsPage.description")}
        image="/images/img-15.jpg"
      />

      <div className="bg-white sticky top-[80px] z-30 border-b border-neutral-200/70">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex gap-2 md:gap-3 items-center overflow-x-auto py-3 [&::-webkit-scrollbar]:hidden"
          >
            <Link
              href="/projects"
              className={cn(
                "shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors",
                !selectedCategory
                  ? "bg-primary-700 text-white border-primary-700"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-700",
              )}
            >
              {translate("all")}
            </Link>
            {categories?.map((category) => {
              const active = category?.title === selectedCategory;
              return (
                <button
                  key={category?.title}
                  className={cn(
                    "shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors capitalize",
                    active
                      ? "bg-primary-700 text-white border-primary-700"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-primary-300 hover:text-primary-700",
                  )}
                  onClick={() => setSelectedCategory(category?.title)}
                >
                  {category?.title}
                </button>
              );
            })}
          </motion.div>
        </Container>
      </div>
    </>
  );
}
