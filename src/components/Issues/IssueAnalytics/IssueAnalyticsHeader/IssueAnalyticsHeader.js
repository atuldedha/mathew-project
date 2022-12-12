import React from "react";

const IssueAnalyticsHeader = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="bg-white1 shadow-shadow2 w-full flex items-center space-x-6 py-[20px]">
      <div
        className={`${
          selectedTab === 1 ? "bg-green4" : "bg-white1"
        } ml-[30px] flex items-center justify-center py-[10px] px-[10px] hover:cursor-pointer rounded-md`}
        onClick={() => setSelectedTab(1)}
      >
        <span className={`${selectedTab === 1 ? "text-green1" : ""} smText`}>
          Submissions
        </span>
      </div>
      <div
        className={`${
          selectedTab === 2 ? "bg-green3" : "bg-white1"
        } flex items-center justify-center py-[10px] px-[10px] hover:cursor-pointer rounded-md`}
        onClick={() => setSelectedTab(2)}
      >
        <span className={`${selectedTab === 2 ? "text-green1" : ""} smText`}>
          Marketing & Advertising
        </span>
      </div>
      <div
        className={`${
          selectedTab === 3 ? "bg-green3" : "bg-white1"
        } flex items-center justify-center py-[10px] px-[10px] hover:cursor-pointer rounded-md`}
        onClick={() => setSelectedTab(3)}
      >
        <span className={`${selectedTab === 3 ? "text-green1" : ""} smText`}>
          Buyer Interactions
        </span>
      </div>
      <div
        className={`${
          selectedTab === 4 ? "bg-green3" : "bg-white1"
        } flex items-center justify-center py-[10px] px-[10px] hover:cursor-pointer rounded-md`}
        onClick={() => setSelectedTab(4)}
      >
        <span className={`${selectedTab === 4 ? "text-green1" : ""} smText`}>
          Events
        </span>
      </div>
    </div>
  );
};

export default IssueAnalyticsHeader;
