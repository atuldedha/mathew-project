import React from "react";
import Check from "../../../images/greenCheck.png";
import HrLogo from "../../../images/hrLogo.png";
import ArrowDown from "../../../images/arrowDown.png";
import data from "../../Employer/staticData";

const IntegrationSettings = () => {
  return (
    <div className="bg-white flex flex-col pl-[77px] pt-[67px] pb-[46px] h-full overflow-scroll">
      <div className="flex flex-col w-[610px]">
        <div className="flex items-center justify-between bg-white border border-gray2 p-[20px]">
          <div className="flex items-center space-x-2">
            <img
              src={Check}
              alt="checkmark"
              className="h-[24px] w-[24px] object-contain"
            />
            <span className="font-poppins font-semibold text-[18px] leading-[27px] text-black">
              You are connecting to
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="h-10 border-l-[1px] border-l-gray2" />
            <img
              src={HrLogo}
              alt="logo"
              className="h-[24px] w-[24px] object-contain"
            />
            <span className="block font-poppins font-semibold text-[18px] leading-[27px] text-black !mr-[13px]">
              Really HR
            </span>
            <img
              src={ArrowDown}
              alt="down"
              className="h-[12px] w-[12px] object-contain"
            />
          </div>
        </div>

        <div className="pl-[45px] bg-green2 pt-[40px] pb-[50px] pr-[50px] flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-poppins font-semibold text-[18px] leading-[27px] text-black mr-[13px]">
              API Key
            </span>
            <div className="py-[6px] pl-[20px] pr-[14px] bg-white text-green1 font-poppins font-medium text-[16px] leading-[24px] tracking-[10%]">
              {data.settings.apiKey}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="font-poppins font-semibold text-[18px] leading-[27px] text-black mr-[13px]">
              APISecret
            </span>
            <div className="py-[6px] pl-[20px] pr-[14px] bg-white text-green1 font-poppins font-medium text-[16px] leading-[24px] tracking-[10%]">
              {data.settings.apiSecret}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-14">
        <button className="w-[125px] py-[14px] bg-blue1 rounded-[4px] text-[20px] font-bold font-poppins leading-[30px] text-white hover:scale-105">
          Save
        </button>
        <button className="w-[125px] py-[14px] bg-gray3 rounded-[4px] text-[20px] font-bold font-poppins leading-[30px] text-white hover:scale-105">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default IntegrationSettings;
