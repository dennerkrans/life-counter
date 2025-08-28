import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Session from "./Session";
import ThemeSwitch from "./components/ThemeSwitch";

function App() {
  return (
    <>
      <ThemeSwitch />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/session/:sessionId" element={<Session />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
