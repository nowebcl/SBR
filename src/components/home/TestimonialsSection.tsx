import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-sbr-orange-50 px-3.5 py-1.5 rounded-full text-xs font-bold text-sbr-orange">
            <MessageSquare className="w-4 h-4" />
            <span>Opiniones Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lo que Dicen Quienes Confiaron en SBR.cl
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            La satisfacción y tranquilidad de nuestros clientes en cada firma de escritura es nuestro mayor testimonio.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-sbr-card border border-slate-100 flex flex-col justify-between relative group hover:border-sbr-blue transition-colors"
            >
              <Quote className="w-10 h-10 text-sbr-blue/15 absolute top-6 right-6" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sbr-orange"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-sbr-blue font-medium">{item.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
