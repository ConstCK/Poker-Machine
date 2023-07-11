import React from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import InfoPanel from "./components/InfoPanel.jsx";
import ControlPanel from "./components/ControlPanel.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />
      <InfoPanel />
      <ControlPanel />
    </React.Fragment>
  );
}

export default App;
