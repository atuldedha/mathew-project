import React, { useState } from "react";
import SettingsHeader from "./SettingsHeader/SettingsHeader";
import GeneralSettings from "./GeneralSettings/GeneralSettings";
import IntegrationSettings from "./IntegrationSettings/IntegrationSettings";
import UserSettings from "./UserSettings/UserSettings";

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState(2);
  return (
    <div className="mt-[90px] ml-[298px] flex flex-col bg-white1 overflow-scroll">
      <SettingsHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === 1 && <GeneralSettings />}
      {selectedTab === 2 && <IntegrationSettings />}
      {selectedTab === 3 && <UserSettings />}
    </div>
  );
};

export default Settings;
