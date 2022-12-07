import React from "react";
import Cards from "./Cards";
import "./HomePage.css";

const HomePage = ({
  setShowHomePage,
  setShowQuestionPage,
  topScore,
  username,
  setUsername,
}) => {
  const startQuiz = () => {
    if (username.trim().length > 0) {
      setShowHomePage(false);
      setShowQuestionPage(true);
    }
  };

  return (
    <Cards>
      <h1 className="header">Welcome to Football Quiz Competition</h1>
      <h3 className="header-text">Please enter your username</h3>
      <input
        type="text"
        className="user-input"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="start-btn" onClick={startQuiz}>
        Get started
      </button>
      <p className="high-score">
        Top Score: <span>{topScore}</span>
      </p>
    </Cards>
  );
};

export default HomePage;
