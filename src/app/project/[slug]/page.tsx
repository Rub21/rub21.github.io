import { FC } from "react";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getProjectFromParams(slug: string) {
  const project = allProjects.find(
    (project) => project.slug.split("/")[1] === slug
  );
  if (!project) notFound();
  return project;
}

const page = async ({ params }: PageProps) => {
  const project = await getProjectFromParams(params.slug);
  return (
    <div>
      <h1>{project.title}</h1>
      <h1>{project.live_url}</h1>
      <h1>{project.github_url}</h1>
      <h1>{project.tags}</h1>
      <h1>{project.technologies}</h1>
      <h1>{project.img}</h1>
      <h1>{project.images}</h1>
      <h1>{project.sponsor}</h1>

      <Markdown children={project.body.raw} />
    </div>
  );
};

export default page;
