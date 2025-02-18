import React from 'react';
import './index.css';

function Button({ children }) {
  return <button className="cta-button">{children}</button>;
}

function Navbar() {
  return <nav className="navbar">TEST LOGO</nav>;
}

function Card({ imgSrc, altText }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={altText} className="card-image" />
    </div>
  );
}

export default function FoundersStylePage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="hero-section">
        <h1 className="hero-title">FOUNDER'S STYLE SINCE</h1>
        <h2 className="hero-year">1973</h2>
        <p className="hero-subtext">A lascivious wardrobe statement that can never lose its power.</p>
        <Button>Book an appointment</Button>
      </div>
      <div className="cards-section">
        <Card imgSrc="/founder1.png" altText="Founder Style 1" />
        <Card imgSrc="/founder2.png" altText="Founder Style 2" />
        <Card imgSrc="/founder3.png" altText="Founder Style 3" />
      </div>
    </div>
  );
}

