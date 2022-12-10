import React from "react";
import Card from "./Card/Card";

const RequestBody = ({ data }) => {
  return (
    <div className="bg-white1 flex flex-col">
      {data.map((item) => (
        <Card key={item.id} email={item.email} name={item.name} />
      ))}
    </div>
  );
};

export default RequestBody;
