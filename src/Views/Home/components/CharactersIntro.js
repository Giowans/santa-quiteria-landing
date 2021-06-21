import React from "react";
//CSS import
import "../Home.css";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//Images
import TipoUno from "../../../assets/images/tipo_1.png";
import TipoDos from "../../../assets/images/tipo_2.png";
import TipoTres from "../../../assets/images/tipo_3.png";
import TipoCuatro from "../../../assets/images/tipo_4.png";

import SiteZonesBanner from "../../../assets/images/SiteZonesBanner.png";

const CharactersIntro = ({ history }) => {
  return (
    <div className="banner-container -mt-96">
      <Fade top>
        <img className="banner-image" src={SiteZonesBanner} />
      </Fade>
      <div className="banner-content">
        <Bounce left cascade>
          <div className="w-1/2 h-full mr-10">
            <h1 className="font-bold tracking-widest text-white futura-text text-7xl">
              PERSONAJES
            </h1>
            <p className="mt-2.5 text text-white w-10/12 text-justify">
              Conoce a los empresarios que ayudan a que este proyecto. Siga su
              carrera, historia y logros.
            </p>
            <div
              onClick={() => history.push("/personajes")}
              className="mt-2.5 rounded-button text text-white"
            >
              Conocer a los personajes
            </div>
          </div>
        </Bounce>
        <div className="w-1/2 h-full mt-5 d-flex flex-column justify-content-end align-items-center">
          <div className="flex flex-row justify-center align-center w-80 h-80">
            <Fade top>
              <img
                className="w-8/12 h-80 mt-9"
                src={TipoTres}
                alt="sponsor-three"
              />
            </Fade>
            <Fade right>
              <img
                className="w-8/12 h-8/12"
                src={TipoCuatro}
                alt="sponsor-four"
              />
            </Fade>
          </div>
          <div className="flex flex-row justify-center align-center w-80 h-80">
            <Fade left>
              <img
                className="w-8/12 h-72 mt-7"
                src={TipoUno}
                alt="sponsor-one"
              />
            </Fade>
            <Fade bottom>
              <img className="w-8/12 h-8/12" src={TipoDos} alt="sponsor-two" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersIntro;
