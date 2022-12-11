import React, { useEffect, useRef } from "react";
import ProfilePic from "../../../images/profilePicture.png";
import { PowerIcon, UserIcon } from "@heroicons/react/24/outline";

const AccountTab = ({ setOpenAcccountTab, data }) => {
  // state to close account tab when clicked outside
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenAcccountTab(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <div
      ref={ref}
      className="absolute z-20 top-[110px] right-[10px] flex flex-col bg-white1 rounded-[10px]"
    >
      <div className="flex flex-col items-center bg-green1 px-[20px] py-[10px] rounded-t-[10px]">
        <img
          src={ProfilePic}
          alt="prfile"
          className="w-[30px] h-[30px] object-contain mb-2"
        />
        <span className="mdTextWithoutOpacity text-white1">{data.name}</span>
        <span className="smTextNormal text-white">{data.email}</span>
        <span className="smTextNormal font-bold text-white1">
          ID: {data.userId}
        </span>
      </div>

      <div className="flex flex-col w-full space-y-2 px-[20px] py-[20px] bg-gray2 rounded-b-[10px]">
        <div className="flex items-center w-full space-x-4 hover:cursor-pointer">
          <div className="w-[10%]">
            <img
              src={data.image}
              alt="profile"
              className="h-[20px] w-[20px] object-contain rounded-full"
            />
          </div>

          <span className="smTextNormal">{data.username}</span>
        </div>

        <div className="flex items-center space-x-4 hover:cursor-pointer">
          <div className="w-[10%]">
            <span className="smTextNormal ml-2">+</span>
          </div>
          <span className="smTextNormal">Create Organization</span>
        </div>

        <div className="w-full border-b-[1px] border-b-gray-400 !mb-5" />

        <div className="flex flex-col w-full space-y-2">
          <div className="flex w-full space-x-4 items-center hover:cursor-pointer">
            <div className="w-[10%] ml-2">
              <UserIcon className="h-4 w-4 text-black" />
            </div>
            <span className="smTextNormal font-semibold">
              Instition Settting
            </span>
          </div>

          <div className="flex w-full space-x-4 items-center hover:cursor-pointer !mb-4">
            <div className="w-[10%] ml-2">
              <PowerIcon className="h-4 w-4 text-red-600" />
            </div>
            <span className="smTextNormal">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
