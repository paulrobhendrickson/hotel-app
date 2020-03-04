import React from "react";
import "./Greeting.css";

function Greeting({ props, greeting }) {
  return (
    <div className="Greeting">
      <div className="container mt-5" contenteditable="true">
          {"Good"}
      </div>
    </div>
  );
}

export default Greeting;
