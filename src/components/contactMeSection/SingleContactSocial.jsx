import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-oranger rounded-full p-3 flex items-center justify-center hover:bg-orange hover:text-white scale-115 duration-500">
      <a
        href={link}
        className="cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
