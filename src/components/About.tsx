import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-16 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 sm:mb-6">
            Sobre Anderson Gutierrez
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-12 items-center mb-16 sm:mb-16">
          <div>
            <h3 className="text-2xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-6">Minha Missão</h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-6">
              Ensinar o caminho a seguir de acordo com seus objetivos e metas de forma humanizada, 
              entendendo que cada indivíduo precisa adaptar a vida fitness ao seu dia a dia. 
              Alinhando a ciência e o trabalho personalizado para garantir o sucesso em cada etapa. 
              Acredito que cada pessoa é única e merece um programa exclusivo que respeite suas 
              limitações e potencialize seus resultados.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Especializado em emagrecimento, ganho de massa muscular, condicionamento físico e 
              melhoria da qualidade de vida. Meu foco é criar uma experiência transformadora que 
              vai muito além da academia.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-6 sm:p-6 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 p-3 sm:p-3 rounded-full w-fit mx-auto mb-4 sm:mb-4">
                <Award className="text-orange-600" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2 text-base sm:text-base">CREF</h4>
              <p className="text-gray-600 text-sm sm:text-sm">194698-G/SP</p>
            </div>
            
            <div className="bg-white p-6 sm:p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-3 sm:p-3 rounded-full w-fit mx-auto mb-4 sm:mb-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2 text-base sm:text-base">10 Anos</h4>
              <p className="text-gray-600 text-sm sm:text-sm">De experiência</p>
            </div>
            
            <div className="bg-white p-6 sm:p-6 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 p-3 sm:p-3 rounded-full w-fit mx-auto mb-4 sm:mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2 text-base sm:text-base">+50 Alunos</h4>
              <p className="text-gray-600 text-sm sm:text-sm">Vidas transformadas</p>
            </div>
            
            <div className="bg-white p-6 sm:p-6 rounded-xl shadow-lg text-center">
              <div className="bg-red-100 p-3 sm:p-3 rounded-full w-fit mx-auto mb-4 sm:mb-4">
                <Heart className="text-red-600" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2 text-base sm:text-base">Paixão</h4>
              <p className="text-gray-600 text-sm sm:text-sm">Levar conhecimento e transformar vidas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;