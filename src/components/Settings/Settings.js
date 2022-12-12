import React, { useState } from "react";
import SettingsHeader from "./SettingsHeader/SettingsHeader";
import GeneralSettings from "./GeneralSettings/GeneralSettings";
import IntegrationSettings from "./IntegrationSettings/IntegrationSettings";
import UserSettings from "./UserSettings/UserSettings";

// Settings tab --> selected === 5 or 9
const Settings = () => {
  // state to manage selected tab
  const [selectedTab, setSelectedTab] = useState(2);
  return (
    <div className="mt-[90px] ml-[260px] flex flex-col bg-white1 overflow-scroll h-full">
      {/* header */}
      <SettingsHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {/* which settings to show */}
      {selectedTab === 1 && <GeneralSettings />}
      {selectedTab === 2 && <IntegrationSettings />}
      {selectedTab === 3 && <UserSettings />}
    </div>
  );
};

export default Settings;
