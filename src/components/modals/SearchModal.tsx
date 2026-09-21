import React, { useState, useEffect } from 'react';
import { X, Search, MapPin, ArrowRight } from 'lucide-react';
import { Property } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  properties: Property[];
  onClose: () => void;
  onSelectProperty: (property: Property) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  properties,
  onClose,
  onSelectProperty
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = searchTerm.trim() === ''
    ? properties.slice(0, 4)
    : properties.filter((p) => {
        const query = searchTerm.toLowerCase();
        return (
          p.title.toLowerCase().includes(query) ||
          p.location.comuna.toLowerCase().includes(query) ||
          p.location.address.toLowerCase().includes(query) ||
          p.propertyType.toLowerCase().includes(query) ||
          p.operation.toLowerCase().includes(query) ||
          p.features.some((f) => f.toLowerCase().includes(query))
        );
      });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
      >
        {/* Search input header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center space-x-3">
          <Search className="w-5 h-5 text-sbr-orange shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar por comuna, tipo (casa, depto), o características..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 text-base text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
            {searchTerm ? `Resultados para "${searchTerm}" (${results.length})` : 'Propiedades Sugeridas'}
          </p>

          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">No encontramos propiedades que coincidan con tu búsqueda.</p>
              <p className="text-xs mt-1">Prueba con palabras como "Las Rastras", "San Miguel", o "Parcela".</p>
            </div>
          ) : (
            results.map((prop) => (
              <div
                key={prop.id}
                onClick={() => {
                  onClose();
                  onSelectProperty(prop);
                }}
                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200 group"
              >
                <img
                  src={prop.images[0]}
                  alt={prop.title}
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold text-sbr-orange uppercase tracking-wider">
                      {prop.operation} • {prop.propertyType}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-sbr-blue transition-colors">
                    {prop.title}
                  </h4>
                  <div className="flex items-center space-x-1 text-xs text-slate-500">
                    <MapPin className="w-3 h-3 text-sbr-orange" />
                    <span>{prop.location.comuna}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-extrabold text-sbr-orange block">
                    {prop.operation === 'Venta' ? `UF ${prop.priceUF.toLocaleString('es-CL')}` : `$${prop.priceCLP.toLocaleString('es-CL')}`}
                  </span>
                  <span className="text-xs text-sbr-blue group-hover:underline inline-flex items-center space-x-0.5">
                    <span>Ver</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
