import Container from "@/components/layouts/Container";
import MainNavbar from "@/components/navbars/MainNavbar";
import { getProjects } from "@/lib/sanity/api/projects";
import ProjectHeader from "@/sections/projects/ProjectHeader";
import ProjectsList from "@/sections/ProjectsList";

type Props = {
  params: Promise<{
    page: number;
    category: string;
  }>;
};

export default async function ProjectPage(props: Props) {
  const { page = 1, category } = await props.params;

  const data = await getProjects({ page: page - 1, limit: 12, category });
  return (
    <main>
      <MainNavbar className="text-neutral-300 bg-white" />
      <ProjectHeader />

      <Container className="my-10">
        <ProjectsList projects={data.items} />
      </Container>
    </main>
  );
}
