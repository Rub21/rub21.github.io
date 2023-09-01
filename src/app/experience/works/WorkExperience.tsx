import React from "react";
import { motion } from "framer-motion";
import BulletPoint from "./BulletPoint";

interface WorkExp {
  name: string;
  date: string;
  description: string;
  tasks: {
    name: string;
    description: string;
  }[];
}

interface Props {
  workExp: WorkExp;
}

const WorkExperience: React.FC<Props> = ({ workExp }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="w-full"
    >
      {/* JOB TITLE & COMPANY */}
      <div className="flex flex-wrap gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row">
        <h3> {workExp.name}</h3>
        {/* <span className="text-sm mt-1 font-medium text-textGreen flex">
          @ Data Team Lead
        </span> */}
      </div>
      <p className="pt-3">{workExp.date}</p>
      <p className="mt-3 text-base font-light flex gap-2 text-textDark">
        <strong>
          {workExp.description}
          <br />
          Some of my key accomplishments in this role include:
        </strong>
      </p>
      {/* Bullet Points */}
      <ul className="mt-4 flex flex-col gap-3 text-textDark">
        {workExp.tasks.map(
          (task: { name: string; description: string }, index: number) => {
            return (
              <BulletPoint
                key={index}
                headningText={task.name}
                contentText={task.description}
              />
            );
          }
        )}
      </ul>
    </motion.div>
  );
};

export default WorkExperience;
