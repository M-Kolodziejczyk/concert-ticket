import React from "react";

import "./spinner.styles.scss";

const Spinner = ({ bright }) => {
  return (
    <div className="spinner">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
      <div className={`spinner__modal ${bright ? "bright" : ""}`}></div>
    </div>
  );
};

export default Spinner;
