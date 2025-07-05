import React, { useState } from 'react';
import { X, Calendar, Clock, Target, Dumbbell } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'avaliacao' | 'consultoria';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    days: [] as string[],
    times: [] as string[],
    objective: '',
    equipment: [] as string[],
    customEquipment: ''
  });

  const daysOfWeek = [
    { value: 'segunda', label: 'Segunda-feira' },
    { value: 'terca', label: 'Terça-feira' },
    { value: 'quarta', label: 'Quarta-feira' },
    { value: 'quinta', label: 'Quinta-feira' },
    { value: 'sexta', label: 'Sexta-feira' },
    { value: 'sabado', label: 'Sábado' },
    { value: 'domingo', label: 'Domingo' }
  ];

  const timeSlots = [
    '05:30 - 07:00', '07:00 - 08:30', '08:30 - 10:00', '10:00 - 11:30',
    '12:00 - 13:30', '13:30 - 15:00', '15:00 - 16:30', '16:30 - 18:00',
    '18:00 - 19:30', '19:30 - 21:00'
  ];

  const objectives = [
    'Emagrecimento',
    'Ganho de massa muscular (Hipertrofia)',
    'Condicionamento físico',
    'Reabilitação/Fisioterapia',
    'Melhoria da qualidade de vida',
    'Preparação para competição',
    'Outro'
  ];

  const equipmentOptions = [
    'Halteres',
    'Barras',
    'Elásticos/Faixas',
    'Kettlebell',
    'Medicine Ball',
    'Colchonete',
    'Banco',
    'Nenhum equipamento',
    'Outro'
  ];

  const handleDayChange = (day: string) => {
    setFormData(prev => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter(d => d !== day)
        : [...prev.days, day]
    }));
  };

  const handleTimeChange = (time: string) => {
    setFormData(prev => ({
      ...prev,
      times: prev.times.includes(time)
        ? prev.times.filter(t => t !== time)
        : [...prev.times, time]
    }));
  };

  const handleEquipmentChange = (equipment: string) => {
    setFormData(prev => ({
      ...prev,
      equipment: prev.equipment.includes(equipment)
        ? prev.equipment.filter(e => e !== equipment)
        : [...prev.equipment, equipment]
    }));
  };

  const generateWhatsAppMessage = () => {
    const daysText = formData.days.map(day => {
      const dayLabel = daysOfWeek.find(d => d.value === day)?.label;
      return dayLabel;
    }).join(', ');

    const timesText = formData.times.join(', ');
    
    let equipmentText = '';
    if (type === 'consultoria') {
      const selectedEquipment = [...formData.equipment];
      if (formData.equipment.includes('Outro') && formData.customEquipment.trim()) {
        const otherIndex = selectedEquipment.indexOf('Outro');
        selectedEquipment[otherIndex] = `Outro: ${formData.customEquipment}`;
      }
      equipmentText = selectedEquipment.join(', ');
    }

    let message = '';
    
    if (type === 'avaliacao') {
      message = `Olá! Gostaria de agendar uma avaliação física presencial.

📋 *Dados do interessado:*
• Nome: ${formData.name}
• Dias disponíveis: ${daysText}
• Horários de interesse: ${timesText}
• Objetivo principal: ${formData.objective}

Aguardo confirmação da agenda! 😊

Anderson Gutierrez - Personal Trainer`;
    } else {
      message = `Olá! Interessado(a) na consultoria online.

📋 *Dados para o plano personalizado:*
• Nome: ${formData.name}
• Dias disponíveis: ${daysText}
• Horários de interesse: ${timesText}
• Objetivo principal: ${formData.objective}
• Equipamentos disponíveis: ${equipmentText}

Envio o link da chamada após confirmação! 💻✨

Anderson Gutierrez - Personal Trainer`;
    }

    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || formData.days.length === 0 || formData.times.length === 0 || !formData.objective) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (type === 'consultoria' && formData.equipment.length === 0) {
      alert('Por favor, selecione os equipamentos disponíveis.');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5511996400213?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      days: [],
      times: [],
      objective: '',
      equipment: [],
      customEquipment: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-full">
              {type === 'avaliacao' ? (
                <Calendar className="text-orange-600" size={24} />
              ) : (
                <Dumbbell className="text-orange-600" size={24} />
              )}
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              {type === 'avaliacao' ? 'Avaliação Física Presencial' : 'Consultoria Online'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome completo *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          {/* Dias da semana */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Dias disponíveis * (selecione um ou mais)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {daysOfWeek.map((day) => (
                <label key={day.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.days.includes(day.value)}
                    onChange={() => handleDayChange(day.value)}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <span className="text-sm text-gray-700">{day.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Horários */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Horários de interesse * (selecione um ou mais)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <label key={time} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.times.includes(time)}
                    onChange={() => handleTimeChange(time)}
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  />
                  <span className="text-sm text-gray-700">{time}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Objetivo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Objetivo principal *
            </label>
            <select
              value={formData.objective}
              onChange={(e) => setFormData(prev => ({ ...prev, objective: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            >
              <option value="">Selecione seu objetivo</option>
              {objectives.map((objective) => (
                <option key={objective} value={objective}>
                  {objective}
                </option>
              ))}
            </select>
          </div>

          {/* Equipamentos (apenas para consultoria online) */}
          {type === 'consultoria' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Equipamentos disponíveis * (selecione um ou mais)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {equipmentOptions.map((equipment) => (
                  <label key={equipment} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.equipment.includes(equipment)}
                      onChange={() => handleEquipmentChange(equipment)}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <span className="text-sm text-gray-700">{equipment}</span>
                  </label>
                ))}
              </div>
              
              {/* Campo customizado para "Outro" */}
              {formData.equipment.includes('Outro') && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Especifique outros equipamentos:
                  </label>
                  <input
                    type="text"
                    value={formData.customEquipment}
                    onChange={(e) => setFormData(prev => ({ ...prev, customEquipment: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Ex: Corda naval, pneu, etc."
                  />
                </div>
              )}
            </div>
          )}

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Enviar via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;