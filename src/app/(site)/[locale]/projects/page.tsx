import Container from "@/components/layouts/Container";
import { getAllCategories } from "@/lib/sanity/api/category";
import { getProjects } from "@/lib/sanity/api/projects";
import ProjectHeader from "@/sections/projects/ProjectHeader";
import ProjectsList from "@/sections/ProjectsList";
import { SupportedLanguages } from "@/types";
import { getTranslations } from "next-intl/server";

type Props = {
  searchParams: Promise<{
    page: number;
    category: string;
  }>;
  params: Promise<{
    locale: SupportedLanguages;
  }>;
};

export default async function ProjectPage(props: Props) {
  const { page = 1, category } = await props.searchParams;
  const { locale = "en" } = await props.params;

  const [projects, categories] = await Promise.all([
    getProjects({ page: page - 1, limit: 12, category }, locale),
    getAllCategories(locale),
  ]);

  const translate = await getTranslations();

  return (
    <main>
      <ProjectHeader categories={categories} />

      <section className="section-y bg-white">
        <Container>
          {projects.items.length > 0 ? (
            <ProjectsList projects={projects.items} />
          ) : (
            <div className="min-h-[240px] flex items-center justify-center text-center">
              <p className="text-lg text-neutral-500">
                {translate("ProjectsPage.noProjectsFound")}
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
