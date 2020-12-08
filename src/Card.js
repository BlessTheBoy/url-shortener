import React from "react";
import "./css/Card.css";

function Card({ title, text, image }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default Card;
