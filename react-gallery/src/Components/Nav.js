import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navigation for the application
 * @component Nav
 *
 */
const nav = ({ searchData }) => {
  //creat array of options
  //loop over the options
  //pass th results

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink
            to="/search/vaporWave"
            onClick={() => searchData("Vapor Wave")}
          >
            Vapor Wave
          </NavLink>
        </li>
        <li>
          <NavLink to="/search/80s" onClick={() => searchData("Eighties")}>
            80's
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search/chillHop"
            onClick={() => searchData("Chill Hop")}
          >
            Chill Hop
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
