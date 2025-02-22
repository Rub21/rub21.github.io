"use client";

import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import experiences from "../components/static/experiences";
import WorkExperience from "./works/WorkExperience";
import Link from "next/link";

const Experience = () => {
  const [WorkGeoCompas, setWorkGeoCompas] = useState(true);
  const [WorkDevSeed, setWorkDevSeed] = useState(false);
  const [WorkMapbox2, setWorkMapbox2] = useState(false);
  const [workSpaceAG, setworkSpaceAG] = useState(false);
  const [workMapbox, setworkMapbox] = useState(false);

  return (
    <div className="h-[88vh] w-full mx-auto px-5 ">
      <section
        id="Experience"
        className="max-w-containerSmall mx-auto flex flex-col gap-5 justify-center"
      >
        <SectionTitle titleName="Where I have worked" titleNumber="" />
        <div className="w-full h-fit mt-5 flex flex-col sml:flex-row gap-4 ">
          <div className="flex w-[fit-content] h-[fit-content] sml:flex-col ">
            <ul className="flex whitespace-nowrap max-sml:w-6/12 max-sml:overflow-x-scroll max-sml:no-scrollbar sml:h-auto sml:flex-col">
              {/* ======================= GeoCompas ======================= */}
              <li
                onClick={() => {
                  setWorkGeoCompas(true);
                  setWorkDevSeed(false);
                  setworkSpaceAG(false);
                  setWorkMapbox2(false);
                  setworkMapbox(false);
                }}
                className={`${
                  WorkGeoCompas
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor : text-textDark"
                } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
              >
                <Link
                  href="https://geocompas.ai"
                  className="text-textGreen hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GeoCompas
                </Link>
                <br />
                <em>January 2024 - Present </em>
              </li>

              {/* ======================= Development Seed ======================= */}
              <li
                onClick={() => {
                  setWorkGeoCompas(false);
                  setWorkDevSeed(true);
                  setworkSpaceAG(false);
                  setWorkMapbox2(false);
                  setworkMapbox(false);
                }}
                className={`${
                  WorkDevSeed
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor : text-textDark"
                } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
              >
               
                <Link
                  href="https://developmentseed.org"
                  className="text-textGreen hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Development Seed
                </Link>
                <br />
                <em>January 2018 - January 2024 </em>
              </li>

              {/* ======================= Mapbox (Manager) =======================*/}
              <li
                onClick={() => {
                  setWorkGeoCompas(false);
                  setWorkDevSeed(false);
                  setworkSpaceAG(false);
                  setWorkMapbox2(true);
                  setworkMapbox(false);
                }}
                className={`${
                  WorkMapbox2
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor : text-textDark"
                } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
              >
                <Link
                  href="https://www.mapbox.com"
                  className="text-textGreen hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mapbox (Manager)
                </Link>

                
                <br />
                <em>January 2017 - January 2018</em>
              </li>

              {/* ======================= Space AG ======================= */}
              <li
                onClick={() => {
                  setWorkGeoCompas(false);
                  setWorkDevSeed(false);
                  setworkSpaceAG(true);
                  setWorkMapbox2(false);
                  setworkMapbox(false);
                }}
                className={`${
                  workSpaceAG
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor : text-textDark"
                } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
              >
               
                <Link
                  href="https://www.spaceag.co"
                  className="text-textGreen hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   Space AG
                </Link>
                
                <br />
                <em>June 2017 - August 2017</em>
              </li>
              {/* ======================= Mapbox ======================= */}

              <li
                onClick={() => {
                  setWorkGeoCompas(false);
                  setWorkDevSeed(false);
                  setworkSpaceAG(false);
                  setWorkMapbox2(false);
                  setworkMapbox(true);
                }}
                className={`${
                  workMapbox
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor : text-textDark"
                } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
              >
                  <Link
                  href="https://www.mapbox.com"
                  className="text-textGreen hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mapbox
                </Link>
                <br />
                <em>January 2012 - January 2017</em>
              </li>
            </ul>
          </div>

          {/* Work information */}
          {WorkGeoCompas && <WorkExperience workExp={experiences[4]} />}
          {WorkDevSeed && <WorkExperience workExp={experiences[3]} />}
          {WorkMapbox2 && <WorkExperience workExp={experiences[2]} />}
          {workSpaceAG && <WorkExperience workExp={experiences[1]} />}
          {workMapbox && <WorkExperience workExp={experiences[0]} />}
        </div>
      </section>
    </div>
  );
};

export default Experience;
