import React from 'react';
import { useState } from 'react';
import { Clock, Calendar, MapPin, Phone } from 'lucide-react';
import { useModal } from '../contexts/ModalContext';
import GeneralContactModal from './GeneralContactModal';

const Schedule = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { setModalOpen } = useModal();

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
    setModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setModalOpen(false);
  };

  const presencialSchedule = [
    { day: 'Segunda-feira', time: '05:30 - 10:30' },
    { day: 'Terça-feira', time: '05:30 - 13:30 / 16:30 - 19:30' },
    { day: 'Quarta-feira', time: '05:30 - 10:30' },
    { day: 'Quinta-feira', time: '05:30 - 13:30 / 16:30 - 19:30' },
    { day: 'Sexta-feira', time: '05:30 - 13:30 / 16:30 - 19:30' },
    { day: 'Sábado', time: '08:00 - 12:00' },
    { day: 'Domingo', time: 'Fechado' }
  ];

  const avaliacaoSchedule = [
    { day: 'Segunda-feira', time: '12:00 - 18:00' },
    { day: 'Quarta-feira', time: '12:00 - 18:00' },
    { day: 'Outros dias', time: 'Consultar disponibilidade' }
  ];

  const onlineSchedule = [
    { day: 'Sábado', time: '13:00 - 16:00' },
    { day: 'Outros horários', time: 'Sob consulta' }
  ];

  return (
    <>
      <section id="horarios" className="py-16 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 sm:mb-6">
              Horários de Atendimento
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Flexibilidade de horários para se adequar à sua rotina
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-8 mb-12">
            {/* Treino Presencial */}
            <div className="bg-white p-6 sm:p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-6 sm:mb-6">
                <div className="bg-orange-100 p-3 sm:p-3 rounded-full mr-4 sm:mr-4">
                  <Calendar className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl sm:text-xl font-bold text-slate-800">
                  Treino Presencial
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-3">
                {presencialSchedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-start py-2 sm:py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-slate-700 text-sm sm:text-sm">{item.day}</span>
                    <span className="text-gray-600 text-sm sm:text-sm text-right">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Avaliação Física */}
            <div className="bg-white p-6 sm:p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-6 sm:mb-6">
                <div className="bg-blue-100 p-3 sm:p-3 rounded-full mr-4 sm:mr-4">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl sm:text-xl font-bold text-slate-800">
                  Avaliação Física + Anamnese
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-3">
                {avaliacaoSchedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-start py-2 sm:py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-slate-700 text-sm sm:text-sm">{item.day}</span>
                    <span className="text-gray-600 text-sm sm:text-sm text-right">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treino Online */}
            <div className="bg-white p-6 sm:p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-6 sm:mb-6">
                <div className="bg-green-100 p-3 sm:p-3 rounded-full mr-4 sm:mr-4">
                  <Calendar className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl sm:text-xl font-bold text-slate-800">
                  Anamnese + Treino Online
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-3">
                {onlineSchedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-start py-2 sm:py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-slate-700 text-sm sm:text-sm">{item.day}</span>
                    <span className="text-gray-600 text-sm sm:text-sm text-right">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-8">
            <div className="bg-white p-8 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6 sm:mb-6">
                <div className="bg-purple-100 p-3 sm:p-3 rounded-full mr-4 sm:mr-4">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl sm:text-xl font-bold text-slate-800">
                  Modalidades de Atendimento
                </h3>
              </div>
              <ul className="space-y-3 sm:space-y-3 text-gray-600">
                <li className="flex items-start text-base sm:text-base">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <div>
                    <strong>Treino presencial individual com Personal</strong><br />
                    <span className="text-sm text-gray-500">Duração: 1 hora</span>
                  </div>
                </li>
                <li className="flex items-start text-base sm:text-base">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <div>
                    <strong>Treino presencial em dupla com Personal</strong><br />
                    <span className="text-sm text-gray-500">Duração: 1 hora</span>
                  </div>
                </li>
                <li className="flex items-start text-base sm:text-base">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <div>
                    <strong>Avaliação física presencial + Anamnese</strong><br />
                    <span className="text-sm text-gray-500">Duração: 1 hora (obrigatório para alunos presenciais)</span>
                  </div>
                </li>
                <li className="flex items-start text-base sm:text-base">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0 mt-2"></span>
                  <div>
                    <strong>Treino Online - Aplicativo MFit</strong><br />
                    <span className="text-sm text-gray-500">Opcional marcar avaliação física presencial</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6 sm:space-y-6">
              <div className="bg-white p-8 sm:p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4 sm:mb-4">
                  <div className="bg-green-100 p-3 sm:p-3 rounded-full mr-4 sm:mr-4">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-xl sm:text-xl font-bold text-slate-800">
                    Localização
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">Treinos e Avaliação Física:</p>
                    <p className="text-gray-600 text-base sm:text-base">
                      Academia Cristal Water<br />
                      Avenida Rio Bonito 2222 - Socorro<br />
                      São Paulo/SP
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Sala de atendimento 2 (Academia Cristal Water)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 sm:p-8 rounded-xl text-white text-center">
                <Phone className="mx-auto mb-4 sm:mb-4" size={32} />
                <h3 className="text-xl sm:text-xl font-bold mb-3">
                  Agende sua Avaliação
                </h3>
                <p className="mb-4 sm:mb-4 opacity-90 text-base sm:text-base">
                  Entre em contato para agendar
                </p>
                <button
                  onClick={handleOpenContactModal}
                  className="inline-block bg-white text-orange-600 px-6 sm:px-6 py-3 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base sm:text-base"
                >
                  Chamar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeneralContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
      />
    </>
  );
};

export default Schedule;