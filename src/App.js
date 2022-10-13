import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  // const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clear = () => {
    if (calc === "") {
      return;
    }
    setCalc("");
  };
  const negateValue = () => {
    if (calc && calc[0] !== "-") {
      setCalc("-" + calc);
    } else if (calc && calc[0] === "-") {
      setCalc(calc.replace("-", ""));
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{calc || "0"}</div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={negateValue}>+/-</button>
          <button onClick={clear}>CLR</button>
          <button onClick={deleteLast}>&larr;</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button className="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
