import { useState } from "react";
import "./App.css";
import FinalPage from "./Components/FinalPage";
import QuestionPage from "./Components/QuestionPage";
import HomePage from "./Components/HomePage";



function App() {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showQuestionPage, setShowQuestionPage] = useState(false);
  const [showFinalPage, setShowSFinalPage] = useState(false);

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [username, setUsername] = useState("");
  return (
    <>
      {showHomePage && (
        <HomePage
          setShowHomePage={setShowHomePage}
          setShowQuestionPage={setShowQuestionPage}
          topScore={topScore}
          username={username}
          setUsername={setUsername}
        />
      )}
      {showQuestionPage && (
        <QuestionPage
          score={score}
          setScore={setScore}
          setShowQuestionPage={setShowQuestionPage}
          setShowSFinalPage={setShowSFinalPage}
        />
      )}
      {showFinalPage && (
        <FinalPage
          score={score}
          setScore={setScore}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowHomePage={setShowHomePage}
          setShowSFinalPage={setShowSFinalPage}
          username={username}
          setUsername={setUsername}
        />
      )}
    </>
  );
}

export default App;
