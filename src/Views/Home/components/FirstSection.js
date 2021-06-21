import React from "react";
//CSS import
import "../Home.css";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Rotate from "react-reveal/Rotate";

//Images
import Piramid from "../../../assets/images/piramide.png";

const FirstSection = ({ history }) => {
  return (
    <div className="w-full h-full pl-28">
      <Bounce cascade>
        <div className="mt-52">
          <h1 className="font-bold tracking-widest text-white futura-text text-7xl">
            ZONA
          </h1>
          <h1 className="font-bold tracking-widest futura-text text-7xl primary-color">
            ARQUEOLÓGICA
          </h1>
        </div>
      </Bounce>
      <div className="flex-row justify-center mt-5 -ml-20 d-flex align-items-center">
        <Slide left>
          <div className="piramid-container">
            <Rotate top right cascade>
              <div className="touchitlan-square">
                <h6 className="square-text">PIRAMIDE DE TOUCHITLAN</h6>
                <div className="square"></div>
              </div>
            </Rotate>
            <img style={{ width: "100%" }} src={Piramid} />
          </div>
        </Slide>
        <Slide right cascade>
          <div className="mb-12 piramid-text">
            <p className="w-8/12 text-left text-white text">
              El sitio arqueológico de Santa Quiteria se encuentra entre los
              límites territoriales de los municipios de El Arenal y Amatitán,
              en el Estado de Jalisco, México. Su emplazamiento se da en lo que
              se denomina como región valles centrales.
            </p>
            <div
              onClick={() => history.push("/zona-arqueológica")}
              className="mt-8 text-white rounded-button text"
            >
              Leer más
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default FirstSection;
