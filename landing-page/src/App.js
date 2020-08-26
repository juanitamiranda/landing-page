import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  } from 'react-router-dom';

class App extends Component {
  constructor(props){
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
      slogan: "Being covered is being safe.",
      services: ["Receive orientation about:", "Healthcare Plan", "Cancer Insurance", "Life Insurance"],
      download: "Download:",
      flyers: ["Clinics", "Cancer Insurance", "Dental Insurance", "Summary of Benefits"],
      contact: ["Photo of Juanita Miranda Ortiz", "Contact Information", "Phone Number", "Email Address"]
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="navy">
            <div className="content">
             <nav>
                <button onClick={this.es} title="Configurar el idioma de la página a español.">Español</button>
                <span>|</span>
                <button onClick={this.en} title="Set site language to English.">English</button>
              </nav>
            </div>
          </div>
          <Route startsWith path="/" component={() => (<Header state={this.state} />) }/>
          <Switch>
            <Route exact path="/" component={() => ( <Main state={this.state} /> )} />
            <Redirect from="*" to="/" />
          </Switch>
          <Route startsWith path="/" component={() => (<Footer state={this.state} />) }/>
        </div>
      </Router>
    );
  }
}

export default App;