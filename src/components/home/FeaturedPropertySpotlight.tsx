import React from 'react';
import { Bed, Bath, Car, Square, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Property } from '../../types';

interface FeaturedPropertySpotlightProps {
  onQuickView: (property: Property) => void;
  onScheduleVisit: (property: Property) => void;
  property: Property;
}

export const FeaturedPropertySpotlight: React.FC<FeaturedPropertySpotlightProps> = ({
  onQuickView,
  onScheduleVisit,
  property
}) => {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Property Details & Thumbnails */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-sbr-orange bg-sbr-orange-50 px-3 py-1 rounded-md inline-flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sbr-orange" />
                <span>Propiedad Destacada del Mes • Talca</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 leading-tight">
                {property.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                {property.description}
              </p>
            </div>

            {/* Specs Row with Flat Icons (Quarter Style) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-slate-100">
              <div className="flex items-center space-x-3 p-2 bg-slate-50 rounded-xl">
                <Bed className="w-5 h-5 text-sbr-blue shrink-0" />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">{property.specs.bedrooms}</span>
                  <span className="text-[11px] text-slate-500">Dormitorios</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2 bg-slate-50 rounded-xl">
                <Bath className="w-5 h-5 text-sbr-blue shrink-0" />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">{property.specs.bathrooms}</span>
                  <span className="text-[11px] text-slate-500">Baños</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2 bg-slate-50 rounded-xl">
                <Car className="w-5 h-5 text-sbr-blue shrink-0" />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">{property.specs.parkings}</span>
                  <span className="text-[11px] text-slate-500">Estac.</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2 bg-slate-50 rounded-xl">
                <Square className="w-5 h-5 text-sbr-blue shrink-0" />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">{property.specs.areaM2} m²</span>
                  <span className="text-[11px] text-slate-500">Construidos</span>
                </div>
              </div>
            </div>

            {/* 3 Gallery Thumbnails (Quarter Style) */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Galería de la Residencia
              </p>
              <div className="grid grid-cols-3 gap-3">
                {property.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => onQuickView(property)}
                    className="relative rounded-xl overflow-hidden aspect-[4/3] border-2 border-transparent hover:border-sbr-orange cursor-pointer transition-all shadow-xs group"
                  >
                    <img
                      src={img}
                      alt={`Foto ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onScheduleVisit(property)}
                className="inline-flex items-center space-x-2 bg-sbr-orange hover:bg-sbr-orange-hover text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:shadow-sbr-orange/30 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Visita a la Propiedad</span>
              </button>

              <button
                onClick={() => onQuickView(property)}
                className="inline-flex items-center space-x-1.5 bg-slate-100 hover:bg-sbr-blue hover:text-white text-slate-700 px-5 py-3 rounded-xl font-bold text-sm transition-colors"
              >
                <span>Ver Ficha Completa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Featured Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 cursor-pointer group" onClick={() => onQuickView(property)}>
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-[360px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-sbr-orange text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-md">
                UF {property.priceUF.toLocaleString('es-CL')} • En Venta
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-sbr-blue uppercase tracking-wider">Sector Exclusivo</span>
                  <h4 className="text-sm font-bold text-slate-800">{property.location.address}, {property.location.comuna}</h4>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onQuickView(property);
                  }}
                  className="p-2 bg-sbr-blue text-white rounded-xl hover:bg-sbr-blue-hover transition-colors"
                  aria-label="Ver detalles"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
