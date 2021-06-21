import React from "react";
import ZoneOne from "../../../assets/images/ZonePhoto1.png";
import ZoneTwo from "../../../assets/images/ZonePhoto2.png";
import Roll from "react-reveal/Roll";
import Fade from "react-reveal/Fade";

const Zones = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center w-full h-full">
        <Roll>
          <div className="w-1/2 h-full p-10">
            <p className="text-left text-white text">
              La poligonal de protección del Sitio Arqueológico de Santa
              Quiteria tiene un área aproximada de 82-74-66.37 Ha, la cual se
              divide arqueológicamente en dos conjuntos arquitectónicos, el
              primero de ellos es denominado Mesa Alta ubicado en una meseta a
              1500 msnm en la parte oeste del cerro de Los Bailadores, por su
              parte el conjunto de Santa Quiteria o Complejo Rancho Nuevo se
              localiza en la zona plana del valle a una altitud de 1300 msnm y
              está cortado por una corriente de agua de temporal.
            </p>
            <p className="text-left text-white text">
              Hasta el momento el Sitio Arqueológica de Santa Quiteria se han
              registrado un total de 177 elementos arquitectónicos, las cuales
              conforman la arquitectura característica de la “Tradición
              Teuchitlán”, los cuales son patios circulares con grandes altares
              centrales, patios “cruciformes”, canchas de juegos de pelota de
              grandes dimensiones, unidades habitacionales y terrazas.
            </p>
          </div>
        </Roll>
        <Roll cascade>
          <div className="relative w-1/2 h-full">
            <img src={ZoneOne} className="w-full h-full" />
            <div className="absolute bottom-0 w-full px-16 py-6 bg-black bg-opacity-80 h-2/12">
              <p className="text-sm italic text-right text-white">
                Imagen 1. Vista Parcial del conjunto Mesa Alta, Sitio
                Arqueológico Santa Quiteria
              </p>
              <p className="text-sm italic text-right text-white">
                Foto Cortesía de xxxx
              </p>
            </div>
          </div>
        </Roll>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full bg-white">
        <Roll cascade>
          <div className="relative w-1/2 h-full">
            <img src={ZoneTwo} className="w-full h-full" />
            <div className="absolute bottom-0 w-full px-16 py-6 bg-black bg-opacity-80 h-2/12">
              <p className="text-sm italic text-right text-white">
                Imagen 2. Mapa del complejo Santa Quiteria.
              </p>
              <p className="text-sm italic text-right text-white">
                (Weigand, 1993).
              </p>
            </div>
          </div>
        </Roll>
        <Roll>
          <div className="w-1/2 h-full p-10">
            <p className="text-left text-black text">
              El sitio de Santa Quiteria se ubica cronológicamente entre las
              Fases Arenal y Ahualulco (250 a.C- 400/450 d. C.) El primer
              reporte del sitio arqueológico proviene del arqueólogo
              estadounidense Phil C. Weigand, el cual realizó un reconocimiento
              de superficie en torno al Volcán de Tequila, siendo el primero en
              realizar un croquis parcial del asentamiento. (Weigand, 1993)
              (Imagen 2).
            </p>
            <p className="text-left text-black text">
              Años más tarde dentro del proyecto El Paisaje Agavero y su entorno
              Arqueológico en la Zona del Volcán de Tequila, realizó un
              recorrido de superficie en el cual se reportó nuevamente el sitio
              Arqueológico, en el cual se realizaron labores de registro y
              descripción del sitio (Heredia, 2008).
            </p>
            <p className="text-left text-black text">
              En el 2011 se realizó un reconocimiento de superficie dentro del
              Proyecto de la Investigación Arqueológica de los sitios
              prehispánicos de la Tradición Teuchitlán en el centro de Jalisco,
              donde se efectuó un reconocimiento del sitio arqueológico de Santa
              Quiteria (López Mestas y Montejano, 2011).
            </p>
          </div>
        </Roll>
      </div>
    </div>
  );
};

export default Zones;
