import React from 'react';
import finemen from "../assets/img/IMAGE NUMERO 1 3.png"
import "./section.scss"

function Section() {
  return (
    <main className="main1">
     <section className="section1">
        <div className="text1">
        FOUNDER’S
        STYLE SINCE
        </div>
        <div className="text2">
        1973
        </div>
        <div className="text3">
        A lascivious wardrobe statement
        that can never lose its power.
        </div>
        <button className="btn">Book an appointment</button>

     </section>
     <section className="section2"> <img className="menimg" src={finemen} alt="men" /> </section>

    </main>
  );
}

export default Section;
