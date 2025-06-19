import React from 'react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Treino personalizado'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Academia moderna'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Equipamentos profissionais'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Treino funcional'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Personal training'
    },
    {
      id: 6,
      url: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Resultados reais'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover ${
                  index === 0 ? 'h-80 sm:h-96 md:h-full' : 'h-64 sm:h-64'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-base sm:text-base">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;