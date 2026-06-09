import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
    } else if (value === "+/-") {
      if (input !== "0") {
        setInput((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
      }
    } else if (value === "%") {
      setInput((Number(input) / 100).toString());
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const buttons = [
    "AC", "+/-", "%",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
    ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>

      <button onClick={() => handleClick("AC")}>AC</button>
      <button onClick={() => handleClick("+/-")}>+/-</button>
      <button onClick={() => handleClick("%")}>%</button>
      <button className="operator" onClick={() => handleClick("/")}>
        ÷
      </button>

      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button className="operator" onClick={() => handleClick("*")}>
        ×
      </button>

      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button className="operator" onClick={() => handleClick("-")}>
        −
      </button>

      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button className="operator" onClick={() => handleClick("+")}>
        +
      </button>

      <button className="zero" onClick={() => handleClick("0")}>
        0
      </button>
      <button onClick={() => handleClick(".")}>.</button>
      <button className="operator" onClick={calculate}>
        =
      </button>
    </div>
  );
}
