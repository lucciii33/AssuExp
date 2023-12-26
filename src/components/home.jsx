import { useState } from "react";

import "../styles/home.css";
import Services from './services'
import QuienEs from './quienEs'
import { LastBanner } from './last-banner'

function Home() {
  
  const redirectToWhatsApp = () => {
    const phoneNumber = '7864983554';
    const initialMessage = 'Hola Assunta estoy interesado en una terapia';
    const encodedMessage = encodeURIComponent(initialMessage);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <div className="containerImage">
        <div className="backgroundOverlay"></div>
        <div className="infoImage">
          <div className="grid justify-items-center md:justify-items-end mt-50">
            <p className="para-text font-thin ">
              Como el éndulo que nunca se detiene,
              <br /> seguimos en constante expansión...
            </p>
          </div>
          <div className="grid justify-items-center md:justify-items-end items-center mt-60">
            {/* <div className=''> */}
            <div className="mt-5">
              <h1 className="font-title font-extralight">
                BIENVENIDOS A<br />
                <strong className="font-extrabold">ASSU EN EXPACION</strong>
              </h1>
              <p className="text-white font-normal">
                Tejiendo un mundo de posibilidades y expansión.
              </p>
            </div>
            {/* </div> */}
          </div>
          <div className="mt-5 grid justify-items-center md:justify-items-end items-center buttons-rigth">
              <div>
                <button className="me-4 button-grey"><a href="#services">TERAPIAS</a></button>
                <button className=" button-blue" onClick={()=>{
                  redirectToWhatsApp()
                }}>RESERVA ONLINE</button>
              </div>
            </div>
        </div>
      </div>
      <QuienEs />
			<Services />
			<LastBanner />
    </>
  );
}

export default Home;
