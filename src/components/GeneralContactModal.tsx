import React, { useState } from 'react';
import { X, MessageCircle, User, Target } from 'lucide-react';

interface GeneralContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GeneralContactModal: React.FC<GeneralContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactType: ''
  });

  const contactTypes = [
    { value: 'avaliacao', label: '🏋️‍♂️ Avaliação física presencial' },
    { value: 'consultoria', label: '💻 Consultoria online personalizada' },
    { value: 'duvidas', label: '💬 Tirar dúvidas gerais' }
  ];

  const generateWhatsAppMessage = () => {
    let message = '';
    
    if (formData.contactType === 'avaliacao') {
      message = `Olá! Meu nome é ${formData.name} e gostaria de mais informações sobre a avaliação física presencial.

Tenho interesse em agendar uma avaliação. Pode me explicar como funciona?

Aguardo seu retorno! 😊

Obrigado(a)!`;
    } else if (formData.contactType === 'consultoria') {
      message = `Olá! Meu nome é ${formData.name} e tenho interesse na consultoria online personalizada.

Gostaria de saber mais detalhes sobre como funciona o treino online e os valores.

Aguardo seu retorno! 💻✨

Obrigado(a)!`;
    } else {
      message = `Olá! Meu nome é ${formData.name} e vi seu trabalho como Personal Trainer.

Gostaria de tirar algumas dúvidas sobre seus serviços e metodologia de trabalho.

Você tem um tempinho para conversar? 😊

Obrigado(a)!`;
    }

    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.contactType) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5511996400213?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      contactType: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="border-b border-gray-200 p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-full">
              <MessageCircle className="text-green-600" size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">
              Entrar em Contato
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>Seu nome *</span>
              </div>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Digite seu nome"
              required
            />
          </div>

          {/* Tipo de contato */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              <div className="flex items-center space-x-2">
                <Target size={16} />
                <span>O que você procura? *</span>
              </div>
            </label>
            <div className="space-y-3">
              {contactTypes.map((type) => (
                <label key={type.value} className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="contactType"
                    value={type.value}
                    checked={formData.contactType === type.value}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactType: e.target.value }))}
                    className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700 flex-1">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

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
              <MessageCircle size={18} />
              <span>Enviar WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GeneralContactModal;