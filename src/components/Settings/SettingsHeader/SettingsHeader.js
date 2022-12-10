import React from "react";

const SettingsHeader = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex items-center space-x-10 w-full bg-white border border-[rgba(0, 0, 0, 0.1)] py-[20px]">
      <span
        className={`${
          selectedTab === 1
            ? "font-semibold text-black"
            : "font-medium text-gray1"
        } font-poppins text-[20px] leading-[30px] hover:cursor-pointer ml-20`}
        onClick={() => setSelectedTab(1)}
      >
        General
      </span>
      <span
        className={`${
          selectedTab === 2
            ? "font-semibold text-black"
            : "font-medium text-gray1"
        } font-poppins text-[20px] leading-[30px] hover:cursor-pointer`}
        onClick={() => setSelectedTab(2)}
      >
        Integration
      </span>
      <span
        className={`${
          selectedTab === 3
            ? "font-semibold text-black"
            : "font-medium text-gray1"
        } font-poppins text-[20px] leading-[30px] hover:cursor-pointer`}
        onClick={() => setSelectedTab(3)}
      >
        Users
      </span>
    </div>
  );
};

export default SettingsHeader;
