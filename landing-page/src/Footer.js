import React, { Component } from 'react';
import Juanita from "./images/juanitamirandaortiz.png";
import Phone from "./images/phone.png";
import Email from "./images/email.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer blue">
        <div className="content">
          <footer>
            <div>
              <img src={Juanita} alt={this.props.state.contact[0]} title={this.props.state.contact[0]} />
            </div>
            <aside>
              <h5>Juanita Miranda Ortiz</h5>
              <h6>{this.props.state.job}</h6>
              <p><img src={Phone} alt={this.props.state.contact[1]} /> <a href="tel:+17874870474" title={this.props.state.contact[1]} >+1 (787) 487-0474</a></p>
              <p><img src={Email} alt={this.props.state.contact[2]} /> <a href="mailto:juani_986@yahoo.com" title={this.props.state.contact[2]} >juani_986@yahoo.com</a></p>
            </aside>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;