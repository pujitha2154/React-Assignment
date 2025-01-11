import React from "react";
import "./container.css";

const logos = [
  { src: "src/assets/boltshift.png", alt: "Boltshift Logo", name: "Boltshift" },
  { src: "src/assets/lightbox.png", alt: "Lightbox Logo", name: "Lightbox" },
  { src: "src/assets/FeatherDev.png", alt: "FeatherDev Logo", name: "FeatherDev" },
  { src: "src/assets/Spherule.png", alt: "Spherule Logo", name: "Spherule" },
  { src: "src/assets/GlobalBank.png", alt: "GlobalBank Logo", name: "GlobalBank" },
  { src: "src/assets/Nietzsche.png", alt: "Nietzsche Logo", name: "Nietzsche" },
];

const Container = () => {
  return (
    <div className="container">
      <h2 className="heading">Join 4,000+ companies already growing</h2>
      <div className="logo-row">
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo.src} alt={logo.alt} className="logo-img" />
            <span className="logo-name">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
