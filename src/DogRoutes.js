import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import DogList from "./DogList";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function DogRoutes({ dogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default DogRoutes;
