import { useState } from "react";
import EmployerRequests from "./components/Employer/EmployerRequests/EmployerRequests";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [selected, setSelected] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="flex w-full bg-green2 h-screen overflow-scroll">
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        username="Atul"
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex flex-col w-full">
        <Header setShowSidebar={setShowSidebar} />

        {selected === 1 && <EmployerRequests />}
      </div>
    </div>
  );
}

export default App;
