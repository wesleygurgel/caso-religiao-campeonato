import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, BookOpen, Sparkles, Calendar, Award, Leaf, Droplet } from 'lucide-react';
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
                      {religion.followers}
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
                      {religion.dogma}
                    </p>
                  </div>
                </motion.section>
                
                <motion.section 
                  className="mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mr-3">
                      <User size={18} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">Figuras Importantes</h3>
                  </div>
                  <div className="space-y-3">
                    <motion.div 
                      className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border-l-4 border-emerald-300 dark:border-emerald-700"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                          <User size={20} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Dona Toninha</h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Matriarca e curandeira</p>
                        </div>
                      </div>
                      <p className="dark:text-neutral-300 text-sm mt-2">
                        Idosa respeitada por seu vasto conhecimento sobre ervas medicinais e rituais de cura. Lidera as cerimônias principais do Círculo.
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border-l-4 border-emerald-300 dark:border-emerald-700"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                          <Award size={20} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">Coletivo dos Sete</h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Conselho administrativo</p>
                        </div>
                      </div>
                      <p className="dark:text-neutral-300 text-sm mt-2">
                        Grupo de sete membros que administra as atividades do Círculo, organiza eventos e gerencia os recursos da comunidade.
                      </p>
                    </motion.div>
                  </div>
                </motion.section>
                
                <motion.section 
                  className="mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mr-3">
                      <Calendar size={18} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">História</h3>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
                    <p className="dark:text-neutral-300 text-sm leading-relaxed">
                      <span className="inline-block w-3 h-3 rounded-full bg-emerald-500/20 mr-2"></span>
                      Tem raízes ancestrais, combinando conhecimentos indígenas sobre plantas medicinais
                    </p>
                    <p className="dark:text-neutral-300 text-sm leading-relaxed mt-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-emerald-500/20 mr-2"></span>
                      Formalmente estabelecido há cerca de 15 anos
                    </p>
                    <p className="dark:text-neutral-300 text-sm leading-relaxed mt-2">
                      <span className="inline-block w-3 h-3 rounded-full bg-emerald-500/20 mr-2"></span>
                      Ganhou notoriedade por seus rituais de cura e pelo uso de chás medicinais considerados sagrados
                    </p>
                  </div>
                </motion.section>
                
                <motion.section 
                  className="mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mr-3">
                      <BookOpen size={18} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">Práticas</h3>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
                    <ul className="space-y-2">
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">1</span>
                        </div>
                        <span className="dark:text-neutral-300 text-sm">Cerimônias de cura com chás medicinais</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.65 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">2</span>
                        </div>
                        <span className="dark:text-neutral-300 text-sm">Cultivo comunitário de plantas sagradas</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">3</span>
                        </div>
                        <span className="dark:text-neutral-300 text-sm">Rituais de conexão com a natureza em datas específicas</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.75 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">4</span>
                        </div>
                        <span className="dark:text-neutral-300 text-sm">Compartilhamento de conhecimentos sobre ervas e seus usos</span>
                      </motion.li>
                    </ul>
                  </div>
                </motion.section>
                
                <motion.section 
                  className="mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mr-3">
                      <Droplet size={18} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">Chás Medicinais</h3>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-lg text-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center mx-auto mb-1">
                          <Leaf size={16} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Chá de Camomila</p>
                        <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70">Tranquilidade</p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-lg text-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center mx-auto mb-1">
                          <Leaf size={16} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Chá de Hortelã</p>
                        <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70">Clareza</p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-lg text-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center mx-auto mb-1">
                          <Leaf size={16} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Chá de Erva-Doce</p>
                        <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70">Harmonia</p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-2 rounded-lg text-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800/50 flex items-center justify-center mx-auto mb-1">
                          <Leaf size={16} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Chá de Boldo</p>
                        <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70">Purificação</p>
                      </div>
                    </div>
                  </div>
                </motion.section>
                
                <motion.section 
                  className="mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 mr-3">
                      <Calendar size={18} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold">Ciclo Anual</h3>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-lg border border-neutral-100 dark:border-neutral-800">
                    <div className="flex flex-wrap justify-between">
                      <div className="text-center p-2 w-1/4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-1">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">P</span>
                        </div>
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Primavera</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">Plantio</p>
                      </div>
                      <div className="text-center p-2 w-1/4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-1">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">V</span>
                        </div>
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Verão</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">Colheita</p>
                      </div>
                      <div className="text-center p-2 w-1/4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-1">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">O</span>
                        </div>
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Outono</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">Preparo</p>
                      </div>
                      <div className="text-center p-2 w-1/4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-1">
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">I</span>
                        </div>
                        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">Inverno</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">Meditação</p>
                      </div>
                    </div>
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