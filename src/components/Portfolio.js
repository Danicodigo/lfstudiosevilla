import React from 'react';
import Slider from 'react-slick';
import './Portfolio.css';
import { photos } from './photos';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="portfolio">
      <Helmet>
        <title>Portafolio de Fotografía en Sevilla - LF Studio</title>
        <meta name="description" content="Explora el portafolio de LF Studio Sevilla. Fotografía de bodas, sesiones de fotos y eventos especiales en Sevilla. Capturamos momentos únicos con profesionalismo y arte." />
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
      <div className="portfolio-container">
        
        <p className="portfolio-description">
          Aquí puedes ver una selección de nuestro trabajo en fotografía de bodas, sesiones de fotos y eventos especiales en Sevilla. Cada fotografía cuenta una historia única, capturada con profesionalismo y pasión.
        </p>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="photo-slide">
              <div className="photo-wrapper">
                <img src={photo.src} alt={photo.title} className="photo-img"/>
              </div>
              <div className="photo-description">{photo.title}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

export default Portfolio;
