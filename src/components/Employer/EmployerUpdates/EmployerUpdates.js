import React, { useState } from "react";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import data from "../staticData";
import EmployerUpdateForm from "./EmployerUpdateForm/EmployerUpdateForm";

const EmployerUpdates = () => {
  const [allUpdatesData, setAllUpdatesData] = useState(data.updates);
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  const [updateData, setUpdateData] = useState();
  const [selectedCard, setselectedCard] = useState();

  const handleCardClick = (cardData) => {
    setUpdateData(cardData);
    setOpenUpdateForm(true);
    setselectedCard(cardData.id);
    setAllUpdatesData((prev) =>
      prev.map((item) => {
        if (item.id === cardData.id) {
          return { ...item, read: true };
        } else {
          return item;
        }
      })
    );
  };

  const closeForm = () => {
    setselectedCard();
    setOpenUpdateForm(false);
  };
  return (
    <>
      <div className="flex flex-col mt-20 ml-[298px] overflow-scroll h-full relative">
        <RequestBody
          data={allUpdatesData}
          selected={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
      {openUpdateForm && (
        <EmployerUpdateForm data={updateData} closeForm={closeForm} />
      )}
    </>
  );
};

export default EmployerUpdates;
