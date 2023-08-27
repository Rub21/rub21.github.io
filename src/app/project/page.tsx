"use client";
import { allProjects } from "contentlayer/generated";
const allProjects_ = allProjects.reverse();

import ProjectCard from "./ProjectCard";

function BookingCard() {
  return (
    <div className="h-[88vh] w-full mx-auto px-10 flex flex-wrap justify-center gap-2">
      {allProjects_.map((project: unknown, index) => {
        return <ProjectCard project={project}></ProjectCard>;
      })}
    </div>
  );
}
export default BookingCard;
