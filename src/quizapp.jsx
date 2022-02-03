import { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      qtext: "Where is Georgia located?",
      answers: [
        { atext: "asia", correct: false },
        { atext: "europe", correct: true },
        { atext: "africa", correct: false },
        { atext: "south america", correct: false },
      ],
    },
    {
      qtext: "Where does the zebra live?",
      answers: [
        { atext: "in the moon", correct: false },
        { atext: "in the sun", correct: false },
        { atext: "in the star", correct: false },
        { atext: "in the bag", correct: true },
      ],
    },
    {
      qtext: "Which is the fastest ",
      answers: [
        { atext: "BMW", correct: false },
        { atext: "MERCEDES", correct: false },
        { atext: "HYUNDAI GENESIS COUPE", correct: true },
        { atext: "PEUGEOT", correct: false },
      ],
    },
    {
      qtext: "Which is the best game",
      answers: [
        { atext: "LOL", correct: false },
        { atext: "GTA", correct: false },
        { atext: "D O T A", correct: true },
        { atext: "fifa", correct: false },
      ],
    },
  ];
  const [nowquest, setNowquest] = useState(0);
  const [end, setEnd] = useState(false);
  const [score, setScore] = useState(0);
  const click = (correct) => {
    if (correct === true) {
      setScore(score + 1);
    }
    const nextQuestion = nowquest + 1;
    if (nextQuestion < questions.length) {
      setNowquest(nextQuestion);
    } else {
      setEnd(true);
    }
  };
  return (
    <>
      {end ? (
        <p>{score}</p>
      ) : (
        <>
          <div>{questions[nowquest].qtext}</div>
          <div>
            {questions[nowquest].answers.map((e) => (
              <button onClick={() => click(e.correct)}>{e.atext}</button>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default Quiz;
