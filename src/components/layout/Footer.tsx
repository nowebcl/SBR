import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="contacto" className="bg-[#0b132a] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="inline-block">
              <img
                src="/logoblanco.png"
                alt="SBR.cl - Servicios Bienes Raíces"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-sbr-orange font-bold text-xs uppercase tracking-wider">
              Servicios, Asesorías y Gestión
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Especialistas en compra, venta, arriendo, valorización y evaluación de inversiones inmobiliarias en Talca y toda la Región del Maule.
            </p>

            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-sbr-orange shrink-0" />
                <span>Av. Las Rastras 1240, Of. 502, Talca, Región del Maule</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-sbr-orange shrink-0" />
                <span>+56 9 9299 0961</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-sbr-orange shrink-0" />
                <span>contacto@sbr.cl</span>
              </div>
              <div className="pt-1">
                <a
                  href="https://www.portalinmobiliario.com/_CustId_330115137"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-sbr-orange hover:text-white transition-colors bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Ver Tienda en Portal Inmobiliario</span>
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-sbr-orange hover:text-white transition-colors"
                aria-label="Facebook SBR"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-sbr-orange hover:text-white transition-colors"
                aria-label="Instagram SBR"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-sbr-orange hover:text-white transition-colors"
                aria-label="LinkedIn SBR"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-sbr-orange">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#propiedades" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-orange" />
                  <span>Catálogo de Propiedades</span>
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-orange" />
                  <span>Sobre SBR.cl</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-orange" />
                  <span>Nuestros Servicios</span>
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-orange" />
                  <span>Planos de Proyectos</span>
                </a>
              </li>
              <li>
                <a href="#ciudades" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-orange" />
                  <span>Zonas y Comunas</span>
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-orange" />
                  <span>Noticias & Consejos</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Property Types */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-sbr-orange">
              Tipologías
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#propiedades" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-blue" />
                  <span>Departamentos en Venta</span>
                </a>
              </li>
              <li>
                <a href="#propiedades" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-blue" />
                  <span>Casas en Condominio</span>
                </a>
              </li>
              <li>
                <a href="#propiedades" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-blue" />
                  <span>Penthouses Exclusivos</span>
                </a>
              </li>
              <li>
                <a href="#propiedades" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-blue" />
                  <span>Arriendos Amoblados</span>
                </a>
              </li>
              <li>
                <a href="#propiedades" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-blue" />
                  <span>Oficinas Corporativas</span>
                </a>
              </li>
              <li>
                <a href="#propiedades" className="hover:text-white hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5 text-sbr-blue" />
                  <span>Parcelas de Agrado</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base mb-2 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-8 after:h-0.5 after:bg-sbr-orange">
              Boletín Inmobiliario
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Recibe oportunidades de inversión exclusivas antes de que salgan a los portales públicos.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sbr-orange"
                />
                <button
                  type="submit"
                  aria-label="Suscribirse al boletín"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-sbr-orange hover:bg-sbr-orange-hover text-white rounded-md flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center space-x-1.5 text-emerald-400 text-xs mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>¡Gracias por suscribirte a SBR.cl!</span>
                </div>
              )}
            </form>
            <p className="text-[11px] text-slate-500">
              No compartimos tus datos. Puedes cancelar tu suscripción cuando quieras.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} SBR.cl - Servicios Bienes Raíces. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Términos & Condiciones</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
