import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Juanita from "./images/juanitamirandaortiz.png";
import Phone from "./images/phone.png";
import Email from "./images/email.png";
import Beneficios from "./images/beneficios.png";
import BeneficiosPDF from "./pdf/beneficios.pdf";
import Salus from "./images/salus.png";
import SalusPDF from "./pdf/salus.pdf";
import Cancer from "./images/cancer.png";
import CancerPDF from "./pdf/cancer.pdf";
import Dental from "./images/dental.png";
import DentalPDF from "./pdf/dental.pdf";
import PlanesMedicos from "./images/planesmedicos.png";
import CancerRibbon from "./images/cancerribbon.png";
import Vida from "./images/vida.png";


class Main extends Component {
  constructor(){
    super();
    this.state = {
      title: "Juanita Miranda Ortiz | Agente de Seguros",
      job: "Agente de Seguros", 
      slogan: "Estar asegurado es estar protedigo.",
      services: ["Planes Médicos", "Cáncer", "Seguros de Vida"],
      download: "Descargue:",
      flyers: ["Red de Clínicas", "Folleto de la Póliza de Cáncer", "Folleto de la Cubierta Dental", "Resumen de Beneficios"],
      contact: ["Foto de Juanita Miranda Ortiz", "Información de Contacto", "Número de Teléfono", "Correo Electrónico"]
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
      download: "Descargue:",
      flyers: ["Red de Clínicas", "Folleto de la Póliza de Cáncer", "Folleto de la Cubierta Dental", "Resumen de Beneficios"],
      contact: ["Foto de Juanita Miranda Ortiz", "Información de Contacto", "Número de Teléfono", "Correo Electrónico"]
    });
  }

  en() {
    this.setState({
      title: "Juanita Miranda Ortiz | Insurance Agent",
      job: "Insurance Agent", 
      slogan: "To be insured is to be protected.",
      services: ["Healthcare Plan", "Cancer", "Life Insurance"],
      download: "Download:",
      flyers: ["Clinics", "Cancer Insurance Brochure", "Dental Coverage Brochure", "Summary of Benefits"],
      contact: ["Photo of Juanita Miranda Ortiz", "Contact Information", "Phone Number", "Email Address"]
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
      	</div>
        <div className="slogan">
          <div className="slogan-flex">
          <h3>{this.state.slogan}</h3>
          </div>
        </div>
        <div className="services">
          <div className="services-flex">
          <h4>{this.state.services[0]}</h4>
          <img src={PlanesMedicos} alt={this.state.services[0]} />
          </div>
          <div className="services-flex">
          <h4>{this.state.services[1]}</h4>
          <img src={CancerRibbon} alt={this.state.services[1]} />
          </div>
          <div className="services-flex">
          <h4>{this.state.services[2]}</h4>
          <img src={Vida} alt={this.state.services[2]} />
          </div>
        </div>
        <div class="line"></div>
        <div className="download">
        {this.state.download}
        </div>
        <div className="flyers">
          <div className="flyers-flex">
          <a href={SalusPDF} download="FOLLETO RED DE CLINICAS - TE CUIDAMOS DONDEQUIERA 2020.pdf" target="_black"><img src={Salus} alt="{this.state.flyers[0]}" /></a>
          <p><a href={SalusPDF} download="FOLLETO RED DE CLINICAS - TE CUIDAMOS DONDEQUIERA 2020.pdf" target="_black">{this.state.flyers[0]}</a></p>
          </div>
          <div className="flyers-flex">
          <a href={CancerPDF} download="Flyer Poliza Protect-Digital.pdf" target="_black"><img src={Cancer} alt={this.state.flyers[1]} /></a>
          <p><a href={CancerPDF} download="Flyer Poliza Protect-Digital.pdf" target="_black">{this.state.flyers[1]}</a></p>
          </div>
          <div className="flyers-flex">
          <a href={DentalPDF} download="FOLLETO DENTAL - 2020.pdf" target="_black"><img src={Dental} alt={this.state.flyers[2]} /></a>
          <p><a href={DentalPDF} download="FOLLETO DENTAL - 2020.pdf" target="_black">{this.state.flyers[2]}</a></p>
          </div>
          <div className="flyers-flex">
          <a href={BeneficiosPDF} download="FOLLETO RESUMEN BENEFICIOS 2020 digitalactualizado 2.pdf" target="_black"><img src={Beneficios} alt={this.state.flyers[3]} /></a>
          <p><a href={BeneficiosPDF} download="FOLLETO RESUMEN BENEFICIOS 2020 digitalactualizado 2.pdf" target="_black">{this.state.flyers[3]}</a></p>
          </div>
        </div>
        <div className="info">
          <div className="photo">
            <img className="agentphoto" src={Juanita} alt={this.state.contact[0]} />
          </div>
          <div className="contact">
            <h5>{this.state.contact[1]}</h5>
            <p><img className="icon" src={Phone} alt={this.state.contact[2]} /> <a href="tel:+17874870474">+1 (787) 487-0474</a></p>
            <p><img className="icon" src={Email} alt={this.state.contact[3]} /> <a href="mailto:juani_986@yahoo.com">juani_986@yahoo.com</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;