import { useState } from "react";
import "../styles/podcast.css";
import Card from "./card";
import image from "../assets/programaTest.webp"
import image2 from "../assets/test2.webp"
import image3 from "../assets/test3.webp"
import image4 from "../assets/test4.webp"

function Podcats() {
  
  return (
    <>
    <div className="flex flex-col items-center pt-10 bodyne">
      <div className="flex flex-col items-center gap-4 md:flex-row">
       <Card  
          image={image}
          backgroundColor="#FF0067"
          textColor="#ffffff"
          spanText="LUGAR"
          title="COMO MANTENER TU CASA"
          description="Description 1"/>
       <Card 
        image={image2}
        backgroundColor="#00B706"
        textColor="#ffffff"
        spanText="TRABAJO"
        title="CAMINO A EMPRENDER"
        description="Description 1"
        />
       <Card
       image={image3}
          backgroundColor="#009CA6"
          textColor="#ffffff"
          spanText="TRABAJO"
          title="QUE TENER EN TU OFICINA"
          description="Description 1"
          />
       <Card
        image={image4}
        backgroundColor="#FF3400"
        textColor="#ffffff"
        spanText="VIDA"
        title="CARRO LIMPIO ENERGIA SIN CHOQUES"
        description="Description 1"
       />
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row mt-10">
      <Card  
          image={image}
          backgroundColor="#FF0067"
          textColor="#ffffff"
          spanText="LUGAR"
          title="COMO MANTENER TU CASA"
          description="Description 1"/>
       <Card 
        image={image2}
        backgroundColor="#00B706"
        textColor="#ffffff"
        spanText="TRABAJO"
        title="CAMINO A EMPRENDER"
        description="Description 1"
        />
       <Card
       image={image3}
          backgroundColor="#009CA6"
          textColor="#ffffff"
          spanText="TRABAJO"
          title="QUE TENER EN TU OFICINA"
          description="Description 1"
          />
       <Card
        image={image4}
        backgroundColor="#FF3400"
        textColor="#ffffff"
        spanText="VIDA"
        title="CARRO LIMPIO ENERGIA SIN CHOQUES"
        description="Description 1"
       />
      </div>
    </div>
    </>
  );
}

export default Podcats;
