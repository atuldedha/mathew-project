import React, { useState } from "react";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import RequestForm from "../../Requests/RequestForm/RequestForm";
import RequestsHeader from "../../Requests/RequestsHeader/RequestsHeader";
import data from "../../Employer/staticData";

// Issues Request Tab --> selected === 5
const IssueRequests = () => {
  // all data state
  const [allRequestData, setAllRequestData] = useState(data.requests);
  // open issue requests form
  const [openRequestForm, setOpenRequestForm] = useState(false);
  // selected card data
  const [requestData, setRequestData] = useState();
  // selected card
  const [selectedCard, setselectedCard] = useState();

  // handle clicks on any item of the list
  const handleCardClick = (cardData) => {
    setRequestData(cardData);
    setOpenRequestForm(true);
    setselectedCard(cardData.id);
  };

  //verify button handler of issue requests form: it marked item as read
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

  // delete button click handler of issue requests form
  const deleteRequest = () => {
    setAllRequestData(
      allRequestData.filter((item) => item.id !== requestData.id)
    );
    setOpenRequestForm(false);
  };

  // close form
  const closeForm = () => {
    setOpenRequestForm(false);
    setselectedCard();
  };

  return (
    <>
      <div className="flex flex-col mt-20 ml-[260px] overflow-scroll h-full relative">
        {/* header */}
        <RequestsHeader />
        {/* body */}
        <RequestBody
          data={allRequestData}
          selected={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
      {/* requests issues form */}
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
