import React from 'react';
import { ChevronDown, Dumbbell, Target, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-6 leading-tight">
            Transforme seu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              {' '}corpo{' '}
            </span>
            e sua vida
          </h1>
          
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-8 leading-relaxed">
            Personal Trainer especializado em qualidade de vida, emagrecimento e ganho de massa muscular. 
            Adaptando o treino de acordo com sua rotina!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center mb-12 sm:mb-12">
            <a
              href="https://wa.me/5511996400213"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 sm:px-8 sm:py-4 rounded-full font-semibold text-lg sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Agende sua avaliação física presencial
            </a>
            <a
              href="https://wa.me/5511996400213"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 sm:px-8 sm:py-4 rounded-full font-semibold text-lg sm:text-lg transition-all duration-300"
            >
              Agende sua consultoria e treino online
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-500/20 p-4 sm:p-4 rounded-full mb-4 sm:mb-4">
                <Dumbbell className="text-orange-400" size={28} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base sm:text-base">Treinos Personalizados</h3>
              <p className="text-gray-400 text-sm sm:text-sm">Programa adequado e guiado pela ciência para melhorar seus resultados</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-500/20 p-4 sm:p-4 rounded-full mb-4 sm:mb-4">
                <Target className="text-orange-400" size={28} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base sm:text-base">Resultados Garantidos</h3>
              <p className="text-gray-400 text-sm sm:text-sm">Tudo que a ciência prova que é eficaz, com segurança e metodologia comprovada</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-500/20 p-4 sm:p-4 rounded-full mb-4 sm:mb-4">
                <TrendingUp className="text-orange-400" size={28} />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base sm:text-base">Acompanhamento Total</h3>
              <p className="text-gray-400 text-sm sm:text-sm">Suporte completo, comunicação via WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 sm:bottom-8 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToNext}
          className="text-white animate-bounce hover:text-orange-400 transition-colors"
          aria-label="Rolar para próxima seção"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;