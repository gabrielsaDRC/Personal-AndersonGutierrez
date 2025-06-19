import React, { useState } from 'react';
import { Calculator, Activity, Target, ExternalLink } from 'lucide-react';

const Tools = () => {
  const [activeTab, setActiveTab] = useState('imc');
  const [imcData, setImcData] = useState({ weight: '', height: '' });
  const [idealWeightData, setIdealWeightData] = useState({ height: '', gender: 'male' });
  const [caloriesData, setCaloriesData] = useState({ 
    weight: '', 
    height: '', 
    age: '', 
    gender: 'male', 
    activity: '1.2' 
  });

  const calculateIMC = () => {
    const weight = parseFloat(imcData.weight);
    const height = parseFloat(imcData.height) / 100;
    if (weight && height) {
      const imc = weight / (height * height);
      let category = '';
      let color = '';
      
      if (imc < 18.5) {
        category = 'Abaixo do peso';
        color = 'text-blue-600';
      } else if (imc < 25) {
        category = 'Peso normal';
        color = 'text-green-600';
      } else if (imc < 30) {
        category = 'Sobrepeso';
        color = 'text-yellow-600';
      } else {
        category = 'Obesidade';
        color = 'text-red-600';
      }
      
      return { value: imc.toFixed(1), category, color };
    }
    return null;
  };

  const calculateIdealWeight = () => {
    const height = parseFloat(idealWeightData.height);
    if (height) {
      let idealWeight;
      if (idealWeightData.gender === 'male') {
        idealWeight = (height - 100) - ((height - 150) / 4);
      } else {
        idealWeight = (height - 100) - ((height - 150) / 2.5);
      }
      return Math.max(idealWeight, 0).toFixed(1);
    }
    return null;
  };

  const calculateCalories = () => {
    const { weight, height, age, gender, activity } = caloriesData;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const activityFactor = parseFloat(activity);
    
    if (w && h && a) {
      let bmr;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
      } else {
        bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
      }
      const totalCalories = bmr * activityFactor;
      return Math.round(totalCalories);
    }
    return null;
  };

  const tools = [
    {
      id: 'imc',
      icon: Calculator,
      title: 'IMC',
      description: 'Calcule seu Índice de Massa Corporal'
    },
    {
      id: 'peso-ideal',
      icon: Target,
      title: 'Peso Ideal',
      description: 'Descubra seu peso ideal'
    },
    {
      id: 'calorias',
      icon: Activity,
      title: 'Calorias',
      description: 'Calcule suas calorias diárias'
    }
  ];

  const externalTools = [
    {
      title: 'Calculadora do Adipômetro',
      description: 'Calcule sua densidade corporal',
      url: 'https://www.calculadora.app/nutricao/densidade-corporal',
      icon: Calculator
    },
    {
      title: 'Calculadora de Água',
      description: 'Descubra quanto de água você deve beber',
      url: 'https://calculator-online.net/pt/water-intake-calculator/',
      icon: Activity
    },
    {
      title: 'Macros App',
      description: 'App para contar calorias e macros',
      url: 'https://macros.app/pt',
      icon: Target
    }
  ];

  return (
    <section id="ferramentas" className="py-16 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 sm:mb-6">
            Ferramentas Fitness
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Calcule seu IMC, peso ideal e gasto calórico com nossas ferramentas profissionais
          </p>
        </div>

        {/* Ferramentas Externas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {externalTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <tool.icon className="text-orange-600" size={24} />
                </div>
                <ExternalLink className="text-gray-400 group-hover:text-orange-500 transition-colors" size={20} />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">{tool.title}</h3>
              <p className="text-gray-600 text-sm">{tool.description}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-4 mb-8 sm:mb-8">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={`flex items-center space-x-2 px-6 sm:px-6 py-3 sm:py-3 rounded-full font-medium transition-all text-base sm:text-base ${
                activeTab === tool.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <tool.icon size={20} />
              <span>{tool.title}</span>
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          {activeTab === 'imc' && (
            <div className="bg-gray-50 p-8 sm:p-8 rounded-xl">
              <h3 className="text-2xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-6 text-center">
                Calculadora de IMC
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    value={imcData.weight}
                    onChange={(e) => setImcData({ ...imcData, weight: e.target.value })}
                    className="w-full px-4 sm:px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-base"
                    placeholder="Ex: 70"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    value={imcData.height}
                    onChange={(e) => setImcData({ ...imcData, height: e.target.value })}
                    className="w-full px-4 sm:px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-base"
                    placeholder="Ex: 175"
                  />
                </div>
              </div>
              {(() => {
                const result = calculateIMC();
                return result ? (
                  <div className="text-center bg-white p-6 sm:p-6 rounded-lg">
                    <p className="text-3xl sm:text-3xl font-bold text-slate-800 mb-3">
                      IMC: {result.value}
                    </p>
                    <p className={`text-xl sm:text-xl font-semibold ${result.color}`}>
                      {result.category}
                    </p>
                  </div>
                ) : null;
              })()}
            </div>
          )}

          {activeTab === 'peso-ideal' && (
            <div className="bg-gray-50 p-8 sm:p-8 rounded-xl">
              <h3 className="text-2xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-6 text-center">
                Calculadora de Peso Ideal
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    value={idealWeightData.height}
                    onChange={(e) => setIdealWeightData({ ...idealWeightData, height: e.target.value })}
                    className="w-full px-4 sm:px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-base"
                    placeholder="Ex: 175"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Sexo
                  </label>
                  <select
                    value={idealWeightData.gender}
                    onChange={(e) => setIdealWeightData({ ...idealWeightData, gender: e.target.value })}
                    className="w-full px-4 sm:px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-base"
                  >
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                  </select>
                </div>
              </div>
              {(() => {
                const result = calculateIdealWeight();
                return result ? (
                  <div className="text-center bg-white p-6 sm:p-6 rounded-lg">
                    <p className="text-3xl sm:text-3xl font-bold text-slate-800 mb-3">
                      Peso Ideal: {result} kg
                    </p>
                    <p className="text-gray-600 text-base sm:text-base">
                      Baseado na fórmula de Devine
                    </p>
                  </div>
                ) : null;
              })()}
            </div>
          )}

          {activeTab === 'calorias' && (
            <div className="bg-gray-50 p-8 sm:p-8 rounded-xl">
              <h3 className="text-2xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-6 text-center">
                Calculadora de Gasto Calórico
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    value={caloriesData.weight}
                    onChange={(e) => setCaloriesData({ ...caloriesData, weight: e.target.value })}
                    className="w-full px-4 sm:px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-base"
                    placeholder="Ex: 70"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    value={caloriesData.height}
                    onChange={(e) => setCaloriesData({ ...caloriesData, height: e.target.value })}
                    className="w-full px-4 sm:px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-base"
                    placeholder="Ex: 175"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Idade
                  </label>
                  <input
                    type="number"
                    value={caloriesData.age}
                    onChange={(e) => setCaloriesData({ ...caloriesData, age: e.target.value })}
                    className="w-full px-4 sm:px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-base"
                    placeholder="Ex: 30"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Sexo
                  </label>
                  <select
                    value={caloriesData.gender}
                    onChange={(e) => setCaloriesData({ ...caloriesData, gender: e.target.value })}
                    className="w-full px-4 sm:px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-base"
                  >
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-base font-medium text-gray-700 mb-3">
                  Nível de Atividade
                </label>
                <select
                  value={caloriesData.activity}
                  onChange={(e) => setCaloriesData({ ...caloriesData, activity: e.target.value })}
                  className="w-full px-4 sm:px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-base"
                >
                  <option value="1.2">Sedentário</option>
                  <option value="1.375">Levemente ativo</option>
                  <option value="1.55">Moderadamente ativo</option>
                  <option value="1.725">Muito ativo</option>
                  <option value="1.9">Extremamente ativo</option>
                </select>
              </div>
              {(() => {
                const result = calculateCalories();
                return result ? (
                  <div className="text-center bg-white p-6 sm:p-6 rounded-lg">
                    <p className="text-3xl sm:text-3xl font-bold text-slate-800 mb-3">
                      {result} calorias/dia
                    </p>
                    <p className="text-gray-600 text-base sm:text-base">
                      Gasto calórico diário estimado
                    </p>
                  </div>
                ) : null;
              })()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tools;