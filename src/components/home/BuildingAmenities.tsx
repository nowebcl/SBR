import React from 'react';
import { Car, Waves, ShieldCheck, HeartPulse, BookOpen, BedDouble, Home, Sparkles, ArrowRight } from 'lucide-react';

interface BuildingAmenitiesProps {
  onExploreProperties: () => void;
}

const amenities = [
  { id: 1, title: 'Estacionamientos', icon: Car, tag: 'Subterráneo y visitas' },
  { id: 2, title: 'Piscina Climatizada', icon: Waves, tag: 'Adultos y niños' },
  { id: 3, title: 'Seguridad Privada 24/7', icon: ShieldCheck, tag: 'Control de acceso' },
  { id: 4, title: 'Cercanía a Clínicas', icon: HeartPulse, tag: 'Sector salud' },
  { id: 5, title: 'Espacios Cowork & Sala', icon: BookOpen, tag: 'Salas multiuso' },
  { id: 6, title: 'Dormitorios en Suite', icon: BedDouble, tag: 'Walk-in closets' },
  { id: 7, title: 'Domótica & Smart Home', icon: Home, tag: 'Eficiencia energética' },
  { id: 8, title: 'Juegos Infantiles & Áreas Verdes', icon: Sparkles, tag: 'Entorno familiar' }
];

export const BuildingAmenities: React.FC<BuildingAmenitiesProps> = ({ onExploreProperties }) => {
  return (
    <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Quarter style */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sbr-orange">
            Equipamiento & Amenidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Características de Nuestros Proyectos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Inmuebles seleccionados en Talca con los más altos estándares de confort, seguridad y calidad de vida.
          </p>
        </div>

        {/* 8 Cards Grid (Quarter layout: col-lg-3 col-md-4 col-sm-6 col-6) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {amenities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={onExploreProperties}
                className="group bg-[#F8FAFC] hover:bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/70 hover:border-sbr-orange hover:shadow-sbr-hover transition-all duration-300 text-center flex flex-col items-center justify-between cursor-pointer transform hover:-translate-y-1"
              >
                {/* Icon in circle */}
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-sbr-orange-50 text-sbr-orange flex items-center justify-center shadow-xs mb-4 transition-colors">
                  <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                </div>

                {/* Title */}
                <div>
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-sbr-orange transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {item.tag}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="mt-4 w-7 h-7 rounded-full bg-slate-200/70 group-hover:bg-sbr-orange text-slate-500 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
