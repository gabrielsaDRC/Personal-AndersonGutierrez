import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import GeneralContactModal from './GeneralContactModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-4">
            <div className="flex items-center">
              <h1 className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}>
                Anderson Gutierrez
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {['inicio', 'sobre', 'galeria', 'carreira', 'ferramentas', 'horarios'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors hover:text-orange-500 text-sm lg:text-base ${
                    isScrolled ? 'text-slate-600' : 'text-white'
                  }`}
                >
                  {item === 'inicio' ? 'Início' : 
                   item === 'sobre' ? 'Sobre' :
                   item === 'galeria' ? 'Galeria' :
                   item === 'carreira' ? 'Carreira' :
                   item === 'ferramentas' ? 'Ferramentas' :
                   'Horários'}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* WhatsApp button - only visible on desktop */}
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 sm:px-4 sm:py-2 rounded-full font-medium transition-colors items-center space-x-2 text-sm sm:text-base"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </button>
              
              <button
                className="md:hidden p-2 rounded-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <div className="px-4 py-4 space-y-2">
              {['inicio', 'sobre', 'galeria', 'carreira', 'ferramentas', 'horarios'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 text-slate-600 hover:text-orange-500 hover:bg-orange-50 capitalize font-medium rounded-lg transition-colors"
                >
                  {item === 'inicio' ? 'Início' : 
                   item === 'sobre' ? 'Sobre' :
                   item === 'galeria' ? 'Galeria' :
                   item === 'carreira' ? 'Carreira' :
                   item === 'ferramentas' ? 'Ferramentas' :
                   'Horários'}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <GeneralContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Header;