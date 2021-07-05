import React, { Component } from 'react';
import Juanita from "./images/juanitamirandaortiz.png";
// import Phone from "./images/phone.png";
// import Email from "./images/email.png";

class Footer extends Component {
  render() {
    return (
      <div className="gray">
        <section className="disclaimer content">
          <div>
            <img src={Juanita} alt={this.props.state.contact[0]} title={this.props.state.contact[0]} />
          </div>
          <aside>
            <div className="left">
              <div className="right">
                <a href="tel:7874870474" alt={this.props.state.contact[1]}>Tel. <span className="bold">(787) 487-0474</span></a><br />
                <a className="bold" href="mailto:juanita.miranda1@ssspr.com" alt={this.props.state.contact[2]}>juanita.miranda1@ssspr.com</a>
              </div>
              <h5>{this.props.state.contact[0]}</h5>
              <h6>{this.props.state.job}</h6>
              <p>{this.props.state.disclaimer}</p>
              <div className="align">
                <a href="tel:7874870474" alt={this.props.state.contact[1]}>Tel. <span className="bold">(787) 487-0474</span></a><br />
                <a className="bold" href="mailto:juanita.miranda1@ssspr.com" alt={this.props.state.contact[2]}>juanita.miranda1@ssspr.com</a>
              </div>
            </div>
          </aside>
        </section>
      </div>
    );
  }
}

export default Footer;