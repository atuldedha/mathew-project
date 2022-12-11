import React, { useState } from "react";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import data from "../staticData";
import EmployerUpdateForm from "./EmployerUpdateForm/EmployerUpdateForm";

// Upadetes tab is selected under employer -> selected === 3
const EmployerUpdates = () => {
  // all data state
  const [allUpdatesData, setAllUpdatesData] = useState(data.updates);
  // state to open applicant form
  const [openUpdateForm, setOpenUpdateForm] = useState(false);
  // state to manage the selected option data
  const [updateData, setUpdateData] = useState();
  // state to manage selected item of the list
  const [selectedCard, setselectedCard] = useState();

  // click handler function for list item click
  const handleCardClick = (cardData) => {
    setUpdateData(cardData);
    setOpenUpdateForm(true);
    setselectedCard(cardData.id);
    // handler function when card is clicked so that opened card can be marked as "READ"
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

  // close form
  const closeForm = () => {
    setselectedCard();
    setOpenUpdateForm(false);
  };
  return (
    <>
      <div className="flex flex-col mt-20 ml-[260px] overflow-scroll h-full relative">
        {/* body */}
        <RequestBody
          data={allUpdatesData}
          selected={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
      {/* when update form is opened */}
      {openUpdateForm && (
        <EmployerUpdateForm data={updateData} closeForm={closeForm} />
      )}
    </>
  );
};

export default EmployerUpdates;
