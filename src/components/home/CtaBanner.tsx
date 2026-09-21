import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

interface CtaBannerProps {
  onScheduleVisit: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onScheduleVisit }) => {
  return (
    <section className="bg-gradient-to-r from-sbr-orange via-[#FF6D3B] to-sbr-orange-hover text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/10 blur-xl pointer-events-none" />
      <div className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-black/10 blur-xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white">
          Asesoría Inmobiliaria Sin Compromiso
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          ¿Tienes una Propiedad que Quieres Vender o Arrendar al Mejor Precio?
        </h2>

        <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Realizamos una tasación preliminar con análisis comparativo de mercado y te acompañamos durante todo el proceso notarial.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onScheduleVisit}
            className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-xl hover:shadow-black/30 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-sbr-orange" />
            <span>Agendar Asesoría Gratuita</span>
          </button>

          <a
            href="https://wa.me/56992990961?text=Hola%20SBR.cl,%20deseo%20asesor%C3%ADa%20para%20vender/arrendar%20mi%20propiedad."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-sbr-orange hover:bg-slate-50 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
