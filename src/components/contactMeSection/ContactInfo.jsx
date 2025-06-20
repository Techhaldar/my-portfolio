import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex  flex-col gap-4 text-white">
      <SingleInfo text="ratinhaldar123@gmail.com" Image={MdOutlineMail} />
      <SingleInfo text="+91 7351721372" Image={LuPhone} />
      <SingleInfo
        text="Khatima, Udham Singh Nagar, Uttarakhand 262308"
        Image={CiLocationOn}
        className="md:text-3xl"
      />
    </div>
  );
};

export default ContactInfo;
