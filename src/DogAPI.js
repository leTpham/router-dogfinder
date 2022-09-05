import React, { useState } from "react";
import axios from "axios";
import DogList from "./DogList";

//TODO: Move
function DogAPI() {
  const [dogs, setDogs] = useState("DOOOGSS");

  async function getDogs() {
    const resp = await axios.get("http://localhost:5001/dogs");
    const dogResp = resp.data;

    setDogs(dogResp);

  }

  // console.log("DOG RESP", dogResp);

  return (
    <div>
      <DogList getDogs={getDogs} dogs={dogs} />
    </div>

  );
}

export default DogAPI;