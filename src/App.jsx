import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [timeron, setTimeron] = useState(false);

  useEffect(() => {
    let interval;
    let prevTime = time;
    if (timeron) {
      interval = setInterval(() => {
        setTime((prevTime = prevTime + 10));
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeron]);

  return (
    <div>
      <div className="stopwatch-container">
        <h2>STOPWATCH</h2>
        <div className="time">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>

          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>

          <span>{("0" + ((time / 1000) % 100)).slice(-2)}</span>
        </div>

        {!timeron && time === 0 && (
          <button className="start" onClick={() => setTimeron(true)}>
            Start
          </button>
        )}
        {timeron && (
          <button className="stop" onClick={() => setTimeron(false)}>
            Stop
          </button>
        )}
        {!timeron && time > 0 && (
          <button className="resume" onClick={() => setTimeron(true)}>
            Resume
          </button>
        )}
        {!timeron && time > 0 && (
          <button className="reset" onClick={() => setTime(0)}>
            Reset
          </button>
        )}
        <div></div>
      </div>
    </div>
  );
}

export default App;
