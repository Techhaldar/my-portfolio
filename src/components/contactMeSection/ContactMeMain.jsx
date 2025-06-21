import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

import { motion } from "framer-motion";
import { fadeIn } from "../../FrameMotion/variants";
import { div } from "motion/react-client";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] lg:mx-auto sm:mx-4 items-center justify-center mt-[100px]"
    >
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-6xl text-cyan b-10 text-center"
      >
        Contact Me
      </motion.h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <ContactMeLeft />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <ContactMeRight />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMeMain;
