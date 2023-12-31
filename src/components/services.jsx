import { useState, useEffect, useRef } from "react";

import "../styles/services.css";

function Services() {

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      container.scrollLeft += 2;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, 50); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);


  const cardData = [
    { id: 1, title:"here is some description about this therapy maybse some prices?", text: 'Card 1 Content' },
    { id: 2, title:"here is some description about this therapy maybse some prices?", text: 'Card 2 Content' },
    { id: 3, title:"here is some description about this therapy maybse some prices?", text: 'Card 3 Content' },
    { id: 4, title:"here is some description about this therapy maybse some prices?", text: 'Card 4 Content' },
    { id: 5, title:"here is some description about this therapy maybse some prices?", text: 'Card 5 Content' },
    { id: 6, title:"here is some description about this therapy maybse some prices?", text: 'Card 6 Content' },
  ];

 const duplicated = [...cardData, ...cardData, ...cardData, ...cardData]

  return (
    <>
      <div className="container-services" id="services">
        <div className="flex items-center justify-center">
          <div className="pt-20">
            <h1 className="titleServices font-bold">MIS TERAPIAS</h1>
          </div>
        </div>


        <div className="carousel-container mt-20" ref={containerRef}>
      <div className="cards-wrapper">
        {duplicated.map((card) => (
          <div key={card.id} className="card">
            <div className="">
            <h2>{card.text}</h2>
            <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


      </div>
    </>
  );
}

export default Services;
