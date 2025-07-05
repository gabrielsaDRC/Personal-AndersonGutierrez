import React from 'react';
import { ModalProvider } from './contexts/ModalContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Career from './components/Career';
import Tools from './components/Tools';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Gallery />
        <Career />
        <Tools />
        <Schedule />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ModalProvider>
  );
}

export default App;