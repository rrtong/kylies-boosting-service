import React, { useState } from "react";
import { render } from "react-dom";
import Landing from "./components/Landing";
import Mission from "./components/Mission";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Register from "./components/Register";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [selectedTier, setSelectedTier] = useState("basic");

  return (
    <div className="app">
      <Landing />
      <Mission />
      <About />
      <Reviews />
      <Pricing
        showRegister={showRegister}
        setShowRegister={setShowRegister}
        setSelectedTier={setSelectedTier}
      />
      {showRegister && (
        <Register
          selectedTier={selectedTier}
          setShowRegister={setShowRegister}
        />
      )}
      <Footer />
    </div>
  );
}

render(<App />, document.getElementById("root"));
