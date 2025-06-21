import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrameMotion/variants";

const AboutMeText = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col md:items-start sm:items-center md:text-left"
    >
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white sm:text-center md:text-left">
        I am Ratin Haldar and I am 21 year old computer science graduated (BCA)
        student. I am looking to secure a challenging position where I can
        effectively contribute my skills as software professional for growth of
        organization and myself.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
      </button>
    </motion.div>
  );
};

export default AboutMeText;
