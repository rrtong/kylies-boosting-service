import React, { useState } from "react";
import { render } from "react-dom";
import Landing from "./components/Landing";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Landing />
      {/* <Mission />
      <About />
      <Reviews />
      <Register />
      <Sponsors /> */}
    </div>
  );
}

render(<App />, document.getElementById("root"));
