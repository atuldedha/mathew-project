import React, { useState } from "react";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import RequestForm from "../../Requests/RequestForm/RequestForm";
import RequestsHeader from "../../Requests/RequestsHeader/RequestsHeader";
import data from "../staticData";

// Employer requests tab selected --> selected === 1
const EmployerRequests = () => {
  // all data state
  const [allRequestData, setAllRequestData] = useState(data.requests);
  // state to open request tab form
  const [openRequestForm, setOpenRequestForm] = useState(false);
  // state to manage the selected option data
  const [requestData, setRequestData] = useState();
  // state to manage selected item of the list
  const [selectedCard, setselectedCard] = useState();

  // click handler function for list item click
  const handleCardClick = (cardData) => {
    setRequestData(cardData);
    setOpenRequestForm(true);
    setselectedCard(cardData.id);
  };

  // handler function when verify button clicked under request form
  const verifyRequest = () => {
    setAllRequestData((prev) =>
      prev.map((item) => {
        if (item.id === requestData.id) {
          return { ...item, read: true };
        } else {
          return item;
        }
      })
    );
    setOpenRequestForm(false);
  };

  // handler function when delete button clicked under request form
  const deleteRequest = () => {
    setAllRequestData(
      allRequestData.filter((item) => item.id !== requestData.id)
    );
    setOpenRequestForm(false);
  };

  // close form function
  const closeForm = () => {
    setOpenRequestForm(false);
    setselectedCard();
  };

  return (
    <>
      <div className="flex flex-col mt-20 ml-[260px] overflow-scroll h-full relative">
        {/* Header */}
        <RequestsHeader />
        {/* body */}
        <RequestBody
          data={allRequestData}
          selected={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
      {/* when request form is open */}
      {openRequestForm && (
        <RequestForm
          fromEmplyer
          data={requestData}
          closeForm={closeForm}
          verifyRequest={verifyRequest}
          deleteRequest={deleteRequest}
        />
      )}
    </>
  );
};

export default EmployerRequests;
