import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);


  return (
    <>
      <nav className={"container"}>
        {/* <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div> */}
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
          </div>
          <button className="loginBtn btn" onClick={() => window.location.href = "https://selvakumar-associates-final.onrender.com/login"}>
            LOGIN
          </button>

        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
      <br />

      <br />
    </>
  );
};

export default Navbar;
