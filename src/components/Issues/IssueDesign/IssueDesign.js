import React, { useState } from "react";
import Certificate from "../../../images/certificate.png";
import MyAttribute from "./MyAttribute/MyAttribute";
import MyEditor from "./MyEditor/MyEditor";

// Issue Design Tab --> selected===7
const IssueDesign = () => {
  // state to select allignment
  const [selected, setSelected] = useState(1);
  return (
    <div className="ml-[260px] h-full flex items-center">
      {/* body section */}
      <div className="basis-2/3 h-full flex items-center justify-center">
        <img
          src={Certificate}
          alt="certificate"
          className="w-[500px] h-[500px] object-contain"
        />
      </div>

      {/* rigtht section */}
      <div className="basis-1/3 h-full w-full bg-white1 flex flex-col items-center justify-center px-[16px]">
        <MyEditor selected={selected} setSelected={setSelected} />
        <MyAttribute />
      </div>
    </div>
  );
};

export default IssueDesign;
