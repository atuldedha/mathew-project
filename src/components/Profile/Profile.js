import React from "react";

// Common component for Profile
const Profile = ({ data, showDemographicData, date }) => {
  return (
    <>
      {/* common for all usage */}
      <div className="flex items-center space-x-8">
        <img
          src={data.image}
          alt="profile"
          className="h-[65px] w-[65px] object-contain"
        />
        <div className="flex flex-col space-y-2">
          <span className="lgText tracking-[5%]">{data.name}</span>
          <span className="mdTextWithoutOpacityNormal tracking-[10%]">
            {data.email}
          </span>
        </div>
      </div>
      {/* if demographic data to be shown */}
      {showDemographicData ? (
        <div className="grid grid-cols-2 gap-8 mt-6">
          <div className="flex flex-col space-y-1">
            <span className="mdText">Date of birth</span>
            <span className="mdTextLargeSemibold">{date}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="mdText">Phone number</span>
            <span className="mdTextLargeSemibold">{data.phoneNumber}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="mdText">Certificate Number</span>
            <span className="mdTextLargeSemibold">
              {data.certificationNumber}
            </span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="mdText">Institution ID</span>
            <span className="mdTextLargeSemibold">{data.institutionId}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="mdText">Graduation year</span>
            <span className="mdTextLargeSemibold">{data.graduationYear}</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Profile;
