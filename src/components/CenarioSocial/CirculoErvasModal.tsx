import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Leaf } from 'lucide-react';
import { ReligionData } from './ReligionCard';

interface CirculoErvasModalProps {
  religion: ReligionData;
  isOpen: boolean;
  onClose: () => void;
}

export default function CirculoErvasModal({ 
  religion, 
  isOpen, 
  onClose
}: CirculoErvasModalProps) {
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
          {/* Backdrop with blur effect */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal - Centered */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              ref={modalRef}
              className="bg-white dark:bg-neutral-900 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Header with gradient background */}
              <div className={`relative overflow-hidden ${religion.color}`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 -mt-20 -mr-20 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 -mb-16 -ml-16 rounded-full bg-white/5 blur-2xl"></div>
                
                <div className="relative z-10 p-5 sm:p-6">
                  <div className="flex justify-between items-center">
                    <motion.h2 
                      id="modal-title" 
                      className="text-2xl sm:text-3xl font-serif font-bold text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {religion.name}
                    </motion.h2>
                    <motion.button 
                      ref={closeButtonRef}
                      onClick={onClose}
                      className="text-white hover:bg-white/20 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-70"
                      aria-label="Fechar"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X size={20} />
                    </motion.button>
                  </div>
                  <motion.div
                    className="flex items-center mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Leaf className="w-4 h-4 text-white/80 mr-2" />
                    <p className="text-white/90 font-medium">
                      Os fiéis representam cerca de 4% dos habitantes do Estado
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* Content with sections - Vertical layout */}
              <div className="p-5 sm:p-6 text-neutral-800 dark:text-neutral-200 flex flex-col gap-1">
                <motion.section 
                  className="mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mr-3">
                      <Sparkles size={18} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">Dogma Central</h3>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
                    <p className="dark:text-neutral-300">
                      Objetivo central é a busca pela purificação das aflições humanas por meio da prática de rituais envolvendo o consumo de chás medicinais
                    </p>
                  </div>
                </motion.section>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}