import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrameMotion/variants";
// import { div } from "motion/react-client";m

const ProjectMain = () => {
  const projects = [
    {
      name: "Grocery Mart UI",
      Description:
        "Created a modern, responsive Grocery Mart site with dynamic features",
      align: "right",
      image: "../../../src/Images/website-img-1.jpg",
      link: "#",
    },
    {
      name: "MedPulse UI",
      Description: "Medical Is a Field That Encompasses The Study Life",
      align: "left",
      image: "../../../src/Images/website-img-2.webp",
      link: "#",
    },
    {
      name: "Personal Portfolio",
      Description:
        "Crafted a visually appealing portfolio website to showcase my skills and projects",
      align: "right",
      image: "../../../src/Images/website-img-3.jpg",
      link: "#",
    },
    {
      name: "Simple Calculator",
      Description:
        "Created a modern, responsive Grocery Mart site with dynamic features",
      align: "left",
      image: "../../../src/Images/website-img-4.jpg",
      link: "#",
    },
  ];

  return (
    <div id="Projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <SingleProject
                key={index}
                name={item.name}
                Description={item.Description}
                align={item.align}
                image={item.image}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
