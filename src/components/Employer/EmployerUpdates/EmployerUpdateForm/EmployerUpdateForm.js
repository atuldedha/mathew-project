import React from "react";
import Certificate from "../../../Certificate/Certificate";
import Profile from "../../../Profile/Profile";

const EmployerUpdateForm = ({ data, closeForm }) => {
  const [day, month, year] = data.issueOn.split("-");
  const date = new Date(+year, +month - 1, +day).toDateString();
  return (
    <div className="flex flex-col absolute top-[164px] right-[24px] bottom-[10px] bg-white1 z-10 w-[650px] border border-[rgba(0, 0, 0, 0.1)] shadow-shadow4 px-[30px] pb-[40px] overflow-scroll">
      <div className="flex items-center justify-between bg-white1 mt-[40px] mb-10">
        <span className="font-poppins font-normal text-[16px] leading-[24px] opacity-70 text-black">
          New Update Form
        </span>

        <div className="flex items-center space-x-4 pr-[20px]">
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
            {new Date().toDateString()}
          </span>
          <span
            className="text-[#141124] font-poppins text-[20px] mb-2 hover:cursor-pointer"
            onClick={closeForm}
          >
            x
          </span>
        </div>
      </div>
      <div className="mb-24">
        <Profile data={data} />
      </div>

      <div className="flex flex-col space-y-2">
        <span className="font-poppins font-normal text-black opacity-70 text-[16px] leading-[24px]">
          {data.name} Got a new Certificate
        </span>

        <Certificate fromEmployer data={data} date={date} />
      </div>
    </div>
  );
};

export default EmployerUpdateForm;
