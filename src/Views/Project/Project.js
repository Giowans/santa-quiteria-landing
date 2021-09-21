import React from "react";
import GeographicalEnviroment from "./components/GeographicalEnviroment";
import IntroSecction from "./components/IntroSection";
import Records from "./components/Records";
import RegionStudy from "./components/RegionStudy";
import TitleSection from "./components/TitleSection";
//CSS import
import "./Project.css";

const Project = ({ history, ...props }) => {
  return (
    <div>
      <div className="mt-16 agave-banner">
        <TitleSection />
        <IntroSecction />
      </div>
      <GeographicalEnviroment />
      <RegionStudy />
      <div className="antecedentes-banner">
        <Records />
      </div>
    </div>
  );
};

export default Project;
