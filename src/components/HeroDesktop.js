import React from 'react';
import './HeroDesktop.css';
import { Helmet } from 'react-helmet';
import backgroundImage from '../images/fotoboda1blancoymegro.jpg';

const HeroDesktop = () => {
  return (
    <section id="hero-desktop">
      <Helmet>
        <title>LF Studio Sevilla - Capturamos tus Momentos Más Especiales</title>
        <meta name="description" content="LF Studio Sevilla es tu socio ideal para capturar momentos especiales en bodas, sesiones de fotos y eventos en Sevilla. Inmortalizamos cada instante con nuestra pasión por la fotografía." />
      </Helmet>
      <div className="hero-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Capturamos tus Momentos Más Especiales en Sevilla</h1>
            <p className="hero-subtitle">Con nuestra pasión por la fotografía de bodas, sesiones de fotos y eventos especiales, te ayudamos a inmortalizar cada instante único en tu vida.</p>
            <button className="hero-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contacta con nosotros
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDesktop;
