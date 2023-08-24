"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import TeamLead from "./works/TeamLead";
import QA from "./works/QA";
import Internship from "./works/Internship";
import StartUp from "./works/StartUp";
import WorkMapbox from "./works/WorkMapbox";

const Experience = () => {
  const [workTeamLead, setWorkTeamLead] = useState(true);
  const [workQA, setWorkQA] = useState(false);
  const [workInternship, setWorkInternship] = useState(false);
  const [workStartUp, setWorkStartUp] = useState(false);
  const [workMapbox, setworkMapbox] = useState(false);

  const handleTeamLead = () => {
    setWorkTeamLead(true);
    setWorkQA(false);
    setWorkInternship(false);
    setWorkStartUp(false);
    setworkMapbox(false);
  };

  const handleQA = () => {
    setWorkTeamLead(false);
    setWorkQA(true);
    setWorkInternship(false);
    setWorkStartUp(false);
    setworkMapbox(false);
  };

  const handleInternship = () => {
    setWorkTeamLead(false);
    setWorkQA(false);
    setWorkInternship(true);
    setWorkStartUp(false);
    setworkMapbox(false);
  };

  const handleStartUp = () => {
    setWorkTeamLead(false);
    setWorkQA(false);
    setWorkInternship(false);
    setWorkStartUp(true);
    setworkMapbox(false);
  };

  // const handleworkMapbox = () => {
  //   setWorkTeamLead(false);
  //   setWorkQA(false);
  //   setWorkInternship(false);
  //   setWorkStartUp(false);
  //   setworkMapbox(true);
  // };

  return (
    <section
      id="Experience"
      className="max-w-containerSmall min-h-screen mx-auto py-96 lgl:py-32 flex flex-col gap-5 justify-center"
    >
      <SectionTitle titleName="Where I have worked" titleNumber="02" />
      {/* CONTAINER DIV */}
      <div className="w-full h-fit mt-5 flex flex-col sml:flex-row gap-4 ">
        {/*  SIDE BAR */}
        <div className="flex w-[fit-content] h-[fit-content] sml:flex-col ">
          <ul className="flex whitespace-nowrap max-sml:w-6/12 max-sml:overflow-x-scroll max-sml:no-scrollbar sml:h-auto sml:flex-col">
            {/* ======================= Development Seed ======================= */}
            <li
              onClick={handleTeamLead}
              className={`${
                workTeamLead
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor : text-textDark"
              } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
            >
              Development Seed
              <br />
              <em>January 2018 - </em>
            </li>

            {/* ======================= Mapbox (Manager) =======================*/}
            <li
              onClick={handleInternship}
              className={`${
                workInternship
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor : text-textDark"
              } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
            >
              Mapbox (Manager)
              <br />
              <em>January 2017 - January 2018</em>
            </li>

            {/* ======================= Space AG ======================= */}
            <li
              onClick={handleQA}
              className={`${
                workQA
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor : text-textDark"
              } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
            >
              Space AG
              <br />
              <em>June 2017 - August 2017</em>
            </li>
            {/* ======================= Mapbox ======================= */}

            <li
              onClick={() => {
                setWorkTeamLead(false);
                setWorkQA(false);
                setWorkInternship(false);
                setWorkStartUp(false);
                setworkMapbox(true);
              }}
              className={`${
                workMapbox
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor : text-textDark"
              } border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
            >
              Mapbox
              <br />
              <em>January 2012 - January 2017</em>
            </li>
          </ul>
        </div>

        {/* Work information */}
        {workTeamLead && <TeamLead />}
        {workQA && <QA />}
        {workInternship && <Internship />}
        {workStartUp && <StartUp />}
        {workMapbox && <WorkMapbox />}
      </div>
    </section>
  );
};

export default Experience;

// I need to create a media querey that will turn the bar horizontally for mobile viewing...
