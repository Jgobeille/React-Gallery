import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useState,
} from "react-router-dom";

import "./index.css";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import Images from "./Components/ImagesContainer";
import NotFound from "./Components/PageNotFound";
import config from "./config.js";

//App Components
export default class App extends Component {
  state = {
    images: [],
    Loading: true,
  };

  searchQuery = async (input) => {
    //sets current item to local Storage
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&page=1&format=json&nojsoncallback=1`;
    try {
      const res = axios.get(url);
      return await console.log(res);
    } catch (error) {
      <p> Please refresh the page and try and again</p>;
      throw error;
    }

    // axios
    //   .get(url)
    //   .then((res) => {
    //     this.setState({
    //       images: res.data.photos.photo,
    //       loading: false,
    //       input: input,
    //     });
    //   });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Images />} />
            <Route path="/vaporWave" render={() => <Images />} />
            <Route path="/80s" render={() => <Images />} />
            <Route path="/aesthetic" render={() => <Images />} />
            <Route exact path="/search/:id" render={() => <Images />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
