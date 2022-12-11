import React, { useState } from "react";
import data from "../../Employer/staticData";
import RequestBody from "../../Requests/RequestBody/RequestBody";
import IssuesUpload from "../IssuesUpload/IssuesUpload";
import IssueCertificationsForm from "./IssueCertificationsForm/IssueCertificationsForm";
import RequestsHeader from "../../Requests/RequestsHeader/RequestsHeader";

// Issues Certification tab --> selected===6
const IssueCertifications = () => {
  // all certfication data
  const [allCertificatesData, setAllCertificatesData] = useState(
    data.certifications
  );
  // state to open certification form
  const [openCertificateForm, setOpenCertificateForm] = useState(false);
  //  state to manage data of which item's clicked in the list
  const [certificateData, setCertificateData] = useState();
  //state store which card is clicked which item is click
  const [selectedCard, setselectedCard] = useState();
  // state to open upload issues form
  const [openUploadIssues, setOpenUploadIssues] = useState(false);

  // handler function to handle item click in the list
  const handleCardClick = (cardData) => {
    setCertificateData(cardData);
    setOpenCertificateForm(true);
    setselectedCard(cardData.id);
    // marks opened item as read
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

  // close form
  const closeForm = () => {
    setselectedCard();
    setOpenCertificateForm(false);
  };
  return (
    <>
      <div className="flex flex-col mt-20 ml-[260px] overflow-scroll h-full relative">
        {/* header */}
        <RequestsHeader />
        {/* body */}
        <RequestBody
          data={allCertificatesData}
          selected={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
      {/* certification form */}
      {openCertificateForm && (
        <IssueCertificationsForm
          data={certificateData}
          closeForm={closeForm}
          setOpenUploadIssues={setOpenUploadIssues}
        />
      )}
      {/* upload issue form */}
      {openUploadIssues && <IssuesUpload />}
    </>
  );
};

export default IssueCertifications;
