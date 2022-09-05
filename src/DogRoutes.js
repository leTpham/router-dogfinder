import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import DogList from "./DogList";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function DogRoutes({dogs}) {
  return (
    <Routes>
      <Route element={<DogList dogs={dogs} />} path="/dogs" />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default DogRoutes;

// <Route element={<DogDetails />} path="/dogs/:name" />