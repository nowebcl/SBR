import React, { useState, useEffect } from 'react';
import { X, PlusCircle, CheckCircle2, User, Phone, Mail } from 'lucide-react';

interface AddListingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddListingModal: React.FC<AddListingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [operation, setOperation] = useState('Venta');
  const [propertyType, setPropertyType] = useState('Departamento');
  const [comuna, setComuna] = useState('Las Rastras, Talca');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden z-10 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-sbr-orange/15 text-sbr-orange rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">¡Solicitud de Publicación Recibida!</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
              Gracias, <strong className="text-slate-800">{name}</strong>. Nuestro equipo de captaciones de SBR.cl te contactará al <strong className="text-slate-800">{phone}</strong> para agendar la sesión fotográfica y la tasación comercial.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 bg-sbr-orange hover:bg-sbr-orange-hover text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow"
            >
              Finalizar
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-sbr-orange uppercase tracking-wider">Publicar con SBR.cl</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Publica tu Inmueble con Nosotros</h3>
              <p className="text-xs text-slate-500 mt-1">
                Llegamos a miles de compradores calificados mediante marketing multicanal y fotografía 3D.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre Completo *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre y apellido"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-orange text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Teléfono Móvil *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 9999 8888"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-orange text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Correo Electrónico *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="tucorreo@dominio.cl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-orange text-slate-800"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Operación</label>
                  <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                    className="w-full py-2.5 px-3 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-orange text-slate-800 bg-white"
                  >
                    <option value="Venta">Deseo Vender</option>
                    <option value="Arriendo">Deseo Arrendar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Tipo de Inmueble</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full py-2.5 px-3 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-orange text-slate-800 bg-white"
                  >
                    <option value="Departamento">Departamento</option>
                    <option value="Casa">Casa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Oficina">Oficina</option>
                    <option value="Parcela">Parcela / Terreno</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Comuna *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Las Rastras, Huertos de San Miguel, San Clemente..."
                    value={comuna}
                    onChange={(e) => setComuna(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-orange text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Dirección Referencial</label>
                  <input
                    type="text"
                    placeholder="Calle / Sector"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-orange text-slate-800"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-sbr-orange hover:bg-sbr-orange-hover text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:shadow-sbr-orange/30 flex items-center justify-center space-x-2"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Solicitar Publicación & Tasación</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
