import React from 'react';
import { Mail, MapPin, Phone, PlusCircle } from 'lucide-react';

interface TopBarProps {
  onAddListingClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onAddListingClick }) => {
  return (
    <div className="bg-[#0b132a] text-slate-300 text-xs sm:text-sm border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        {/* Left: Contact Info */}
        <div className="flex items-center space-x-6">
          <a 
            href="mailto:contacto@sbr.cl" 
            className="flex items-center space-x-2 text-slate-300 hover:text-sbr-orange transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-sbr-orange" />
            <span>contacto@sbr.cl</span>
          </a>
          <span className="text-slate-600">|</span>
          <div className="flex items-center space-x-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-sbr-orange" />
            <span>Av. Las Rastras 1240, Talca, Región del Maule</span>
          </div>
          <span className="text-slate-600">|</span>
          <a 
            href="https://wa.me/56992990961?text=Hola%20SBR.cl,%20deseo%20hacer%20una%20consulta." 
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 text-slate-300 hover:text-sbr-orange transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-sbr-orange" />
            <span>+56 9 9299 0961</span>
          </a>
        </div>

        {/* Right: Portal Inmobiliario Link and Add Listing Button */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.portalinmobiliario.com/_CustId_330115137"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-300 hover:text-sbr-orange transition-colors font-medium hidden lg:inline-flex items-center space-x-1"
          >
            <span>Tienda en Portal Inmobiliario</span>
          </a>
          <span className="text-slate-600 hidden lg:inline">|</span>
          <button
            onClick={onAddListingClick}
            className="inline-flex items-center space-x-1.5 bg-sbr-orange hover:bg-sbr-orange-hover text-white px-3.5 py-1 rounded font-semibold text-xs transition-all shadow-sm transform hover:-translate-y-0.5"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Publicar Propiedad</span>
          </button>
        </div>
      </div>
    </div>
  );
};
