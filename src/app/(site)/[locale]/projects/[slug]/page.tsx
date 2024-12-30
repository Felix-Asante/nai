import ProjectsCard from "@/components/cards/ProjectsCard";
import Container from "@/components/layouts/Container";
import MainNavbar from "@/components/navbars/MainNavbar";
import DisplayPortableText from "@/components/portableText";
import { Link } from "@/i18n/routing";
import { getSingleProject } from "@/lib/sanity/api/projects";
import { urlFor } from "@/lib/sanity/sanity.image";
import ProjectShareSection from "@/sections/projects/ProjectShareSection";
import { SupportedLanguages } from "@/types";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
    locale: SupportedLanguages;
  }>;
};

export async function generateMetadata(props: Props) {
  const { slug, locale } = await props.params;
  const project = await getSingleProject(slug, locale);

  return {
    title: `NAI-${project.title}`,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: [
        {
          url: urlFor(project?.image.url).url(),
          width: 400,
          height: 400,
          alt: project.image.alt,
        },
      ],
    },
  };
}
export default async function SingleProject(props: Props) {
  const { slug, locale } = await props.params;
  const project = await getSingleProject(slug, locale);
  const translate = await getTranslations();

  return (
    <div>
      <MainNavbar />
      <Container className="my-12">
        <div className="lg:max-w-[80%] lg:mx-auto">
          <Link href="/projects" className="inline-block mb-3 text-primary-300">
            <span className="mr-2">&larr;</span>{" "}
            {translate("ProjectsPage.backToProjects")}
          </Link>
          <h1 className="subtitle font-bold  mb-4">{project?.title}</h1>
          <p className="text-gray-600 paragraph-lg mb-10">{project?.excerpt}</p>

          <Image
            className="w-full h-[300px] md:h-[600px] object-cover rounded-lg"
            src={urlFor(project?.image.url).url()}
            placeholder={project?.image.lqip ? "blur" : "empty"}
            blurDataURL={project?.image?.lqip || ""}
            alt="image"
            height={100}
            width={300}
            unoptimized
          />

          <ProjectShareSection project={project} />

          <div className="my-5">
            <DisplayPortableText value={project?.content} />
          </div>
        </div>
        {project?.related?.length > 0 && (
          <div className="mt-7">
            <h3 className="text-3xl font-semibold mb-4">
              {translate("relatedProjects")}
            </h3>
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
