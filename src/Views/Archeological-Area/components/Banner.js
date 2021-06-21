import React from "react";
//CSS import
import "../Archeological-Area.css";
import Fade from "react-reveal/Fade";

//Images
import BannerArq from "../../../assets/images/BannerArq.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <Fade left>
        <img
          className="banner-image"
          src={BannerArq}
          className="w-8/12 h-8/12"
        />
      </Fade>
      <div className="banner-content">
        <Fade right cascade>
          <div className="flex items-end justify-end w-full h-full ml-20 flex-column">
            <h1 className="mt-6 font-bold tracking-widest text-right futura-text text-7xl primary-color">
              ZONA
            </h1>
            <h1 className="mt-6 font-bold tracking-widest text-right text-white futura-text text-7xl">
              ARQUEOLÓGICA
            </h1>
            <p className="w-7/12 mt-6 text-center text-white text">
              El sitio arqueológico de Santa Quiteria se encuentra entre los
              límites territoriales de los municipios de El Arenal y Amatitán,
              en el Estado de Jalisco, México. Su emplazamiento se da en lo que
              se denomina como región valles centrales.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
