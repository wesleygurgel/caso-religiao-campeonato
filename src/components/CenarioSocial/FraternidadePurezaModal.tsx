import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Sparkles, Music, AlertTriangle, Award, Flame, FileText } from 'lucide-react';
import { ReligionData } from './ReligionCard';

interface FraternidadePurezaModalProps {
  religion: ReligionData;
  isOpen: boolean;
  onClose: () => void;
}

export default function FraternidadePurezaModal({ 
  religion, 
  isOpen, 
  onClose
}: FraternidadePurezaModalProps) {
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
                    <Award className="w-4 h-4 text-white/80 mr-2" />
                    <p className="text-white/90 font-medium">
                      {religion.followers}
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* Content with sections - Vertical layout */}
              <div className="p-5 sm:p-6 text-neutral-800 dark:text-neutral-200 flex flex-col gap-3">
                <motion.section 
                  className="mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mr-3">
                      <Sparkles size={18} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">Dogma Central</h3>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
                    <p className="dark:text-neutral-300">
                      Abstenção de qualquer forma de embriaguez (abstenção ao consumo de substâncias que atinjam a consciência)
                    </p>
                  </div>
                </motion.section>
                
                <motion.section 
                  className="mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mr-3">
                      <User size={18} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">Figuras Importantes</h3>
                  </div>
                  <div className="space-y-3">
                    <motion.div 
                      className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border-l-4 border-primary-300 dark:border-primary-700"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                          <User size={20} className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Juan Vidigal</h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Influenciador e dono da VidiBet</p>
                        </div>
                      </div>
                      <p className="dark:text-neutral-300 text-sm mt-2">
                        Influenciador digital com milhões de seguidores, fisiculturista premiado e proprietário da plataforma de apostas VidiBet. 
                        Associava sua trajetória de superação pessoal aos preceitos da Fraternidade e, em suas redes sociais, exaltava os princípios de pureza e denunciava os "vícios que corrompem o corpo e o espírito".
                      </p>
                      
                      {/* Audio section for Juan Vidigal */}
                      <div className="mt-3 bg-indigo-50 dark:bg-indigo-900/10 p-3 rounded-lg border border-indigo-100 dark:border-indigo-900/20">
                        <p className="mb-2 text-sm font-medium flex items-center">
                          <Music size={14} className="mr-2 text-primary-500 dark:text-primary-400" />
                          15 minutos com Toninha - Entrevista com Juan Vidigal (Pág. 65)
                        </p>
                        <audio 
                          controls 
                          className="w-full" 
                          preload="auto"
                          aria-label="Áudio: 15 minutos com Toninha"
                        >
                          <source src="./audio/15m-toninha.mp3" type="audio/mpeg" />
                          Seu navegador não suporta o elemento de áudio.
                        </audio>
                        
                        <button 
                          onClick={() => window.open('./documents/caso.pdf#page=65', '_blank')}
                          className="btn btn-primary w-full flex items-center justify-center mt-3"
                        >
                          <FileText size={16} className="mr-2" />
                          Ver transcrição na página 65
                        </button>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border-l-4 border-primary-300 dark:border-primary-700"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                          <Award size={20} className="text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Mestre Pablo Gaviria</h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Líder espiritual</p>
                        </div>
                      </div>
                      <p className="dark:text-neutral-300 text-sm mt-2">
                        Um dos fundadores e principal líder da Fraternidade, responsável pela gestão do setor de filantropia 
                        e proprietário do Instituto Esperança e Luz.
                      </p>
                    </motion.div>
                  </div>
                </motion.section>
                
                {/* Ala Radicalizada Section - New section specific to Fraternidade */}
                <motion.section 
                  className="mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 mr-3">
                      <Flame size={18} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">Ala Radicalizada - "Ordem dos Castos"</h3>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-900/20">
                    <div className="flex items-center mb-2">
                      <AlertTriangle size={16} className="text-red-600 dark:text-red-400 mr-2" />
                      <p className="text-sm font-medium text-red-700 dark:text-red-400">Grupo monitorado pelas autoridades</p>
                    </div>
                    <p className="dark:text-neutral-300 text-sm leading-relaxed mb-2">
                      Interpretava os preceitos da Fraternidade de maneira absoluta, sustentando a imposição coletiva do ideal de pureza como forma de "purificação social".
                    </p>
                    <p className="dark:text-neutral-300 text-sm leading-relaxed">
                      Envolvimento em atos como apedrejamento de bares, destruição de carregamentos de bebidas alcoólicas e remédios, e coação física e moral de ex-membros.
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