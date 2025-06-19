import React from 'react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: './images/anderson-1.jpg',
      alt: 'Anderson - Treino personalizado'
    },
    {
      id: 2,
      url: './images/anderson-2.jpg',
      alt: 'Anderson - Orientação profissional'
    },
    {
      id: 3,
      url: './images/anderson-3.jpg',
      alt: 'Anderson - Equipamentos modernos'
    },
    {
      id: 4,
      url: './images/anderson-4.jpg',
      alt: 'Anderson - Treino funcional'
    },
    {
      id: 5,
      url: './images/anderson-5.jpeg',
      alt: 'Anderson - Personal training'
    },
    {
      id: 6,
      url: './images/anderson-6.jpeg',
      alt: 'Anderson - Acompanhamento técnico'
    },
    {
      id: 7,
      url: './images/anderson-7.jpeg',
      alt: 'Anderson - Resultados reais'
    },
    {
      id: 8,
      url: './images/anderson-8.jpeg',
      alt: 'Anderson - Metodologia aplicada'
    },
    {
      id: 9,
      url: './images/anderson-9.jpeg',
      alt: 'Anderson - Transformação de vidas'
    }
  ];

  return (
    <section id="galeria" className="py-16 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 sm:mb-6">
            Galeria de Treinos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns momentos dos nossos treinos e o ambiente onde você 
            vai alcançar seus objetivos
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div className={`relative bg-gray-50 ${
                index === 0 ? 'aspect-[3/4]' : 'aspect-[3/4]'
              }`}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full ${
                    index === 4 ? 'object-cover object-center' : 'object-cover'
                  }`}
                  style={index === 4 ? { objectPosition: 'center 20%' } : {}}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-base">
            Acompanhe mais conteúdos no meu{' '}
            <a
              href="https://instagram.com/andersongutierrezpersonal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;