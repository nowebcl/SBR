import React, { useState, useEffect } from 'react';
import { Heart, Search, Menu, Calendar } from 'lucide-react';

interface NavbarProps {
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  onScheduleVisit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  favoritesCount,
  onOpenFavorites,
  onOpenSearch,
  onOpenMobileMenu,
  onScheduleVisit
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2.5'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo SBR.cl */}
          <a href="#" className="flex items-center group">
            <img
              src="/logo.png"
              alt="SBR.cl - Servicios Bienes Raíces"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 font-medium text-slate-700 text-[15px]">
            <a href="#" className="text-sbr-orange font-semibold hover:text-sbr-orange transition-colors">
              Inicio
            </a>
            <a href="#propiedades" className="hover:text-sbr-blue transition-colors">
              Propiedades
            </a>
            <a href="#nosotros" className="hover:text-sbr-blue transition-colors">
              Nosotros
            </a>
            <a href="#servicios" className="hover:text-sbr-blue transition-colors">
              Servicios
            </a>
            <a href="#planos" className="hover:text-sbr-blue transition-colors">
              Planos
            </a>
            <a href="#ciudades" className="hover:text-sbr-blue transition-colors">
              Zonas
            </a>
            <a href="#blog" className="hover:text-sbr-blue transition-colors">
              Guías & Blog
            </a>
            <a href="#contacto" className="hover:text-sbr-blue transition-colors">
              Contacto
            </a>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Buscar propiedades"
              className="p-2 rounded-full text-slate-600 hover:text-sbr-blue hover:bg-slate-100 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Favorites Icon with Badge */}
            <button
              onClick={onOpenFavorites}
              aria-label="Ver favoritos"
              className="p-2 rounded-full text-slate-600 hover:text-sbr-orange hover:bg-slate-100 transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute top-0 right-0 bg-sbr-orange text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Quick Consultation CTA */}
            <button
              onClick={onScheduleVisit}
              className="hidden sm:inline-flex items-center space-x-2 bg-sbr-blue hover:bg-sbr-blue-hover text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow-md hover:shadow-sbr-blue/20"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Agendar Visita</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={onOpenMobileMenu}
              aria-label="Abrir menú"
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
