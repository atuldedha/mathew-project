import { Bars3Icon, UserIcon } from "@heroicons/react/24/outline";
import React from "react";
// import { useWindowSize } from "../../utils/WindowResizeHook";
import SearchIcon from "../../images/search.png";
import ProfilePicture from "../../images/profilePicture.png";

const Header = ({ setShowSidebar }) => {
  // const [width, height] = useWindowSize();
  return (
    <div className="flex justify-between w-full bg-white1 shadow-shadow2 border-b border-b-gray-300 h-max py-[30px] px-[18px]">
      <div className="flex items-center">
        <Bars3Icon
          className="w-6 h-6 text-gray1 ml-5 hover:cursor-pointer hover:text-gray-300"
          onClick={() => setShowSidebar((prev) => !prev)}
        />
        <div className="ml-[290px] flex items-center space-x-4 py-[12px] px-[10px] bg-white shadow-shadow3 rounded-[4px] border border-[rgba(0, 0, 0, 0.1)]">
          <img
            src={SearchIcon}
            alt="icon"
            className="h-[20px] w-[20px] object-contain ml-[30px]"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full ml-[10px] font-poppins font-normal text-[16px] leading-[24px] text-black placeholder:opacity-70 outline-none border-none"
          />
        </div>
      </div>
      <img
        src={ProfilePicture}
        alt="img"
        className="h-[50px] w-[50px] object-contain rounded-full mr-[40px]"
      />
    </div>
  );
};

export default Header;
