import { useState } from "react";
import "./App.css";

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const getAverage = () => {
    debugger;
    const mainresult = addition() / 2;
    print(mainresult);
  };

  const addition = () => {
    debugger;
    const result = vize1 + vize2;
    return result;
  };

  const print = (result) => {
    debugger;
    console.log("avg:" + result);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={vize1}
          onChange={(e) => setVize1(Number(e.target.value))}
        />
      </div>

      <div>
        <input
          type="number"
          value={vize2}
          onChange={(e) => setVize2(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={getAverage} > find average</button>
      </div>
    </div>
  );
}

export default App;
