"use client";

import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectCardReversed from "./ProjectCard-reversed";
import { allProjects } from "contentlayer/generated";
const allProjects_ = allProjects.reverse();

const BigProjects: React.FC = () => {
  return (
    <div className="h-[88vh] w-full mx-auto px-5 ">
      <div
        id="Projects"
        className="max-w-containerSmall mx-auto min-h-fit py-10  lgl:py-32 flex flex-col gap-8"
      >
        <SectionTitle titleName="Capstone Projects" titleNumber="03" />
        <div>
          {allProjects_.map((project: unknown, index) => {
            const imgProp = {
              src: project.img,
              alt: "Image-Description",
              width: 300,
              height: 180,
            };
            if (index % 2 === 0) {
              return <ProjectCard key={index} project={project} />;
            } else {
              return <ProjectCardReversed key={index} project={project} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default BigProjects;
