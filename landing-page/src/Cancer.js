import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import page1 from "./images/cancer/1.jpg";
import page2 from "./images/cancer/2.jpg";
import page3 from "./images/cancer/3.jpg";
import page4 from "./images/cancer/4.jpg";
import page5 from "./images/cancer/5.jpg";
import page6 from "./images/cancer/6.jpg";

class Cancer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="cancer white">
        <div className="content">
          <section className="pdf">
            <img src={page1} alt="Pg. 1" />
            <img src={page2} alt="Pg. 2" />
            <img src={page3} alt="Pg. 3" />
            <img src={page4} alt="Pg. 4" />
            <img src={page5} alt="Pg. 5" />
            <img src={page6} alt="Pg. 6" />
          </section>
        </div>
      </div>
    );
  }
}

export default Cancer;