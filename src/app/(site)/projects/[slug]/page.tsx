import ProjectsCard from "@/components/cards/ProjectsCard";
import Container from "@/components/layouts/Container";
import MainNavbar from "@/components/navbars/MainNavbar";
import DisplayPortableText from "@/components/portableText";
import { ProjectContent, PROJECTS } from "@/constants/content";
import ProjectShareSection from "@/sections/projects/ProjectShareSection";
import Image from "next/image";
import Link from "next/link";
import { getSingleProject } from "@/lib/sanity/api/projects";
import { urlFor } from "@/lib/sanity/sanity.image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function SingleProject(props: Props) {
  const params = await props.params;
  const project = await getSingleProject(params.slug);

  return (
    <div>
      <MainNavbar />
      <Container className="my-12">
        <div className="lg:max-w-[80%] lg:mx-auto">
          <Link href="/projects" className="inline-block mb-3 text-primary-300">
            <span className="mr-2">&larr;</span> Back to Projects
          </Link>
          <h1 className="subtitle font-bold  mb-4">{project?.title}</h1>
          <p className="text-gray-600 paragraph-lg mb-10">{project?.excerpt}</p>

          <Image
            className="w-full h-[600px] object-cover rounded-lg"
            src={urlFor(project?.image.url).url()}
            placeholder={project?.image.lqip ? "blur" : "empty"}
            blurDataURL={project?.image?.lqip || ""}
            alt="image"
            height={100}
            width={300}
            unoptimized
          />

          <ProjectShareSection />

          <div className="my-5">
            <DisplayPortableText value={project?.content} />
          </div>
        </div>
        {project?.related?.length > 0 && (
          <div className="mt-7">
            <h3 className="text-3xl font-semibold mb-4">Related Projects</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {project.related.map((project, index) => (
                <ProjectsCard key={index} project={project} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
