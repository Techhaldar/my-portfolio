import React from "react";

const HeroPic = () => {
  return (
    <div className="h-full flex ">
      <img
        src="../../../src/Images/ProfilePic.jpg"
        alt="Ratin Haldar"
        className="md:max-h-[420px] sm:max-h-[320px] sm:mt-8 w-auto rounded-full"
      />
    </div>
  );
};

export default HeroPic;
