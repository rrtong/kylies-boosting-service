import React, { useState } from "react";
import { render } from "react-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Reviews from "./components/Reviews";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Landing />
      <About />
      <Reviews />
      {/*
      <Reviews />
      <Register />
      <Sponsors /> 
      */}
    </div>
  );
}

render(<App />, document.getElementById("root"));
