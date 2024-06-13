// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';
import { Helmet } from 'react-helmet';
import { useMediaQuery } from 'react-responsive';
import foto1 from '../images/foto12x152.webp';
import foto2 from '../images/foto12x153.webp';
import foto3 from '../images/foto12x15.webp';
import foto4 from '../images/foto12x152.webp';
import foto5 from '../images/foto12x153.webp';
import evento1 from '../images/foto60x40.webp';
import evento2 from '../images/foto60x402.webp';
import evento3 from '../images/fotoboda160x40.webp';
import evento4 from '../images/fotoboda260x40.webp';
import evento5 from '../images/foto60x40.webp';

const Testimonials = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const testimonials = [
    {
      text: "Excelente servicio y fotos increíbles!",
      author: "Cliente 1",
      date: "20 de Marzo, 2023",
      description: "Boda en la playa con fotos impresionantes.",
      clientPhoto: foto1,
      eventPhoto: evento1,
    },
    {
      text: "Capturaron todos los momentos especiales de nuestra boda.",
      author: "Cliente 2",
      date: "15 de Abril, 2023",
      description: "Ceremonia en el jardín con una atención al detalle perfecta.",
      clientPhoto: foto2,
      eventPhoto: evento2,
    },
    {
      text: "El equipo fue muy profesional y las fotos resultaron maravillosas.",
      author: "Cliente 3",
      date: "30 de Mayo, 2023",
      description: "Sesión de fotos en el parque con resultados excepcionales.",
      clientPhoto: foto3,
      eventPhoto: evento3,
    },
    {
      text: "Sin duda, los mejores fotógrafos que hemos contratado.",
      author: "Cliente 4",
      date: "12 de Junio, 2023",
      description: "Cobertura completa de nuestra boda desde la preparación hasta la fiesta.",
      clientPhoto: foto4,
      eventPhoto: evento4,
    },
    {
      text: "Gran experiencia, superaron nuestras expectativas.",
      author: "Cliente 5",
      date: "25 de Julio, 2023",
      description: "Fotografías de bodas en interiores con un toque elegante.",
      clientPhoto: foto5,
      eventPhoto: evento5,
    },
  ];

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "LF Studio Sevilla",
              "image": "${foto1}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Tu dirección",
                "addressLocality": "Sevilla",
                "addressRegion": "AN",
                "postalCode": "41001",
                "addressCountry": "ES"
              },
              "telephone": "+34 123 456 789"
            },
            "reviewBody": "Excelente servicio y fotos increíbles!",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Cliente 1"
            }
          }
          `}
        </script>
      </Helmet>
      {isDesktop && (
        <section id="testimonials">
          <div className="container">
            <p className="intro-text">
              Nos sentimos honrados de haber sido parte de los momentos más especiales de nuestros clientes. Aquí tienes algunos de los testimonios que reflejan nuestra dedicación y pasión por la fotografía.
            </p>
            <div className="testimonials-wrapper">
              {testimonials.map((testimonial, index) => (
                <div className={`testimonial-row ${index % 2 === 0 ? 'photo-right' : 'photo-left'}`} key={index}>
                  <div className="testimonial-text">
                    <div className="client-info">
                      <img src={testimonial.clientPhoto} alt={`Foto de ${testimonial.author}`} className="client-photo" />
                      <div>
                        <span className="testimonial-author">{testimonial.author}</span>
                        <p className="testimonial-date">{testimonial.date}</p>
                      </div>
                    </div>
                    <p className="testimonial-text-content">"{testimonial.text}"</p>
                    <p className="testimonial-description">{testimonial.description}</p>
                  </div>
                  <div className="event-photo-container">
                    <img src={testimonial.eventPhoto} alt={`Evento de ${testimonial.author}`} className="event-photo" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonials;
