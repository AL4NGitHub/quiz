import { useState } from "react";
import "./quiz.css";
import { Question } from "./Question.jsx";

export function Quiz() {
  const one = ["Warsaw", "Berlin", "Bejing", "London"];
  const two = ["Washington D.C", "Las Vegas", "Riyadh", "Tokio"];
  const three = ["Berlin", "Bern", "Paris", "Toronto"];
  const four = ["Ankara", "Rome", "Teheran", "Nairobi"];
  const correct = [0, 0, 0, 3];

  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(0);
  const questionTable = [
    "What is capital of Poland",
    "What is capital of USA",
    "What is capital of Germany",
    "What is capital of Kenya",
  ];

  const answers = [one, two, three, four];

  return (
    <>
      <div className="box">
        <div className="left">
          <div className="questions-display">
            <span>
              Question {questions}/{questionTable.length - 1}
            </span>
          </div>
          <div className="question-display">
            <span>{questionTable[questions]}?</span>
          </div>
          <div className="score-display">{score}</div>
        </div>
        <div className="right">
          <Question
            answers={answers}
            questions={questions}
            index={0}
            correct={correct[questions]}
            setScore={setScore}
            score={score}
            setQuestions={setQuestions}
            questionTable={questionTable}
          ></Question>
          <Question
            answers={answers}
            questions={questions}
            index={1}
            correct={correct[questions]}
            setScore={setScore}
            score={score}
            setQuestions={setQuestions}
            questionTable={questionTable}
          ></Question>
          <Question
            answers={answers}
            questions={questions}
            index={2}
            correct={correct[questions]}
            setScore={setScore}
            score={score}
            setQuestions={setQuestions}
            questionTable={questionTable}
          ></Question>
          <Question
            answers={answers}
            questions={questions}
            index={3}
            correct={correct[questions]}
            setScore={setScore}
            score={score}
            setQuestions={setQuestions}
            questionTable={questionTable}
          ></Question>
        </div>
      </div>
    </>
  );
}
