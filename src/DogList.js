import React from "react";


function DogList({ dogs }) {
  console.log(dogs);
  //TODO: destructure dog 
  return (
    <div>
      {dogs.map(dog => (
        <div key={dog.name}>
          {dog.name}
          <img src={`/${dog.src}.jpg`} alt={`${dog.name}`} />
        </div>
      ))}
    </div>
  );
}

export default DogList;