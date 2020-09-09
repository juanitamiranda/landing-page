import React, { Component } from 'react';
import HeroImage from './images/hero.jpg';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
         <img src={HeroImage} alt="Seguros de Vida, Cáncer y Salud en Puerto Rico." />
      </div>
    );
  }
}

export default Hero;