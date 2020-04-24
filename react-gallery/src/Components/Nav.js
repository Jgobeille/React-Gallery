import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navigation for the application
 * @component Nav
 *
 */
const nav = (props) => {
  console.log(props);
  //creat array of options
  //loop over the options
  //pass th results

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/vaporWave" onClick={console.log("hello")}>
            Vapor Wave
          </NavLink>
        </li>
        <li>
          <NavLink to="/80s" onClick={console.log("hello")}>
            80's
          </NavLink>
        </li>
        <li>
          <NavLink to="/retro" onClick={console.log("hello")}>
            Retro
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
