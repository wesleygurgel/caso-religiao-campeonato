import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Home, BookOpen } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="sm:hidden">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white dark:bg-neutral-900 shadow-xl z-50 overflow-y-auto border-r border-neutral-200 dark:border-neutral-800"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-5 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-serif font-bold text-primary-700 dark:text-primary-400">
                    Menu
                  </h2>
                  <button
                    onClick={closeMenu}
                    className="p-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 rounded-lg transition-colors"
                    aria-label="Fechar menu"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <nav className="p-5">
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="flex items-center py-3 px-4 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      onClick={closeMenu}
                    >
                      <Home size={20} className="mr-3 text-primary-600 dark:text-primary-400" />
                      <span className="font-medium">Início</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="flex items-center py-3 px-4 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      onClick={closeMenu}
                    >
                      <BookOpen size={20} className="mr-3 text-primary-600 dark:text-primary-400" />
                      <span className="font-medium">Sobre o Caso</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="p-5 mt-auto border-t border-neutral-200 dark:border-neutral-800">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  &copy; {new Date().getFullYear()} Caso Campeonato
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}