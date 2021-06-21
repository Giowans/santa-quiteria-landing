import React from "react";
import Bounce from "react-reveal/Bounce";
import FondoAgave from "../../../assets/images/fondoAgave.png";
import AgaveFigura from "../../../assets/images/agaveFigura.png";
import FiguraDos from "../../../assets/images/Figura2.png";
import Fade from "react-reveal/Fade";

const SecondSection = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen bg-white">
      <Bounce cascade>
        <div className="w-1/2 h-full px-16 py-24">
          <p className="text-right text-black text">
            La tradición Teuchitlán, a casi cincuenta años de ser acuñada, aún
            es tema de debate y discusión, ya que se forjó en un periodo donde
            los alcances de las investigaciones arqueológicas estaban apegados a
            los estudios antropológicos para entender el desarrollo
            sociocultural presente y a estudios regionales donde la ecología
            cultural de Steward (1955) y Armillas (1949) ponían de antemano la
            relación hombre-naturaleza.
          </p>
          <p className="mt-2.5 text-right text-black text">
            ¿Pero por qué tradición y no cultura? Según Phil Weigand, esto se
            debe a que su propuesta se centra en que los rasgos son de larga
            duración y que se interconectan en el tiempo. Ese proceso tuvo como
            resultado una tradición política y socioeconómica de elite que se
            sobrepuso a una serie de culturas regionales o subregionales
            (Weigand, 2008).
          </p>
        </div>
      </Bounce>
      <div className="relative w-1/2 h-full">
        <img
          src={FondoAgave}
          className="absolute w-8/12 inset-y-24 inset-x-32 h-8/12"
        />
        <Fade bottom>
          <img
            src={AgaveFigura}
            className="absolute relative z-10 w-10/12 inset-y-36 inset-x-20 h-10/12"
          />
        </Fade>
        <Fade right>
          <img src={FiguraDos} className="absolute top-0 z-20 w-full h-full" />
        </Fade>
      </div>
    </div>
  );
};

export default SecondSection;
