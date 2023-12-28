import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/podcast.css";
import image from "../assets/programaTest.webp"

function Card({ image, backgroundColor, textColor, spanText, title, description }) {
  
  return (
    <>
      <div className="card-container">
          <div>
            <img src={image} className="imageaCard"/>
          </div>
          <div className="flex items-center justify-center flex-col">
          <p className="text-center">{spanText}</p>
        <h3 className="text-center">{title}</h3>
        <p className="text-center">{description}</p>
          </div>
          <div className="lastheader" style={{backgroundColor: backgroundColor}}>
            
          </div>
       
      </div>
    </>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  spanText: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
