import React, { useState } from 'react';
import { Layers, Bed, Bath, Square, Car, ArrowRight } from 'lucide-react';
import { floorPlansData } from '../../data/floorPlans';

interface FloorPlansSectionProps {
  onScheduleVisit: () => void;
}

export const FloorPlansSection: React.FC<FloorPlansSectionProps> = ({ onScheduleVisit }) => {
  const [activePlanId, setActivePlanId] = useState(floorPlansData[0].id);

  const activePlan = floorPlansData.find((p) => p.id === activePlanId) || floorPlansData[0];

  return (
    <section id="planos" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-sbr-orange-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-sbr-orange">
            <Layers className="w-4 h-4" />
            <span>Planos Arquitectónicos & Distribución</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Distribución Inteligente Pensada para tu Bienestar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Descubre las distintas tipologías y configuraciones de espacio diseñadas con altos estándares de habitabilidad y confort.
          </p>
        </div>

        {/* Plan Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {floorPlansData.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setActivePlanId(plan.id)}
              className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                activePlanId === plan.id
                  ? 'bg-sbr-orange text-white shadow-md transform -translate-y-0.5'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Plan Details Card (Dual Column) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sbr-card border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Specs Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-sbr-blue">
                  Tipología {activePlan.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {activePlan.tagline}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-3">
                  {activePlan.description}
                </p>
              </div>

              {/* Specs Table */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/70 text-sm">
                  <span className="text-slate-500 font-medium flex items-center space-x-2">
                    <Square className="w-4 h-4 text-sbr-orange" />
                    <span>Superficie Total</span>
                  </span>
                  <strong className="text-slate-900 font-bold">{activePlan.totalArea} m²</strong>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/70 text-sm">
                  <span className="text-slate-500 font-medium flex items-center space-x-2">
                    <Bed className="w-4 h-4 text-sbr-orange" />
                    <span>Dormitorios</span>
                  </span>
                  <strong className="text-slate-900 font-bold">{activePlan.bedrooms}</strong>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/70 text-sm">
                  <span className="text-slate-500 font-medium flex items-center space-x-2">
                    <Bath className="w-4 h-4 text-sbr-orange" />
                    <span>Baños Completos</span>
                  </span>
                  <strong className="text-slate-900 font-bold">{activePlan.bathrooms}</strong>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-200/70 text-sm">
                  <span className="text-slate-500 font-medium flex items-center space-x-2">
                    <Square className="w-4 h-4 text-sbr-orange" />
                    <span>Terraza / Balcón</span>
                  </span>
                  <strong className="text-slate-900 font-bold">{activePlan.terraceArea} m²</strong>
                </div>

                <div className="flex items-center justify-between py-1.5 text-sm">
                  <span className="text-slate-500 font-medium flex items-center space-x-2">
                    <Car className="w-4 h-4 text-sbr-orange" />
                    <span>Estacionamientos</span>
                  </span>
                  <strong className="text-slate-900 font-bold">{activePlan.parkings}</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onScheduleVisit}
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-sbr-orange hover:bg-sbr-orange-hover text-white py-3 px-5 rounded-xl font-bold text-sm shadow-md transition-all hover:shadow-sbr-orange/30"
                >
                  <span>Consultar Esta Tipología</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Blueprint Graphic */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 p-4 sm:p-8 flex items-center justify-center shadow-lg group">
                <img
                  src={activePlan.image}
                  alt={`Plano de distribución ${activePlan.name}`}
                  className="w-full h-auto max-h-[420px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Blueprint watermark indicator */}
                <div className="absolute top-6 left-6 bg-sbr-blue/90 text-white text-xs font-bold px-3 py-1 rounded-md backdrop-blur-xs">
                  Plano Referencial SBR.cl
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
