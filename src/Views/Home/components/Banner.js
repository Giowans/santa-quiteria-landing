import React from "react";
//CSS import
import "../Home.css";
import Fade from "react-reveal/Fade";

//Images
import BannerImage from "../../../assets/images/banner_home.jpg";
import LogoMipaa from "../../../assets/images/mipaa_logo.png";
import LogoInah from "../../../assets/images/inah.png";

const Banner = ({ ...props }) => {
  const { history } = props;
  return (
    <div className="banner-container">
      <Fade top>
        <img className="banner-image" src={BannerImage} />
      </Fade>
      <div className="banner-content">
        <div
          className="flex justify-start flex-column"
          style={{ width: "40%", height: "100%" }}
        >
          <Fade left>
            <img src={LogoMipaa} />
          </Fade>
          <Fade left>
            <img className="mt-5" src={LogoInah} />
          </Fade>
        </div>
        <Fade right cascade>
          <div className="justify-center w-full h-full ml-20 d-flex flex-column">
            <h1 className="font-bold tracking-widest text-white futura-text text-7xl">
              PROYECTO
            </h1>
            <h1 className="font-bold tracking-widest futura-text text-7xl primary-color">
              SANTA QUITERIA
            </h1>
            <p className="mt-2.5 text text-white w-full text-justify">
              El municipio de El Arenal y diversos empresarios y actores de la
              sociedad civil solicitaron al Centro INAH Jalisco apoyo y asesoría
              para la conservación del sitio arqueológico de Santa Quiteria, en
              la zona limítrofe de los municipios de Arenal y Amatitán. Las
              tareas de protección, conservación y puesta en valor de este sitio
              son de importancia, toda vez que fungió como un importante centro
              cívico ceremonial de la tradición Teuchitlán, misma que tuvo su
              apogeo a inicios de la era cristiana.
            </p>
            <div
              onClick={() => history.push("/proyecto")}
              className="mt-2.5 rounded-button text text-white"
            >
              Leer más
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
