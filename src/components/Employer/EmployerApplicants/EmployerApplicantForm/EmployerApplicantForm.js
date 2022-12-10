import React from "react";
import Verified from "../../../../images/safety.png";

const EmployerApplicantForm = ({ data, closeForm }) => {
  const [day, month, year] = data.expirationDate.split("-");
  const [issueYear, issueMonth] = data.issueDate.split("-");
  return (
    <div className="bg-white1 flex flex-col absolute top-[164px] right-[24px] w-[680px] pt-[30px] pl-[35px] pr-[40px] pb-[35px] shadow-shadow1">
      <div className="flex w-full items-center justify-end space-x-10 pr-[25px] pl-[40px] mb-[25px]">
        <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
          Expiration Date:{" "}
          {`${new Date(+year, +month - 1, +day).toDateString()}`}
        </span>
        <span
          className="text-[20px] leading-[24px] text-[#141124] font-poppins font-semibold hover:cursor-pointer"
          onClick={closeForm}
        >
          x
        </span>
      </div>

      <div className="flex items-center space-x-8 mb-10 ml-[35px]">
        <img
          src={data.image}
          alt="profile"
          className="h-[65px] w-[65px] object-contain"
        />
        <div className="flex flex-col space-y-2">
          <span className="font-poppins font-semibold text-[20px] leading-[30px] tracking-[5%] text-black">
            {data.name}
          </span>
          <span className="font-poppins font-normal text-black opacity-70 text-[16px] leading-[24px] tracking-[10%]">
            {data.email}
          </span>
        </div>
      </div>

      <div className="flex flex-col shadow-shadow5 border boder-[rgba(0, 0, 0, 0.1)] bg-white1 pt-[25px] pb-[13px] ">
        <div className="flex items-center justify-between ml-[40px] mb-1">
          <span className="font-poppins font-normal text-black opacity-50 text-[14px] leading-[21px]">
            {`${new Date(+issueYear, +issueMonth - 1).toDateString()}`}- Present
          </span>
          <img
            src={Verified}
            alt="verified"
            className="w-[30px] h-[30px] object-contain mr-[27px]"
          />
        </div>
        <span className="text-[20px] text-black font-poppins font-semibold leading-[30px] tracking-[5%] ml-[40px] mb-2">
          {data.certification}
        </span>

        <div className="flex items-center space-x-10 ml-[40px] mb-6">
          <span className="font-poppins font-medium text-black text-[14px] leading-[21px] opacity-90">
            {data.corpType}
          </span>

          <div className="flex items-center space-x-1">
            <div className="border-l-[1px] border-l-[rgba(0, 0, 0, 0.19)] h-31px" />
            <span className="font-poppins font-medium text-black text-[14px] leading-[21px] opacity-90">
              {data.corpName}
            </span>
          </div>
        </div>

        <div className="bg-green1 py-[10px] pl-[50px] mb-4">
          <span className="text-white1 font-semibold font-poppins text-[16px] leading-[24px]">
            Verified by {data.corpType}, {data.corpName}
          </span>
        </div>

        <span className="font-poppins font-semibold text-[14px] leading-[21px] ml-[40px] mb-[40px]">
          Total Score: <span className="text-green1">{data.score}</span>
        </span>

        <span className="font-poppins font-normal text-[14px] leading[21px] text-black opacity-50 ml-[40px] mb-2">
          Verified By Colleaques
        </span>

        <span className="font-poppins font-semibold text-[16px] leading-[24px] opacity-90 ml-[40px] mb-1">
          {data.verifiedBy}
        </span>

        <span className="text-[14px] leading-[21px] font-poppins font-normal text-black opacity-90 ml-[40px]">
          {data.verificationPersonPosition}
        </span>
      </div>
    </div>
  );
};

export default EmployerApplicantForm;
