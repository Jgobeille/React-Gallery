import React from "react";
import Image from "./Image";
import NoResults from "./NoResults";
import Loader from "./Loader";
import { withRouter } from "react-router-dom";

const Images = (props) => {
  console.log(props);
  const results = props.images;
  let imagesVar;

  //maps over the data and creates a gif component each time through the array
  if (results.length <= 0) {
    imagesVar = <NoResults />;
  } else {
    imagesVar = results.map((image) => (
      //formats url
      <Image
        url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
        key={image.id}
      />
    ));
  }

  // if loading state is false then show loading paragraph tag
  if (props.loading) {
    return <Loader />;
  }

  if (results.length <= 0) {
    return (
      <div className="photo-container">
        <ul>{imagesVar}</ul>
      </div>
    );
  } else {
    return (
      <div className="photo-container">
        <h2 className="future glow">Results</h2>
        <ul>{imagesVar}</ul>
      </div>
    );
  }
};

export default Images;
