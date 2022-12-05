import React from "react";
import "./Card.css";

function Cards(props) {
  return <div className="card">{props.children}</div>;
}

export default Cards;
