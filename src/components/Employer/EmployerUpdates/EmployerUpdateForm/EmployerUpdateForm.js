import React from "react";
import Certificate from "../../../Certificate/Certificate";
import Profile from "../../../Profile/Profile";

// Employer update form opens on click of any item on employer updates tab
const EmployerUpdateForm = ({ data, closeForm }) => {
  // extracting date from data to format
  const [day, month, year] = data.issueOn.split("-");
  const date = new Date(+year, +month - 1, +day).toDateString();
  return (
    <div className="flex flex-col absolute top-[164px] right-[24px] bottom-[10px] bg-white1 z-10 w-[550px] border border-[rgba(0, 0, 0, 0.1)] shadow-shadow4 px-[30px] pb-[40px] overflow-scroll">
      {/* header */}
      <div className="flex items-center justify-between bg-white1 mt-[40px] mb-10">
        {/*m dText utility class defined in index.css */}
        <span className="mdText">New Update Form</span>

        <div className="flex items-center space-x-4 pr-[20px]">
          <span className="mdText">{new Date().toDateString()}</span>
          <span
            className="text-[#141124] font-poppins text-[20px] mb-2 hover:cursor-pointer"
            onClick={closeForm}
          >
            x
          </span>
        </div>
      </div>
      {/* Profile section */}
      <div className="mb-24">
        <Profile data={data} />
      </div>

      {/* certification */}
      <div className="flex flex-col space-y-2">
        <span className="mdText">{data.name} Got a new Certificate</span>

        {/* certficate card */}
        <Certificate fromEmployer data={data} date={date} />
      </div>
    </div>
  );
};

export default EmployerUpdateForm;
