import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Info, Scale } from 'lucide-react';
import ReligionCard, { ReligionData } from './ReligionCard';
import FraternidadePurezaModal from './FraternidadePurezaModal';
import CirculoErvasModal from './CirculoErvasModal';

// Data for the two religions
const religionsData: ReligionData[] = [
  {
    id: 'fraternidade',
    name: 'Fraternidade da Pureza Divina',
    followers: 'Seguida por cerca de 35% da população',
    dogma: 'Abstenção de substâncias que alterem a consciência',
    color: 'bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-700 dark:to-indigo-900',
    icon: 'users',
  },
  {
    id: 'circulo',
    name: 'Círculo das Ervas Eternas',
    followers: 'Seguidores: 4% da população',
    dogma: 'Purificação das aflições humanas com chás medicinais e rituais',
    color: 'bg-gradient-to-br from-emerald-600 to-emerald-800 dark:from-emerald-700 dark:to-emerald-900',
    icon: 'sparkles',
  }
];


export default function CenarioSocial() {
  const [selectedReligion, setSelectedReligion] = useState<ReligionData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (religion: ReligionData) => {
    setSelectedReligion(religion);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Icon mapping
  const iconMap = {
    users: <Users className="h-6 w-6" />,
    sparkles: <Sparkles className="h-6 w-6" />,
    scale: <Scale className="h-6 w-6" />
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 text-sm font-medium">
            <Info className="w-4 h-4 mr-2" />
            Contexto Religioso
          </div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cenário Social
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conheça as duas religiões minoritárias de Novas Veredas e suas características
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {religionsData.map((religion) => (
            <motion.div key={religion.id} variants={itemVariants}>
              <ReligionCard 
                religion={religion} 
                onClick={() => handleOpenModal(religion)} 
                icon={religion.icon && iconMap[religion.icon as keyof typeof iconMap]}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Decorative divider */}
        <div className="my-12 sm:my-16 flex items-center justify-center">
          <div className="h-px bg-neutral-200 dark:bg-neutral-700 w-full max-w-xs"></div>
          <div className="mx-3 sm:mx-4 text-neutral-400 dark:text-neutral-500">
            <Scale className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="h-px bg-neutral-200 dark:bg-neutral-700 w-full max-w-xs"></div>
        </div>
        
        {/* Additional context section */}
        <div className="prose prose-base sm:prose-lg dark:prose-invert mx-auto max-w-3xl px-2">
          <h3 className="text-center font-serif text-xl sm:text-2xl">Sobre o Estado de Novas Veredas</h3>
          <p className="text-neutral-700 dark:text-neutral-300">
            Novas Veredas é um estado fictício onde diferentes grupos religiosos coexistem, 
            cada um com suas próprias crenças, práticas e influências sociais. As tensões entre 
            esses grupos, especialmente entre a Fraternidade da Pureza Divina e o Círculo das 
            Ervas Eternas, formam o pano de fundo para importantes questões jurídicas relacionadas 
            à liberdade religiosa e seus limites.
          </p>
        </div>
      </div>

      {/* Render the appropriate modal based on the selected religion */}
      {selectedReligion && selectedReligion.id === 'fraternidade' && (
        <FraternidadePurezaModal
          religion={selectedReligion}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
      
      {selectedReligion && selectedReligion.id === 'circulo' && (
        <CirculoErvasModal
          religion={selectedReligion}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}