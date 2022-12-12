import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";
import AnalyticsCard from "../AnalyticsCard/AnalyticsCard";

const SubmissionAnalytics = () => {
  return (
    <>
      <div className="flex items-center justify-between py-[30px] px-[25px]">
        <div className="flex flex-col w-[35%]">
          <span className="text-2xl text-black font-medium font-poppins">
            Badges & certificates
          </span>
          <span className="smText font-normal mt-2">
            You can see an overview of the badges and certificates you have
            sent. Use filters to view specific data about your submission
            history.
          </span>
        </div>

        <div className="flex items-center space-x-4 pr-4">
          <button className="px-4 py-2 text-black font-normal text-xs font-poppins flex items-center border border-gray-400 rounded-md">
            <AdjustmentsHorizontalIcon className="h-4 w-4 text-gray-400" />
            Show General Filtering Options
          </button>
          <button className="px-4 py-2 text-white font-normal text-xs font-poppins bg-green1 hover:bg-white1 hover:text-black transition-all duration-200 ease-in-out hover:border hover:border-gray2 rounded-md">
            Batch PDF download
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 px-[25px]">
        <AnalyticsCard
          textColor="blue-300"
          title="Created"
          value="0"
          showBorder
        />

        <AnalyticsCard
          textColor="blue-300"
          title="Created"
          value="0"
          showBorder
        />

        <AnalyticsCard
          textColor="blue-300"
          title="Created"
          value="0%"
          showSecondValue
          secondValue="0"
        />

        <AnalyticsCard
          textColor="blue-300"
          title="Created"
          value="0%"
          showSecondValue
          secondValue="0"
        />

        <AnalyticsCard
          textColor="blue-300"
          title="Created"
          value="0%"
          showSecondValue
          secondValue="0"
        />

        <AnalyticsCard
          textColor="blue-300"
          title="Created"
          value="0%"
          showSecondValue
          secondValue="0"
        />

        <AnalyticsCard
          textColor="blue-300"
          title="Created"
          value="0%"
          showSecondValue
          secondValue="0"
        />
      </div>

      <div className="flex items-center justify-between px-[25px]">
        <span className="text-sm font-poppins font-semibold text-black pl-4">
          Badges & certificates
        </span>

        <div className="flex items-center space-x-4 pr-10">
          <div className="flex space-x-2 items-center">
            <button className="px-4 py-2 whitespace-nowrap text-white font-normal text-xs font-poppins bg-green1 hover:bg-white1 hover:text-black transition-all duration-200 ease-in-out hover:border hover:border-gray2 rounded-md">
              Download as Excel file
            </button>

            <div className="border border-gray-300 flex items-center justify-center px-[10px] py-[5px]">
              <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-600" />
            </div>
          </div>

          <input
            type="text"
            placeholder="Search for contacts, badges, certificates"
            className="text-black font-poppins font-medium text-sm placeholder:text-gray-300 outline-none px-4 py-2 border border-gray-500 w-full rounded"
          />
        </div>
      </div>

      <div className="flex flex-col mt-4 px-[25px]">
        <div className="flex items-center bg-gray2 py-[10px]">
          <span className="text-xs pl-4 uppercase font-poppins font-semibold w-[15%]">
            Name surname
          </span>
          <span className="text-xs uppercase font-poppins font-semibold w-[15%]">
            email
          </span>
          <span className="text-xs uppercase whitespace-nowrap font-poppins font-semibold w-[18%]">
            badge/certification name
          </span>
          <span className="text-xs uppercase font-poppins font-semibold w-[15%]">
            situation
          </span>
          <span className="text-xs uppercase whitespace-nowrap font-poppins font-semibold w-[18%]">
            badge/certification name
          </span>
          <span className="text-xs uppercase font-poppins font-semibold ">
            actions
          </span>
        </div>

        <div className="w-full flex items-center justify-center py-4 bg-white">
          <span className="text-sm text-black font-poppins font-normal">
            No data to show
          </span>
        </div>
      </div>
    </>
  );
};

export default SubmissionAnalytics;
