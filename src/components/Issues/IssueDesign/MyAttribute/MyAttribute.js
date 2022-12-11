import React from "react";
import Cancel from "../../../../images/cancel.png";

// Design tab right section second card
const MyAttribute = () => {
  return (
    <div className="w-full p-[25px] flex flex-col bg-white1 shadow-shadow4 border border-gray2 mt-6">
      <span className="font-poppins text[18px] leading-[24px] text-black font-semibold mb-1">
        Attributes
      </span>
      <span className="font-poppins font-normal text-[12px] leading-[18px] -tracking-[1%] text-black1 mb-5">
        Some note for user when insert attibutes
      </span>

      <div className="py-[8px] px-[20px] bg-green3 opacity-50 flex items-center justify-between mb-5">
        <span className="font-poppins text-black text-[12px] leading-[18px] font-medium">
          Full Name
        </span>
        <img
          src={Cancel}
          alt="cross"
          className="h-[24px] w-[24px] object-contain"
        />
      </div>

      <div className="flex items-center space-x-5">
        {/* smTextSemibold utility class  */}
        <span className="text-green1 smTextSemibold">+</span>

        <span className="text-[#44BFC7CF] smTextSemibold opacity-[0.81]">
          INSERT ATTRIBUTE
        </span>
      </div>
    </div>
  );
};

export default MyAttribute;
