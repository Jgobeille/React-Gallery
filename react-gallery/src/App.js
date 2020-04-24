import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";

const App = (props) => {
  console.log(props);
  return (
    <Router>
      <div className="container">
        <SearchForm history={props} />
        <Nav history={props} />
      </div>
    </Router>
  );
};

export default App;
