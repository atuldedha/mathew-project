import React from "react";
import Certificate from "../../../Certificate/Certificate";
import Profile from "../../../Profile/Profile";

const IssueCertificationsForm = ({ data, closeForm, fromEmplyer }) => {
  const [day, month, year] = data.dob.split("-");
  const date = new Date(+year, +month - 1, +day).toDateString();
  return (
    <div className="flex flex-col absolute top-[164px] right-[24px] bottom-[10px] bg-white1 z-10 w-[650px] border border-[rgba(0, 0, 0, 0.1)] shadow-shadow4 overflow-scroll">
      <div className="flex items-center sticky top-0 z-10 justify-between bg-white1 py-[15px] pl-[42px]">
        <span className="font-poppins font-normal text-[16px] leading-[24px] opacity-70 text-black">
          New Update Form
        </span>

        <div className="flex items-center space-x-4 pr-[20px]">
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
            23 March 2022
          </span>
          <span
            className="text-[#141124] font-poppins text-[20px] mb-2 hover:cursor-pointer"
            onClick={closeForm}
          >
            x
          </span>
        </div>
      </div>
      <div
        className={`${
          fromEmplyer ? "bg-green4" : ""
        } flex flex-col py-[25px] pl-[42px] pr-[20px] mb-3"`}
      >
        <Profile
          data={data}
          image={data.image}
          showDemographicData
          date={date}
        />
      </div>
      <div className="pl-[40px] pr-[20px] pb-[40px]">
        <Certificate data={data} />
      </div>
    </div>
  );
};

export default IssueCertificationsForm;
