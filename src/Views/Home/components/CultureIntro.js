import React from "react";
import Flip from "react-reveal/Flip";
import FiguraOne from "../../../assets/images/Figura1.png";

const CultureIntro = ({ history }) => {
  return (
    <div className="flex flex-row items-center justify-between px-32 py-10 bg-white">
      <Flip cascade left>
        <div className="w-5/12 h-full">
          <img src={FiguraOne} />
        </div>
      </Flip>
      <Flip cascade right>
        <div className="flex items-center w-7/12 h-full flex-column">
          <h1 className="font-bold tracking-widest text-gray-500 futura-text text-7xl">
            TEUCHITLÁN
          </h1>
          <h1 className="font-bold tracking-widest futura-text text-7xl primary-color">
            HISTORIA <font className="text-gray-500">DE</font>
          </h1>
          <h1 className="font-bold tracking-widest text-gray-500 futura-text text-7xl">
            CULTURA
          </h1>
          <p className="mt-2.5 text text-gray-500 w-10/12 text-justify">
            Quizá una de las mayores contribuciones a la arqueología del
            Occidente de México durante la segunda mitad del siglo XX fueron los
            estudios de la “Tradición Teuchitlán”. Ese modelo interpretativo de
            organización social fue concebido por el antropólogo americano Phil
            Weigand Moore (1934-2011) en la década 1960 para la región de los
            Valles de Tequila (Jalisco).
          </p>
          <div
            onClick={() => history.push("/cultura")}
            className="mt-2.5 rounded-button text text-white"
          >
            Conocer la cultura del lugar
          </div>
        </div>
      </Flip>
    </div>
  );
};

export default CultureIntro;
