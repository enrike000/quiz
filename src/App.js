import { useState } from "react";
import "./App.css";
import Quiz from "./quizapp";

function App() {
  // const questions = [
  //   {
  //     qtext: "Where is Georgia located?",
  //     answers: [
  //       { atext: "asia", correct: false },
  //       { atext: "europe", correct: true },
  //       { atext: "africa", correct: false },
  //       { atext: "south america", correct: false },
  //     ],
  //   },
  //   {
  //     qtext: "Where does the zebra live?",
  //     answers: [
  //       { atext: "in the moon", correct: false },
  //       { atext: "in the sun", correct: false },
  //       { atext: "in the star", correct: false },
  //       { atext: "in the bag", correct: true },
  //     ],
  //   },
  //   {
  //     qtext: "Which is the fastest ",
  //     answers: [
  //       { atext: "BMW", correct: false },
  //       { atext: "MERCEDES", correct: false },
  //       { atext: "HYUNDAI GENESIS COUPE", correct: true },
  //       { atext: "PEUGEOT", correct: false },
  //     ],
  //   },
  //   {
  //     qtext: "Which is the best game",
  //     answers: [
  //       { atext: "LOL", correct: false },
  //       { atext: "GTA", correct: false },
  //       { atext: "D O T A", correct: true },
  //       { atext: "fifa", correct: false },
  //     ],
  //   },
  // ];
  // const [result, setResult] = useState(false);
  // const [nowQuestion, setNowQuestion] = useState(0);
  // const [score, setScore] = useState(0);

  // const nextQuestion = (correct) => {
  //   if (correct === true) {
  //     setScore(score + 1);
  //   }

  //   const next = nowQuestion + 1;
  //   if (next < questions.length) {
  //     setNowQuestion(next);
  //   } else {
  //     setResult(true);
  //   }
  // };

  return (
    <div className="App">
      <Quiz />
      {/* {result ? (
        <p>
          your score is {score} of {questions.length}
        </p>
      ) : (
        <>
          <p>question</p>
          <div>{questions[nowQuestion].qtext}</div>
          <hr />
          <div>
            {questions[nowQuestion].answers.map((e) => (
              <button onClick={() => nextQuestion(e.correct)}>{e.atext}</button>
            ))}
          </div>
        </>
      )} */}
    </div>
  );
}

export default App;
