"use client";
import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";

import { ImageProps } from "next/image";
import Image from "next/image";
import VideoPlayer from "../VideoPlayer";

// type Props = {
//   image: ImageProps;
//   title: string;
//   description: string;
//   gitLink: string;
//   youtubeLink: string;
//   liveLink: string;
//   techStackList: string[];
//   imageUrl: string;
// };

const ProjectCardReversed: React.FC = ({ project }) => {
  const divStyle = {
    backgroundImage: `url(${project.img})`,
  };

  return (
    <div>
      {/* PROJECT Container.... */}
      <div className="max-w-containerSmall flex flex-col items-center justify-between gap-28 mt-10 ">
        {/* MEDIA QUEREY: LARGE SCREENS */}
        <div className="hidden flex-col mdl:flex sml:flex-row-reverse gap-2 mr-10">
          {/* Image-div*/}

          {project.img ? (
            <a
              className="w-full h-full justify-center align-middle relative group sml:w-1/2"
              href={project.liveLink}
              target="_blank"
            >
              <div>
                {/* Actual Image */}
                <Image
                  src={project.img}
                  alt={"Image-Description"}
                  width={500}
                  height={300}
                  className="w-full h-full object-contain rounded-lg"
                />
                {/* Green overlay */}
                <div className="absolute w-full h-full bg-imageOverlay/50 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300 md:inline-block"></div>
              </div>
            </a>
          ) : (
            <VideoPlayer
              src={project.vid}
              className="w-full h-full object-contain rounded-lg"
            ></VideoPlayer>
          )}

          {/* Text-div */}
          <div className="w-full z-10 sml:w-1/2 flex flex-col gap-6 sml:justify-between md:-mr-20 ">
            {/* heading section */}
            {/* <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p> */}
            <h3 className="text-2xl font-bold pr-8 hover:text-textGreen">
              {project.title}
            </h3>

            {/* description block */}
            <p className="bg-[#112240] text-sm md:text-base px-5 py-5 rounded-md">
              {project.description}
            </p>

            {/* list of tech used */}
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 text-textGreen">
              {project.technologies.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Links to showcase project  🎯TO-DO */}
            <div className="text-2xl flex gap-4">
              {/* GitHub */}
              <a
                className="hover:text-textGreen duration-300"
                href={project.github_url}
                target="_blank"
              >
                <RiGithubLine />
              </a>

              {/* LiveDemo */}
              <a
                className="hover:text-textGreen duration-300"
                href={project.liveLink}
                target="_blank"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>

        {/* MEDIA QUEREY: MOBILE SCREENS */}
        <div
          className="hover:shadow-xl shadow-inner bg-no-repeat bg-cover flex-col rounded-lg mx-4 mdl:hidden"
          style={divStyle}
        >
          <div className="w-fit px-5 z-10 flex flex-col gap-6 mx-3">
            {/* Header section */}
            <p className="font-titleFont text-textGreen text-sm tracking-wide pt-5">
              Featured Project
            </p>
            <h3 className="font-titleFont text-2xl font-bold hover:text-textGreen">
              {" "}
              {project.title}{" "}
            </h3>

            {/* description block */}
            <p className="text-xs font-semibold sml:text-base rounded-md">
              {project.description}
            </p>

            {/* list of tech used */}
            <ul className="text-xs font-codeFont tracking-wide flex gap-5 text-textGreen">
              {project.technologies.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Links to showcase project  🎯TO-DO */}
            <div className="text-2xl flex gap-4 pb-10 items-end text-right">
              {/* GitHub */}
              <a
                className="hover:text-textGreen duration-300"
                href={project.github_url}
                target="_blank"
              >
                <RiGithubLine />
              </a>

              {/* LiveDemo */}
              <a
                className="hover:text-textGreen duration-300"
                href={project.liveLink}
                target="_blank"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardReversed;
