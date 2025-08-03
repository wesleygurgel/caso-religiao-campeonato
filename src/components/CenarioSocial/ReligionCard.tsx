import { motion } from 'framer-motion';
import { useState, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export interface ReligionData {
  id: string;
  name: string;
  followers: string;
  dogma: string;
  color: string;
  image?: string;
  icon?: string;
}

interface ReligionCardProps {
  religion: ReligionData;
  onClick: () => void;
  icon?: ReactNode;
}

export default function ReligionCard({ religion, onClick, icon }: ReligionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer 
                 ${religion.color} text-white p-6 sm:p-8 h-full
                 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50
                 border border-white/10 backdrop-blur-sm`}
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
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12 rounded-full bg-white/5 blur-xl"></div>
      
      <div className="flex flex-col h-full relative z-10">
        {/* Icon */}
        {icon && (
          <div className="mb-4 p-3 bg-white/10 rounded-lg w-fit">
            {icon}
          </div>
        )}
        
        <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3">{religion.name}</h3>
        
        <div className="mb-4 text-sm text-white/90 font-medium">
          <p>{religion.followers}</p>
        </div>
        
        <p className="mb-6 flex-grow text-white/90">{religion.dogma}</p>
        
        <motion.div 
          className="mt-auto flex items-center text-sm font-medium bg-white/10 rounded-lg py-2 px-3 w-fit"
          animate={{ x: isHovered ? 5 : 0 }}
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          transition={{ duration: 0.2 }}
        >
          Saiba mais
          <motion.div 
            className="ml-2"
            animate={{ x: isHovered ? 3 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}