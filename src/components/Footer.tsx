import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 text-center sm:text-left">
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-2xl font-bold mb-4 sm:mb-4">Anderson Gutierrez</h3>
            <p className="text-gray-300 mb-6 sm:mb-6 leading-relaxed text-base sm:text-base">
              Personal Trainer especializado em qualidade de vida, emagrecimento e ganho de massa muscular. 
              Adaptando o treino de acordo com sua rotina!
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-4">
              <a
                href="https://wa.me/5511996400213"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 sm:p-3 rounded-full transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://instagram.com/andersongutierrezpersonal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 p-3 sm:p-3 rounded-full transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-lg font-semibold mb-4 sm:mb-4">Contato</h4>
            <div className="space-y-3 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-3">
                <Phone size={16} className="text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-base sm:text-base">(11) 9 9640-0213</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-3">
                <Mail size={16} className="text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-base sm:text-base break-all">andersongutiedfisica@gmail.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-3">
                <MapPin size={16} className="text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-base sm:text-base">São Paulo - SP</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-lg font-semibold mb-4 sm:mb-4">Serviços</h4>
            <ul className="space-y-2 sm:space-y-2 text-gray-300 text-base sm:text-base">
              <li>Personal Training</li>
              <li>Treino Individual</li>
              <li>Treino em Dupla</li>
              <li>Avaliação Física</li>
              <li>Anamnese</li>
              <li>Emagrecimento</li>
              <li>Hipertrofia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 sm:mt-12 pt-8 sm:pt-8 text-center">
          <p className="text-gray-400 text-base sm:text-base">
            © 2025 Anderson Gutierrez Personal Trainer. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm sm:text-sm mt-2">
            CREF 194698-G/SP | Transformando vidas através do fitness
          </p>
          <p className="text-gray-500 text-xs sm:text-xs mt-2">
            Desenvolvido por Gabriel dos Santos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;