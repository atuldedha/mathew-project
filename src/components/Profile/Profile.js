import React from "react";

const Profile = ({ data, showDemographicData, date }) => {
  return (
    <>
      <div className="flex items-center space-x-8">
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
      {showDemographicData ? (
        <div className="grid grid-cols-2 gap-8 mt-6">
          <div className="flex flex-col space-y-1">
            <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
              Date of birth
            </span>
            <span className="font-poppins font-semibold text-[18px] leading-[27px] text-black">
              {date}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
              Phone number
            </span>
            <span className="font-poppins font-semibold text-[18px] leading-[27px] text-black">
              {data.phoneNumber}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
              Certificate Number
            </span>
            <span className="font-poppins font-semibold text-[18px] leading-[27px] text-black">
              {data.certificationNumber}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
              Institution ID
            </span>
            <span className="font-poppins font-semibold text-[18px] leading-[27px] text-black">
              {data.institutionId}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-poppins font-normal text-[16px] leading-[24px] text-black opacity-70">
              Graduation year
            </span>
            <span className="font-poppins font-semibold text-[18px] leading-[27px] text-black">
              {data.graduationYear}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
