import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  useEffect(() => {
    console.log("the code always works");
  });

  useEffect(() => {
    console.log("It works when the component is first rendered.");
  }, []);

  useEffect(() => {
    console.log(
      "It works when the component is first rendered and when the firtName state value changes"
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "It works when the component is first rendered and when the lastName state value changes"
    );
  }, [lastName]);

  useEffect(() => {
    console.log(
      "It works when the component is first rendered and when the firstName or lastName state value changes"
    );
  }, [firstName,lastName]);

  return(
    <div>
    <div>
      <button onClick={() => setFirstName("Saadet")}> 
        
        Change Name
      </button>
    </div>

    <div>
      <button onClick={() => setlastName("ÖZDEMİR")}> 
        
        Change lastName
      </button>
    </div>

    </div>
    )
}

export default App;
