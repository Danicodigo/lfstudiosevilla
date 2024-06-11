import React from 'react';
import './Hero.css';
import { Helmet } from 'react-helmet';

const Hero = () => {
  return (
    <section id="hero">
      <Helmet>
        <title>LF Studio Sevilla - Capturamos tus Momentos Más Especiales</title>
        <meta name="description" content="LF Studio Sevilla es tu socio ideal para capturar momentos especiales en bodas, sesiones de fotos y eventos en Sevilla. Inmortalizamos cada instante con nuestra pasión por la fotografía." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "LF Studio Sevilla",
            "image": "",
            "@id": "",
            "url": "https://lfstudiosevilla.es",
            "telephone": "+34 646302210",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sevilla",
              "addressLocality": "Sevilla",
              "addressRegion": "AN",
              "postalCode": "41020",
              "addressCountry": "ES"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 37.3886,
              "longitude": -5.9823
            },
            "sameAs": [
              "https://www.facebook.com/tu-usuario",
              "https://twitter.com/tu-usuario",
              "https://www.instagram.com/lfstudiosevilla/",
              "https://www.linkedin.com/in/tu-usuario"
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          }
          `}
        </script>
      </Helmet>
      <div className="hero-left">
        <div className="content">
          <h2 className="hero-title">Capturamos tus Momentos Más Especiales en Sevilla</h2>
          <p className="hero-subtitle">Con nuestra pasión por la fotografía de bodas, sesiones de fotos y eventos especiales, te ayudamos a inmortalizar cada instante único en tu vida.</p>
          <button className="hero-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contacta con nosotros
          </button>
        </div>
      </div>
      <div className="hero-right"></div>
    </section>
  );
};

export default Hero;
