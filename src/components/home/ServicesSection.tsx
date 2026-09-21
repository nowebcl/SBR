import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  BarChart3, 
  UserCheck, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight,
  Home
} from 'lucide-react';

interface ServicesSectionProps {
  onScheduleVisit: () => void;
  onAddListing: () => void;
  onExploreProperties: () => void;
}

const services = [
  {
    id: 'compra-venta-arriendo',
    number: '01',
    title: 'Compra, Venta y Arriendo de Propiedades',
    description: 'Gestión integral y comercialización estratégica de casas, departamentos, terrenos y oficinas en Talca y el Maule, con difusión en los principales portales de Chile.',
    icon: Home,
    actionText: 'Explorar Propiedades',
    actionType: 'explore',
    popular: true,
    highlight: 'Servicio Principal'
  },
  {
    id: 'valorizacion',
    number: '02',
    title: 'Valorización de Bienes Raíces',
    description: 'Tasación técnica y comercial precisa basada en valores reales de mercado, análisis comparativo de oferta y demanda regional para fijar el precio óptimo.',
    icon: TrendingUp,
    actionText: 'Solicitar Tasación',
    actionType: 'schedule',
    popular: false,
    highlight: 'Tasación Técnica'
  },
  {
    id: 'evaluacion-inversion',
    number: '03',
    title: 'Evaluación de Inversión o Desinversión',
    description: 'Estudios de rentabilidad (Cap Rate), plusvalía proyectada y asesoramiento estratégico para adquisición o liquidación patrimonial eficiente.',
    icon: BarChart3,
    actionText: 'Asesoría en Inversión',
    actionType: 'schedule',
    popular: false,
    highlight: 'Alta Rentabilidad'
  },
  {
    id: 'evaluacion-comprador',
    number: '04',
    title: 'Asesoría en Evaluación de Potencial Comprador',
    description: 'Filtro riguroso y calificación de interesados, verificación comercial, capacidad de pago y pre-aprobación hipotecaria para proteger tu patrimonio.',
    icon: UserCheck,
    actionText: 'Publicar con Filtro Seguro',
    actionType: 'addListing',
    popular: false,
    highlight: 'Máxima Seguridad'
  },
  {
    id: 'oportunidades-negocio',
    number: '05',
    title: 'Desarrollo de Oportunidades de Negocio',
    description: 'Identificación y estructuración de paños inmobiliarios, loteos de parcelas, desarrollos habitacionales y comerciales en sectores de gran expansión.',
    icon: Briefcase,
    actionText: 'Ver Oportunidades',
    actionType: 'explore',
    popular: false,
    highlight: 'Expansión Maule'
  },
  {
    id: 'analisis-riesgo',
    number: '06',
    title: 'Análisis de Transacción y Riesgo Inherente',
    description: 'Diagnóstico jurídico preventivo, estudio de títulos de dominio, revisión de gravámenes y mitigación de contingencias legales antes del cierre notarial.',
    icon: ShieldCheck,
    actionText: 'Consultar con Expertos',
    actionType: 'schedule',
    popular: false,
    highlight: 'Cierre Notarial Seguro'
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onScheduleVisit,
  onAddListing,
  onExploreProperties
}) => {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-sbr-blue-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-sbr-blue">
            <Building2 className="w-4 h-4" />
            <span>Servicios, Asesorías y Gestión • SBR.cl</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nuestros Servicios Especializados en Bienes Raíces
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Ofrecemos soluciones integrales y asesoría experta en Talca y la Región del Maule con rigurosidad técnica, legal y comercial.
          </p>
        </div>

        {/* 6 Services Grid (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative bg-white rounded-2xl p-7 lg:p-8 shadow-sbr-card hover:shadow-sbr-hover transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between border ${
                  service.popular ? 'border-sbr-orange' : 'border-slate-100'
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 right-6 bg-sbr-orange text-white text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                    {service.highlight}
                  </span>
                )}

                <div>
                  {/* Top row with icon & number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-sbr-blue-50 text-sbr-blue flex items-center justify-center transition-colors group-hover:bg-sbr-orange-50 group-hover:text-sbr-orange">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-200">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (service.actionType === 'addListing') {
                        onAddListing();
                      } else if (service.actionType === 'schedule') {
                        onScheduleVisit();
                      } else {
                        onExploreProperties();
                      }
                    }}
                    className="w-full inline-flex items-center justify-between text-sbr-blue hover:text-sbr-orange font-bold text-xs sm:text-sm transition-colors py-1 group"
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with SBR Contact Callout */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">¿Requieres un servicio o asesoría personalizada para tu proyecto?</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Conversemos directamente con nuestro equipo de corredores y tasadores en Talca.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/56992990961?text=Hola%20SBR.cl,%20deseo%20consultar%20por%20sus%20servicios%20inmobiliarios."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-sbr-orange hover:bg-sbr-orange-hover text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all hover:shadow-sbr-orange/30 transform hover:-translate-y-0.5"
            >
              <span>WhatsApp Directo +56 9 9299 0961</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
