import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import SingleContactSocial from "./SingleContactSocial";
const ContactSocial = () => {
  return (
    <div
      className="flex
    lg:flex-row gap-4 text-orange"
    >
      <SingleContactSocial
        link="https://github.com/Techhaldar"
        Icon={VscGithubAlt}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/ratin-haldar/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://x.com/i/flow/login?redirect_after_login=%2Ftechhaldar"
        Icon={BsTwitterX}
      />
      <SingleContactSocial
        link="https://www.instagram.com/letstechonline/"
        Icon={FaInstagram}
      />
      <SingleContactSocial
        link="https://www.youtube.com/@letstechonline"
        Icon={FaYoutube}
      />
    </div>
  );
};

export default ContactSocial;
