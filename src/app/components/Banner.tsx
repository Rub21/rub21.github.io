"use client";

import React from "react";
import { motion } from "framer-motion";
import Typewriter, { Options } from "typewriter-effect";
import Link from "next/link";

const Banner = () => {
  const options: Options = {
    strings: [
      "Cloud Engineer",
      "Data Engineer",
      "React Developer",
      "Python Developer",
      "Next.js Developer",
    ],
    autoStart: true,
    loop: true,
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer min-h-screen h-full mx-auto mdl:py-12 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 justify-center"
    >
      {/* Hello World Heading */}
      <motion.h3
        className="text-xs md:text-lg font-codeFont tracking-wide text-textGreen"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        {"Cloud Engineer & Data Engineer"}
      </motion.h3>

      {/* Name heading & Auto-Typing Array heading*/}
      <motion.h1
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="text-3xl md:text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
         Hi, I am Ruben{" "}
        <span className="text-lg md:text-2xl lg:text-3xl text-textDark mt-2 lgl:mt-4">
          <Typewriter options={options} />
        </span>
      </motion.h1>

      {/* Introductory Text */}
      <motion.p
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        className="text-sm sml:text-base text-textDark font-medium"
      >
        {" "}
        I am a Cloud and Data Engineer with a focus on managing and
        processing large geospatial datasets for machine learning and GIS
        applications. I design and deploy scalable cloud infrastructures using
        Kubernetes and create tools and pipelines that streamline data
        processing workflows. My expertise spans geodata analysis, automation,
        and the integration of machine learning models into APIs to enhance data
        accuracy and efficiency. Additionally, I am the founder of{" "}
        <Link
          href="https://geocompas.ai"
          className="text-textGreen hover:underline font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          GeoCompas
        </Link>
        , a company dedicated to generare training data for machine learning
        models.
        <br />
        <br />
        <a href="https://www.linkedin.com/in/rub21/" target="_blank">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            {/* Animated underline bar */}
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      {/* <Link href="https://geocompas.ai">GeoCompas Founder</Link> */}
      {/* <Link href="/project">
        <motion.button
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="w-40 h-10 text-xs sml:w-52 sml:h-14 sml:text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my Projects
        </motion.button>
      </Link> */}
    </section>
  );
};

export default Banner;
