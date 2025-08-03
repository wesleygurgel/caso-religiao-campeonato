import { motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';
import CenarioSocial from '../components/CenarioSocial';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      {/* Hero section with background pattern */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary-500/10 to-transparent dark:from-primary-900/20 pt-16 pb-24">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-20 -left-20 w-72 h-72 bg-gold-200 dark:bg-gold-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-64 h-64 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center mb-6 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <MapPinIcon className="w-4 h-4 mr-2" />
              Estado de Novas Veredas
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-neutral-900 dark:text-white mb-6 tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-primary-700 dark:text-primary-400">Caso</span> Competição
            </motion.h1>
          </motion.div>
        </div>
      </div>
      
      {/* Cenário Social section with ID for anchor link */}
      <div id="cenario-social" className="scroll-mt-16">
        <CenarioSocial />
      </div>
    </div>
  );
}
