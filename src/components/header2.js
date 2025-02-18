import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header2.scss";
import arrow from "../assets/img/SVG/Arrow - Down 2.svg";

const Navbar = ({ setShow }) => {
  // const activeLink=""
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // const isActive="Home"

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <slink to="/">
        <span className="Logo" alt="search" onClick={() => setShow(true)}>
          Search
        </span>
      </slink>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <slink to="/" className="effect1">
            SINCE 1973
            <img src={arrow} alt="arrow" />{" "}
          </slink>
        </li>
        <li>
          <slink to="/products" className="effect1">
            SERVICES
          </slink>
        </li>
        <li>
          <slink to="/investments" className="effect1">
            EXPERIENCE
          </slink>
        </li>
        <li>
          <slink to="/vertinary" className="effect1">
            SHOP
          </slink>
        </li>
        <li>
          <slink to="/contact" className="effect1">
            PROJECT
          </slink>
        </li>
        {/* <li>
          <slink to="/profile" className="effect2">Profile</slink>
        </li> */}
        <li onClick={() => setShow(false)}>
          {/* <slink className=" effect1" to="/cart" ><img className="onepiece" src={Cart1} alt="cart" /> Cart <san>0</san></slink> */}
        </li>
      </ul>
      <profile>
        <span>raa</span>
        <span>raa</span>
        <span>raa</span>
      </profile>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#ffe" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
