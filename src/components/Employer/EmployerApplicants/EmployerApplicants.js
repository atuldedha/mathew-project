import React, { useState } from "react";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import data from "../staticData";
import EmployerApplicantForm from "./EmployerApplicantForm/EmployerApplicantForm";

const EmployerApplicants = () => {
  const [allRequestData, setAllRequestData] = useState(data.applicants);
  const [openApplicantForm, setOpenApplicantForm] = useState(false);
  const [applicatData, setApplicantData] = useState();
  const [selectedCard, setselectedCard] = useState();
  const handleCardClick = (cardData) => {
    setApplicantData(cardData);
    setOpenApplicantForm(true);
    setselectedCard(cardData.id);
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

  const closeForm = () => {
    setselectedCard();
    setOpenApplicantForm(false);
  };

  return (
    <>
      <div className="flex flex-col mt-20 ml-[298px] overflow-scroll h-full relative">
        <RequestBody
          data={allRequestData}
          selected={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
      {openApplicantForm && (
        <EmployerApplicantForm data={applicatData} closeForm={closeForm} />
      )}
    </>
  );
};

export default EmployerApplicants;
