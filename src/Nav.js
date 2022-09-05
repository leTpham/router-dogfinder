import React from "react";
import { Link } from "react-router-dom";

function Nav({dogs}) {
  return (
    <ul>
      <li><Link to="/dogs">Dog List</Link></li>
      {dogs.map(dog => (

        <li key={dog.name}>
          
          <Link to={`/dogs/${dog.src}`}> Show me {dog.name}!</Link>
        </li>
      ))}

    </ul>
  );
}
// end

export default Nav;