import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //Javascript codes
  let a = 21;
  const firstName = "Saadet";

  let exam1 = 60;
  let exam2 = 80;

  // let result = true;

  let names = ["Enes", "Ayşenur", "Kübra", "Saadet"];

  return (
    //Html codes

    <div>
      {/* <p>Name : {firstName} </p>
      <p>Age : {a} </p>
      <p>Average Grade : {(exam1 + exam2) / 2} </p> */}
      {/* {result ? <p>Succesful</p> : <p>unsuccessful</p>} */}
      {/* {
        (exam1 + exam2)/2 >=50 ? <p>You got enough grades!</p> : <p>You didn't get enough grades..</p>
      } */}

      {names.map((name, index) => (
        <div
          style={{
            backgroundColor: "pink",
            border: "1px solid gray",
          }}
          key={index}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default App;
