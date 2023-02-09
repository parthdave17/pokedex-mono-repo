import React from "react";
import "./Card.css";

interface cardProps {
  name: string;
  height?: number;
  weight?: number;
  location?: string;
}

const Card = (props: cardProps) => {
  return (
    <div className="grid">
      {Object.keys(props).map((key) =>
        props[key] && key === "name" ? (
          <h2 className="uppercase" key={key}>
            <b>{props.name}</b>
          </h2>
        ) : (
          <div key={key}>
            <p className="uppercase">{key}: &nbsp;</p>
            <p>{props[key]}</p>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
