import React from 'react';
import { GraduationCap, Trophy, Star, Users } from 'lucide-react';

const Career = () => {
  return (
    <section id="carreira" className="py-16 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 sm:mb-6">
            Minha Trajetória
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Uma jornada dedicada ao fitness e à transformação de vidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-12 items-center">
          <div className="space-y-8 sm:space-y-8">
            <div className="flex items-start space-x-4 sm:space-x-4">
              <div className="bg-orange-100 p-3 sm:p-3 rounded-full flex-shrink-0">
                <GraduationCap className="text-orange-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-xl font-semibold text-slate-800 mb-3">
                  Formação Acadêmica
                </h3>
                <p className="text-gray-600 text-base sm:text-base leading-relaxed mb-3">
                  Graduação Bacharelado em Educação física - UFPE/Claretiano
                </p>
                <p className="text-gray-600 text-base sm:text-base leading-relaxed">
                  Pós-Graduação - Alta Performance em Prescrição de Treinos e Exercícios: 
                  Hipertrofia, Saúde e Emagrecimento
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:space-x-4">
              <div className="bg-blue-100 p-3 sm:p-3 rounded-full flex-shrink-0">
                <Trophy className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-xl font-semibold text-slate-800 mb-3">
                  Certificações Internacionais
                </h3>
                <div className="text-gray-600 text-base sm:text-base leading-relaxed space-y-1">
                  <p>• Certificação Internacional nível 1 de Crossfit</p>
                  <p>• Certificação Internacional Les Mills (GRIT, BODYPUMP, BODYATTACK, RPM, Sprint, The Trip)</p>
                  <p>• Curso de Levantamento de Peso (LPO)</p>
                  <p>• Curso de Pilates básico, médio e avançado</p>
                  <p>• Curso de Funcional básico, médio e avançado</p>
                  <p>• Curso de Spinning (Spivi, Velocity, SpinSoul)</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:space-x-4">
              <div className="bg-green-100 p-3 sm:p-3 rounded-full flex-shrink-0">
                <Star className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-xl font-semibold text-slate-800 mb-3">
                  Especializações
                </h3>
                <div className="text-gray-600 text-base sm:text-base leading-relaxed space-y-1">
                  <p>• Emagrecimento, hipertrofia muscular, reabilitação</p>
                  <p>• Treinador de Ciclismo Indoor Les Mills (+1000 professores capacitados e treinados)</p>
                  <p>• Especialista em Ciclismo Indoor (Advanced Training)</p>
                  <p>• Time de Performance da IHRSA 2019</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 sm:space-x-4">
              <div className="bg-purple-100 p-3 sm:p-3 rounded-full flex-shrink-0">
                <Users className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-xl font-semibold text-slate-800 mb-3">
                  Experiência
                </h3>
                <p className="text-gray-600 text-base sm:text-base leading-relaxed">
                  Mais de 10 anos transformando vidas através do fitness. 
                  Atendimento presencial personalizado em São Paulo, Academia Cristal e no 
                  consultório de avaliação física Avenida Rio Bonito 2222 - Socorro - Zona Sul/SP
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/anderson-profile.jpg"
                alt="Anderson Gutierrez Personal Trainer"
                className="w-full h-96 sm:h-96 lg:h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 sm:p-6 rounded-xl shadow-lg max-w-sm">
              <p className="font-semibold text-lg mb-2">
                "Levar conhecimento é meu propósito"
              </p>
              <p className="text-orange-100 text-sm">
                Se eu não faço o melhor, não mereço o melhor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;