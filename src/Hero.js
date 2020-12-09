import React from "react";
import "./css/Hero.css";
import workingIllustration from "./images/illustration-working.svg";

function Hero() {
  return (
    <div className="container">
      <section className="banner">
        <img className="banner__image" src={workingIllustration} alt="" />
        <div className="banner__text">
          <h1>
            More than just
            <br />
            shorter links
          </h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="#linkInput">
            <button>Get Started</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
