import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../FrameMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex "
    >
      <img
        src="../../../src/Images/ProfilePic.jpg"
        alt="Ratin Haldar"
        className="md:max-h-[420px] sm:max-h-[320px] sm:mt-8 w-auto rounded-full"
      />
    </motion.div>
  );
};

export default HeroPic;
