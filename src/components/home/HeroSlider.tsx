import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, ArrowRight, Calendar } from 'lucide-react';

interface HeroSliderProps {
  onExploreProperties: () => void;
  onScheduleVisit: () => void;
}

const slides = [
  {
    id: 1,
    tag: 'SBR.cl • Servicios, Asesorías y Gestión',
    title: 'Encuentra el Hogar de tus Sueños en Talca y el Maule',
    description: 'Propiedades exclusivas en Las Rastras, Huertos de San Miguel, San Clemente y los sectores con mayor plusvalía de la región.',
    priceText: 'Desde UF 2.800 hasta UF 25.000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    badge: '15+ Años de Trayectoria'
  },
  {
    id: 2,
    tag: 'Pasión por el Cliente • Inversión • Resultado',
    title: 'Vende o Arrienda tu Propiedad con Gestión Estratégica',
    description: 'Valorización de bienes raíces, evaluación de inversión y asesoría experta en Talca y la Región del Maule.',
    priceText: 'Más de 1.250 operaciones concretadas',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    badge: 'Confianza y Seguridad'
  }
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onExploreProperties,
  onScheduleVisit
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14 pb-14 sm:pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Info */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center space-x-2 bg-sbr-orange-50 border border-sbr-orange/20 px-3 py-1 rounded-full text-xs font-semibold text-sbr-orange">
              <Home className="w-3.5 h-3.5 text-sbr-orange" />
              <span>{slide.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-slate-900">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2 max-w-lg">
              {slide.description}
            </p>

            {/* Price / Highlight pill */}
            <div className="flex items-center space-x-2.5 text-xs font-bold text-sbr-blue">
              <span className="w-2 h-2 rounded-full bg-sbr-blue animate-ping" />
              <span>{slide.priceText}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onExploreProperties}
                className="inline-flex items-center space-x-1.5 bg-sbr-orange hover:bg-sbr-orange-hover text-white px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-sbr-orange/30 transform hover:-translate-y-0.5"
              >
                <span>Explorar Propiedades</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onScheduleVisit}
                className="inline-flex items-center space-x-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-4.5 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-xs hover:border-sbr-blue"
              >
                <Calendar className="w-3.5 h-3.5 text-sbr-orange" />
                <span>Agendar Asesoría</span>
              </button>
            </div>
          </div>

          {/* Right Column: White Architectural House Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[240px] sm:h-[300px] lg:h-[340px] object-cover transition-all duration-700 hover:scale-105"
              />
              
              {/* Badge overlay on image */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg shadow-sm border border-slate-100 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-800">{slide.badge}</span>
              </div>
            </div>

            {/* Slider Navigation Controls on bottom-right of image */}
            <div className="flex items-center justify-end space-x-2 mt-3">
              <button
                onClick={prevSlide}
                aria-label="Diapositiva anterior"
                className="w-8 h-8 rounded-full bg-white hover:bg-sbr-orange text-slate-700 hover:text-white shadow-xs border border-slate-200 flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex space-x-1.5 px-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Ir a diapositiva ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-5 bg-sbr-orange' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                aria-label="Diapositiva siguiente"
                className="w-8 h-8 rounded-full bg-white hover:bg-sbr-orange text-slate-700 hover:text-white shadow-xs border border-slate-200 flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
