// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listings from "./pages/Listings";
import Details from "./pages/Details";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route exact path="/" element={<Listings />} />
      </Routes>
    </Router>
  );
}

export default App;
