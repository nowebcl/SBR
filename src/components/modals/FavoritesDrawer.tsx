import React from 'react';
import { X, Trash2, ArrowRight, Heart } from 'lucide-react';
import { Property } from '../../types';

interface FavoritesDrawerProps {
  isOpen: boolean;
  favorites: Property[];
  onClose: () => void;
  onRemoveFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  favorites,
  onClose,
  onRemoveFavorite,
  onSelectProperty
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-sbr-orange fill-sbr-orange" />
            <h3 className="font-bold text-slate-800 text-lg">Propiedades Guardadas</h3>
            <span className="text-xs bg-sbr-orange-50 text-sbr-orange font-bold px-2 py-0.5 rounded-full">
              {favorites.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of favorites */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {favorites.length === 0 ? (
            <div className="py-16 text-center text-slate-400 space-y-3">
              <Heart className="w-12 h-12 mx-auto stroke-[1.5] text-slate-300" />
              <p className="text-sm font-medium">Aún no tienes propiedades guardadas en favoritos.</p>
              <p className="text-xs text-slate-400">
                Haz clic en el corazón de cualquier propiedad para guardarla y revisarla después.
              </p>
            </div>
          ) : (
            favorites.map((prop) => (
              <div
                key={prop.id}
                className="flex items-center space-x-3.5 p-3 rounded-xl border border-slate-200 hover:border-sbr-blue transition-colors bg-white shadow-xs"
              >
                <img
                  src={prop.images[0]}
                  alt={prop.title}
                  className="w-20 h-20 rounded-lg object-cover shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectProperty(prop);
                  }}
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-sbr-orange uppercase tracking-wider">
                    {prop.operation} • {prop.propertyType}
                  </span>
                  <h4 
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                    className="text-sm font-bold text-slate-800 truncate hover:text-sbr-blue cursor-pointer"
                  >
                    {prop.title}
                  </h4>
                  <p className="text-xs text-slate-500 truncate">{prop.location.comuna}</p>
                  <p className="text-xs font-extrabold text-sbr-blue mt-0.5">
                    {prop.operation === 'Venta'
                      ? `UF ${prop.priceUF.toLocaleString('es-CL')}`
                      : `$${prop.priceCLP.toLocaleString('es-CL')}/mes`}
                  </p>
                </div>
                <div className="flex flex-col space-y-1.5 shrink-0">
                  <button
                    onClick={() => onRemoveFavorite(prop.id)}
                    aria-label="Eliminar favorito"
                    className="p-1.5 text-slate-400 hover:text-red-500 rounded-md hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProperty(prop);
                    }}
                    aria-label="Ver propiedad"
                    className="p-1.5 text-slate-400 hover:text-sbr-blue rounded-md hover:bg-sbr-blue-50 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <button
              onClick={onClose}
              className="w-full bg-sbr-blue hover:bg-sbr-blue-hover text-white py-2.5 rounded-xl font-semibold text-sm transition-colors text-center"
            >
              Continuar Navegando
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
