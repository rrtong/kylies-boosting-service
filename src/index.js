import React, { useState } from "react";
import { render } from "react-dom";
import Landing from "./components/Landing";
import Mission from "./components/Mission";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Landing />
      <Mission />
      <About />
      <Reviews />
      <Pricing />
      {/*
      <Register />
      <Sponsors /> 
      */}
    </div>
  );
}

render(<App />, document.getElementById("root"));
