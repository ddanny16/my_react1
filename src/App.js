import React from "react";
import "./index.css";
// import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
    <div className="logo">TEST LOGO</div>
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
        {/* You can place an image here */}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  );
};

export default App;
