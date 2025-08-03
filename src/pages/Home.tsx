import { motion } from 'framer-motion';
import CenarioSocial from '../components/CenarioSocial';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-bold text-center mb-6">Caso Religião Campeonato</h1>
          <p className="text-xl text-center max-w-2xl mx-auto mb-8">
            Bem-vindo ao estudo de caso sobre as religiões minoritárias de Novas Veredas e seus impactos sociais.
          </p>
        </motion.div>
        
        <CenarioSocial />
      </div>
    </div>
  );
}
