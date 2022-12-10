import React from "react";

const RequestsHeader = () => {
  return (
    <div className="bg-white1 sticky top-0 py-[13px] px-[30px] border border-[rgba(0, 0, 0, 0.1)] flex flex-col">
      <span className="font-semibold font-poppins text-[20px] leading-[30px] text-black mb-4">
        Certificate
      </span>

      <div className="flex items-center">
        <span className="basis-2/5 text-start font-poppins font-medium text-[16px] leading-[24px] text-black">
          Name
        </span>
        <span className="font-poppins font-normal text-black text-[16px] leading-[24px] basis-3/5 text-center">
          Certificate
        </span>
      </div>
    </div>
  );
};

export default RequestsHeader;
