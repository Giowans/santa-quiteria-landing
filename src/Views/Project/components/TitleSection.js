import React from "react";
import InahVer from "../../../assets/images/inah-vertical.png";
import Fade from "react-reveal/Fade";

const TitleSection = () => {
  return (
    <div className="flex flex-row items-center justify-around pt-40 pb-10 bg-black px-30 bg-opacity-80">
      <Fade top>
        <img className="w-48 h-48" src={InahVer} />
      </Fade>
      <Fade bottom cascade>
        <div className="w-7/12 h-full">
          <h1 className="text-5xl font-bold tracking-widest text-left text-white futura-text">
            PROYECTO <font className="primary-color">ARQUEOLÓGICO</font>
          </h1>
          <h1 className="text-5xl font-bold tracking-widest text-left text-white futura-text">
            SANTA QUITERIA:
          </h1>
          <h1 className="mt-5 text-5xl font-bold tracking-widest text-left futura-text primary-color">
            MUNICIPIO <font className="text-white">DEL ARENAL</font> JALISCO
          </h1>
        </div>
      </Fade>
    </div>
  );
};

export default TitleSection;
