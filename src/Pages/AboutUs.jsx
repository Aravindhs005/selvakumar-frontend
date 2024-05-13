import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
    <br />
    <br />
      <Hero
        title={"Learn More About Us "}
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/profile.png"} />
    </>
  );
};

export default AboutUs;
