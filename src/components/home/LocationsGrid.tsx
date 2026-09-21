import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { locationsData } from '../../data/locations';

interface LocationsGridProps {
  onSelectLocation: (comuna: string) => void;
}

export const LocationsGrid: React.FC<LocationsGridProps> = ({ onSelectLocation }) => {
  return (
    <section id="ciudades" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-sbr-blue-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-sbr-blue">
            <MapPin className="w-4 h-4" />
            <span>Zonas con Mayor Plusvalía</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explora las Mejores Comunas y Destinos de Chile
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Selecciona tu sector predilecto para ver casas, departamentos y proyectos disponibles de inmediato.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationsData.map((loc) => (
            <div
              key={loc.id}
              onClick={() => onSelectLocation(loc.name.split(' / ')[0])}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sbr-card cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent transition-opacity" />

              {/* Text content bottom */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="self-end">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-sbr-orange transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sbr-orange">
                    {loc.region}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-orange-200 transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {loc.count} propiedades disponibles
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
