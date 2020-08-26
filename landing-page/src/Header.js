import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header blue">
        <div className="content">
          <header>
            <h1>{this.props.state.slogan}</h1>
          </header>
        </div>
      </div>
    );
  }
}

export default Header;