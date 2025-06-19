import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5511996400213"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default FloatingWhatsApp;