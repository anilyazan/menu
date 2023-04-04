import React from "react";
import twoImage from "../assets/hamburgerArkaPlan.jpg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${twoImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Burası bir dünya markası. Lezzetin en iyi yeri.</p>
      </div>
    </div>
  );
}

export default About;
