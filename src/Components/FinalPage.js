import React from "react";
import Cards from "./Cards";
import "./FinalPage.css";


const FinalPage = ({
  score,
  setShowFinalPage,
  setShowHomePage,
  topScore,
  setScore,
  username,
  setUsername,
}) => {

  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score)
    }
    setShowFinalPage(false)
    setShowHomePage(true)
    setScore(0)
    setUsername("")

  }
  return (
    <>
      <Cards>
        <h1 className="heading">
          You have reached the end of the quiz, {username}!
        </h1>
        <h3 className="primary-text">Your final score is: </h3>
        <h3 className="final-score">{score}</h3>
        <button className="try-again-btn" onClick={handleClick}>Try Again</button>
      </Cards>
    </>
  );
};

export default FinalPage;
