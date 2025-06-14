import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import { FaGitAlt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import SingleSkill from "./SingleSkill";

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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
