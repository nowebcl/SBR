import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, FileText } from 'lucide-react';
import { Property } from '../../types';

interface ScheduleVisitModalProps {
  isOpen: boolean;
  property: Property | null;
  onClose: () => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({
  isOpen,
  property,
  onClose
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00');
  const [notes, setNotes] = useState('');
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
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">¡Visita Solicitada con Éxito!</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
              Muchas gracias, <strong className="text-slate-800">{name}</strong>. Uno de nuestros asesores expertos de SBR.cl se comunicará contigo al <strong className="text-slate-800">{phone}</strong> para coordinar los detalles.
            </p>
            {property && (
              <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600 max-w-xs mx-auto text-left border border-slate-200">
                <p className="font-semibold text-slate-800 truncate">{property.title}</p>
                <p>Fecha propuesta: {date || 'A convenir'} a las {timeSlot} hrs</p>
              </div>
            )}
            <button
              onClick={handleReset}
              className="mt-4 bg-sbr-blue hover:bg-sbr-blue-hover text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow"
            >
              Cerrar y Volver
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-sbr-orange uppercase tracking-wider">SBR.cl Servicios Bienes Raíces</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Agendar Visita Guiada</h3>
              {property ? (
                <p className="text-xs text-sbr-blue font-medium mt-1 truncate">
                  Para: {property.title} ({property.location.comuna})
                </p>
              ) : (
                <p className="text-xs text-slate-500 mt-1">
                  Coordinamos tu visita con un asesor especializado según tu disponibilidad.
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre Completo *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ej: Andrés Morales"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-blue text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Teléfono / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 1234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-blue text-slate-800"
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
                      placeholder="correo@ejemplo.cl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-blue text-slate-800"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Fecha Preferida</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-blue text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Horario Sugerido</label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-blue text-slate-800 bg-white"
                    >
                      <option value="10:00">10:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:30">04:30 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Comentarios o Consultas Específicas</label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    placeholder="¿Tienes alguna duda sobre financiamiento, entrega o disponibilidad?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2 border border-slate-300 rounded-xl focus:outline-none focus:border-sbr-blue text-slate-800"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 bg-sbr-orange hover:bg-sbr-orange-hover text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all hover:shadow-sbr-orange/30"
              >
                Confirmar Solicitud de Visita
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
