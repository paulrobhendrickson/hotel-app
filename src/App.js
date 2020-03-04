import React, { useState } from "react";

import InitialState from "./Utilities/InitialState";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Greeting from "./Components/Greeting/Greeting";

function App() {
  const [greeting, setGreeting] = useState(InitialState);

  return (
    <div className="App">
      <Sidebar greeting={greeting} setGreeting={setGreeting} />
      <Greeting greeting={greeting} />
    </div>
  );
}

export default App;
