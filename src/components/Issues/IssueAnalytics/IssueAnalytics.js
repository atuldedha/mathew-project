import React, { useState } from "react";
import IssueAnalyticsHeader from "./IssueAnalyticsHeader/IssueAnalyticsHeader";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import AnalyticsCard from "./AnalyticsCard/AnalyticsCard";
import SubmissionAnalytics from "./SubmissionAnalytics/SubmissionAnalytics";

const IssueAnalytics = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className="ml-[260px] bg-white1 h-full mt-20 flex flex-col w-[85%]">
      <IssueAnalyticsHeader
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      {selectedTab === 1 && <SubmissionAnalytics />}
    </div>
  );
};

export default IssueAnalytics;
