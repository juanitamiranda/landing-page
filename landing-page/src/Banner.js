import React, { Component } from 'react';
import BlueBanner from "./images/banner.png";

class Banner extends Component {
  render() {
    return (
      <div className="banner babyblue">
         <img src={BlueBanner} />
      </div>
    );
  }
}

export default Banner;