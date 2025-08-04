import { motion } from 'framer-motion';
import { TimelineBlock as TimelineBlockType } from './types';
import TimelineEvent from './TimelineEvent';

interface TimelineBlockProps {
  block: TimelineBlockType;
}

export default function TimelineBlock({ block }: TimelineBlockProps) {
  return (
    <motion.div 
      className="mb-12 last:mb-0 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Center dot for timeline */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 z-10 shadow-sm"></div>
      
      {/* Block Content */}
      <div className="relative z-0 bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0 max-w-[calc(100%-2rem)]">
        {/* Block Title */}
        <motion.div 
          className="bg-primary-50 dark:bg-primary-900/30 px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-200 dark:border-neutral-700"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-800 dark:text-primary-200 break-words">
            {block.title}
          </h3>
        </motion.div>
        
        {/* Block Events */}
        <div className="p-4 sm:p-6">
          {block.events.map((event, index) => (
            <TimelineEvent key={`${block.id}-event-${index}`} event={event} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}