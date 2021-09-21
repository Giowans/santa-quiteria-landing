import React from "react";
import Fade from "react-reveal/Fade";
import Quiteria from "../../../assets/images/recordsOne.png";
import Agavitos from "../../../assets/images/recordsTwo.png";

const Records = () => {
  return (
    <div>
      <div className="relative flex flex-row h-full bg-black bg-opacity-80">
        <Fade cascade right>
          <div className="z-40 flex items-center justify-center w-3/5 h-full px-8 py-20 flex-column">
            <h1 className="w-full text-3xl font-bold tracking-widest text-left text-white my-14 futura-text">
              ANTE<font className="primary-color">CEDENTES</font>
            </h1>
            <p className="text-base text-left text-white text">
              La región de valles en los alrededores del volcán de Tequila, fue
              la zona de asiento de sociedades complejas conocidas como
              tradición Teuchitlán (Weigand 1985, 1992a, 1992b, Weigand y
              Beekman 2000: 36-37). En la zona central jalisciense, se cuenta
              con la excavación del sitio de Huistla, en Etzatlán, realizada por
              Glassow (1967), la cual permitió definir la secuencia cronológica
              para la parte tardía de la ocupación prehispánica en dicha zona.
            </p>
            <p className="text-base text-left text-white text">
              Posteriormente, Weigand (1979) definió la tradición Teuchitlán a
              partir del estudio de los vestigios arquitectónicos y del patrón
              de disposición circular de los edificios, rasgo básico que se
              estandarizó a partir del período Preclásico tardío (fase Arenal,
              300 a. C. a 200 d.C.) y que estuvo acompañado por tumbas de tiro
              elaboradas que sirvieron como cámaras funerarias para grupos de
              elite. Los siguientes siglos constituyeron el apogeo de dicha
              tradición, donde se dio un crecimiento poblacional y un incremento
              en la complejidad sociocultural. El patrón arquitectónico concluyó
              su desarrollo hacia mediados del Clásico, dando como resultado el
              fin del uso de los espacios circulares y la consiguiente
              introducción de patrones arquitectónicos y espaciales ortogonales,
              con nuevas concepciones cosmogónicas asociados a ellos. Sin
              embargo, los nuevos fechamientos, a partir de las excavaciones en
              el sitio de La Higuerita, Tala, muestran la necesidad de redefinir
              las secuencias de desarrollo regional, pues hacia 400 d.C. la
              tradición Teuchitlán se encuentra en plena decadencia y es
              sustituida por el Complejo El Grillo (López Mestas y Montejano
              2004, 2009).
            </p>
            <p className="text-base text-left text-white text">
              Debido a que el sitio de Santa Quiteria se ubica cronológicamente
              entre las fases Arenal y Ahualulco (250 a.C. a 400/450 d.C.), es
              decir, en el período de auge y decadencia de la tradición
              Teuchitlán, se hará énfasis en dicho momento. Mientras esto
              ocurría, se desarrollaban procesos sociales más amplios que iban a
              tono con dichas dinámicas. En Mesoamérica, los procesos de
              complejización social están situados hacia los períodos Preclásico
              medio y tardío; es en dicho momento cuando se distribuyeron
              diferencialmente los asentamientos, apareció la arquitectura
              monumental y se identificaron cultos funerarios como sinónimos de
              una estructura social jerárquica, rasgos derivados de un proceso
              donde el aspecto tecnoeconómico fue considerado como el factor
              causativo (Sanders y Price 1968).
            </p>
          </div>
        </Fade>
        <Fade left>
          <img
            src={Quiteria}
            className="absolute z-40 w-7/12 h-4/6 inset-1/4 left-2/3"
          />
        </Fade>
      </div>
      <div className="relative flex flex-row h-full bg-black bg-opacity-80">
        <Fade left>
          <div className="relative w-5/12 h-full">
            <img src={Agavitos} />
          </div>
        </Fade>
        <Fade cascade right>
          <div className="z-40 flex items-center justify-center w-7/12 h-full px-12 flex-column">
            <p className="text-base text-left text-white text">
              Particularizando en occidente, la región central jalisciense se
              encontraba sufriendo una serie de procesos de complejización
              social que dieron lugar a la ya mencionada tradición Teuchitlán,
              hacia el Preclásico tardío y Clásico temprano, es decir, el
              período comprendido por las fases locales Arenal y Ahualulco. De
              esta tradición cultural se ha estudiado su arquitectura monumental
              circular y su relación con un urbanismo de espacios abiertos, la
              marcada explosión demográfica, la intensificación agrícola, el
              ritual funerario centrado en las tumbas de tiro, la explotación de
              recursos estratégicos restringidos como la obsidiana, al igual que
              la expansión territorial de esta tradición. Debido al avance
              representado por dichos trabajos, comienza a aceptarse que,
              durante el Preclásico, al igual que en el resto de Mesoamérica, se
              dio un largo proceso de transformación de las sociedades agrícolas
              simples hacia sociedades jerarquizadas, las cuales mantuvieron un
              contacto regular con otras regiones mesoamericanas, principalmente
              a través de los grupos de elite (López Mestas y Ramos 1998, 2006;
              Weigand 2000).
            </p>
            <p className="text-base text-left text-white text">
              Por otra parte, en el sitio de Potrero de la Cruz se identificó
              obsidiana de los yacimientos de Ahuisculco y Navajas, Jalisco.4
              Así mismo, obsidiana proveniente de yacimientos del altiplano
              central jalisciense, se localizó en sitios de la cuenca de Sayula.
              Estos datos evidencian una red de intercambio bien establecida
              hacia el sur de Jalisco y Colima; también parece que obsidiana
              proveniente de estos yacimientos se movió al noroeste hacia
              Nayarit.
            </p>
            <p className="text-base text-left text-white text">
              Muchos de los talleres estudiados en la zona de la tradición
              Teuchitlán produjeron instrumentos, como raspadores, que están
              directamente relacionados con las actividades productivas de estas
              comunidades. Pero, no existen muchos datos sobre el proceso de
              explotación de obsidiana y la producción de artefactos en esta
              zona. Sin embargo, se han localizado algunos ejemplos de posibles
              talleres ubicados en los alrededores de sitios ceremoniales, como
              el caso de Huitzilapa, donde se encontró evidencia de trabajo de
              obsidiana al exterior de los conjuntos ceremoniales.6 Este hecho
              pudiera indicar que la producción de ciertos artefactos estuvo
              controlada por los grupos de elite. Por otra parte, el hecho de
              que objetos utilitarios no se encuentren al interior de tumbas de
              alto estatus, revela que este segmento social no se dedicó a
              tareas productivas, sino a las de control y administración.
            </p>
            <p className="text-base text-left text-white text">
              Así mismo, hasta el momento se acepta que los sitios arqueológicos
              de la región central de Jalisco, durante el lapso que ocupó la
              tradición Teuchitlán, muestran un patrón de asentamiento
              jerarquizado, con tres niveles de sitios (López Mestas y Ramos
              1998, Ohnersorgen y Varien 1996, 2008, Weigand 1993). Los centros
              cívico-ceremoniales o rectores estaban conformados por grandes
              espacios arquitectónicos con un arreglo circular, que generalmente
              tenían canchas asociadas para el juego de pelota (Weigand 1991).
              Las zonas habitacionales, con diferentes tipos de estructuras
              residenciales se distribuyen principalmente en los valles ubicados
              al sur del volcán de Tequila y en las inmediaciones de la laguna
              de Magdalena, donde también se han documentado grandes áreas
              cubiertas de chinampas (Stuart 1995; Weigand 1994, 1995). La
              evidencia anterior, llevó a Weigand (1985, 1993; Weigand y Beekman
              2000) a sugerir que esta tradición se aglutinó en una organización
              del tipo de estado segmentario, con un territorio área nuclear
              claramente delimitada. Posteriormente, Beekman (2000) enfocó su
              estudio a los puntos estratégicos que pudieron servir como
              “puertos de entrada”, como el Peñol de Santa Rosalía al oeste y
              Cerro Tepopote al este.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Records;
