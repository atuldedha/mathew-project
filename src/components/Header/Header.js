import React, { useState } from "react";
import SearchIcon from "../../images/search.png";
import ProfilePicture from "../../images/profilePicture.png";
import Verified from "../../images/safety.png";
import ArrowDown from "../../images/arrowDown.png";
import ArrowUp from "../../images/arrowUp.png";
import IssueHeaderButtons from "../Issues/IssueDesign/IssueHeaderButtons/IssueHeaderButtons";

// Header Component
const Header = ({ setShowSidebar, username, showSidebar, selected }) => {
  // state for selecting the header button when designs tab is selected
  const [buttonSelected, setButtonSelected] = useState(1);
  return (
    <div className="flex sticky top-0 z-10 h-[110px] justify-between w-full bg-white1 shadow-shadow2 border-b border-b-gray-300 py-[30px] px-[18px]">
      {/* common for all tabs */}
      <div className="flex items-center space-x-10">
        <div className="flex items-center justify-between bg-white1 w-[260px]">
          <div className="flex items-center space-x-4">
            <img
              src={Verified}
              alt="verified"
              className="h-[30px] w-[30px] object-contain"
            />
            <span>{username}</span>
          </div>
          <img
            src={showSidebar ? ArrowUp : ArrowDown}
            alt="down"
            className="h-[18px] w-[18px] object-contain hover:cursor-pointer"
            onClick={() => setShowSidebar((prev) => !prev)}
          />
        </div>
        <div className="flex w-[300px] items-center space-x-4 py-[12px] px-[10px] bg-white shadow-shadow3 rounded-[4px] border border-[rgba(0, 0, 0, 0.1)]">
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
      {/* when certifications tab is selected */}
      {selected === 6 ? (
        <button className="py-[10px] px-[22px] bg-blue1 text-white1 font-poppins font-bold text-[18px] leading-[30px] rounded-[4px]">
          Upload Certificate
        </button>
      ) : // when desgins tab is selected
      selected === 7 ? (
        <IssueHeaderButtons
          buttonSelected={buttonSelected}
          setButtonSelected={setButtonSelected}
        />
      ) : (
        // for all other tabs
        <img
          src={ProfilePicture}
          alt="img"
          className="h-[50px] w-[50px] object-contain rounded-full mr-[40px]"
        />
      )}
    </div>
  );
};

export default Header;
