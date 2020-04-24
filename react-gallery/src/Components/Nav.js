import React from "react";
import { NavLink } from "react-router-dom";

const nav = (props) => {
  console.log(props);
  //creat array of options
  //loop over the options
  //pass th results

  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cats" onClick={console.log("hello")}>
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="/dogs" onClick={console.log("hello")}>
            Dogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/computers" onClick={console.log("hello")}>
            Computers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
