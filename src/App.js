import React from "react";
import "./index.css";
import sideimg from "./img/IMAGE NUMERO 1 3.png"
// import CenteredHead from "./centeredhead";
import CenteredHeading from "./centeredhead";
import { FaSearch} from "react-icons/fa"

// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
    <div className="logo"><FaSearch></FaSearch> SEARCH</div>
    <nav className="nav">
      <span className="nav-button">Since 1973</span>
      <span className="nav-button">Services</span>
      <span className="nav-button">Experience</span>
      <span className="nav-button">Shop</span>
      <span className="nav-button">Project X</span>
    </nav>
    <div className="user-actions">
      <span className="btn">My KB</span>
    </div>
  </header>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>FOUNDER’S STYLE SINCE</h1>
        <h2>1973</h2>
        <p>A lascivious wardrobe statement that can never lose its power.</p>
        <button className="btn">Book an appointment</button>
      </div>
      <div className="hero-image">
      <img src={sideimg} alt="Logo" />
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <CenteredHeading/>
      <Header />
      <HeroSection />
    </div>
  );
};

export default App;
