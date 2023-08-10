import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  const stepUp = () => {
    setStep((step) => ++step);
  };
  const stepDown = () => {
    setStep((step) => --step);
  };

  const counterStepMinus = () => {
    setCount((count) => count - step);
  };
  const counterStepPlus = () => {
    setCount((count) => count + step);
  };

  const after = count > 0 ? `${count} days from today is ` : null;
  const before = count < 0 ? `${Math.abs(count)} days was ago from ` : null;

  const showDays = () => {
    if (count > 0) return after;
    if (count < 0) return before;
    if (count === 0) return "Today is ";
  };
  return (
    <div className="counter_container">
      <div className="counter_step">
        <button onClick={stepDown}>-</button>
        <span>Step: {step}</span>
        <button onClick={stepUp}>+</button>
      </div>
      <div className="counter_count">
        <button onClick={counterStepMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={counterStepPlus}>+</button>
      </div>
      <p>
        {showDays()}
        <span>{date.toLocaleString().slice(0, 10)}</span>
      </p>
    </div>
  );
};

export default Counter;
