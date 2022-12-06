import React from "react";
import { useState } from "react";
import { questions } from "../questions";
import Questions from "./Question";

const QuestionPage = ({
  score,
  setScore,
  setShowQuestionPage,
  setShowFinalPage,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  return (
    <>
      <Questions
        questionIndex={questionIndex}
        questions={questions}
        setQuestionIndex={setQuestionIndex}
        setShowQuestionPage={setShowQuestionPage}
        setShowFinalPage={setShowFinalPage}
        score={score}
        setScore={setScore}
      />
    </>
  );
};

export default QuestionPage;
