import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./index.css";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import Images from "./Components/ImagesContainer";
import config from "./config.js";

//App Components
const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Route exact path="/" render={() => <Images />} />
        <Route exact path="/vaporWave" render={() => <Images />} />
        <Route exact path="/80s" render={() => <Images />} />
        <Route exact path="/aesthetic" render={() => <Images />} />
        <Route exact path="/search/:id" render={() => <Images />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
