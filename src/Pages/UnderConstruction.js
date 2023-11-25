import React from "react";

import construction from "../Assets/warning.png";
import "./UnderConstruction.css";

export default function UnderConstruction() {
  return (
    <div className="construction-page">
      <div className="construction-container">
        <h1 className="construction-title">Under Construction</h1>
        <p className="construction-text">
          We're currently working hard to build an awesome experience for you!
          The page you are trying to access is still under construction.
        </p>
        <p className="construction-text">
          Please check back soon to see the exciting updates we have in store.
          In the meantime, feel free to explore other parts of our site.
        </p>
        <div className="constructionImageContainer">
          <img
            className="construction-image"
            src={construction}
            alt="Under Construction"
          />
        </div>
      </div>
    </div>
  );
}
