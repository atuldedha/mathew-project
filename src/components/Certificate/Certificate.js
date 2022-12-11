import React from "react";
import Verified from "../../images/safety.png";

// certificate component common for both updates and certifications tab
const Certificate = ({ data, fromEmployer, date, setOpenUploadIssues }) => {
  return (
    <div className="flex flex-col shadow-shadow6 border border-gray2 bg-white1 px-[93px] pt-[15px] pb-[25px]">
      {/* common for both */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[20px] leading-[30px] font-bold text-black font-poppins">
          {data.certificateName}
        </span>
        <img
          src={Verified}
          alt="verified"
          className="h-[30px] w-[30px] object-contain"
        />
      </div>

      <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70 mb-5">
        Issued by:
      </span>

      <div className="flex items-center space-x-4 mb-6">
        <img
          src={data.issuerImage}
          alt="issuerImage"
          className="w-[125px] h-[125px] object-contain"
        />
        <span className="font-nova font-normal text-[32px] leading-[38px] text-black">
          {data.issuedBy}
        </span>
      </div>
      {/* if from employer -> updates tab */}
      {fromEmployer ? (
        <>
          <div className="flex items-center space-x-10 mb-6">
            <span className="font-poppins font-normal text-black opacity-70 text-[16px] leading-[24px] ">
              Issued on:
            </span>
            <span className="font-poppins font-normal text-black opacity-70 text-[16px] leading-[24px] ">
              {date}
            </span>
          </div>
          <span className="uppercase text-[16px] leading-[24px] font-poppins font-semibold text-lightBlue">
            VIEW THE DIGITAL CERTIFICATE
          </span>
        </>
      ) : (
        // {/* else -> certifications tab */}
        // button click opens the issue upload form
        <button
          className="text-[20px] w-[95px] leading-[30px] text-white font-poppins font-bold bg-green1 py-[10px] px-[20px] rounded-[4px] hover:scale-105"
          onClick={() => setOpenUploadIssues(true)}
        >
          Issue
        </button>
      )}
    </div>
  );
};

export default Certificate;
