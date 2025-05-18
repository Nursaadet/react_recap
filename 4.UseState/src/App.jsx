import { useState } from "react";

function App() {
  //When you change the value of a state using the set method, the component is re-rendered.

const [count, setCount] = useState(0)

const increase=()=> {
setCount(count + 1)
}

const reduce=()=>{
  setCount(count - 1)
}

console.log("component has been rendered")

  return (
    <div>
    <div>{count}</div>
    <div> <button onClick = {increase} >Increase</button>
    </div>
    <div> <button onClick = {reduce} >reduce</button>
    </div>
    </div>
  );
}

export default App;
