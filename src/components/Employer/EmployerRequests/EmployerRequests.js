import React from "react";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import RequestsHeader from "../../Requests/RequestsHeader/RequestsHeader";
import data from "./staticData";

const EmployerRequests = () => {
  return (
    <div className="flex flex-col max-w-[600px] mt-20 ml-[298px] overflow-scroll h-full">
      <RequestsHeader />
      <RequestBody data={data.requests} />
    </div>
  );
};

export default EmployerRequests;
