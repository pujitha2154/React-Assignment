import React from "react";
import './feedback.css';

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="sisypus-logos"> 
          <img src="src/assets/Sisypus.png" alt="icon" className="sisypus-icon" /> 
          <span className="logo-text">Sisyphus</span>
        </div>
        <h1 className="testimonial-text">
          We've been using Untitled to kick start every new project and can't imagine working without it.
        </h1>
        <div className="testimonial-author">
          <img src="src/assets/candid wu.png" alt="Candice Wu" className="author-image"/>
          <div>
            <h4 className="author-name">Candice Wu</h4>
            <p className="author-title">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
