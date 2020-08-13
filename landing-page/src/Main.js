import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Juanita from "./images/juanitamirandaortiz.png";
import Phone from "./images/phone.png";
import Email from "./images/email.png";

class Main extends Component {
  constructor(){
    super();
    this.state = {
      title: "Juanita Miranda Ortiz | Agente de Seguros",
      job: "Agente de Seguros", 
      slogan: "Estar asegurado es estar protedigo.",
      services: ["Planes Médicos", "Cáncer", "Seguros de Vida"],
      contact: ["Foto de Juanita Miranda Ortiz", "INFORMACIÓN DE CONTACTO", "Número de Teléfono", "Correo Electrónico"]
    }
    this.es = this.es.bind(this);
    this.en = this.en.bind(this);
  }

  componentDidUpdate() {
    document.title = this.state.title;
  }

  es() {
    this.setState({
      title: "Juanita Miranda Ortiz | Agente de Seguros",
      job: "Agente de Seguros", 
      slogan: "Estar asegurado es estar protedigo.",
      services: ["Planes Médicos", "Cáncer", "Seguros de Vida"],
      contact: ["Foto de Juanita Miranda Ortiz", "INFORMACIÓN DE CONTACTO", "Número de Teléfono", "Correo Electrónico"]
    });
  }

  en() {
    this.setState({
      title: "Juanita Miranda Ortiz | Insurance Agent",
      job: "Insurance Agent", 
      slogan: "To be insured is to be protected.",
      services: ["Healthcare Plan", "Cancer", "Life Insurance"],
      contact: ["Photo of Juanita Miranda Ortiz", "CONTACT INFORMATION", "Phone Number", "Email Address"]
    });
  }

  render() {
    return (
      <div className="main">
        <div className="navigation">
          <button onClick={this.en}>English</button>
          <span className="language"> | </span>
          <button onClick={this.es}>Español</button>
        </div>
      	<div className="hero">
      		<h1>Juanita Miranda Ortiz</h1>
       		<h2>{this.state.job}</h2>
          <h3>{this.state.slogan}</h3>
      	</div>
        <div className="services">
          <div className="flex">
          <h3>{this.state.services[0]}</h3>
          </div>
          <div className="flex">
          <h3>{this.state.services[1]}</h3>
          </div>
          <div className="flex">
          <h3>{this.state.services[2]}</h3>
          </div>
        </div>
        <div className="container">
          <div className="photo">
            <img className="agentphoto" src={Juanita} alt={this.state.contact[0]} />
          </div>
          <div className="contact">
            <h4>{this.state.contact[1]}</h4>
            <p><img className="icon" src={Phone} alt={this.state.contact[2]} /> <a href="tel:+17874870474">+1 (787) 487-0474</a></p>
            <p><img className="icon" src={Email} alt={this.state.contact[3]} /> <a href="mailto:juani_986@yahoo.com">juani_986@yahoo.com</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;