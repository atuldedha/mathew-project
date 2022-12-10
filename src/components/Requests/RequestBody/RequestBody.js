import React from "react";
import Card from "./Card/Card";

const RequestBody = ({ data, selected, handleCardClick }) => {
  return (
    <div className="bg-white1 flex flex-col">
      {data.map((item) => (
        <Card
          key={item.id}
          info={item}
          selected={selected}
          handleClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default RequestBody;
