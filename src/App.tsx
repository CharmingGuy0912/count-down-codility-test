import * as React from 'react';
import './style.css';

let interval: any;

export default function App() {
  const [seconds, setSeconds] = React.useState<number>(0);
  const [min, setMin] = React.useState<number>(0);
  const [sec, setSec] = React.useState<number>(0);
  // const [minus, setMinus] = React.useState<number>(0);

  // const ref = React.useRef(null);

  // ref.current = minus;

  const handleStart = () => {
    if (interval) {
      clearInterval(interval);
    }
    setSeconds(min * 60 + sec);
    // setMinus(1);
    interval = setInterval(() => handleStartCount(), 1000);
  };

  const handleStartCount = () => {
    setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleStatusChange = () => {
    // setMinus(prev => 1 - prev);
    if (interval) {
      clearInterval(interval);
      interval = null;
    } else {
      interval = setInterval(() => handleStartCount(), 1000);
    }
  };

  return (
    <div className="App">
      <input type="number" onChange={(e) => setMin(Number(e.target.value))} />
      Minutes
      <input type="number" onChange={(e) => setSec(Number(e.target.value))} />
      Seconds
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStatusChange}>Pause/Resume</button>
      <h1>{`${Math.floor(seconds / 60)}:${seconds % 60}`}</h1>
    </div>
  );
}
