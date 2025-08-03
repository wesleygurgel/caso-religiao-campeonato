import { motion } from 'framer-motion';
import { useState } from 'react';

export interface ReligionData {
  id: string;
  name: string;
  followers: string;
  dogma: string;
  color: string;
  image?: string;
}

interface ReligionCardProps {
  religion: ReligionData;
  onClick: () => void;
}

export default function ReligionCard({ religion, onClick }: ReligionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer 
                 ${religion.color} text-white p-6 h-full
                 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50`}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      role="button"
      aria-label={`Saiba mais sobre ${religion.name}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-bold mb-2">{religion.name}</h3>
        
        <div className="mb-4 text-sm opacity-90">
          <p>{religion.followers}</p>
        </div>
        
        <p className="mb-4 flex-grow">{religion.dogma}</p>
        
        <motion.div 
          className="mt-auto text-sm font-medium"
          animate={{ x: isHovered ? 5 : 0 }}
        >
          Clique para saber mais
          <motion.span 
            className="inline-block ml-1"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}