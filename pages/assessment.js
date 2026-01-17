import { useState } from "react";
import questions from "../questions";

export default function Assessment() {
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);

  const q = questions[step];

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [q.id]: value });
    setStep(step + 1);
  };

  if (step >= questions.length) {
    return (
      <div style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>Assessment Complete</h1>
        <p>Click below to view your report.</p>
        <a href="/report" style={{ color: "blue" }}>View Report</a>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Assessment</h1>
      <p>
        <b>Question {step + 1}/{questions.length}</b>
      </p>
      <p>{q.text}</p>
      <button onClick={() => handleAnswer(1)}>A</button>
      <button onClick={() => handleAnswer(2)}>B</button>
      <button onClick={() => handleAnswer(3)}>C</button>
      <button onClick={() => handleAnswer(4)}>D</button>
    </div>
  );
}
