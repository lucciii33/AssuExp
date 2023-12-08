import { useState, useEffect, useRef } from "react";

import "../styles/quienEs.css";
import assu from "../images/assu.png";

function QuienEs() {
  return (
    <>
      <div className="container-services">
        <div className="flex items-center justify-center sm:text-center">
          <div className="pt-20 ">
            <h1 className="titleServices font-extralight">
              QUIEN ES <span className="font-bold">ASSU EN EXPANSIONS</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap mt-20 px-4">
          {/* Left Div (Text) */}
          <div className="w-full md:w-full lg:w-7/12 px-4 mb-8 md:mb-0">
            <div className=" p-4 md:h-full lg:pt-5 xl:pt-10">
              <h2 className="text-xl font-bold mb-5">Text Content</h2>
              <p>
                SAssunta es una mujer extraordinaria con una profunda conexión
                con el mundo de la energía y el equilibrio. Con una pasión por
                el Feng Shui que ha cultivado a lo largo de los años, ha llegado
                a ser una experta en la armonización de espacios y la
                transformación de vidas.
              </p>
              <br />
              <p>
                Con décadas de experiencia en el mundo del Feng Shui, Assunta ha
                guiado a innumerables personas hacia la armonía y la prosperidad
                a través de la sabiduría milenaria de esta antigua práctica
                china. Su intuición y comprensión innata de las energías en el
                entorno le permiten crear ambientes que fluyen en equilibrio y
                abundancia.
              </p>
              <br />
              <p>
                Con décadas de experiencia en el mundo del Feng Shui, Assunta ha
                guiado a innumerables personas hacia la armonía y la prosperidad
                a través de la sabiduría milenaria de esta antigua práctica
                china. Su intuición y comprensión innata de las energías en el
                entorno le permiten crear ambientes que fluyen en equilibrio y
                abundancia.
              </p>
            </div>
          </div>

          {/* Right Div (Image) */}
          <div className="w-full md:w-full lg:w-5/12 px-4">
            <div className="w-full md:h-full">
              <img
                className="object-cover md:h-[400px] lg:h-100 xl:h-100"
                src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/02/meditation-1645867658.jpg"
                alt="https://themindfulsteward.com/wp-content/uploads/2023/06/A-Guide-to-Chakra-Meditation-and-Healing.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuienEs;
