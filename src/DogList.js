import React, { useState } from "react";
import axios from "axios";

async function DogList() {
  const [dogs, setDogs] = useState(null);

  const resp = await axios.get("localhost:5001/dogs");

  const dogResp = resp.data[0].name;

  console.log("DOG RESP", dogResp);

debugger
  setDogs(dogResp);

return (
  <div>
    {dogs}
  </div>
)

}

export default DogList;