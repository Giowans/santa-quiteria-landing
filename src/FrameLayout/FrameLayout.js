import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Views
import Characters from "../Views/Characters/Characters";
import Home from "../Views/Home/Home";
import Culture from "../Views/Culture/Culture";
import ArcheologicalArea from "../Views/Archeological-Area/Archeological-Area";
import Project from "../Views/Project/Project";
//CSS import
import "./FrameLayout.css";
import Navbar from "./components/Navbar";
import Footer from "./Footer";

const FrameLayout = ({ ...props }) => {
  return (
    <Router>
      {/*Navbar*/}
      <Navbar />
      {/*Routes*/}
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/personajes" component={Characters} />
        <Route path="/cultura" component={Culture} />
        <Route
          exact={false}
          path="/zona-arqueológica"
          component={ArcheologicalArea}
        />
        <Route path="/proyecto" component={Project} />
        {/**Footer for all views */}
        <Footer />
      </div>
    </Router>
  );
};

export default FrameLayout;
