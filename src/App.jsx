import { useState } from "react";
import "./app.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const handlePrevious = () => {
    if (step <= 0) {
      setStep(messages.length - 1);
      return;
    }
    setStep((prev) => prev - 1);
  };
  const handleNext = () => {
    if (step >= messages.length - 1) {
      setStep(0);
      return;
    }
    setStep(step + 1);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 0 ? "active" : ""}>1</div>
        <div className={step >= 1 ? "active" : ""}>2</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
      </div>
      <p className="message">
        step {step+1} : {messages[step]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => handlePrevious()}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={() => handleNext(step)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
