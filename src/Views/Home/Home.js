import React from "react";
import { withRouter } from "react-router-dom";
//Components
import Banner from "./components/Banner";
import FirstSection from "./components/FirstSection";
import CharactersIntro from "./components/CharactersIntro";
import CultureIntro from "./components/CultureIntro";
import Footer from "../../FrameLayout/Footer";

const HomeView = ({ ...props }) => {
  return (
    <>
      {/*Banner of the Home view */}
      <Banner {...props} />
      {/**Meet Our Project Section */}
      <FirstSection {...props} />
      {/**Characters Intro Section */}
      <CharactersIntro {...props} />
      {/**Culture Intro Section */}
      <CultureIntro {...props} />
    </>
  );
};

export default withRouter(HomeView);
