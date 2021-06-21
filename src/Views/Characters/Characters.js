import React from "react";
import Fade from "react-reveal/Fade";
// CSS import
import "./Characters.css";
import CharacterCard from "./components/CharacterCard";
import TipoUno from "../../assets/images/tipo_1.png";
import TipoDos from "../../assets/images/tipo_2.png";
import TipoTres from "../../assets/images/tipo_3.png";
import TipoCuatro from "../../assets/images/tipo_4.png";

import Footer from "../../FrameLayout/Footer";

const Characters = ({ history, ...props }) => {
  return (
    <div className="py-16 mt-10 text-white bg-white px-36">
      {/**Characters */}
      <h1 className="font-bold tracking-widest text-black futura-text text-7xl">
        <Fade left cascade>
          PERSONAJES
        </Fade>
      </h1>
      <CharacterCard
        reversible={false}
        sourceImage={TipoUno}
        name="MIGUEL CLAUDIO JIMÉNEZ VIZCARRA"
      >
        Mexicano, originario de Guadalajara, Jalisco, abogado postulante y
        promotor de la cultura de nuestro estado de Jalisco. Aunado al desempeño
        de la profesión, desde hace más de cuarenta años está dedicado a la
        promoción y propagación de la cultura de nuestro estado. Lo ha hecho
        investigando, publicando y transmitiendo todo aquello que está
        relacionado con el acervo cultural, tanto de lo que fue la Nueva Galicia
        como lo que hoy es el estado de Jalisco e igualmente colaborando en la
        conservación de ese acervo. Un ejemplo de esto lo son las publicaciones
        de sus trabajos, el museo virtual de pintores y más recientemente el
        museo itinerante dedicado a las tabernas de vino mezcal. De sus
        publicaciones e investigaciones y conferencias los temas principales
        son: -. Destilación prehispánica -. Nueva Galicia Siglos XVI, XVII y
        XVIII -. Instituciones Virreinales. -. Amatitán como origen del “Vino
        Mezcal/Tequila” -. Paisaje Agavero y las Antigüas Instalaciones
        Industriales del Tequila. Miembro de la Benemérita Sociedad de Geografía
        y Estadística del Estado de Jalisco. La Academia Mexicana de Genealogía
        y Heráldica. El Seminario de Cultura Mexicana. El Seminario de Estudios
        Históricos sobre Amatitan-Arenal-Tequila. Preseas: -. Presea "Ave de
        Plata" 2011 por la promoción al arte Jalisciense. -. Reconocimiento
        "Francisco Ayón Zester". -. Presea “Valentín Gómez Farías” de la
        Benemérita Sociedad de Geografía y Estadística del Estado de Jalisco, A.
        C., por sus 30 años realizando elevadas actividades a favor de la
        ciencia, la cultura y las artes. -. Premio Jalisco 2017 Ámbito
        Humanístico Con su labor, encaminada siempre hacia la sociedad en
        general, pretende concientizar la importancia de lo que, con su
        actividad, esfuerzo, creatividad, han generado los habitantes de nuestro
        estado, y como es que todo ello ha trascendido más allá de nuestras
        fronteras, de manera tal que no solo ellos se sientan orgullosos de lo
        hecho, sino que todas las naciones lo conozcan, respeten y admiren.
      </CharacterCard>
      <CharacterCard
        reversible={true}
        sourceImage={TipoTres}
        name="MIGUEL ÁNGEL LANDEROS VOLQUARTS"
      >
        Licenciado en Administración de Empresas, egresado del Instituto
        Tecnológico de Estudios Superiores de Occidente (ITESO). Diplomado en
        Políticas Públicas por la Universidad de Guadalajara Diplomado como
        Maestro Tequilero Es miembro de la Mesa de Reactivación Económica del
        Estado de Jalisco así como miembro del Consejo Consultivo del Proyecto
        Estratégico de la Ruta del Tequila. Se ha desempeñado como Director de
        la Industria Maderera de Jalisco y como Director de Comercialización en
        la Compañía Constructora Desarrollo 2000. En el ámbito internacional
        participó como Director Comercial para América Latina en el Grupo
        DCM-Benetton, posteriormente como Director Comercial para Europa del
        Grupo DCM-Internacional y así mismo como Director Internacional del
        Grupo DCM-Internacional LTD. Entre otras posiciones importantes
        desempeñadas a lo largo de su trayectoria laboral se encuentran la de
        asesor de Consorcio SRF, de igual forma fungió como Presidente de la
        Cámara de Negocios India- México así como también ha sido parte de
        manera consecutiva por dos años del Consejo Editorial de Negocios del
        periódico MURAL- Reforma y Consejero de Milenio. Al día de hoy forma
        parte de los comités bilaterales México – India, México – Mónaco y
        México – Brasil de COMCE a nivel Nacional, miembro de Consejo Consultivo
        para la Innovación, Crecimiento y Desarrollo Sostenible (Coincydes).
        Actualmente es Presidente del Consejo Mexicano de Comercio Exterior
        (COMCE) de Occidente desde el 2013 a la actualidad. Actualmente tiene
        los siguientes nombramientos: Vicepresidente del Consejo Agropecuario de
        Jalisco Vicepresidente Nacional de COMCE Nacional Vicepresidente de la
        Comisión de Comercio Exterior y Asuntos Internacionales de la CONCAMIN
        Presidente del Consejo Empresarial para la Integración de Mesoamérica
        Miembro del Consejo Directivo de la Coalición Latina de Estados Unidos
        Vicepresidente de promoción e Inversión de la Sección Internacional para
        México y el Caribe Miembro del Cuarto de Junto para las Negociaciones
        del T-MEC Consejero Empresarial México – Brasil Cónsul Honorario de
        Vietnam Actualmente como empresario participa en las siguientes empresas
        y sectores: Presidente de Tequila Triunfo S. A. Vicepresidente de Grupo
        Invermar México Socio de Empresa Familiar de Hotelería y Desarrollos
        Turísticos a nivel nacional Productor Agroindustrial de Madera y
        Aguacate
      </CharacterCard>

      <CharacterCard
        name="MARTIN ESPINOSA PAREDES"
        reversible={false}
        sourceImage={TipoDos}
      >
        Arquitecto Martin Espinosa Paredes, originario de la Ciudad de
        Guadalajara, Jalisco, dedicado a la promoción y construcción de
        desarrollos Habitacionales, Industriales y Turísticos, en diferentes
        partes de la Republica. Conjuntamente con sus socios promueve proyectos
        Turísticos y de Producción Agrícola, en el Municipio del Arenal,
        Jalisco, y llevan a cabo acciones de participación y colaboración para
        la protección, conservación y puesta en valor del sitio Arqueológico
        Santa Quiteria.
      </CharacterCard>
      <CharacterCard
        name="SALVADOR VALENZUELA"
        reversible={true}
        sourceImage={TipoCuatro}
      ></CharacterCard>
    </div>
  );
};

export default Characters;
