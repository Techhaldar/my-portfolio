import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContanctMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="../../../src/Images/email-image.png"
        alt="email Image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContanctMeRight;
