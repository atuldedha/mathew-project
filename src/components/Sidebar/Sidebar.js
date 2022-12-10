import React, { useEffect, useState } from "react";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
// import { useRouter } from "next/router";
import Verified from "../../images/safety.png";
import ArrowDown from "../../images/arrowDown.png";
import { useWindowSize } from "../../utils/WindowResizeHook";
import data from "./staticData";

const Sidebar = ({
  showSidebar,
  setShowSidebar,
  username,
  selected,
  setSelected,
}) => {
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width && width < parseFloat(750)) {
      setShowSidebar(false);
    } else if (width && width > parseFloat(750)) {
      setShowSidebar(true);
    }
  }, [width]);
  // const router = useRouter();

  const handleClick = (id, route) => {
    setSelected(id);
    if (width < parseFloat(750)) {
      setShowSidebar(false);
    }
    // router.push(route);
  };

  // useEffect(() => {
  //   if (router.pathname === "/") {
  //     setSelected(1);
  //   } else if (router.pathname === "/keyFinder") {
  //     setSelected(2);
  //   } else if (router.pathname === "/report") {
  //     setSelected(3);
  //   } else if (router.pathname === "/importKeywords") {
  //     setSelected(4);
  //   } else if (router.pathname === "/list") {
  //     setSelected(5);
  //   } else if (router.pathname === "/billing") {
  //     setSelected(6);
  //   } else if (router.pathname === "/yourWebsites") {
  //     setSelected(7);
  //   } else if (router.pathname === "/settings") {
  //     setSelected(8);
  //   }
  // }, [router.pathname]);

  return (
    <div
      className={`${
        !showSidebar
          ? "opacity-0 -translate-x-[500px] w-0 p-0"
          : "opacity-100 translate-x-[1px] w-56 md:w-[298px] h-screen mt-px md:mt-0 p-5 md:p-6 "
      } z-10 bg-white absolute top-0 left-0 overflow-y-scroll transition-all duration-200 ease-in-out flex flex-col items-start border-l-[1px] border-l-gray-500 shadow-md`}
    >
      <div className="w-full flex items-center justify-between mb-6 mt-4">
        <div className="flex items-center space-x-4">
          <img
            src={Verified}
            alt="verified"
            className="h-[30px] w-[30px] object-contain"
          />
          <span>{username}</span>
        </div>
        <img
          src={ArrowDown}
          alt="down"
          className="h-[18px] w-[18px] object-contain"
          onClick={() => setShowSidebar(false)}
        />
      </div>

      <span className="font-poppins font-medium text-[16px] leading-[24px] text-black opacity-60 mb-4 uppercase">
        Employer
      </span>

      <div className="flex flex-col w-full mb-10">
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

      <span className="font-poppins font-medium text-[16px] leading-[24px] text-black opacity-60 uppercase mb-5">
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
