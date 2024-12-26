import React from "react";
import "./Cards.css";

interface CardProps {
  id: string;
  title: string;
  paragraph: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, paragraph, imageUrl, id }) => {
  return (
    <div className="card" id={id}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-paragraph">{paragraph}</p>
      </div>
      <div className="img-content">
        {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      </div>
    </div>
  );
};

export default Card;
