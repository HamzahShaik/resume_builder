import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditResume from "./components/EditResume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EditResume />} />
      </Routes>
    </Router>
  );
}

export default App;
