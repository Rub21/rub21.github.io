"use client";
import ProjectCard from "./ProjectCard";
import { allProjects } from "contentlayer/generated";
const allProjects_ = allProjects.reverse();

function BookingCard() {
  return (
    <div className="h-[88vh] mx-auto px-10 pb-10 flex flex-wrap justify-center gap-2 mb-10">
      {allProjects_.map((project: unknown, index) => {
        return <ProjectCard key={index} project={project}></ProjectCard>;
      })}
    </div>
  );
}
export default BookingCard;
