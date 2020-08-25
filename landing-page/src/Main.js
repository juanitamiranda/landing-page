import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import {
  NavLink
  } from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="main white">
        <div className="content">
          	<article>
              <img src={TripleS1} alt={this.props.state.triples[0]} title={this.props.state.triples[0]} />
              <img src={TripleS2} alt={this.props.state.triples[1]} title={this.props.state.triples[1]} />
              <video loop autoPlay className="border" title={this.props.state.triples[2]} ><source src={require('../src/videos/triples.mp4')} type="video/mp4" /></video>
              <img className="border" src={TripleS3} alt={this.props.state.triples[3]} title={this.props.state.triples[3]} />
            </article>
            <section className="services">
              <div>
                <h4>{this.props.state.services[1]}</h4>
                <img src={PlanesMedicos} alt={this.props.state.services[1]} title={this.props.state.services[1]} />
                </div>
                <div className="services-flex">
                <h4>{this.props.state.services[2]}</h4>
                <img src={CancerRibbon} alt={this.props.state.services[2]} title={this.props.state.services[2]} />
                </div>
                <div className="services-flex">
                <h4>{this.props.state.services[3]}</h4>
                <img src={Vida} alt={this.props.state.services[3]} title={this.props.state.services[3]} />
              </div>
            </section>
            <div className="line"></div>
            <section className="download">
              <h3>{this.props.state.download}</h3>
            </section>
            <section className="flyers">
                <div>
                  <a href={SalusPDF} target="_blank" rel="noopener noreferrer"><img src={Salus} alt={this.props.state.flyers[0]} title={this.props.state.flyers[0]} /></a>
                  <p><a href={SalusPDF} target="_blank" rel="noopener noreferrer">{this.props.state.flyers[0]}</a></p>
                </div>
                <div>
                  <a href={CancerPDF} target="_blank" rel="noopener noreferrer"><img src={Cancer} alt={this.props.state.flyers[1]} title={this.props.state.flyers[1]} /></a>
                  <p><a href={CancerPDF} target="_blank" rel="noopener noreferrer">{this.props.state.flyers[1]}</a></p>
                </div>
                <div>
                  <a href={DentalPDF} target="_blank" rel="noopener noreferrer"><img src={Dental} alt={this.props.state.flyers[2]} title={this.props.state.flyers[2]} /></a>
                  <p><a href={DentalPDF} target="_blank" rel="noopener noreferrer">{this.props.state.flyers[2]}</a></p>
                </div>
                <div>
                  <a href={BeneficiosPDF} target="_blank" rel="noopener noreferrer"><img src={Beneficios} alt={this.props.state.flyers[3]} title={this.props.state.flyers[3]} /></a>
                  <p><a href={BeneficiosPDF} target="_blank" rel="noopener noreferrer">{this.props.state.flyers[3]}</a></p>
                </div>
            </section>
        </div>
      </div>
    );
  }
}

export default Main;