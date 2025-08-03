import { ReactNode } from 'react';
import { Scale } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Decorative pattern divider */}
      <div 
        className="h-1 bg-gold-500 dark:bg-gold-700 w-full opacity-80"
        style={{ 
          backgroundImage: isDarkMode 
            ? 'linear-gradient(to right, rgba(124, 58, 237, 0.5), rgba(236, 72, 153, 0.5))' 
            : 'linear-gradient(to right, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))'
        }}
      ></div>
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer with legal-themed styling */}
      <footer className="bg-neutral-800 dark:bg-neutral-950 text-white py-8 border-t border-neutral-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-serif font-semibold mb-4 flex items-center">
                <Scale className="h-5 w-5 mr-2" />
                Caso Religião Campeonato
              </h2>
              <p className="text-neutral-300 dark:text-neutral-400 text-sm max-w-md">
                Um estudo de caso sobre as religiões minoritárias de Novas Veredas e seus impactos sociais, 
                desenvolvido para uma competição de Visual Law.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-neutral-700 text-center text-sm text-neutral-400">
            <p>&copy; {new Date().getFullYear()} Caso Religião Campeonato. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}