import React from 'react';
import { Search, MapPin, Home, DollarSign, Bed, RotateCcw } from 'lucide-react';
import { FilterState, OperationType } from '../../types';

interface PropertySearchBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onResetFilters: () => void;
  onSearch: () => void;
}

export const PropertySearchBar: React.FC<PropertySearchBarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  onSearch
}) => {
  return (
    <div className="relative z-30 max-w-6xl mx-auto px-3 sm:px-6 -mt-8 sm:-mt-12 w-full">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-5 lg:p-6 w-full">
        
        {/* Operation Tabs (Venta / Arriendo / Todas) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-4 sm:mb-5 border-b border-slate-100">
          {(['Todos', 'Venta', 'Arriendo'] as const).map((op) => (
            <button
              key={op}
              onClick={() => onFilterChange({ operation: op as OperationType | 'Todos' })}
              className={`shrink-0 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filters.operation === op
                  ? 'bg-sbr-orange text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {op === 'Todos' ? 'Todas' : `En ${op}`}
            </button>
          ))}
        </div>

        {/* Filter Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Comuna / Ubicación */}
          <div className="space-y-1.5">
            <label className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-sbr-orange" />
              <span>Comuna / Zona</span>
            </label>
            <select
              value={filters.comuna}
              onChange={(e) => onFilterChange({ comuna: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-sbr-blue focus:bg-white transition-colors"
            >
              <option value="">Todas las Zonas</option>
              <option value="Las Rastras">Las Rastras (Talca Oriente)</option>
              <option value="San Miguel">Huertos de San Miguel</option>
              <option value="Centro">Centro de Talca</option>
              <option value="San Clemente">San Clemente / Pehuenche</option>
              <option value="Pencahue">Pencahue / Maule Valle</option>
              <option value="Constitución">Constitución (Costa)</option>
            </select>
          </div>

          {/* Tipo de Propiedad */}
          <div className="space-y-1.5">
            <label className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Home className="w-3.5 h-3.5 text-sbr-blue" />
              <span>Tipo de Propiedad</span>
            </label>
            <select
              value={filters.propertyType}
              onChange={(e) => onFilterChange({ propertyType: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-sbr-blue focus:bg-white transition-colors"
            >
              <option value="">Cualquier Tipo</option>
              <option value="Casa">Casas</option>
              <option value="Departamento">Departamentos</option>
              <option value="Penthouse">Penthouses</option>
              <option value="Oficina">Oficinas Corporativas</option>
              <option value="Parcela">Parcelas de Agrado</option>
            </select>
          </div>

          {/* Rango de Precio */}
          <div className="space-y-1.5">
            <label className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
              <span>Rango de Precio</span>
            </label>
            <select
              value={filters.maxPrice}
              onChange={(e) => onFilterChange({ maxPrice: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-sbr-blue focus:bg-white transition-colors"
            >
              <option value="">Cualquier Precio</option>
              <option value="10000">Hasta UF 10.000 / $3M</option>
              <option value="15000">Hasta UF 15.000</option>
              <option value="20000">Hasta UF 20.000</option>
              <option value="30000">Hasta UF 30.000</option>
            </select>
          </div>

          {/* Dormitorios */}
          <div className="space-y-1.5">
            <label className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Bed className="w-3.5 h-3.5 text-indigo-500" />
              <span>Dormitorios Mínimos</span>
            </label>
            <select
              value={filters.bedrooms}
              onChange={(e) => onFilterChange({ bedrooms: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-sbr-blue focus:bg-white transition-colors"
            >
              <option value="">Cualquier Cantidad</option>
              <option value="1">1+ Dormitorio</option>
              <option value="2">2+ Dormitorios</option>
              <option value="3">3+ Dormitorios</option>
              <option value="4">4+ Dormitorios</option>
              <option value="5">5+ Dormitorios</option>
            </select>
          </div>

        </div>

        {/* Buttons Row */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <button
            onClick={onResetFilters}
            className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-sbr-orange transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restablecer Filtros</span>
          </button>

          <button
            onClick={onSearch}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-sbr-blue hover:bg-sbr-blue-hover text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:shadow-sbr-blue/30 transform hover:-translate-y-0.5"
          >
            <Search className="w-4 h-4" />
            <span>Buscar Propiedades</span>
          </button>
        </div>

      </div>
    </div>
  );
};
