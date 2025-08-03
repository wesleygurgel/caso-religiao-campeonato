import { FileText } from 'lucide-react';

interface PdfPageLinkProps {
  page: number;
  pdfPath?: string;
}

export default function PdfPageLink({ page, pdfPath = '/docs/caso.pdf' }: PdfPageLinkProps) {
  const handleClick = () => {
    // In a real implementation, this would open the PDF at the specified page
    // For now, we'll just log the action and open the PDF if available
    console.log(`Opening PDF at page ${page}`);
    
    // Construct URL with page parameter
    const url = `${pdfPath}#page=${page}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center text-sm text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
      title={`Abrir PDF na página ${page}`}
      aria-label={`Abrir PDF na página ${page}`}
    >
      <FileText className="w-4 h-4 mr-1" />
      <span>pág. {page}</span>
    </button>
  );
}