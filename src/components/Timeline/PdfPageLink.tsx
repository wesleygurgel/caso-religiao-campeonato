import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

interface PdfPageLinkProps {
  page: number;
  pdfPath?: string;
}

export default function PdfPageLink({ page, pdfPath = './documents/caso.pdf' }: PdfPageLinkProps) {
  const handleClick = () => {
    // In a real implementation, this would open the PDF at the specified page
    // For now, we'll just log the action and open the PDF if available
    console.log(`Opening PDF at page ${page}`);
    
    // Construct URL with page parameter
    const url = `${pdfPath}#page=${page}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-md bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/30 dark:hover:bg-primary-900/50 text-primary-700 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-200 text-xs sm:text-sm font-medium border border-primary-200 dark:border-primary-800 shadow-sm hover:shadow transition-all duration-200"
      title={`Abrir PDF na página ${page}`}
      aria-label={`Abrir PDF na página ${page}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      tabIndex={0} // Ensure keyboard accessibility
    >
      <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
      <span>Página {page}</span>
    </motion.button>
  );
}