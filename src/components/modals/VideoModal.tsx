import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Video Container */}
      <div className="relative bg-black rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden z-10 aspect-video">
        <button
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video simulation or responsive iframe */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
          title="Tour Virtual de Propiedades SBR.cl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
