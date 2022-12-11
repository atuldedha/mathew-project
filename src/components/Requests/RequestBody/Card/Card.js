import React from "react";

// common component to show each card in the list
const Card = ({ info, selected, handleClick }) => {
  return (
    <div
      className={`${
        selected === info.id ? "bg-green3" : ""
      } flex items-center py-[30px] px-[20px] hover:cursor-pointer border border-[rgba(0, 0, 0, 0.06)]`}
      onClick={() => handleClick(info)}
    >
      {/* if readed gray it out else bold */}
      <span
        className={`${
          info?.read ? "opacity-50" : "opacity-100"
        } basis-1/4 text-start mdText text-[15px] font-medium`}
      >
        {info?.name}
      </span>
      <span className="basis-3/4 text-start mdTextWithoutOpacityNormal">
        {info?.email}
      </span>
    </div>
  );
};

export default Card;
