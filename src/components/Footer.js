import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Footer = () => {
  return (
    <footer>
      <Helmet>
        <title>LF Studio Sevilla - Fotografía Profesional</title>
        <meta name="description" content="LF Studio Sevilla ofrece servicios de fotografía profesional en Sevilla y alrededores. Síguenos en nuestras redes sociales para más información." />
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
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Teléfono: +34 123 456 789</p>
          <p>Email: info@tuempresa.com</p>
        </div>
        <div className="footer-section">
          <h4>Síguenos en Redes Sociales</h4>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="footer-section">
          <h4>Información</h4>
          <p>&copy; 2023 Tu Empresa. Todos los derechos reservados.</p>
          <p>Fotografía de bodas, sesiones de fotos y más en Sevilla.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
