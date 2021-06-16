import React from "react";

import "./spinner.styles.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div className="spinner__modal"></div>
    </div>
  );
};

export default Spinner;
