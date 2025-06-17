import React from "react";

const SingleContactSocial = ({ Icon, Link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-oranger rounded-full p-3 flex items-center justify-center hover:bg-orange hover:text-white scale-115 duration-500">
      <a href={Link} className="cursor-pointer">
        <Icon />
      </a>
      <a href=""></a>
    </div>
  );
};

export default SingleContactSocial;
