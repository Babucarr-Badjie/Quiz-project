import React from "react";
import Cards from "./Cards";
import "./Home.css";

function Home() {
  return (
    <Cards>
      <h1 className="header">Welcome to Football Quiz Competition</h1>
      <h3 className="header-text">Please enter your username</h3>
      <input type="text" className="user-input" placeholder="username" />
      <button className="start-btn">Get started</button>
      <p className="high-score">
        High Score: <span>0</span>
      </p>
    </Cards>
  );
}

export default Home;
