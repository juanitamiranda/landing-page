import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Juanita from "./images/juanitamirandaortiz.png";
import Phone from "./images/phone.png";
import Email from "./images/email.png";
import TripleS1 from "./images/triples1.png";
import TripleS2 from "./images/triples2.png";
import TripleS3 from "./images/triples3.jpg";
import Beneficios from "./images/beneficios.png";
import BeneficiosPDF from "./pdf/FOLLETO RESUMEN BENEFICIOS 2020.pdf";
import Salus from "./images/salus.png";
import SalusPDF from "./pdf/FOLLETO RED DE CLINICAS - TE CUIDAMOS DONDEQUIERA 2020.pdf";
import Cancer from "./images/cancer.png";
import CancerPDF from "./pdf/Flyer Poliza Protect-Digital.pdf";
import Dental from "./images/dental.png";
import DentalPDF from "./pdf/FOLLETO DENTAL 2020.pdf";
import PlanesMedicos from "./images/planesmedicos.png";
import CancerRibbon from "./images/cancerribbon.png";
import Vida from "./images/vida.png";


class Main extends Component {
  constructor(){
    super();
    this.state = {
      title: "Juanita Miranda Ortiz | Agente de Seguros",
      job: "Agente de Seguros", 
      triples: ["Precaver te ayuda a protegerte a ti y a tu familia del cáncer y 30 enfermedades temidas.", "Triple-S Vida: Cuando más lo necesiten.", "Triple-S Directo: El plan de salud completo que te ofrece realizar consultas médicas desde tu teléfono o computadora con TELECONSULTA MD.", "Triple-S Directo te ofrece una red con más de 13,000 proveedores de salud y te brinda el innovador servicio TeleConsulta MD, que te permite consultar con un médico desde tu celular o computadora dondequiera que estés. Llámame al (787) 487-0474 para más información."],
      slogan: "Estar cubiertos es estar seguros.",
      services: ["Recibe orientación sobre:", "Planes Médicos", "Seguro de Cáncer", "Seguros de Vida"],
      download: "Descargas:",
      flyers: ["Red de Clínicas", "Póliza de Cáncer", "Cubierta Dental", "Resumen de Beneficios"],
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
      triples: ["Precaver te ayuda a protegerte a ti y a tu familia del cáncer y 30 enfermedades temidas.", "Triple-S Vida: Cuando más lo necesiten.", "Triple-S Directo: El plan de salud completo que te ofrece realizar consultas médicas desde tu teléfono o computadora con TELECONSULTA MD.", "Triple-S Directo te ofrece una red con más de 13,000 proveedores de salud y te brinda el innovador servicio TeleConsulta MD, que te permite consultar con un médico desde tu celular o computadora dondequiera que estés. Llámame al (787) 487-0474 para más información."],
      slogan: "Estar cubiertos es estar seguros.",
      services: ["Recibe orientación sobre:", "Planes Médicos", "Seguro de Cáncer", "Seguros de Vida"],
      download: "Descargas:",
      flyers: ["Red de Clínicas", "Póliza de Cáncer", "Cubierta Dental", "Resumen de Beneficios"],
      contact: ["Foto de Juanita Miranda Ortiz", "Información de Contacto", "Número de Teléfono", "Correo Electrónico"]
    });
  }

  en() {
    this.setState({
      title: "Juanita Miranda Ortiz | Insurance Agent",
      job: "Insurance Agent", 
      triples: ['Prevention helps protect you and your family from cancer and 30 dreaded diseases.', 'Triple-S Vida: When you need it most.', 'Triple-S Directo: The health plan that offers medical consultations from your phone or computer with TELECONSULTA MD.', 'Triple-S Directo offers you a network with more than 13,000 health providers and offers you the innovative TeleConsulta MD service, which allows you to consult with a doctor from your cell phone or computer wherever you are. Call me at (787) 487-0474 for more information.'],
      slogan: "Being insurared is being safe.",
      services: ["Receive orientation about:", "Healthcare Plan", "Cancer Insurance", "Life Insurance"],
      download: "Download:",
      flyers: ["Clinics", "Cancer Insurance", "Dental Insurance", "Summary of Benefits"],
      contact: ["Photo of Juanita Miranda Ortiz", "Contact Information", "Phone Number", "Email Address"]
    });
  }

  render() {
    return (
      <div className="main">
        <div className="navigation">
          <div className="content">
          <button onClick={this.en} title="Set site language to English.">English</button>
          <span className="language"> | </span>
          <button onClick={this.es} title="Configurar el idioma de la página a español.">Español</button>
          </div>
        </div>
        <div className="slogan">
        <div className="slogan-flex">
          <div className="content">
          <h1>{this.state.slogan}</h1>
          </div>
        </div>
        </div>
      	<div className="hero">
          <div className="content">
          <img className="triples1" src={TripleS1} alt={this.state.triples[0]} title={this.state.triples[0]} />
          <img className="triples2" src={TripleS2} alt={this.state.triples[1]} title={this.state.triples[1]} />
          <video loop autoPlay className="video" title={this.state.triples[2]} >
          <source src={require('../src/videos/triples.mp4')} type="video/mp4" />
          </video>
          <img className="triples3" src={TripleS3} alt={this.state.triples[3]} title={this.state.triples[3]} />
          </div>
      	</div>
        <div className="content">
        <div className="services">
          <div className="services-flex">
          <h4>{this.state.services[1]}</h4>
          <img src={PlanesMedicos} alt={this.state.services[1]} title={this.state.services[1]} />
          </div>
          <div className="services-flex">
          <h4>{this.state.services[2]}</h4>
          <img src={CancerRibbon} alt={this.state.services[2]} title={this.state.services[2]} />
          </div>
          <div className="services-flex">
          <h4>{this.state.services[3]}</h4>
          <img src={Vida} alt={this.state.services[3]} title={this.state.services[3]} />
          </div>
        </div>
        <div class="line"></div>
        <div className="download">
        <h3>{this.state.download}</h3>
        </div>
        <div className="flyers">
          <div className="flyers-flex">
            <a href={SalusPDF} target="_blank"><img src={Salus} alt={this.state.flyers[0]} title={this.state.flyers[0]} /></a>
            <p><a href={SalusPDF} target="_blank">{this.state.flyers[0]}</a></p>
          </div>
          <div className="flyers-flex">
            <a href={CancerPDF} target="_blank"><img src={Cancer} alt={this.state.flyers[1]} title={this.state.flyers[1]} /></a>
            <p><a href={CancerPDF} target="_blank">{this.state.flyers[1]}</a></p>
          </div>
          <div className="flyers-flex">
            <a href={DentalPDF} target="_blank"><img src={Dental} alt={this.state.flyers[2]} title={this.state.flyers[2]} /></a>
            <p><a href={DentalPDF} target="_blank">{this.state.flyers[2]}</a></p>
          </div>
          <div className="flyers-flex">
            <a href={BeneficiosPDF} target="_blank"><img src={Beneficios} alt={this.state.flyers[3]} title={this.state.flyers[3]} /></a>
            <p><a href={BeneficiosPDF} target="_blank">{this.state.flyers[3]}</a></p>
          </div>
        </div>
        </div>
        <div className="info">
          <div className="photo">
            <img className="agentphoto" src={Juanita} alt={this.state.contact[0]} title={this.state.contact[0]} />
          </div>
          <div className="contact">
            <h5>Juanita Miranda Ortiz</h5>
            <h6>{this.state.job}</h6>
            <p><img className="icon" src={Phone} alt={this.state.contact[2]} /> <a href="tel:+17874870474" title={this.state.contact[2]} >+1 (787) 487-0474</a></p>
            <p><img className="icon" src={Email} alt={this.state.contact[3]} /> <a href="mailto:juani_986@yahoo.com" title={this.state.contact[3]} >juani_986@yahoo.com</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;