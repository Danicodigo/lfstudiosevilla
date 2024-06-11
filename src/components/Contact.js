import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(form);
  };

  return (
    <section id="contact">
      <Helmet>
        <title>Contacto - LF Studio Sevilla</title>
        <meta name="description" content="Ponte en contacto con LF Studio Sevilla para tus necesidades de fotografía profesional. Llámanos, envíanos un email o síguenos en nuestras redes sociales." />
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
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contáctanos</h2>
          <p>
            Nos encantaría saber de ti. Llámanos, envíanos un email o visítanos en nuestras redes sociales. Estamos aquí para capturar tus momentos especiales con nuestras sesiones de fotos y fotografía profesional.
          </p>
          <div className="contact-cards">
            <div className="contact-card">
              <FaPhone size={24} />
              <h3>Teléfono</h3>
              <p>+34 123 456 789</p>
            </div>
            <div className="contact-card">
              <FaEnvelope size={24} />
              <h3>Email</h3>
              <p>info@tuempresa.com</p>
            </div>
            <div className="contact-card">
              <FaInstagram size={24} />
              <h3>Instagram</h3>
              <p>@tuusuario</p>
            </div>
            <div className="contact-card">
              <FaLinkedin size={24} />
              <h3>LinkedIn</h3>
              <p>Tu Empresa</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <label htmlFor="firstName" className={form.firstName ? 'filled' : ''}>Nombre</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
            <label htmlFor="lastName" className={form.lastName ? 'filled' : ''}>Apellido</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className={form.email ? 'filled' : ''}>Email *</label>
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <label htmlFor="phone" className={form.phone ? 'filled' : ''}>Teléfono</label>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message" className={form.message ? 'filled' : ''}>Escribe un mensaje</label>
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
