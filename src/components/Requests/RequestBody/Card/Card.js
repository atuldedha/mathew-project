import React from "react";

const Card = ({ info, selected, handleClick }) => {
  return (
    <div
      className={`${
        selected === info.id ? "bg-green3" : ""
      } flex items-center py-[30px] px-[20px] hover:cursor-pointer border border-[rgba(0, 0, 0, 0.06)]`}
      onClick={() => handleClick(info)}
    >
      <span
        className={`${
          info?.read ? "opacity-50" : "opacity-100"
        } basis-1/4 text-start font-poppins font-medium text-[16px] leading-[24px]`}
      >
        {info?.name}
      </span>
      <span className="basis-3/4 text-start font-poppins font-normal text-[16px] leading-[24px]">
        {info?.email}
      </span>
    </div>
  );
};

export default Card;
