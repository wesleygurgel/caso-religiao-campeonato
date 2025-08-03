import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-primary-600/20 dark:bg-primary-900/30 hover:bg-primary-600/30 dark:hover:bg-primary-800/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors"
      whileTap={{ scale: 0.92 }}
      aria-label={isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
      initial={false}
      animate={{ rotate: isDarkMode ? 180 : 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {isDarkMode ? (
        <Moon className="h-5 w-5 text-white" />
      ) : (
        <Sun className="h-5 w-5 text-white" />
      )}
    </motion.button>
  );
}