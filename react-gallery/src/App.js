import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./index.css";
import SearchForm from "./Components/SearchForm";
import Nav from "./Components/Nav";
import ImageContainer from "./Components/ImagesContainer";
import NotFound from "./Components/PageNotFound";
import axios from "axios";
import apiKey from "./config.js";
import Loader from "./Components/Loader";

//App Components
class App extends Component {
  state = {
    images: [],
    Loading: true,
    input: "",
  };

  componentDidMount() {
    let pathName = this.props.history.location.pathname;
    if (pathName.includes("/search")) {
      pathName = pathName.substring(8);
    } else {
      pathName = pathName.substring(1);
    }

    this.searchQuery(pathName);
  }

  componentDidUpdate(prevProps) {
    let pathName = prevProps.history.location.pathname;
    if (pathName.includes("/search")) {
      pathName = pathName.substring(8);
    } else {
      pathName = pathName.substring(1);
    }

    if (pathName !== this.state.input) {
      this.searchQuery(pathName);
    }
  }

  searchQuery = (input) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&page=1&format=json&nojsoncallback=1`;

    axios
      .get(url)
      .then((res) => {
        this.setState({
          images: res.data.photos.photo,
          loading: false,
          input: input,
        });
      })
      .catch((error) => {
        console.log("error fetching data", error);
      });
  };

  render() {
    return (
      <div className="container">
        <SearchForm onSearch={this.searchQuery} />
        <Nav />
        {this.state.loading ? <Loader /> : null}
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/vaporWave"} />} />
          <Route
            exact
            path="/vaporWave"
            render={(props) => (
              <ImageContainer
                {...props}
                name={this.state.input}
                images={this.state.images}
              />
            )}
          />
          <Route
            exact
            path="/80s"
            render={(props) => (
              <ImageContainer
                {...props}
                name={this.state.input}
                images={this.state.images}
              />
            )}
          />
          <Route
            exact
            path="/chillHop"
            render={(props) => (
              <ImageContainer
                {...props}
                name={this.state.input}
                images={this.state.images}
              />
            )}
          />
          <Route
            exact
            path="/search/:id"
            render={(props) => (
              <ImageContainer
                {...props}
                loading={this.state.loading}
                images={this.state.images}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
