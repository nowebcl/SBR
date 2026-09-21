import React from 'react';
import { CheckCircle, ShieldCheck, Award, ArrowRight, Building2 } from 'lucide-react';

interface AboutSectionProps {
  onScheduleVisit: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onScheduleVisit }) => {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage with Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Propiedad de lujo SBR.cl"
                  className="w-full h-[320px] sm:h-[440px] lg:h-[480px] object-cover"
                />
              </div>

              {/* Secondary Overlapping Image */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 h-64 rounded-2xl overflow-hidden shadow-xl z-20 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
                  alt="Asesoría inmobiliaria SBR"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge (SBR Orange & Blue) */}
              <div className="absolute top-4 left-4 sm:top-6 sm:-left-8 z-30 bg-sbr-orange text-white p-3.5 sm:p-5 rounded-2xl shadow-xl max-w-[170px] sm:max-w-[200px]">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">15+</span>
                </div>
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-1 text-white/95">
                  Años de Trayectoria y Confianza Inmobiliaria
                </p>
              </div>

              {/* Decorative Accent element */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-sbr-blue/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Right Column: About SBR Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 bg-sbr-orange-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-sbr-orange">
              <Building2 className="w-4 h-4" />
              <span>SBR.cl • Servicios, Asesorías y Gestión</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Servicios Bienes Raíces en Talca y la Región del Maule
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base leading-relaxed">
              En <strong className="text-slate-800">SBR Propiedades</strong> combinamos un profundo conocimiento del mercado inmobiliario del Maule con un acompañamiento riguroso y personalizado. Guiados por nuestra experiencia y compromiso, asesoramos en cada etapa de compra, venta, arriendo y gestión de activos inmobiliarios en Talca.
            </p>

            {/* SBR 3 Official Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-50 hover:bg-white p-3.5 rounded-xl border border-slate-200/80 transition-shadow hover:shadow-md text-left">
                <span className="text-[10px] uppercase font-black tracking-wider text-sbr-orange block mb-1">Pilar 01</span>
                <h4 className="text-xs font-black text-slate-900 leading-tight">PASIÓN POR EL CLIENTE</h4>
                <p className="text-[11px] text-slate-500 mt-1">Cercanía, escucha activa y atención dedicada a tus necesidades reales.</p>
              </div>

              <div className="bg-slate-50 hover:bg-white p-3.5 rounded-xl border border-slate-200/80 transition-shadow hover:shadow-md text-left">
                <span className="text-[10px] uppercase font-black tracking-wider text-sbr-blue block mb-1">Pilar 02</span>
                <h4 className="text-xs font-black text-slate-900 leading-tight">PASIÓN POR LA INVERSIÓN</h4>
                <p className="text-[11px] text-slate-500 mt-1">Análisis de plusvalía y evaluación estratégica para maximizar rentabilidad.</p>
              </div>

              <div className="bg-slate-50 hover:bg-white p-3.5 rounded-xl border border-slate-200/80 transition-shadow hover:shadow-md text-left">
                <span className="text-[10px] uppercase font-black tracking-wider text-sbr-orange block mb-1">Pilar 03</span>
                <h4 className="text-xs font-black text-slate-900 leading-tight">PASIÓN POR EL RESULTADO</h4>
                <p className="text-[11px] text-slate-500 mt-1">Operaciones ágiles, seguras y al valor óptimo para tu patrimonio.</p>
              </div>
            </div>

            {/* Feature Bullets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle className="w-5 h-5 text-sbr-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Asesoría Legal Integral</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Estudios de títulos, promesas de compraventa y escrituración notarial.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <CheckCircle className="w-5 h-5 text-sbr-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Valorización de Bienes Raíces</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Tasación precisa respaldada por precios reales de cierre en el Maule.</p>
                </div>
              </div>
            </div>

            {/* Testimonial Quote & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/56992990961?text=Hola%20SBR.cl,%20me%20gustar%C3%ADa%20conversar%20sobre%20asesor%C3%ADa%20inmobiliaria."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-sbr-blue hover:bg-sbr-blue-hover text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all hover:shadow-sbr-blue/30 transform hover:-translate-y-0.5"
                >
                  <span>Conversemos... +56 9 9299 0961</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onScheduleVisit}
                  className="inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all"
                >
                  <span>Agendar Asesoría</span>
                </button>
              </div>

              <div className="flex items-center space-x-2.5 text-slate-600 text-xs">
                <ShieldCheck className="w-8 h-8 text-sbr-orange shrink-0" />
                <span>
                  <strong className="text-slate-900 block font-semibold">SBR Propiedades Talca</strong>
                  contacto@sbr.cl • Asesorías & Gestión
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
