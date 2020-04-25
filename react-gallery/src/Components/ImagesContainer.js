import React from "react";
import Image from "./Image";
import NoResults from "./NoResults";
import PropTypes from "prop-types";
import Loader from "./Loader";

/**
 * Takes query, adds to string, creates URL
 * and creates image container
 *
 * @component Imagescontainer
 *
 */
const ImagesContainer = ({ images, name, loading }) => {
  const results = images;
  let imagesVar;

  //maps over the data and creates a gif component each time through the array

  imagesVar = results.map((image) => (
    //pushs url data to image container
    <Image
      url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
      key={image.id}
    />
  ));

  if (loading) {
    return <Loader />;
  }

  if (results.length <= 0) {
    return <NoResults />;
  } else {
    return (
      <div className="photo-container">
        <h2 className="future glow">Results for {name}</h2>
        <ul>{imagesVar}</ul>
      </div>
    );
  }
};

ImagesContainer.propTypes = {
  images: PropTypes.array,
  name: PropTypes.string,
};

export default ImagesContainer;
