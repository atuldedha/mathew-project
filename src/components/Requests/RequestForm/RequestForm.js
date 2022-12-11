import React from "react";
import Profile from "../../Profile/Profile";

// common form component
const RequestForm = ({
  data,
  fromEmplyer,
  closeForm,
  deleteRequest,
  verifyRequest,
}) => {
  // extracting date to format
  const [day, month, year] = data.dob.split("-");
  const date = new Date(+year, +month - 1, +day).toDateString();
  return (
    <div className="flex flex-col absolute top-[164px] right-[24px] bottom-[10px] bg-white1 z-10 w-[550px] border border-[rgba(0, 0, 0, 0.1)] shadow-shadow4">
      <div className="flex items-center sticky top-0 justify-between bg-white1 py-[15px] pl-[42px]">
        <span className="mdText">New Update Form</span>

        <div className="flex items-center space-x-4 pr-[20px]">
          <span className="mdText">23 March 2022</span>
          <span
            className="text-[#141124] font-poppins text-[20px] mb-2 hover:cursor-pointer"
            onClick={closeForm}
          >
            x
          </span>
        </div>
      </div>

      {/* if fromEmployer bg is green */}
      <div className="flex flex-col h-[550px] overflow-scroll">
        <div
          className={`${
            fromEmplyer ? "bg-green4" : ""
          } flex flex-col py-[25px] pl-[42px] pr-[20px]"`}
        >
          <Profile
            data={data}
            image={data.image}
            showDemographicData
            date={date}
          />
        </div>

        <div className="flex flex-col space-y-4 mt-4 mb-28 pl-[40px]">
          <span className="lgText">Message</span>

          <span className="mdTextWithoutOpacityNormal">{data.message}</span>
        </div>

        <div className="flex items-center space-x-4 pl-[40px] pb-[40px]">
          <button
            className="w-[125px] text-center py-[14px] bg-green1 hover:scale-105 transition-all ease-in-out text-white1 font-bold lgText rounded-[4px]"
            onClick={verifyRequest}
          >
            Verify
          </button>
          <button
            className="w-[125px] text-center py-[14px] bg-red1 hover:scale-105 transition-all ease-in-out text-white1 font-bold lgText rounded-[4px]"
            onClick={deleteRequest}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
