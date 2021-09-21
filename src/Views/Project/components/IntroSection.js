import React from "react";
import Fade from "react-reveal/Fade";
import CuttedGround from "../../../assets/images/cuttedGround.jpg";
import mamalona from "../../../assets/images/piramide_mamalona.png";

const IntroSecction = () => {
  return (
    <div className="flex flex-row w-full h-full pt-10 bg-black bg-opacity-80">
      <div className="w-4/12 h-full">
        <Fade left>
          <img src={CuttedGround} />
        </Fade>
      </div>
      <div className="w-8/12 h-full">
        <Fade bottom>
          <p className="pl-10 pr-32 text-justify text-white text">
            El municipio de El Arenal y diversos empresarios y actores de la
            sociedad civil solicitaron al Centro INAH Jalisco apoyo y asesoría
            para la conservación del sitio arqueológico de Santa Quiteria, en la
            zona limítrofe de los municipios de Arenal y Amatitán. Las tareas de
            protección, conservación y puesta en valor de este sitio son de
            importancia, toda vez que fungió como un importante centro cívico
            ceremonial de la tradición Teuchitlán, misma que tuvo su apogeo a
            inicios de la era cristiana.
          </p>
          <p className="pl-10 pr-32 text-justify text-white text">
            El incremento constante de las actividades agroindustriales, así
            como de la afluencia turística, se han convertido en un foco rojo
            para la preservación de estos lugares; de ahí la necesidad de
            plantear un proyecto de investigación arqueológica que busque
            coadyuvar en la protección de sitios prehispánicos en las
            inmediaciones y dentro de la poligonal del Paisaje Agavero.
          </p>
        </Fade>
        <div className="relative bg-black bg-opacity-80">
          <Fade>
            <img src={mamalona} className="absolute" />
          </Fade>
          <Fade bottom>
            <p className="pl-10 pr-32 text-justify text-white text">
              Se cuenta con los sitios registrados en la zona por el Proyecto
              Arqueológico Guachimontones de Teuchitlán dirigido por el Dr. Phil
              C. Weigand (2001), así como los proyectos de prospección
              arqueológica de Chistopher Beekman (1993, 1994, 1996a, 1996b,
              1996c, 2000, 2005, 2008; Beekman y Christensen 2003; Beekman y
              Weigand 2000), Erika Blanco (2011), Verenice Heredia (2011, 2017;
              Heredia, Beekman y Anderson 2018; Heredia y Martínez 2010;
              Heredia, Martínez y Cortés 2013; Heredia y Sumano 2016), David
              Múñiz (2017) y Montgomery Smith (2008). No obstante, salvo
              Guachimontones, Palacio de Ocomo y La Higuerita, son pocos los
              sitios excavados sistemáticamente en esta región. Por
              consiguiente, la presente propuesta parte de una primera etapa de
              reconocimiento metódico de superficie en Santa Quiteria, la cual
              incluirá la recolección y análisis de materiales arqueológicos,
              además del registro y catalogación, con el objeto de asegurar su
              conservación y realizar el planteamiento de las siguientes etapas
              de investigación.
            </p>
            <p className="pl-10 pr-32 text-justify text-white text">
              El Proyecto Arqueológico Santa Quiteria, está dirigido por la
              Doctora Martha Lorenza López Mestas Camberos, investigadora de la
              sección de Arqueología del Centro INAH Jalisco y cuenta con la
              colaboración de los Arqueólogos Luis Angel Hernández Libreros y
              Javier Alanis Vilchis, los encargados de realizar los trabajos de
              campo.
            </p>
            <p className="pl-10 pr-32 text-justify text-white text">
              La ejecución del presente proyecto de investigación arqueológica
              implica considerar la problemática inherente a la región afectada,
              en parte ya emprendida arriba, misma que tendrá que abordarse
              durante su desarrollo y cuya solución se dará a través de la
              metodología propuesta para la prospección y registro de los
              asentamientos. Dicha problemática consiste en:
            </p>
            <p className="pl-10 pr-32 text-justify text-white text">
              a) La escasez de estudios arqueológicos para la región central de
              Jalisco y, por consiguiente, la falta de un acervo bibliográfico
              amplio.
            </p>
            <p className="pl-10 pr-32 text-justify text-white text">
              b) La diversidad cultural manifiesta en los distintos tipos de
              sitios ya registrados por otros investigadores (yacimientos de
              obsidiana, talleres, zonas de producción agrícola, unidades
              habitacionales, centros con arquitectura monumental, petroglifos,
              entre otros), al igual que en los diferentes períodos de ocupación
              de la región, cuyo rango temporal abarca desde el Preclásico
              tardío con elementos propios de la tradición Teuchitlán, pasando
              por el período Clásico con la presencia del complejo El Grillo,
              hasta el Posclásico, poco estudiado en la región y representado
              por la presencia de cerámicas relacionadas con la tradición
              Aztatlán y grupos indígenas mencionados por las fuentes
              documentales españolas.
            </p>
            <p className="pl-10 pr-32 text-justify text-white text">
              c) La afectación que está sufriendo el patrimonio arqueológico por
              la habilitación de obras de infraestructura agroindustrial y
              urbana en la región, por ser la zona de mayor concentración
              poblacional del estado (construcción de líneas de transmisión
              eléctrica, vías de acceso, red de telefonía, carreteras,
              invernaderos, entre otras).
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default IntroSecction;
