"use client";

import React from "react";
import Image from "next/image";
import { profileImgCircle } from "../../../public/assets";

import Skills from "./../components/static/skills";

const About = () => {
  return (
    <div className="h-[88vh] w-full mx-auto pt-20 px-5 ">
      <section
        id="about"
        className="max-w-containerSmall h-screen mx-auto mdl:px-10 py-96 lgl:py-32 flex flex-col gap-8 justify-center mt-4"
      >
        {/* CONTENT CONTAINER - GRID */}
        <div className="grid grid-cols-6 auto-rows-auto">
          {/* Text Portion */}
          <div className="row-span-2 col-start-1 col-end-5 text-base text-textDark font-medium max-mdl:col-span-full">
            <div className="mdl:w-11/12 text-xs sm:text-sm sml:text-base">
              {/* Floating image for tablets and Mobile devices */}
              <div className="pl-5 py-6 float-right">
                <div className="relative">
                  <Image
                    className="mdl:hidden top-0 left-0 rounded-full w-24 sm:w-32 sml:w-40 md:w-48 border-2 border-textGreen"
                    src={profileImgCircle}
                    alt="profilepicture"
                  />

                  {/* background-blur-effect */}
                  {/* <div className=" mdl:hidden absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 sml:w-40 sml:h-40 md:w-48 md:h-48 bg-textGreen/20 rounded-full hover:bg-transparent duration-300 "></div> */}
                </div>
              </div>

              <p>
                <span>
                  Hi! I’m a programmer, focused on building tools and pipelines
                  to manage large amounts of vector data for machine learning
                  and mapping projects. I work with geodata analysis,
                  visualization, cloud infrastructure, DevOps, and full-stack
                  development.
                </span>
                <br />
                <span>
                  In my role as a cloud engineer, I manage and deploy scalable
                  systems using Kubernetes for platforms like OpenHistoricalMap,
                  OSM-US, and Palestine Maps. I also integrate machine learning
                  models into APIs to make data processing easier and more
                  accurate.
                </span>
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="row-start-1 row-end-3 col-start-5 col-end-7 grid place-items-center relative group max-mdl:hidden">
            {/* Image container */}
            <div className="absolute w-52 h-52 lgl:w-80 lgl:h-80 -left-6 -top-6 rounded-full">
              {/* Actual Profile Pic */}
              <Image
                className="z-30 rounded-full absolute w-52 h-52 lgl:w-80 lgl:h-80 fill object-cover border-2 border-textGreen"
                src={profileImgCircle}
                alt="profilepicture"
              />

              {/* background-blur-effect */}
              {/* <div className="z-30 hidden mdl:inline-block absolute w-52 h-52 lgl:w-80 lgl:h-80 bg-textGreen/20 rounded-full top-0 left-0 group-hover:bg-transparent duration-300 "></div> */}

              {/* Animated Circle */}
              {/* <div className="z-10 left-6 top-6 hidden absolute mdl:inline-block w-52 h-52 lgl:w-80 lgl:h-80 border-2 border-textGreen rounded-full group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-100"></div> */}
            </div>
          </div>

          {/* Skill Logo's */}
          <div className="row-start-3 col-span-full pt-5 ">
            <p className="pb-5 font-codeFont text-textDark font-bold text-left text-sm lg:text-base ">
              My kills:
            </p>

            {Skills.map((field, index) => (
              <div key={index} className="flex flex-row items-center m-4">
                <p className="pb-5 font-codeFont w-20 text-textDark font-bold text-left text-sm lg:text-base ml-3 mt-1">
                  {field.name}
                </p>
                <ul className="flex flex-row flex-wrap gap-4 ml-5 -mt-5 justify-center">
                  {field && field.types
                    ? field.types.map((type_, i) => {
                        if (type_ && type_.src && type_.skill_name) {
                          return (
                            <li
                              key={i}
                              className="flex items-center gap-2 hover:-translate-y-2 transition-all duration-300"
                            >
                              <Image
                                className="rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse"
                                src={type_.src}
                                alt={type_.skill_name}
                                title={type_.skill_name}
                              />
                            </li>
                          );
                        }
                        return null;
                      })
                    : null}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
