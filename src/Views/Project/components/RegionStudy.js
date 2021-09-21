import React from "react";
import Fade from "react-reveal/Fade";
import Mono from "../../../assets/images/Mono.png";

const RegionStudy = () => {
  return (
    <div className="relative flex flex-row h-full bg-white">
      <Fade left>
        <div className="relative w-6/12">
          <img src={Mono} className="absolute z-40 w-full -top-36" />
        </div>
      </Fade>
      <Fade cascade right>
        <div className="z-40 flex items-center justify-center w-6/12 h-full px-8 py-40 flex-column">
          <h1 className="w-full text-3xl font-bold tracking-widest text-left text-black my-14 futura-text">
            EL ESTUDIO <font className="primary-color">DE LA REGIÓN</font>
          </h1>
          <p className="text-left text-black text">
            A principios del siglo XX, Franz Boas inició en México el estudio de
            los paisajes sociales o regiones, como una asociación distintiva de
            formas físicas y culturales. Una de las primeras aportaciones de sus
            seguidores fue la realizada por Manuel Gamio (1979), quien, en su
            afán por estudiar el proceso de interacción entre poblaciones
            indígenas, instituciones y grupos modernos, en un entorno regional,
            propuso la realización de estudios integrales de área. La finalidad
            de dicha propuesta era la de entender los procesos de incorporación
            de las comunidades tradicionales al estado nacional, además de poner
            de manifiesto la relación íntima e interdependiente entre población
            y territorio. La historiografía mexicana incorporó las aportaciones
            de estos antropólogos, al tiempo que abrevó de geógrafos como Ángel
            Bassols (1979) y Claude Bataillon (1969), quienes entrelazaron el
            estudio del medio natural con los procesos históricos, económicos,
            demográficos y políticos, en la integración territorial.
          </p>
          <p className="text-left text-black text">
            Phil Weigand (1979, 1985, 1993) caracterizó el desarrollo
            sociopolítico de los grupos prehispánicos de la región valles, como
            el de sociedades, considerando que uno de los factores causativos de
            la complejidad social se debía a la abundancia de yacimientos de
            obsidiana, considerada como un recurso estratégico.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default RegionStudy;
