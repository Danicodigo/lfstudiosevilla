import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroDesktop from './components/HeroDesktop';
import HeroMobile from './components/HeroMobile';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>LF Studio Sevilla - Fotografía Profesional</title>
        <meta name="description" content="LF Studio Sevilla ofrece servicios de fotografía profesional para bodas, bautizos, sesiones familiares e individuales en Sevilla y alrededores. Capturamos tus momentos más especiales con pasión y profesionalismo." />
        <meta name="keywords" content="fotografía, fotógrafo, bodas, fotógrafos cerca de mi, sesión de fotos, fotografía cerca de mi, sesiones de fotos, fotografías boda, fotografías pareja, Sevilla" />
        <meta name="author" content="LF Studio Sevilla" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Header />
      <HeroDesktop />
      <HeroMobile />
      <SobreMi />
      <Servicios />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
