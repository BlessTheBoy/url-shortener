import React from "react";
import Card from "./Card";
import iconBrand from "./images/icon-brand-recognition.svg";
import iconDetailed from "./images/icon-detailed-records.svg";
import iconCustomizable from "./images/icon-fully-customizable.svg";
import "./css/Features.css";

function Features() {
  return (
    <section className="features">
      <div className="features__header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="features__cards">
        <div className="features__cards-line"></div>
        <Card
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          image={iconBrand}
        />
        <Card
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          image={iconDetailed}
        />
        <Card
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          image={iconCustomizable}
        />
      </div>
    </section>
  );
}

export default Features;
