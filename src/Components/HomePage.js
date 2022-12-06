import React from "react";
import Cards from "./Cards";
import "./HomePage.css";

const HomePage = ({
  setShowHomePage,
  setSowQuestionPage,
  topScore,
  username,
  setUsername,
}) => {
  const startQiuz = () => {
    if (username.trim().lenght > 0) {
      setShowHomePage(false);
      setSowQuestionPage(true);
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
      <button className="start-btn" onClick={startQiuz}>
        Get started
      </button>
      <p className="high-score">
        High Score: <span>{topScore}</span>
      </p>
    </Cards>
  );
};

export default HomePage;
