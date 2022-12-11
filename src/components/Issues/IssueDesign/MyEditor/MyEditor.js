import React from "react";
import AroowDown from "../../../../images/arrowDown.png";
import LeftBlack from "../../../../images/leftBlack.png";
import LeftWhite from "../../../../images/leftWhite.png";
import CenterBlack from "../../../../images/centerBlack.png";
import CenterWhite from "../../../../images/centerWhite.png";
import RightBlack from "../../../../images/rightBlack.png";
import RightWhite from "../../../../images/rightWhite.png";

// Design Tab Right section first card
const MyEditor = ({ selected, setSelected }) => {
  return (
    <div className="flex flex-col w-full pt-[50px] pl-[17px] pr-[32px] pb-[25px] bg-white1 shadow-shadow4">
      <span className="font-poppins font-medium text-[16px] leading-[24px] text-black mb-4">
        Typeface
      </span>

      <div className="bg-white1 border flex items-center justify-between border-gray2 rounded-[4px] p-[5px] mb-5">
        <span className="xsText">Times New Roman</span>
        <img
          src={AroowDown}
          alt="down"
          className="w-[12px] h-[6px] object-contain"
        />
      </div>

      <div className="bg-white1 border flex items-center justify-between border-gray2 rounded-[4px] py-[5px] px-[10px] mb-5">
        <span className="xsText">Regular</span>
        <img
          src={AroowDown}
          alt="down"
          className="w-[12px] h-[6px] object-contain"
        />
      </div>

      <div className="grid grid-cols-3 mb-5">
        <div className="flex flex-col items-start">
          <span className="font-poppins font-normal text-[15px] leading-[22px] text-black1">
            Option
          </span>
          <div className="flex items-center w-[70px] justify-between bg-white1 rounded-[2px] border border-gray2 p-[5px]">
            <span className="mdText font-semibold">Aa</span>
            <img
              src={AroowDown}
              alt="down"
              className="w-[12px] h-[6px] object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <span className="font-poppins font-normal text-[15px] leading-[22px] text-black1">
            Color
          </span>
          <div className="flex items-center h-full w-[70px] space-x-4 bg-white1 rounded-[2px] border border-gray2 p-[5px]"></div>
        </div>

        <div className="flex flex-col items-start">
          <span className="font-poppins font-normal text-[15px] leading-[22px] text-black1">
            Size
          </span>
          <div className="flex items-center w-[70px] justify-between bg-white1 rounded-[2px] border border-gray2 p-[5px]">
            <span className="mdText font-semibold">13</span>
            <img
              src={AroowDown}
              alt="down"
              className="w-[12px] h-[6px] object-contain"
            />
          </div>
        </div>
      </div>
      <span className="text-[15px] font-normal font-poppins text-black1 leading-[22px] mb-2">
        Alignment
      </span>

      <div className="grid grid-cols-3">
        <div
          className={`${
            selected === 1 ? "bg-green1" : "bg-white1 border border-gray2"
          } h-full w-[70px] py-[5px] flex items-center justify-center hover:cursor-pointer`}
          onClick={() => setSelected(1)}
        >
          <img
            src={selected === 1 ? LeftWhite : LeftBlack}
            alt="icon"
            className="h-[24px] w-[24px] object-contain"
          />
        </div>
        <div
          className={`${
            selected === 2 ? "bg-green1" : "bg-white1 border border-gray2"
          } h-full w-[70px] py-[5px] flex items-center justify-center hover:cursor-pointer`}
          onClick={() => setSelected(2)}
        >
          <img
            src={selected === 2 ? CenterWhite : CenterBlack}
            alt="icon"
            className="h-[24px] w-[24px] object-contain"
          />
        </div>
        <div
          className={`${
            selected === 3 ? "bg-green1" : "bg-white1 border border-gray2"
          } h-full w-[70px] py-[5px] flex items-center justify-center hover:cursor-pointer`}
          onClick={() => setSelected(3)}
        >
          <img
            src={selected === 3 ? RightWhite : RightBlack}
            alt="icon"
            className="h-[24px] w-[24px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MyEditor;
