import React, { useState } from "react";

// sidebar options
const SidebarOptions = ({
  icon,
  text,
  id,
  selected,
  handleClick,
  selectedIcon,
}) => {
  return (
    <div
      className={`${
        selected ? "bg-green1 shadow-shadow1" : ""
      } sticky top-0 left-0 flex items-center space-x-5 hover:cursor-pointer mb-2 px-[30px] py-[20px] w-full transition-all ease-in-out`}
      onClick={() => handleClick(id)}
    >
      <img
        src={selected ? selectedIcon : icon}
        alt={text}
        className="h-[24px] w-[24px] object-contain"
      />
      <span
        className={`${
          selected ? "text-white1" : "text-black"
        } font-poppins font-normal text-xs md:text-[14px] leading-[24px] whitespace-nowrap`}
      >
        {text}
      </span>
    </div>
  );
};

export default SidebarOptions;
