import React, { Component } from 'react';
// Images
import TripleS1 from "./images/triples1.png";
import TripleS2 from "./images/triples2.png";
import TripleS3 from "./images/triples3.jpg";
import PlanesMedicos from "./images/planesmedicos.png";
import CancerRibbon from "./images/cancerribbon.png";
import Vida from "./images/vida.png";
import Beneficios from "./images/beneficios.png";
import Salus from "./images/salus.png";
import Cancer from "./images/cancer.png";
import Dental from "./images/dental.png";
// PDF
import BeneficiosPDF from "./pdf/FOLLETO RESUMEN BENEFICIOS 2020.pdf";
import SalusPDF from "./pdf/FOLLETO RED DE CLINICAS - TE CUIDAMOS DONDEQUIERA 2020.pdf";
import CancerPDF from "./pdf/Flyer Poliza Protect-Digital.pdf";
import DentalPDF from "./pdf/FOLLETO DENTAL 2020.pdf";

class Main extends Component {
  render() {
    return (
      <div className="main white">
        <div className="content">
          	<article>
              <img src={TripleS1} alt={this.props.state.triples[0]} title={this.props.state.triples[0]} />
              <img src={TripleS2} alt={this.props.state.triples[1]} title={this.props.state.triples[1]} />
              <video autoplay="false" className="border" title={this.props.state.triples[2]} >
              <source src={require('../src/videos/triples.mp4')} type="video/mp4" />
              </video>             
              <img className="border" src={TripleS3} alt={this.props.state.triples[3]} title={this.props.state.triples[3]} />
            </article>
            <section className="services">
              <div>
                <h4>{this.props.state.services[0]}</h4>
                <img src={PlanesMedicos} alt={this.props.state.services[0]} title={this.props.state.services[0]} />
              </div>
              <div>
                <h4>{this.props.state.services[1]}</h4>
                <img src={CancerRibbon} alt={this.props.state.services[1]} title={this.props.state.services[1]} />
              </div>
              <div>
                <h4>{this.props.state.services[2]}</h4>
                <img src={Vida} alt={this.props.state.services[2]} title={this.props.state.services[2]} />
              </div>
            </section>
            <div className="line"></div>
            <section className="download">
              <h3>{this.props.state.download}</h3>
            </section>
            <section className="pdf">
                <div>
                  <a href={SalusPDF} target="_blank" rel="noopener noreferrer"><img src={Salus} alt={this.props.state.pdf[0]} title={this.props.state.pdf[0]} /></a>
                  <p><a href={SalusPDF} target="_blank" rel="noopener noreferrer">{this.props.state.pdf[0]}</a></p>
                </div>
                <div>
                  <a href={CancerPDF} target="_blank" rel="noopener noreferrer"><img src={Cancer} alt={this.props.state.pdf[1]} title={this.props.state.pdf[1]} /></a>
                  <p><a href={CancerPDF} target="_blank" rel="noopener noreferrer">{this.props.state.pdf[1]}</a></p>
                </div>
                <div>
                  <a href={DentalPDF} target="_blank" rel="noopener noreferrer"><img src={Dental} alt={this.props.state.pdf[2]} title={this.props.state.pdf[2]} /></a>
                  <p><a href={DentalPDF} target="_blank" rel="noopener noreferrer">{this.props.state.pdf[2]}</a></p>
                </div>
                <div>
                  <a href={BeneficiosPDF} target="_blank" rel="noopener noreferrer"><img src={Beneficios} alt={this.props.state.pdf[3]} title={this.props.state.pdf[3]} /></a>
                  <p><a href={BeneficiosPDF} target="_blank" rel="noopener noreferrer">{this.props.state.pdf[3]}</a></p>
                </div>
            </section>
        </div>
      </div>
    );
  }
}

export default Main;