import React from "react";
import Zoom from "react-reveal/Zoom";

import Guachi from "../../../assets/images/guachimontones.png";

const BlueSection = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen">
      <Zoom cascade>
        <div className="relative w-1/2 h-full">
          <img src={Guachi} className="w-full h-full" />
          <div className="absolute bottom-0 w-full px-16 py-4 bg-black bg-opacity-40 h-1/12">
            <p className="text-sm italic text-left text-white">
              Guachimontón La Iguana de la Zona Arqueológica Guachimontones.
            </p>
            <p className="text-sm italic text-left text-white">
              Teuchitlán, Jalisco. Fotografía Javier Alanis Vilchis.
            </p>
          </div>
        </div>
      </Zoom>
      <Zoom cascade>
        <div className="w-1/2 h-full px-10 py-6 primary-back">
          <p className="mt-10 text-justify text-white text">
            Quizá el mayor beneficio que trajo la aparición de la tradición
            Teuchitlán fue que rompió con ciertos dogmas sobre el origen de las
            sociedades del Occidente, atadas por lo regular al resto de
            Mesoamérica. Sus características se distinguen de todas las culturas
            mesoamericanas, sobre todo en el diseño arquitectónico basado en la
            representación de plazas de forma circular denominadas
            “Guachimontones”.
          </p>
          <p className="mt-10 text-justify text-white text">
            En general, la tradición Teuchitlán representa la primera
            experiencia conocida de un estilo de vida civilizado en el Occidente
            de Mesoamérica. Inició en tiempos tan tempranos como 1000 a.C., y un
            siglo antes de la era cristiana alcanzó un alto nivel de complejidad
            en la organización social, caracterizado por la arquitectura
            funeraria llamada tumbas de tiro de estilo El Opeño (Weigand, 2008).
          </p>
          <p className="mt-10 text-justify text-white text">
            La arquitectura quizá sea el sello más distintivo de esta tradición,
            por las edificaciones realizadas a partir de círculos concéntricos.
            Sabemos que en Mesoamérica existieron un sinfín de estructuras
            circulares, pero para que una de ellas pueda ser denominada
            “Guachimontón” debe tener cinco elementos constructivos: 1) un altar
            circular central escalonado por uno o varios niveles y aplanado en
            la parte superior; 2) un patio circular elevado que da vuelta al
            altar; 3) una plataforma circular que rodea por entero el patio
            circular y el altar; 4) alrededor del adoratorio circular existen
            desde 4 a 16 plataformas de formas cuadradas o rectangulares
            distribuidas de manera uniforme, aunque a menudo presentan tamaños y
            elaboración distintos, y 5) en ocasiones los edificios presentan
            debajo del patio o en el altar central cámaras fúnebres del tipo
            tumba de tiro (Esparza, 2015).
          </p>
        </div>
      </Zoom>
    </div>
  );
};

export default BlueSection;
