import React from "react";

/**
 * No Results component
 *
 * @component NoResults
 *
 */
const noResults = () => {
  return (
    <div className="not-found">
      <h2 className="future glow">No Results Found</h2>
      <h3>You search did not return any results. Please try again.</h3>
    </div>
  );
};

export default noResults;
