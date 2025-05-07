import { useState } from "react";

import "./App.css";
import Random from "./Login";
import { users } from "./Login";

function App() {
  console.log(users);

  return (
    <div>
      <Random />
    </div>
  );
}

export default App;
