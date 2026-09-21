import React from 'react';
import { Play } from 'lucide-react';

interface VideoTourSectionProps {
  onOpenVideo: () => void;
}

export const VideoTourSection: React.FC<VideoTourSectionProps> = ({ onOpenVideo }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
          alt="Recorrido virtual SBR"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        {/* Pulsing Play Button */}
        <div className="flex justify-center">
          <button
            onClick={onOpenVideo}
            aria-label="Reproducir tour virtual"
            className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-sbr-orange hover:bg-sbr-orange-hover text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110"
          >
            {/* Ripple rings */}
            <span className="absolute -inset-2 rounded-full bg-sbr-orange/40 animate-ping" />
            <span className="absolute -inset-4 rounded-full bg-sbr-orange/20" />
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1 relative z-10" />
          </button>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-sbr-orange">
            Experiencia Inmersiva • SBR 360°
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Descubre Cada Detalle a Través de Nuestro Recorrido en Video
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Vive la experiencia de recorrer una propiedad exclusiva con tomas aéreas de dron, vistas panorámicas y detalles de arquitectura antes de tu visita presencial.
          </p>
        </div>
      </div>
    </section>
  );
};
