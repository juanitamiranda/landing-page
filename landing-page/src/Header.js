import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  constructor(props){
    super(props);
  }

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