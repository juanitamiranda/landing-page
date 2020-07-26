import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="main">
      	<div className="hero">
      		<h1>Juanita Miranda Ortiz</h1>
       		<h2>Agente de Seguros</h2>
      	</div>
        <div className="contact">
          <h4>Información de Contacto</h4>
          <p>Teléfono: <a href="tel:+17874870474">+1 (787) 487-0474</a></p>
          <p>Correo Electrónico: <a href="mailto:juani_986@yahoo.com">juani_986@yahoo.com</a></p>
        </div>
      </div>
    );
  }
}

export default Main;