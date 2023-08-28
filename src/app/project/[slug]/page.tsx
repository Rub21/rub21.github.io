import { FC } from "react";
import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
    <div className="h-[88vh] max-w-[800px] w-full mx-auto p-4">
      <ReactMarkdown className="markdown">{project.body.raw}</ReactMarkdown>
    </div>
  );
};

export default page;
