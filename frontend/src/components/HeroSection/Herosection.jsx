import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/hero.jpg"; 

function HeroSection() {
  return (
    <section className="hero0" id="home">
      <div className="hero">
      <div className="hero-content">
        <h1>
          Empowering Businesses with ERP, IT & Digital Marketing Solutions
        </h1>
        <p>
          From Genius ERP to Custom IT Solutions & 360° Digital Marketing, we
          help you grow smarter, faster, and stronger.
        </p>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Business Solutions" />
      </div>
      </div>
    </section>
  );
}

export default HeroSection;
