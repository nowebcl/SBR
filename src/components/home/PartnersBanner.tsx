import React from 'react';
import { Landmark } from 'lucide-react';

const partners = [
  { name: 'Banco de Chile', type: 'Créditos Hipotecarios' },
  { name: 'Banco Santander', type: 'Financiamiento Preferente' },
  { name: 'BCI', type: 'Hipotecario Flexible' },
  { name: 'Scotiabank', type: 'Tasaciones Rápidas' },
  { name: 'Portal Inmobiliario', type: 'Difusión Premium' },
  { name: 'ACOP Chile', type: 'Asociación Gremial' }
];

export const PartnersBanner: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
          Alianzas Estratégicas y Entidades Bancarias en Chile
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-sbr-blue transition-all text-center group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-white shadow-2xs flex items-center justify-center mx-auto mb-2 group-hover:text-sbr-blue text-slate-400 transition-colors">
                <Landmark className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-700 group-hover:text-sbr-blue transition-colors">
                {partner.name}
              </h4>
              <p className="text-[10px] text-slate-400 mt-0.5">
                {partner.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
