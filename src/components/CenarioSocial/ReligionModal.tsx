import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ReligionData } from './ReligionCard';

interface ReligionModalProps {
  religion: ReligionData | null;
  isOpen: boolean;
  onClose: () => void;
  additionalInfo: {
    [key: string]: {
      history: string;
      figures: { name: string; role: string; description: string }[];
      practices: string[];
      hasAudio?: boolean;
    };
  };
}

export default function ReligionModal({ 
  religion, 
  isOpen, 
  onClose,
  additionalInfo 
}: ReligionModalProps) {
  if (!religion) return null;
  
  const info = additionalInfo[religion.id];
  
  // Create refs for focus trap
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);
  
  // Handle ESC key to close modal and focus management
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      
      // Focus trap implementation
      if (e.key === 'Tab' && isOpen && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        // If shift+tab and on first element, move to last element
        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } 
        // If tab and on last element, move to first element
        else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Focus management - when modal opens, focus the close button
    if (isOpen) {
      // Prevent scrolling of background content
      document.body.style.overflow = 'hidden';
      
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="fixed inset-y-0 right-0 max-w-md w-full sm:w-4/5 md:w-3/5 lg:max-w-md bg-white shadow-xl z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className={`p-4 sm:p-6 ${religion.color}`}>
              <div className="flex justify-between items-center">
                <h2 id="modal-title" className="text-2xl font-bold text-white">{religion.name}</h2>
                <button 
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-70"
                  aria-label="Fechar"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-white/90 mt-2">{religion.followers}</p>
            </div>
            
            <div className="p-4 sm:p-6">
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Dogma Central</h3>
                <p>{religion.dogma}</p>
              </section>
              
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-3">História</h3>
                <p>{info.history}</p>
              </section>
              
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Figuras Importantes</h3>
                <div className="space-y-4">
                  {info.figures.map((figure, index) => (
                    <div key={index} className="border-l-4 border-gray-300 pl-4">
                      <h4 className="font-medium">{figure.name}</h4>
                      <p className="text-sm text-gray-600 mb-1">{figure.role}</p>
                      <p>{figure.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Práticas</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {info.practices.map((practice, index) => (
                    <li key={index}>{practice}</li>
                  ))}
                </ul>
              </section>
              
              {info.hasAudio && (
                <section className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Áudio</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="mb-2 text-sm">15 minutos com Toninha.mp3</p>
                    <audio 
                      controls 
                      className="w-full" 
                      aria-label="Áudio: 15 minutos com Toninha"
                    >
                      <source src="#" type="audio/mpeg" />
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                  </div>
                </section>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}