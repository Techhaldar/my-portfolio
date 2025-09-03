import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import { FaGitAlt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrameMotion/variants";
import { div } from "motion/react-client";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: DiJavascript,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "Tailwind css",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    skill: "Express",
    icon: SiExpress,
  },
  {
    skill: "Node",
    icon: FaNode,
  },
  {
    skill: "MongoDB",
    icon: DiMongodb,
  },
  {
    skill: "Git",
    icon: FaGitAlt,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
