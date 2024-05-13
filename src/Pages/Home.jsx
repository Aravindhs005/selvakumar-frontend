import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Selvakumar & Associates | Your Trusted Auditing Partner"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/profile.png"} />
      <Services />
      <MessageForm />
    </>
  );
};

export default Home;
