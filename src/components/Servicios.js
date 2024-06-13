
import React, { useState } from 'react';
import './Servicios.css';
import folleto1 from '../images/bodapack1.jpg';
import folleto2 from '../images/bodapack2.jpg';
import folleto3 from '../images/bodapack3.jpg';
import folleto4 from '../images/bodapack4.jpg';
import folleto5 from '../images/comunion.jpg';
import folleto6 from '../images/bautizo.jpg';
import { Helmet } from 'react-helmet';
const folletosBodas = [
  { id: 1, src: folleto1, alt: 'Pack de Plata' },
  { id: 2, src: folleto2, alt: 'Pack de Oro' },
  { id: 3, src: folleto3, alt: 'Pack de Platino' },
  { id: 4, src: folleto4, alt: 'Pack de Rubí' },
];

const folletosComuniones = [
  { id: 5, src: folleto5, alt: 'Comuniones' },
];

const folletosBautizos = [
  { id: 6, src: folleto6, alt: 'Bautizo' },
];
const Servicios = () => {
  const [selectedFolleto, setSelectedFolleto] = useState(null);

  const handleFolletoClick = (folleto) => {
    setSelectedFolleto(folleto);
  };

  const handleCloseModal = () => {
    setSelectedFolleto(null);
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    setSelectedFolleto(null);
  };
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
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-intro">Descubre nuestros paquetes y servicios fotográficos diseñados para cada ocasión especial.</p>

        <div className="section">
          <h3 className="section-subtitle">Bodas</h3>
          <div className="folletos-grid">
            {folletosBodas.map((folleto) => (
              <div key={folleto.id} className="folleto-card" onClick={() => handleFolletoClick(folleto)}>
                <img src={folleto.src} alt={folleto.alt} className="folleto-image" />
              </div>
            ))}
          </div>
        </div>

        <div className="section-small">
          <h3 className="section-subtitle">Comuniones</h3>
          <div className="folletos-grid-small">
            {folletosComuniones.map((folleto) => (
              <div key={folleto.id} className="folleto-small-card" onClick={() => handleFolletoClick(folleto)}>
                <img src={folleto.src} alt={folleto.alt} className="folleto-image-small" />
              </div>
            ))}
          </div>
        </div>

        <div className="section-small">
          <h3 className="section-subtitle">Bautizos</h3>
          <div className="folletos-grid-small">
            {folletosBautizos.map((folleto) => (
              <div key={folleto.id} className="folleto-small-card" onClick={() => handleFolletoClick(folleto)}>
                <img src={folleto.src} alt={folleto.alt} className="folleto-image-small" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedFolleto && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedFolleto.src} alt={selectedFolleto.alt} className="modal-image" />
            <button className="lo-quiero-button" onClick={scrollToContact}>Lo quiero</button>
          </div>
        </div>
         )}
    </section>
  );
};

export default Servicios;
