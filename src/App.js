import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import DogRoutes from "./DogRoutes";

function App() {
  return (
    <div className="App">
      <h1>Good luck!</h1>
      <BrowserRouter>
        <Nav />
        <DogRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
