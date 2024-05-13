import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1 style={{fontSize:"36px"}}>{title}</h1>
          <p>
          Selvakumar & Associates is the trusted auditing firm founded by Selvakumar, dedicated to providing expert auditing services with a personal touch. With a focus on accuracy and integrity, Selvakumar delivers tailored auditing solutions to meet your needs. At Selvakumar & Associates, your financial transparency and regulatory compliance are our top priorities
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
