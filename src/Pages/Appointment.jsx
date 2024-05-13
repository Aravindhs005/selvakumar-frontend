import React from "react";
import Hero from "../components/Hero";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment "}
        imageUrl={"/signin.png"}
      />
      <button className="appointment_button" onClick={() => window.location.href = "http://localhost:3000"}>
            BOOK APPOINTMENT
      </button>
    </>
  );
};

export default Appointment;
