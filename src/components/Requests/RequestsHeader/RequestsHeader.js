import React from "react";

// common component for requests tab header
const RequestsHeader = () => {
  return (
    <div className="bg-white1 sticky top-0  z-[2] py-[13px] px-[30px] border border-[rgba(0, 0, 0, 0.1)] flex flex-col">
      <span className="lgText mb-4">Certificate</span>

      <div className="flex items-center">
        <span className="basis-1/4 text-start font-poppins font-medium text-[16px] leading-[24px] text-black">
          Name
        </span>
        <span className="mdTextWithoutOpacityNormal text-black basis-3/4 text-start ml-10">
          Certificate
        </span>
      </div>
    </div>
  );
};

export default RequestsHeader;
