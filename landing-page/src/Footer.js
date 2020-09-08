import React, { Component } from 'react';
import Juanita from "./images/juanitamirandaortiz.png";
import Phone from "./images/phone.png";
import Email from "./images/email.png";

class Footer extends Component {
  render() {
    return (
       <footer className="blue">
          {this.props.state.contact[0]}
       </footer>
    );
  }
}

export default Footer;