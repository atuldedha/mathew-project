import DownloadWhite from "../../images/downloadWhite.png";
import DownloadGreen from "../../images/downloadGreen.png";
import ProfileGreen from "../../images/profileGreen.png";
import ProfileWhite from "../../images/profileWhite.png";
import RedoGreen from "../../images/redoGreen.png";
import RedoWhite from "../../images/redoWhite.png";
import SettingsGreen from "../../images/settingsGreen.png";
import SettingsWhite from "../../images/settingsWhite.png";
import DesignGreen from "../../images/designGreen.png";
import DesignWhite from "../../images/designWhite.png";
import PieChartGreen from "../../images/pieChartGreen.svg";
import PieChartWhite from "../../images/pieChartWhite.png";

const data = {
  employer: [
    {
      id: 1,
      title: "Request",
      icon: DownloadGreen,
      selectedIcon: DownloadWhite,
    },
    {
      id: 2,
      title: "Applicants",
      icon: ProfileGreen,
      selectedIcon: ProfileWhite,
    },
    {
      id: 3,
      title: "Updates",
      icon: RedoGreen,
      selectedIcon: RedoWhite,
    },
    {
      id: 4,
      title: "Settings",
      icon: SettingsGreen,
      selectedIcon: SettingsWhite,
    },
  ],

  issues: [
    {
      id: 5,
      title: "Request",
      icon: DownloadGreen,
      selectedIcon: DownloadWhite,
    },
    {
      id: 6,
      title: "Certifications",
      icon: ProfileGreen,
      selectedIcon: ProfileWhite,
    },
    {
      id: 7,
      title: "Designs",
      icon: DesignGreen,
      selectedIcon: DesignWhite,
    },
    {
      id: 8,
      title: "Analytics",
      icon: PieChartGreen,
      selectedIcon: PieChartWhite,
    },
    {
      id: 9,
      title: "Settings",
      icon: SettingsGreen,
      selectedIcon: SettingsWhite,
    },
  ],
};

export default data;
