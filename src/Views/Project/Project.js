import React from "react";
import TitleSection from "./components/TitleSection";
//CSS import
import "./Project.css";

const Project = ({ history, ...props }) => {
  return (
    <div className="mt-16 agave-banner">
      <TitleSection />
    </div>
  );
};

export default Project;
