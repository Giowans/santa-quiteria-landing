import React from "react";
import { withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
//CSS import
import "./Archeological-Area.css";
import Banner from "./components/Banner";
import Zones from "./components/Zones";

const ArcheologicalAreaView = ({ history, ...props }) => {
  return (
    <div>
      {/**Banner */}
      <Banner />
      {/**Zones Section */}
      <Zones />
    </div>
  );
};

export default withRouter(ArcheologicalAreaView);
