import { useState, useEffect, useRef } from "react";

import "../styles/quienEs.css";
import assu from "../assets/assu.png"

function QuienEs() {

  

  return (
    <>
      <div className="container-services">
        <div className="flex items-center justify-center">
          <div className="pt-20">
            <h1 className="titleServices font-bold">QUIEN ES ASSU EN EXPANSIONS</h1>
          </div>
        </div>

        <div className="flex flex-wrap mt-20 px-4">
      {/* Left Div (Text) */}
      <div className="w-full md:w-1/2 lg:w-1/2 px-4">
        <div className=" p-4 h-class-custom">
          <h2 className="text-xl font-bold">Text Content</h2>
          <p>SAssunta es una mujer extraordinaria con una profunda conexión con el mundo de la energía y el equilibrio. Con una pasión por el Feng Shui que ha cultivado a lo largo de los años, ha llegado a ser una experta en la armonización de espacios y la transformación de vidas.

</p>
<br/>
          <p>Con décadas de experiencia en el mundo del Feng Shui, Assunta ha guiado a innumerables personas hacia la armonía y la prosperidad a través de la sabiduría milenaria de esta antigua práctica china. Su intuición y comprensión innata de las energías en el entorno le permiten crear ambientes que fluyen en equilibrio y abundancia.</p>
          <br/>
          <p>Con décadas de experiencia en el mundo del Feng Shui, Assunta ha guiado a innumerables personas hacia la armonía y la prosperidad a través de la sabiduría milenaria de esta antigua práctica china. Su intuición y comprensión innata de las energías en el entorno le permiten crear ambientes que fluyen en equilibrio y abundancia.</p>
        </div>
      </div>

      {/* Right Div (Image) */}
      <div className="w-full md:w-1/2 lg:w-1/2 px-4">
        <div className="w-full ">
          <img
            className="w-full object-cover h-class-custom"
            src="https://themindfulsteward.com/wp-content/uploads/2023/06/A-Guide-to-Chakra-Meditation-and-Healing.jpg"
            alt="https://themindfulsteward.com/wp-content/uploads/2023/06/A-Guide-to-Chakra-Meditation-and-Healing.jpg"
          />
        </div>
      </div>
    </div>


      </div>
    </>
  );
}

export default QuienEs