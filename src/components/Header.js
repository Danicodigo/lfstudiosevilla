import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <Helmet>
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
      <header>
        <div className="navbar">
          <div className="logo-container" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="LF Studio Logo" className="logo" />
            <span className="studio-name">LF Studio Sevilla</span>
          </div>
          <div className={`menu ${menuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollToSection('sobre-mi')}>Sobre nosotros</button>
            <button onClick={() => scrollToSection('servicios')}>Servicios</button>
            <button onClick={() => scrollToSection('portfolio')}>Portafolio</button>
            <button onClick={() => scrollToSection('testimonials')}>Testimonios</button>
            <button onClick={() => scrollToSection('contact')}>Contacto</button>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
