import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";

import "./index.css";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import Images from "./Components/ImagesContainer";
import NotFound from "./Components/PageNotFound";
import axios from "axios";
import apiKey from "./config.js";

//App Components
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      Loading: true,
    };
  }

  searchQuery = (input) => {
    console.log(input);
    //sets current item to local Storage
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&page=1&format=json&nojsoncallback=1`;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          images: res.data.photos.photo,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("error fetching data", error);
      });
  };

  render() {
    console.log(this.state.images);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.searchQuery} />
          <Nav searchData={this.searchQuery} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to={"/vaporWave"} />}
            />
            <Route
              path="/vaporWave"
              render={() => <Images images={this.state.images} />}
            />
            <Route
              path="/80s"
              render={() => <Images images={this.state.images} />}
            />
            <Route
              path="/chillHop"
              render={() => <Images images={this.state.images} />}
            />
            <Route
              path="/search/:id"
              render={() => <Images images={this.state.images} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
