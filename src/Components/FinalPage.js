import React from "react";
import Cards from "./Cards";
import "./FinalPage.css"

const FinalPage = () => {
  return (
    <>
      <Cards>
        <h1 className="heading">You have reached the end of the quiz</h1>
        <h3 className="primary-text">Your final score is: </h3>
        <h3 className="final-score">100</h3>
        <button className="try-again-btn">Try Again</button>
      </Cards>
    </>
  );
};

export default FinalPage;
