import { ReactNode } from 'react';
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
      
    </div>
  );
}