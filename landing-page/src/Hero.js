import React, { Component } from 'react';
import Doctor from './images/doctor.png';

class Hero extends Component {
  render() {
    return (
      <div className="hero">
         <img src={Doctor} alt="Doctor" />
      </div>
    );
  }
}

export default Hero;