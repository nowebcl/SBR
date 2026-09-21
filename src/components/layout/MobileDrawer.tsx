import React from 'react';
import { X, Phone, Mail, MapPin, Calendar, PlusCircle } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleVisit: () => void;
  onAddListing: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onScheduleVisit,
  onAddListing
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <img
            src="/logo.png"
            alt="SBR.cl Logo"
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="py-4 px-6 flex flex-col space-y-4 text-base font-medium text-slate-800">
          <a
            href="#"
            onClick={onClose}
            className="text-sbr-orange hover:text-sbr-orange-hover py-1 transition-colors"
          >
            Inicio
          </a>
          <a
            href="#propiedades"
            onClick={onClose}
            className="hover:text-sbr-blue py-1 transition-colors"
          >
            Propiedades
          </a>
          <a
            href="#nosotros"
            onClick={onClose}
            className="hover:text-sbr-blue py-1 transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#servicios"
            onClick={onClose}
            className="hover:text-sbr-blue py-1 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#planos"
            onClick={onClose}
            className="hover:text-sbr-blue py-1 transition-colors"
          >
            Planos y Distribución
          </a>
          <a
            href="#ciudades"
            onClick={onClose}
            className="hover:text-sbr-blue py-1 transition-colors"
          >
            Zonas Destacadas
          </a>
          <a
            href="#blog"
            onClick={onClose}
            className="hover:text-sbr-blue py-1 transition-colors"
          >
            Guías & Blog
          </a>
          <a
            href="#contacto"
            onClick={onClose}
            className="hover:text-sbr-blue py-1 transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Action Buttons */}
        <div className="p-6 border-t border-slate-100 space-y-3">
          <button
            onClick={() => {
              onClose();
              onScheduleVisit();
            }}
            className="w-full flex items-center justify-center space-x-2 bg-sbr-blue hover:bg-sbr-blue-hover text-white py-2.5 rounded-lg font-semibold text-sm transition-colors shadow"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Visita</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onAddListing();
            }}
            className="w-full flex items-center justify-center space-x-2 bg-sbr-orange hover:bg-sbr-orange-hover text-white py-2.5 rounded-lg font-semibold text-sm transition-colors shadow"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Publicar Propiedad</span>
          </button>
        </div>

        {/* Contact info bottom */}
        <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100 text-xs text-slate-600 space-y-3">
          <div className="flex items-center space-x-2.5">
            <Phone className="w-4 h-4 text-sbr-orange shrink-0" />
            <span>+56 9 9299 0961</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <Mail className="w-4 h-4 text-sbr-orange shrink-0" />
            <span>contacto@sbr.cl</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <MapPin className="w-4 h-4 text-sbr-orange shrink-0" />
            <span>Av. Las Rastras 1240, Talca</span>
          </div>
        </div>
      </div>
    </div>
  );
};
