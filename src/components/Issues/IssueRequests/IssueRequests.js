import React, { useState } from "react";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import RequestForm from "../../Requests/RequestForm/RequestForm";
import RequestsHeader from "../../Requests/RequestsHeader/RequestsHeader";
import data from "../../Employer/staticData";

const IssueRequests = () => {
  const [allRequestData, setAllRequestData] = useState(data.requests);
  const [openRequestForm, setOpenRequestForm] = useState(false);
  const [requestData, setRequestData] = useState();
  const [selectedCard, setselectedCard] = useState();

  const handleCardClick = (cardData) => {
    setRequestData(cardData);
    setOpenRequestForm(true);
    setselectedCard(cardData.id);
  };

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

  const deleteRequest = () => {
    setAllRequestData(
      allRequestData.filter((item) => item.id !== requestData.id)
    );
    setOpenRequestForm(false);
  };

  const closeForm = () => {
    setOpenRequestForm(false);
    setselectedCard();
  };

  return (
    <>
      <div className="flex flex-col mt-20 ml-[298px] overflow-scroll h-full relative">
        <RequestsHeader />
        <RequestBody
          data={allRequestData}
          selected={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
      {openRequestForm && (
        <RequestForm
          data={requestData}
          closeForm={closeForm}
          verifyRequest={verifyRequest}
          deleteRequest={deleteRequest}
        />
      )}
    </>
  );
};

export default IssueRequests;
