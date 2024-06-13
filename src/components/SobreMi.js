import React from 'react';
import './SobreMi.css';
import luisFoto from '../images/luis.webp';
import { FaCamera, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const SobreMi = () => {
  return (
    <section id="sobre-mi">
      <Helmet>
        <title>Sobre Nosotros - LF Studio Sevilla</title>
        <meta name="description" content="Conoce a Luis Froilan y su talentoso equipo de fotógrafos y videógrafos en Sevilla. Descubre nuestra pasión por capturar momentos especiales y crear recuerdos inolvidables." />
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
        <div className="about-content">
          <div className="about-text">
            <h3>¡Hola! Soy Luis Froilan</h3>
            <p>
              Con una pasión inigualable por la fotografía, he dedicado mi vida a capturar los momentos más especiales y fugaces de las personas. Junto con mi talentoso equipo de fotógrafos y videógrafos en Sevilla, ofrecemos un enfoque artístico y personalizado para cada evento, asegurándonos de que cada imagen cuente una historia única.
            </p>
            <p>
              Nuestro objetivo es crear recuerdos que duren toda la vida, adaptándonos siempre a las necesidades y deseos de cada cliente. Trabajamos principalmente en Sevilla y sus alrededores, pero estamos dispuestos a viajar donde sea necesario para capturar tu historia.
            </p>
          </div>
          <div className="about-image">
            <img src={luisFoto} alt="Luis Froilan en acción - Fotógrafo en Sevilla" className="parallax" />
          </div>
        </div>
        <div className="philosophy-content">
          <h3>Nuestra Filosofía</h3>
          <p>
            Creemos en la magia de los momentos espontáneos y en la belleza de la luz natural. Nuestro enfoque es discreto pero atento, asegurándonos de capturar la esencia y la emoción de cada momento sin interrumpir el flujo natural del evento.
          </p>
        </div>
        <div className="stats-content">
          <div className="stat-item">
            <FaCamera className="stat-icon" />
            <h4>Más de 200</h4>
            <p>Bodas capturadas en Sevilla</p>
          </div>
          <div className="stat-item">
            <FaClock className="stat-icon" />
            <h4>2 Semanas</h4>
            <p>Tiempo promedio de entrega de fotos</p>
          </div>
          <div className="stat-item">
            <FaMapMarkerAlt className="stat-icon" />
            <h4>Sevilla y más allá</h4>
            <p>Disponibilidad para viajar</p>
          </div>
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <h4>+300</h4>
            <p>Clientes satisfechos con nuestras sesiones de fotos</p>
          </div>
        </div>
        <div className="quote-content">
          <blockquote>
            "La fotografía es el arte de congelar el tiempo, capturando momentos que cuentan historias."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
