import React, { useState } from "react";

import InitialState from "./Utilities/InitialState";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Greeting from "./Components/Greeting/Greeting";
import templatesArrayFromFile from "./Utilities/TemplatesArray";

function App() {
  const [greetingVariables, setGreetingVariables] = useState(InitialState);
  const [templatesArray, setTemplatesArray] = useState(templatesArrayFromFile);
  const [template, setTemplate] = useState(templatesArray[0]);

  const today = new Date();
  const timeOfDay = today.getHours();

  if (timeOfDay < 12) {
    greetingVariables.time = "Morning";
  } else if (timeOfDay < 17) {
    greetingVariables.time = "Afternoon";
  } else {
    greetingVariables.time = "Evening";
  }

  return (
    <div className="App">
      <Sidebar
        templatesArray={templatesArray}
        setTemplatesArray={setTemplatesArray}
        setTemplate={setTemplate}
        greetingVariables={greetingVariables}
        setGreetingVariables={setGreetingVariables}
      />
      <Greeting template={template} greetingVariables={greetingVariables} />
    </div>
  );
}

export default App;
