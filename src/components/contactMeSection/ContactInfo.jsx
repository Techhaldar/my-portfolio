import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex  flex-col gap-4 text-white">
      <SingleInfo text="ratinhaldar123@gmail.com" Image={MdOutlineMail} />
      <SingleInfo text="+91 7351721372" Image={LuPhone} />
      <SingleInfo
        text="KHATIMA,UDHAM SINGH NAGAR,UTTARAKHAND 262308"
        Image={IoLocationOutline}
        className="text-3xl"
      />
    </div>
  );
};

export default ContactInfo;
