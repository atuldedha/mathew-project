import React, { useState } from "react";
import DragZone from "./DragZone/DragZone";

const IssuesUpload = () => {
  const [images, setImages] = useState([]);
  return (
    <div className="flex flex-col absolute top-[164px] right-[24px] bottom-[10px] bg-white1 z-10 w-[650px] border border-gray2 shadow-shadow4 overflow-scroll">
      <DragZone images={images} setImages={setImages} />
      <div className="mt-[32px] flex flex-col px-[35px] pb-[40px]">
        <span className="font-poppins font-semibold text-[20px] leading-[30px] text-black mb-5">
          Latest upload:
        </span>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
              Data:
            </span>
            <span className="text-black text-[18px] leading-[27px] font-poppins font-semibold">
              Certificate 2017.csv
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
              Added:
            </span>
            <span className="text-black text-[18px] leading-[27px] font-poppins font-semibold">
              123
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center space-x-2">
            <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
              Filename:
            </span>
            <span className="text-black text-[18px] leading-[27px] font-poppins font-semibold">
              17 March 2018
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
              Error:
            </span>
            <span className="text-black text-[18px] leading-[27px] font-poppins font-semibold">
              0
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
            Processed:
          </span>
          <span className="text-black text-[18px] leading-[27px] font-poppins font-semibold">
            456
          </span>
        </div>

        <span className="text-green1 text-[18px] leading-[27px] font-poppins font-semibold hover:cursor-pointer">
          Download
        </span>
      </div>
    </div>
  );
};

export default IssuesUpload;
