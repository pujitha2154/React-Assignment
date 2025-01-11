import React from "react";
import "./freetrail.css";

const FreeTrial = () => {
  return (
    <div className="free-trial-container">
      <h1 className="free-trial-title">Start your free trial</h1>
      <p className="free-trial-subtitle">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div className="free-trial-buttons">
        <button className="learn-more-button">Learn more</button>
        <button className="get-started-button">Get started</button>
      </div>
    </div>
  );
};

export default FreeTrial;
