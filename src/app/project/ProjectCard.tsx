import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "../components/VideoPlayer";
import { motion } from "framer-motion";
import { RiGithubLine } from "react-icons/ri";
import { BsRocketTakeoffFill } from "react-icons/bs";
import ReactMarkdown from "react-markdown";

import { FiExternalLink } from "react-icons/fi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const ProjectCard = ({ project }: { project: any }) => {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <Card className="w-full max-w-[26rem] shadow-lg shadow-navbarShadow bg-bodyColor">
      <CardHeader floated={false} color="blue-gray">
        <div className="relative h-[300px] overflow-hidden bg-black px-2">
          {project.img ? (
            <img
              src={project.img}
              alt="ui/ux review check"
              // width={}
              onClick={handleModal}
              className="w-full h-full object-contain rounded-lg"
            />
          ) : (
            <VideoPlayer src={project.vid} />
          )}
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-black bg-opacity-50 p-2">
          <BsRocketTakeoffFill color="#099876" />
        </div>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between h-[50px] px-4  pt-2">
          <Typography  variant="h5" color="blue-gray" className="font-medium">
            <Link className="text-textGreen" href="" onClick={handleModal}>
              {project.title}
            </Link>
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <a
              key={"1"}
              className="hover:text-textGreen duration-300"
              href={project.github_url}
              target="_blank"
            >
              <RiGithubLine />
            </a>
            <a
              key={"2"}
              className="hover:text-textGreen duration-300"
              href={project.liveLink}
              target="_blank"
            >
              <FiExternalLink />
            </a>
          </Typography>
        </div>
        <motion.p
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className="text-sm sml:text-base text-textDark font-medium max-h-[100px] h-[100px] overflow-auto px-4"
        >
          {project.description.split(" ").slice(0, 20).join(" ") +
            (project.description.split(" ").length > 30 ? "..." : "")}
        </motion.p>

        <div className="group mt-1 inline-flex flex-wrap items-center gap-3 px-4">
          <ul className="text-xs font-codeFont tracking-wide flex gap-5 text-textGreen">
            {project.technologies.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </CardBody>
      {/* <CardFooter className="pt-3">
  
         <Link href={project.slug}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="w-full h-10 text-xs  sml:text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-100"
          >
            Read more
          </motion.button>
        </Link> 
      </CardFooter> */}
      {showModal && (
        <div
          onClick={handleModal}
          className="fixed mt-10 inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40"
        >
          <div className="fixed left-1/2 transform -translate-x-1/2 z-50 ">
            <div className="bg-white rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-lg font-bold hover:text-gray-700"
                onClick={handleModal}
              >
                ×
              </button>
              <div className="max-w-[900px] w-full mx-auto p-6 overflow-y-auto h-[88vh] shadow-lg shadow-navbarShadow bg-bodyColor">
                <ReactMarkdown className="markdown">
                  {project.body.raw}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
