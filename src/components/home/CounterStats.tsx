import React from 'react';
import { Home, Users, Award, ShieldCheck } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: '1.250+',
    label: 'Propiedades Gestionadas',
    sublabel: 'En venta y arriendo en Chile',
    icon: Home,
    color: 'text-sbr-orange'
  },
  {
    id: 2,
    value: '99%',
    label: 'Clientes Satisfechos',
    sublabel: 'Recomiendan nuestro servicio',
    icon: Users,
    color: 'text-sbr-blue'
  },
  {
    id: 3,
    value: '15+',
    label: 'Años de Experiencia',
    sublabel: 'Liderando el mercado inmobiliario',
    icon: Award,
    color: 'text-sbr-orange'
  },
  {
    id: 4,
    value: '35+',
    label: 'Asesores Certificados',
    sublabel: 'Especialistas por comuna y zona',
    icon: ShieldCheck,
    color: 'text-sbr-blue'
  }
];

export const CounterStats: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-14 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="text-center space-y-2.5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  {item.value}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-200">{item.label}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
