import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';
import { TimelineData } from './types';
import TimelineBlock from './TimelineBlock';

interface TimelineProps {
  data: TimelineData;
  title?: string;
  subtitle?: string;
}

export default function Timeline({ 
  data, 
  title = "Decurso Fático", 
  subtitle = "Cronologia dos eventos relevantes para o caso" 
}: TimelineProps) {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 text-sm font-medium shadow-sm">
            <Clock className="w-4 h-4 mr-2" />
            Cronologia
          </div>
          
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-700 dark:text-neutral-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Timeline Header with Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shadow-md">
            <Calendar className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
        </div>

        {/* Timeline Blocks */}
        <div className="relative space-y-8 sm:space-y-12 before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-primary-200 dark:before:bg-primary-800/50 before:left-1/2 before:-translate-x-1/2 before:rounded-full">
          {data.blocks.map((block, index) => (
            <motion.div 
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <TimelineBlock block={block} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}