import React from "react";

const AnalyticsCard = ({
  title,
  value,
  textColor,
  showBorder,
  showSecondValue,
  secondValue,
}) => {
  return (
    <div className="bg-white rounded shadow-md flex flex-col items-center justify-center mb-8 pb-4">
      <span className="uppercase text-base font-poppins font-medium text-black">
        {title}
      </span>

      <div
        className={`h-[100px] w-[100px] mt-4 flex flex-col items-center justify-center pb-4 ${
          showBorder ? "border-[5px] border-blue-600" : null
        } ${
          showSecondValue ? "border-[5px] border-gray-400" : null
        } rounded-full`}
      >
        <span
          className={`text-lg pt-3 font-poppins font-medium text-${textColor}`}
        >
          {value}
        </span>
        {showSecondValue && (
          <span className="text-xs text-black font-poppins font-normal">
            {secondValue}
          </span>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;
