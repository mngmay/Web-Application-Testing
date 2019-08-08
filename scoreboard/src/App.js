import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Display } from "./components/Display";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Display />
      <Dashboard />
    </div>
  );
}

export default App;
