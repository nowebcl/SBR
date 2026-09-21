import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Property } from '../../types';
import { PropertyCard } from '../ui/PropertyCard';

interface FeaturedPropertiesProps {
  properties: Property[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onQuickView: (property: Property) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  favorites,
  onToggleFavorite,
  onQuickView
}) => {
  const [activeTab, setActiveTab] = useState<'Todas' | 'Venta' | 'Arriendo' | 'Casa' | 'Departamento'>('Todas');

  const filteredProperties = properties.filter((prop) => {
    if (activeTab === 'Todas') return true;
    if (activeTab === 'Venta' || activeTab === 'Arriendo') return prop.operation === activeTab;
    if (activeTab === 'Casa' || activeTab === 'Departamento') return prop.propertyType === activeTab;
    return true;
  });

  return (
    <section id="propiedades" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 bg-sbr-orange-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-sbr-orange">
              <Sparkles className="w-4 h-4" />
              <span>Portafolio Seleccionado</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Propiedades Exclusivas en Venta y Arriendo
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explora nuestra cartera de inmuebles revisados por nuestro equipo legal y técnico para una transacción 100% segura.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
            {(['Todas', 'Venta', 'Arriendo', 'Casa', 'Departamento'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-sbr-blue text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {tab === 'Todas' ? 'Todas' : tab === 'Venta' ? 'En Venta' : tab === 'Arriendo' ? 'En Arriendo' : `${tab}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-base font-semibold text-slate-700">No encontramos propiedades con estos criterios.</p>
            <p className="text-xs text-slate-400 mt-1">Intenta seleccionar otra categoría o restablecer los filtros de búsqueda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                isFavorite={favorites.includes(prop.id)}
                onToggleFavorite={onToggleFavorite}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
