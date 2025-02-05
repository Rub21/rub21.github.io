"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { logo } from "../../../public/assets";
import { MdOutlineClose } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

function Navbar() {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  const getLink = (path: string): string => {
    const isProd = process.env.NODE_ENV === "production";
    return isProd ? `${path}.html` : path;
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      //do something with myRef
      setShowMenu(false);
    }
  }

  return (
    <div className="w-full shadow-navbarShadow h-18 lg:h-[06vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <Link href="/">
          {/* <Image
            className="pt-2 rounded-full sml:w-16 h-12 w-6"
            src={logo}
            alt="logo"
          /> */}
        </Link>

        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13] gap-7">
            {/* HOME */}
            <Link
              href={getLink("/")}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              Home
            </Link>
            {/* ABOUT */}
            <Link
              href={getLink("/about")}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              Skillls
            </Link>
            {/* EXPERIENCE */}
            <Link
              href={getLink("/experience")}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              Experience
            </Link>
            {/* PROJECTS */}
            <Link
              href={getLink("/project")}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              Projects
            </Link>
            {/* CONTACT */}
            <Link
              href={getLink("/contact")}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              Contact
            </Link>
          </ul>
          {/* RESUME BUTTON */}
          <a href="/assets/rub21_resume.pdf" target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.25 }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* Small Icon Section*/}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transiton-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-0 transiton-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transiton-all ease-in-out duration-300"></span>
        </div>

        {/* Menu for mobile view */}
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-end w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.1,
              }}
              className="w-[80%] h-full scrollbar-hide bg-[#112240] flex flex-col items-center px-4 py-16 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-textGreen/80 absolute top-4 right-4"
              />

              {/* ITEMS CONTAINER */}
              <div className="w-[80%] flex flex-col text-base text-center items-center gap-8">
                {/* List of Section Mobile View */}
                <ul className="flex flex-col text-base gap-12 items-left pt-12">
                  {/* HOME */}
                  <Link
                    href="/"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link "
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: "easeIn",
                      }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  {/* ABOUT */}
                  <Link
                    href="/about"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}
                    >
                      About
                    </motion.li>
                  </Link>
                  {/* EXPERIENCE */}
                  <Link
                    href="/experience"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.3,
                        ease: "easeIn",
                      }}
                    >
                      Experience
                    </motion.li>
                  </Link>
                  {/* PROJECTS */}
                  <Link
                    href="/project"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.4,
                        ease: "easeIn",
                      }}
                    >
                      Projects
                    </motion.li>
                  </Link>
                  {/* CONTACT */}
                  <Link
                    href="/contact"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.5,
                        ease: "easeIn",
                      }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                {/* RESUME BUTTON */}
                <a
                  href="/assets/rub21_resume.pdf"
                  target="_blank"
                  className="pt-8"
                >
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.8, ease: "easeIn" }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                {/* ICONS for Mobile view */}
                <div className="flex gap-4 pt-4">
                  {/* Github Icon */}
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 1,
                      ease: "easeIn",
                    }}
                    href="https://github.com/Rub21"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SiGithub />
                    </span>
                  </motion.a>

                  {/* LinkedIn Icon */}
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 1.2,
                      ease: "easeIn",
                    }}
                    href="https://www.linkedin.com/in/rub2106/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <BsLinkedin />
                    </span>
                  </motion.a>

                  {/* Twitter Icon */}
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 1.4,
                      ease: "easeIn",
                    }}
                    href="https://twitter.com/rub21m"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TiSocialTwitter />
                    </span>
                  </motion.a>

                  {/* Instagram Icon */}
                  <motion.a
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: 1.6,
                      ease: "easeIn",
                    }}
                    href="https://www.instagram.com/rub2106/"
                    target="_blank"
                  >
                    <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TiSocialInstagram />
                    </span>
                  </motion.a>
                </div>

                {/* Email for Mobile View */}
                <motion.a
                  href="mailto:rub2106@gmail.com"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: 2,
                    ease: "easeIn",
                  }}
                >
                  <p className="text-sm w-72 tracking-widest pl-4 hover:text-textGreen mt-4">
                    rub2106@gmail.com
                  </p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
