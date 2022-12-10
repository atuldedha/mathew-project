import React, { useState } from "react";
import data from "../../Employer/staticData";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import IssueCertificationsForm from "./IssueCertificationsForm/IssueCertificationsForm";

const IssueCertifications = () => {
  const [allCertificatesData, setAllCertificatesData] = useState(
    data.certifications
  );
  const [openCertificateForm, setOpenCertificateForm] = useState(false);
  const [certificateData, setCertificateData] = useState();
  const [selectedCard, setselectedCard] = useState();

  const handleCardClick = (cardData) => {
    setCertificateData(cardData);
    setOpenCertificateForm(true);
    setselectedCard(cardData.id);
    setAllCertificatesData((prev) =>
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
    setOpenCertificateForm(false);
  };
  return (
    <>
      <div className="flex flex-col mt-20 ml-[298px] overflow-scroll h-full relative">
        <RequestBody
          data={allCertificatesData}
          selected={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
      {openCertificateForm && (
        <IssueCertificationsForm data={certificateData} closeForm={closeForm} />
      )}
    </>
  );
};

export default IssueCertifications;
