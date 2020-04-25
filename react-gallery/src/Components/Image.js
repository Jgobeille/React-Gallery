import React from "react";
import PropTypes from "prop-types";

/**
 * creates each individual image
 *
 * @component Image
 *
 */
const Image = ({ url }) => {
  return (
    <li>
      <img src={url} alt=" " />
    </li>
  );
};

Image.propTypes = {
  url: PropTypes.string,
};

export default Image;
