import './App.css';
import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import DogRoutes from "./DogRoutes";

function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs() {
    const resp = await axios.get("http://localhost:5001/dogs");
    const dogResp = resp.data;
    setDogs(dogResp);
    setIsLoading(false);
  }

  if (isLoading) {
    getDogs();
    return (
      <p> IS LOADING...</p>
    );
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Nav dogs={dogs}/>
        <DogRoutes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}
//TODO: rename DogRoutes as RoutesList
//Make AJAX request here cause both Nav

export default App;
