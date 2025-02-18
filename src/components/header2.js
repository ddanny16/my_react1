import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { slink } from "react-router-dom"; // Use slink from react-router-dom
import "./header2.scss";
import arrow from "../assets/img/SVG/Arrow - Down 2.svg";
import bag from "../assets/img/SVG/bag-2.svg";
import heart from "../assets/img/SVG/heart.svg";
import profile from "../assets/img/SVG/Frame 1103.svg";
import search from "../assets/img/SVG/search-normal.svg";

const Header2 = ({ setShow }) => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown state

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor); // Clean up event listener
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <slink to="/" className="Logo" onClick={() => setShow(true)}>
        <img src={search} alt="search" /> Search
      </slink>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item" onClick={toggleDropdown}>
          <slink to="/" className="effect1">
            SINCE 1973
            <img
              src={arrow}
              alt="arrow"
              className={isDropdownOpen ? "arrow rotated" : "arrow"} // Apply rotated class when dropdown is open
            />
          </slink>
          {/* Dropdown */}
          {isDropdownOpen && (
            <ul className="dropdown">
              <li><slink to="/sub-link1">Sub-link 1</slink></li>
              <li><slin to="/sub-link2">Sub-link 2</slin></li>
              <li><slin to="/sub-link3">Sub-link 3</slin></li>
            </ul>
          )}
        </li>
        <li>
          <slink to="/SERVICES" className="effect1">
            SERVICES <img src={arrow} alt="arrow" />
          </slink>
        </li>
        <li>
          <slink to="/ EXPERIENCE" className="effect1">
            EXPERIENCE <img src={arrow} alt="arrow" />
          </slink>
        </li>
        <li>
          <slink to="/ SHOP" className="effect1">
            SHOP <img src={arrow} alt="arrow" />
          </slink>
        </li>
        <li>
          <slink to="/PROJECT" className="effect1">
            PROJECT <img src={arrow} alt="arrow" />
          </slink>
        </li>
        <li onClick={() => setShow(false)}></li>
      </ul>

      <div className="profile-icons">
        <span><img src={heart} alt="heart" /></span>
        <span><img src={bag} alt="bag" /></span>
        <span><img src={profile} alt="profile" /></span>
      </div>

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

export default Header2;
