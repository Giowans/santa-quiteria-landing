import React from "react";
import BlueSection from "./components/BlueSection";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
//CSS import
import "./Culture.css";

const Culture = ({ history, ...props }) => {
  return (
    <div className="mt-16">
      {/**Banner of First Section for this view */}
      <FirstSection />
      {/**Section for the artesania*/}
      <SecondSection />
      {/**Blue Section for Guachimontones */}
      <BlueSection />
    </div>
  );
};

export default Culture;
