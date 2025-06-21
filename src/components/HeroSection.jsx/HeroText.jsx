import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrameMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan"
      >
        FRONT-END WEB DEVELOPER
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-4xl font-bold font-special text-orange"
      >
        RATIN HALDAR
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        Entry-level Web Developer driven by curiosity, <br />
        creativity, and a love for coding.
      </motion.p>
    </div>
  );
};

export default HeroText;
