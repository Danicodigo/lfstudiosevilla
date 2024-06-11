import React from 'react';
import './Servicios.css';
import { Helmet } from 'react-helmet';

const Servicios = () => {
  return (
    <section id="servicios">
      <Helmet>
        <title>Servicios de Fotografía en Sevilla - LF Studio</title>
        <meta name="description" content="Descubre los servicios de fotografía de LF Studio Sevilla. Especialistas en fotografía de bodas, bautizos, sesiones familiares e individuales. Capturamos cada momento especial con profesionalismo y arte." />
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
      <div className="container">
        <h2>Servicios de Fotografía en Sevilla</h2>
        <div className="servicios-list">
          <div className="servicio-item">
            <h3>Fotografía de Bodas</h3>
            <p>Capturamos cada momento especial de tu gran día, desde la preparación hasta la celebración, creando recuerdos inolvidables. Nuestra especialidad es la fotografía de bodas en Sevilla, destacando por nuestra atención al detalle y estilo artístico.</p>
          </div>
          <div className="servicio-item">
            <h3>Fotografía de Bautizos</h3>
            <p>Momentos inolvidables del bautizo de tu bebé, con un enfoque en los detalles y emociones. Nuestro servicio de fotografía de bautizos es el más destacado en Sevilla, asegurando que cada recuerdo sea capturado con precisión.</p>
          </div>
          <div className="servicio-item">
            <h3>Sesiones Familiares</h3>
            <p>Fotos familiares que capturan la esencia y alegría de estar juntos. Ofrecemos las mejores sesiones de fotos familiares en Sevilla, creando recuerdos que durarás toda la vida.</p>
          </div>
          <div className="servicio-item">
            <h3>Sesiones Individuales</h3>
            <p>Retratos profesionales y personales que destacan tu mejor versión. Realizamos sesiones de fotos individuales en Sevilla con un toque único y profesional.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
