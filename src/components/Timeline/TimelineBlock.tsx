import { motion } from 'framer-motion';
import { TimelineBlock as TimelineBlockType } from './types';
import TimelineEvent from './TimelineEvent';

interface TimelineBlockProps {
  block: TimelineBlockType;
}

export default function TimelineBlock({ block }: TimelineBlockProps) {
  return (
    <motion.div 
      className="mb-12 last:mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Block Title */}
      <motion.div 
        className="mb-6 border-b border-neutral-200 dark:border-neutral-700 pb-2"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
          {block.title}
        </h3>
      </motion.div>
      
      {/* Block Events */}
      <div className="pl-4 border-l-2 border-neutral-200 dark:border-neutral-700">
        {block.events.map((event, index) => (
          <TimelineEvent key={`${block.id}-event-${index}`} event={event} />
        ))}
      </div>
    </motion.div>
  );
}