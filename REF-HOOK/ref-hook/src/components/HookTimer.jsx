import React, { useState, useEffect, useRef } from "react";

function HookTimer() {

  const timerRef = useRef(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Hook Timer - {timer}</h1>
      <button onClick={() => clearInterval(timerRef.current)}>Stop</button>
    </div>
  );
}
export default HookTimer;
