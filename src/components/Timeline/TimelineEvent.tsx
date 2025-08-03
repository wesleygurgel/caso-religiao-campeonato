import { motion } from 'framer-motion';
import { TimelineEvent as TimelineEventType } from './types';
import PdfPageLink from './PdfPageLink';

interface TimelineEventProps {
  event: TimelineEventType;
}

export default function TimelineEvent({ event }: TimelineEventProps) {
  // Split description into paragraphs for better formatting
  const paragraphs = event.description.split('\n').filter(p => p.trim() !== '');

  return (
    <motion.div 
      className="mb-6 last:mb-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Date */}
        <div className="sm:w-32 mb-2 sm:mb-0">
          <div className="font-medium text-primary-700 dark:text-primary-400">
            {event.date}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <div className="prose prose-neutral dark:prose-invert prose-sm sm:prose-base max-w-none">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "font-medium mb-2" : "mb-2"}>
                {paragraph}
              </p>
            ))}
            
            {/* PDF Page Link if available */}
            {event.pdfPage && (
              <div className="mt-2">
                <PdfPageLink page={event.pdfPage} pdfPath={event.pdfPath} />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}