import React from "react";
import { questions } from "../questions";
import Cards from "./Cards";
import "./Question.css"

const Question = () => {
  return (
    <>
      <Cards>
        <h1 className="question">Example Question</h1>
        <div className="answers">
          <div className="answer">
            <p>Answer</p>
          </div>
          <div className="answer">
            <p>Answer</p>
          </div>
          <div className="answer">
            <p>Answer</p>
          </div>
          <div className="answer">
            <p>Answer</p>
          </div>
        </div>
        <p className="score">
          Score: <span>0</span>
        </p>
        <p className="question-number">
          Question
          <span>1</span>/10
        </p>
      </Cards>
    </>
  );
};

export default Question;
