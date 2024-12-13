import Container from "@/components/layouts/Container";
import MainNavbar from "@/components/navbars/MainNavbar";
import { getAllCategories } from "@/lib/sanity/api/category";
import { getProjects } from "@/lib/sanity/api/projects";
import ProjectHeader from "@/sections/projects/ProjectHeader";
import ProjectsList from "@/sections/ProjectsList";

type Props = {
  searchParams: Promise<{
    page: number;
    category: string;
  }>;
};

export default async function ProjectPage(props: Props) {
  const { page = 1, category } = await props.searchParams;

  const [projects, categories] = await Promise.all([
    getProjects({ page: page - 1, limit: 12, category }),
    getAllCategories(),
  ]);
  return (
    <main>
      <MainNavbar className="text-neutral-300 bg-white" />
      <ProjectHeader categories={categories} />

      <Container className="my-10">
        {projects.items.length > 0 ? (
          <ProjectsList projects={projects.items} />
        ) : (
          <p className="text-lg">No project found</p>
        )}
      </Container>
    </main>
  );
}
