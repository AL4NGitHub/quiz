import "./question.css";

export function Question({
  answers,
  questions,
  index,
  correct,
  setScore,
  score,
  setQuestions,
  questionTable,
}) {
  const checkAnswer = () => {
    if (Number(index) == Number(correct)) {
      {
        if (questions < questionTable.length - 1) {
          setQuestions(questions + 1);
          setScore(score + 100);
        } else {
          {
            alert(`You won congratulations! Here is your score: ${score}`);
            setQuestions(0);
            setScore(0);
          }
        }
      }
    } else if (Number(index) !== Number(correct)) {
      const box = document.querySelector(".box");

      box.classList.add("wrong");
      setTimeout(() => {
        box.classList.remove("wrong");
      }, 1000);
      alert("Wrong answer, try again");
      setQuestions(0);
      setScore(0);
    }
  };

  return (
    <>
      <div className="question" onClick={checkAnswer}>
        {answers[questions][index]}
      </div>
    </>
  );
}
