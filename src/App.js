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

  console.log(template);

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
