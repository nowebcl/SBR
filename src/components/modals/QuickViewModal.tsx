import React, { useEffect, useState } from 'react';
import { X, Bed, Bath, Square, Car, MapPin, MessageCircle, Calendar } from 'lucide-react';
import { Property } from '../../types';

interface QuickViewModalProps {
  property: Property | null;
  onClose: () => void;
  onScheduleVisit: (property: Property) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  property,
  onClose,
  onScheduleVisit
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    setActiveImageIdx(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa obtener más información sobre la propiedad: "${property.title}" (Ref: ${property.id}) en SBR.cl.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div 
        role="dialog"
        aria-modal="true"
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-full shadow hover:scale-105 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-y-auto">
          {/* Left Column: Media Gallery */}
          <div className="bg-slate-100 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-md bg-slate-200">
                <img
                  src={property.images[activeImageIdx]}
                  alt={property.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-3 left-3 bg-sbr-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow">
                  {property.operation}
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md">
                  Foto {activeImageIdx + 1} de {property.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {property.images.length > 1 && (
                <div className="grid grid-cols-3 gap-2.5 mt-3">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative rounded-lg overflow-hidden aspect-[4/3] border-2 transition-all ${
                        activeImageIdx === idx ? 'border-sbr-orange ring-2 ring-sbr-orange/30' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Vista previa" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Agent info mini card */}
            <div className="mt-6 bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex items-center space-x-3.5">
              <img
                src={property.agent.avatar}
                alt={property.agent.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-sbr-blue"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 font-medium">Asesor Inmobiliario</p>
                <h5 className="text-sm font-bold text-slate-800 truncate">{property.agent.name}</h5>
                <p className="text-xs text-sbr-blue truncate">{property.agent.role}</p>
              </div>
              <a
                href={`https://wa.me/56992990961?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-sm transition-transform hover:scale-105"
                title="Contactar por WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Property Info & Specs */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Badge & Price */}
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 bg-sbr-blue-50 text-sbr-blue rounded-md">
                  {property.propertyType}
                </span>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-sbr-orange">
                    {property.operation === 'Venta' 
                      ? `UF ${property.priceUF.toLocaleString('es-CL')}` 
                      : `$${property.priceCLP.toLocaleString('es-CL')}/mes`}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {property.operation === 'Venta' 
                      ? `Aprox. $${property.priceCLP.toLocaleString('es-CL')} CLP` 
                      : `UF ${property.priceUF}`}
                  </div>
                </div>
              </div>

              {/* Title & Location */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {property.title}
                </h3>
                <div className="flex items-center space-x-1.5 text-slate-500 text-sm mt-1.5">
                  <MapPin className="w-4 h-4 text-sbr-orange shrink-0" />
                  <span>{property.location.address}, {property.location.comuna}, {property.location.city}</span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-4 gap-2 py-3.5 border-y border-slate-100 text-center">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <Bed className="w-4 h-4 text-sbr-blue mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">{property.specs.bedrooms}</span>
                  <span className="text-[10px] text-slate-500 uppercase">Dorms</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <Bath className="w-4 h-4 text-sbr-blue mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">{property.specs.bathrooms}</span>
                  <span className="text-[10px] text-slate-500 uppercase">Baños</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <Square className="w-4 h-4 text-sbr-blue mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">{property.specs.areaM2} m²</span>
                  <span className="text-[10px] text-slate-500 uppercase">Superficie</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <Car className="w-4 h-4 text-sbr-blue mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">{property.specs.parkings}</span>
                  <span className="text-[10px] text-slate-500 uppercase">Estac.</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Descripción
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features Chips */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Equipamiento & Amenidades
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {property.features.map((feat, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onClose();
                  onScheduleVisit(property);
                }}
                className="flex-1 flex items-center justify-center space-x-2 bg-sbr-orange hover:bg-sbr-orange-hover text-white py-2.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all hover:shadow-sbr-orange/30"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Visita</span>
              </button>
              <a
                href={`https://wa.me/56992990961?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl font-bold text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
