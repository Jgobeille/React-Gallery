import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navigation for the application
 * @component Nav
 *
 */
const nav = () => {
  //creat array of options
  //loop over the options
  //pass th results

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/vaporWave">Vapor Wave</NavLink>
        </li>
        <li>
          <NavLink to="/80s">80's</NavLink>
        </li>
        <li>
          <NavLink to="/chillHop">Chill Hop</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
