import React from "react";
import Bounce from "react-reveal/Bounce";

import DR from "../../../assets/images/dr.png";

const FirstSection = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-full">
      <Bounce cascade>
        <div className="w-1/2 h-full px-16 py-50">
          <h1 className="mt-6 font-bold tracking-widest text-left futura-text text-7xl primary-color">
            TRADICIÓN
          </h1>
          <h1 className="mt-6 font-bold tracking-widest text-left text-white futura-text text-7xl">
            CULTURAL
          </h1>
          <h1 className="mt-6 font-bold tracking-widest text-left futura-text text-7xl primary-color">
            TEUCHITLÁN
          </h1>
          <p className="mt-10 text-justify text-white text">
            Quizá una de las mayores contribuciones a la arqueología del
            Occidente de México durante la segunda mitad del siglo XX fueron los
            estudios de la “Tradición Teuchitlán”. Ese modelo interpretativo de
            organización social fue concebido por el antropólogo americano Phil
            Weigand Moore (1934-2011) en la década 1960 para la región de los
            Valles de Tequila (Jalisco).
          </p>
        </div>
      </Bounce>
      <Bounce cascade>
        <div className="relative w-1/2 h-full">
          <img src={DR} className="w-full h-full" />
          <div className="absolute bottom-0 w-full px-16 py-4 bg-black bg-opacity-40 h-1/12">
            <p className="text-sm italic text-center text-white">
              El doctor Phil Weigand (1934-2011) en el sitio Guachimontones.
            </p>
          </div>
        </div>
      </Bounce>
    </div>
  );
};

export default FirstSection;
