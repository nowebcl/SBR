import React from 'react';
import { Bed, Bath, Square, Car, MapPin, Heart, Eye } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onQuickView: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorite,
  onToggleFavorite,
  onQuickView
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sbr-card hover:shadow-sbr-hover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col border border-slate-100 group">
      
      {/* Property Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer" onClick={() => onQuickView(property)}>
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Operation Badge (Venta / Arriendo) */}
        <div className="absolute top-3.5 left-3.5 flex items-center space-x-2 z-10">
          <span className="bg-sbr-orange text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow">
            En {property.operation}
          </span>
          {property.tag && (
            <span className="bg-sbr-blue text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
              {property.tag}
            </span>
          )}
        </div>

        {/* Quick View Overlay Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(property);
          }}
          className="absolute bottom-3.5 right-3.5 bg-white/90 hover:bg-white text-slate-800 p-2.5 rounded-xl shadow-md transition-all opacity-90 hover:opacity-100 hover:scale-105 z-10"
          title="Vista Rápida"
        >
          <Eye className="w-4 h-4 text-sbr-blue" />
        </button>
      </div>

      {/* Property Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Price */}
          <div className="flex items-baseline justify-between">
            <div className="text-xl sm:text-2xl font-extrabold text-sbr-orange">
              {property.operation === 'Venta'
                ? `UF ${property.priceUF.toLocaleString('es-CL')}`
                : `$${property.priceCLP.toLocaleString('es-CL')}/mes`}
            </div>
            <span className="text-xs font-semibold text-slate-400">
              {property.propertyType}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onQuickView(property)}
            className="text-base sm:text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-sbr-blue transition-colors cursor-pointer"
            title={property.title}
          >
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center space-x-1.5 text-xs text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-sbr-orange shrink-0" />
            <span className="truncate">{property.location.address}, {property.location.comuna}</span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-4 gap-1 py-3 border-y border-slate-100 text-center">
          <div className="space-y-0.5">
            <div className="flex items-center justify-center text-slate-600">
              <Bed className="w-4 h-4 text-sbr-blue mr-1" />
              <span className="text-xs font-bold text-slate-800">{property.specs.bedrooms}</span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase">Dorms</span>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center justify-center text-slate-600">
              <Bath className="w-4 h-4 text-sbr-blue mr-1" />
              <span className="text-xs font-bold text-slate-800">{property.specs.bathrooms}</span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase">Baños</span>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center justify-center text-slate-600">
              <Square className="w-4 h-4 text-sbr-blue mr-1" />
              <span className="text-xs font-bold text-slate-800">{property.specs.areaM2}</span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase">m²</span>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center justify-center text-slate-600">
              <Car className="w-4 h-4 text-sbr-blue mr-1" />
              <span className="text-xs font-bold text-slate-800">{property.specs.parkings}</span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase">Estac.</span>
          </div>
        </div>

        {/* Agent Footer & Favorite Button */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-2.5">
            <img
              src={property.agent.avatar}
              alt={property.agent.name}
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <div className="text-left">
              <p className="text-xs font-semibold text-slate-800 truncate">{property.agent.name}</p>
              <p className="text-[10px] text-slate-400">Asesor SBR</p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => onToggleFavorite(property.id)}
              aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              className={`p-2 rounded-lg transition-colors ${
                isFavorite
                  ? 'bg-red-50 text-red-500'
                  : 'text-slate-400 hover:text-sbr-orange hover:bg-slate-100'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500' : ''}`} />
            </button>

            <button
              onClick={() => onQuickView(property)}
              className="px-3 py-1.5 bg-slate-100 hover:bg-sbr-blue hover:text-white text-slate-700 text-xs font-bold rounded-lg transition-colors"
            >
              Detalles
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
