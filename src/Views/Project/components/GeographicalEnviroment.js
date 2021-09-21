import React from "react";
import Fade from "react-reveal/Fade";
import Arenal from "../../../assets/images/arenal.png";

const GeographicalEnviroment = () => {
  return (
    <div className="relative flex flex-row bg-black">
      <img src={Arenal} className="absolute z-0 w-full h-full" />
      <Fade cascade>
        <div className="z-0 flex items-center justify-center w-6/12 h-full pb-20 bg-black p-14 flex-column">
          <h1 className="my-10 text-3xl font-bold tracking-widest text-left text-white futura-text">
            EL MEDIO <font className="primary-color">GEOGRÁFICO</font>
          </h1>
          <p className="text-left text-white text">
            El conocimiento del entorno físico de una región dada, permite
            identificar el potencial de recursos naturales existentes y su
            probable utilización, llevando a inferir las posibles implicaciones
            sobre las comunidades arqueológicas en estudio. El sitio
            prehispánico objeto de este proyecto se ubica en la región valles
            del centro de Jalisco, la cual es un área geográfica relativamente
            de fácil delimitación, pues linda al este con la sierra de la
            Primavera, al norte con la barranca del río Grande de Santiago, al
            oeste y sur con las estribaciones de la sierra de Ameca, siendo el
            volcán de Tequila el elemento geológico más sobresaliente, pues
            prácticamente se ubica al centro de los valles.
          </p>
          <p className="text-left text-white text">
            En la región central de Jalisco, el río Grande de Santiago es el
            cauce principal, drenando la región de este a oeste hasta su
            desembocadura en el Pacífico, en el vecino estado de Nayarit; los
            valles centrales de Jalisco quedan comprendidos en la región
            hidrológica “Lerma-Chapala-Santiago”, que abarca la mayor parte del
            estado con 40,213.22 km2 (Ibid: 32). La cuenca hidrológica río
            Santiago-Aguamilpa, drena la parte norte de los valles aledaños al
            volcán de Tequila y se caracteriza por la presencia de la laguna de
            Magdalena y Palo Verde, cuya recarga es pluvial. Los valles ubicados
            al sur del volcán pertenecen a la cuenca hidrológica Huicicila,
            cuyas corrientes principales desembocan en la presa de la Vega, que
            antiguamente fue el vaso de una laguna. La presencia de estas
            lagunas fue importante para la ocupación temprana de la región, ya
            que se practicó el cultivo en campos elevados o chinampas desde los
            primeros siglos de la era Cristiana (Stuart 2005, Weigand 1993,
            1996a).
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default GeographicalEnviroment;
