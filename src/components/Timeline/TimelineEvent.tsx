import { motion } from 'framer-motion';
import { TimelineEvent as TimelineEventType } from './types';
import PdfPageLink from './PdfPageLink';
import { ExternalLink } from 'lucide-react';

interface TimelineEventProps {
  event: TimelineEventType;
}

export default function TimelineEvent({ event }: TimelineEventProps) {
  // Split description into paragraphs for better formatting
  const paragraphs = event.description.split('\n').filter(p => p.trim() !== '');

  return (
    <motion.div 
      className="mb-6 sm:mb-8 last:mb-0 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 p-2 sm:p-3 -mx-2 sm:-mx-3 rounded-lg transition-colors duration-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Date */}
        <div className="sm:w-32 mb-3 sm:mb-0 flex-shrink-0">
          <div className="inline-flex px-2 sm:px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-300 text-xs sm:text-sm font-medium">
            {event.date}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0"> {/* min-w-0 prevents text overflow */}
          <div className="prose prose-neutral dark:prose-invert prose-sm sm:prose-base max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 
                ? "font-medium mb-2 sm:mb-3 text-neutral-900 dark:text-white text-sm sm:text-base break-words" 
                : "mb-2 sm:mb-3 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base break-words"}>
                {paragraph}
              </p>
            ))}
            
            {/* PDF Page Link if available */}
            {event.pdfPage && (
              <div className="mt-2 sm:mt-3">
                <PdfPageLink page={event.pdfPage} pdfPath={event.pdfPath} />
              </div>
            )}
            
            {/* External URL Link if available */}
            {event.externalUrl && (
              <div className="mt-2 sm:mt-3">
                <motion.a
                  href={event.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/30 dark:hover:bg-primary-900/50 text-primary-700 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-200 text-xs sm:text-sm font-medium border border-primary-200 dark:border-primary-800 shadow-sm hover:shadow transition-all duration-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                  <span>Acessar vídeo</span>
                </motion.a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}