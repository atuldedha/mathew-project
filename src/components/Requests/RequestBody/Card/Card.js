import React from "react";

const Card = ({ name, read, email, handleClick }) => {
  return (
    <div className="flex items-center py-[30px] px-[20px] hover:cursor-pointer border border-[rgba(0, 0, 0, 0.06)]">
      <span
        className={`${
          read ? "opacity-50" : "opacity-100"
        } basis-2/5 text-start font-poppins font-medium text-[16px] leading-[24px]`}
      >
        {name}
      </span>
      <span className="basis-3/5 text-center font-poppins font-normal text-[16px] leading-[24px]">
        {email}
      </span>
    </div>
  );
};

export default Card;
