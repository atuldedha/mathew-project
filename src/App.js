import { useState } from "react";
import EmployerApplicants from "./components/Employer/EmployerApplicants/EmployerApplicants";
import EmployerRequests from "./components/Employer/EmployerRequests/EmployerRequests";
import EmployerUpdates from "./components/Employer/EmployerUpdates/EmployerUpdates";
import Header from "./components/Header/Header";
import IssueAnalytics from "./components/Issues/IssueAnalytics/IssueAnalytics";
import IssueCertifications from "./components/Issues/IssueCertifications/IssueCertifications";
import IssueDesign from "./components/Issues/IssueDesign/IssueDesign";
import IssueRequests from "./components/Issues/IssueRequests/IssueRequests";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  const [selected, setSelected] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="flex w-full bg-green2 h-screen overflow-hidden">
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        username="Atul"
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex flex-col w-full">
        <Header
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          username="Atul"
          selected={selected}
        />

        {selected === 1 && <EmployerRequests />}
        {selected === 2 && <EmployerApplicants />}
        {selected === 3 && <EmployerUpdates />}
        {(selected === 4 || selected === 9) && <Settings />}
        {selected === 5 && <IssueRequests />}
        {selected === 6 && <IssueCertifications />}
        {selected === 7 && <IssueDesign />}
        {selected === 8 && <IssueAnalytics />}
      </div>
    </div>
  );
}

export default App;
