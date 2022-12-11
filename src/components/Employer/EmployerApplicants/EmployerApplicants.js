import React, { useState } from "react";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import data from "../staticData";
import EmployerApplicantForm from "./EmployerApplicantForm/EmployerApplicantForm";

// Employer Applicants Tab selected === 2
const EmployerApplicants = () => {
  // all data state
  const [allRequestData, setAllRequestData] = useState(data.applicants);
  // state to open applicant form
  const [openApplicantForm, setOpenApplicantForm] = useState(false);
  // state to manage the selected option data
  const [applicatData, setApplicantData] = useState();
  // state to manage selected item of the list
  const [selectedCard, setselectedCard] = useState();

  // click handler function for list item click
  const handleCardClick = (cardData) => {
    setApplicantData(cardData);
    setOpenApplicantForm(true);
    setselectedCard(cardData.id);
    // function sets which item of the list is opened
    setAllRequestData((prev) =>
      prev.map((item) => {
        if (item.id === cardData.id) {
          return { ...item, read: true };
        } else {
          return item;
        }
      })
    );
  };

  // close applicant form function
  const closeForm = () => {
    setselectedCard();
    setOpenApplicantForm(false);
  };

  return (
    <>
      <div className="flex flex-col mt-20 ml-[260px] overflow-scroll h-full relative">
        {/* List of applicants tab */}
        <RequestBody
          data={allRequestData}
          selected={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
      {/* opens applicant form */}
      {openApplicantForm && (
        <EmployerApplicantForm data={applicatData} closeForm={closeForm} />
      )}
    </>
  );
};

export default EmployerApplicants;
