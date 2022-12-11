import React, { useEffect, useState } from "react";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
// import { useRouter } from "next/router";
import Verified from "../../images/safety.png";
import ArrowDown from "../../images/arrowDown.png";
import ArrowUp from "../../images/arrowUp.png";
import { useWindowSize } from "../../utils/WindowResizeHook";
import data from "./staticData";

// sidebar
const Sidebar = ({ showSidebar, setShowSidebar, selected, setSelected }) => {
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width && width < parseFloat(750)) {
      setShowSidebar(false);
    } else if (width && width > parseFloat(750)) {
      setShowSidebar(true);
    }
  }, [width]);

  // click handler on sidebar items
  const handleClick = (id) => {
    setSelected(id);
    if (width < parseFloat(750)) {
      setShowSidebar(false);
    }
  };

  return (
    <div
      className={`${
        !showSidebar
          ? "opacity-0 -translate-y-[500px] h-0 p-0"
          : "opacity-100 -translate-y-[1px] h-screen"
      } flex flex-col absolute top-[0] left-0 transition-all ease-in-out duration-500 bg-white1 w-[260px] z-10 px-[16px] overflow-scroll`}
    >
      <span className="font-poppins font-medium text-[16px] leading-[24px] text-black opacity-60 mb-4 uppercase mt-[140px] ml-8">
        Employer
      </span>

      <div className="flex flex-col w-full mb-10">
        {/* sidebar options */}
        {data.employer.map((item) => (
          <SidebarOptions
            icon={item.icon}
            selectedIcon={item.selectedIcon}
            text={item.title}
            selected={selected === item.id}
            handleClick={handleClick}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>

      <span className="font-poppins font-medium text-[16px] leading-[24px] text-black opacity-60 uppercase mb-5 ml-8">
        Issues
      </span>

      <div className="flex flex-col w-full mb-10">
        {data.issues.map((item) => (
          <SidebarOptions
            icon={item.icon}
            selectedIcon={item.selectedIcon}
            text={item.title}
            selected={selected === item.id}
            handleClick={handleClick}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
