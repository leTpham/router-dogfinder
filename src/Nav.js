import React from "react";
import { Link, NavLink } from "react-router-dom";


function Nav({dogs}) {
  return (
    <ul>
      <li><Link to="/dogs">Dog List</Link></li>
      {dogs.map(dog => (

        <li key={dog.name}>

          <NavLink to={`/dogs/${dog.src}`}> Show me {dog.name}!</NavLink>
        </li>
      ))}

    </ul>
  );
}
// end

export default Nav;