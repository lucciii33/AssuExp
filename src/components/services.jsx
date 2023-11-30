import { useState } from "react";

import "../styles/services.css";

function Services() {
  const cardData = [
    { title: "Card 1", content: "This is the content for Card 1" },
    { title: "Card 2", content: "This is the content for Card 2" },
    { title: "Card 3", content: "This is the content for Card 3" },
    { title: "Card 4", content: "This is the content for Card 4" },
    { title: "Card 5", content: "This is the content for Card 5" },
    // Add more cards as needed
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentCard(
      (prevCard) => (prevCard - 1 + cardData.length) % cardData.length
    );
  };

  const calculateOffset = (index) => {
    return `${20 * (index - currentCard)}%`;
  };
//   const carouselStyle = {
//     transform: `translateX(-${currentIndex * (100 / carouselData.length)}%)`,
//     transition: "transform 0.5s ease-in-out",
//   };

  return (
    <>
      <div className="container-services">
        <div className="flex items-center justify-center">
          <div className="pt-20">
            <h1 className="titleServices font-bold">MIS TERAPIAS</h1>
          </div>
        </div>
<div className="flex items-center justify-center mt-20">
<div className="carousel-container">
      <button onClick={prevCard} className="prew">Preview</button>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <div key={index} className="card"style={{ transform: `translateX(${calculateOffset(index)})` }}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            {/* Add any other card content here */}
          </div>
        ))}
      </div>
      <button onClick={nextCard} className="prew">Next</button>
    </div>

</div>
  
      </div>
    </>
  );
}

export default Services;
