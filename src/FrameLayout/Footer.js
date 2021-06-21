import React from "react";
import Zoom from "react-reveal/Zoom";
import LogoMipaa from "../assets/images/mipaa_logo.png";
import IG from "../assets/images/IG.png";
import FB from "../assets/images/FB.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full h-full flex-column">
      <div className="flex flex-row w-full py-10 bg-black h-9/12">
        <Zoom left cascade>
          <div className="flex items-center justify-around w-4/12 mx-10 flex-column">
            <img src={LogoMipaa} />
            <p className="text-center text-white text-md ">
              Pagina web creada para el estudio y conservación de la zona
              arqueológica del paisaje agavero de Santa Quiteria
            </p>
          </div>
        </Zoom>
        <Zoom bottom cascade>
          <div className="flex justify-start w-4/12 mx-10 flex-column">
            <p className="text-base text-center text-white ">
              Publicaciones Recientes
            </p>
            <p className="-mt-2.5 text-sm text-center text-gray-400">
              Febrero 11 2021
            </p>
            <p className="pb-3 text-base text-left text-white mt-1.5 border-b-2 border-gray-500">
              Para ver más sobre nuestras publicaciones entra a nuestras redes
              sociales donde encontraras, promociones, publicaciones y contenido
              relacionado a nosotros.
            </p>
            <p className="mt-4 text-sm text-left text-gray-500">Febrero 2021</p>
            <p className="pb-3 text-base text-left text-white border-b-2 border-gray-500">
              Contáctanos para obtener mas información sobre nuestros servicios.
            </p>
          </div>
        </Zoom>
        <Zoom right cascade>
          <div className="flex justify-start w-4/12 mx-10 flex-column ">
            <p className="text-base text-center text-white ">Contacto</p>
            <div className="pb-3 border-b-2 border-gray-500">
              <p className="text-base text-left text-white ">Telefonos</p>
              <p className="-mt-3.5 text-sm text-left primary-color">
                33 12 36 65 68
              </p>
              <p className="text-base text-left text-white mt-1.5 -mb-1.5">
                Correos
              </p>
              <a
                href="mailto:elarenal.jalisco@gmail.com"
                className="text-sm text-left no-underline primary-color"
              >
                elarenal.jalisco@gmail.com <br />
              </a>
              <a
                href="mailto:museopaisajeagavero@gmail.com"
                className="text-sm text-left no-underline primary-color"
              >
                museopaisajeagavero@gmail.com
              </a>
            </div>
            <div className="py-3 border-b-2 border-gray-500">
              <p className="text-base text-center text-white">
                Diseñadores de la página
              </p>
              <p className="text-base text-left text-white mt-1.5 -mb-1.5">
                Erick Daniel Aranda Palomera
              </p>
              <a
                href="mailto:daniaranda26@gmail.com"
                className="text-sm text-left no-underline primary-color"
              >
                daniaranda26@gmail.com
              </a>
              <p className="text-base text-left text-white mt-1.5 -mb-1.5">
                Giovanni Emmanuel Muñoz López
              </p>
              <a
                href="mailto:gio_tails@live.com"
                className="text-sm text-left no-underline primary-color"
              >
                gio_tails@live.com
              </a>
              <p className="text-base text-left text-white mt-1.5 -mb-1.5">
                David González Escobedo
              </p>
              <a
                href="mailto:david.glez.e@hotmail.com"
                className="text-sm text-left no-underline primary-color"
              >
                david.glez.e@hotmail.com
              </a>
            </div>
            <p className="text-base text-center text-white mt-2.5">
              Siguenos en nuestras redes
            </p>
            <p className="flex flex-row items-center justify-start text-base text-left text-white ">
              MIPAA:{" "}
              <a
                className="ml-2.5"
                href="https://www.instagram.com/museointerpretativodepa/"
              >
                <img src={IG} />
              </a>{" "}
              <a
                className="ml-2.5"
                href="https://www.facebook.com/MuseoInterpretativodelPaisajeAgavero"
              >
                <img src={FB} />
              </a>
            </p>
          </div>
        </Zoom>
      </div>
      <div className="flex flex-row items-center justify-center w-full h-full p-3.5 pt-6 primary-back">
        <p className="no-underline text-gray-700 text-sm p-2.5">
          Derechos reservados 2021 ©MIPAA
        </p>
        <p className="no-underline text-gray-700 text-sm p-2.5 border-l-2 border-r-2 border-gray-700">
          Politica de privacidad
        </p>
        <p className="no-underline text-gray-700 text-sm p-2.5">Soporte</p>
      </div>
    </div>
  );
};

export default Footer;
