'use client';

import { motion } from 'framer-motion';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function ToggleGroupCompact() {
  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <LanguageToggle />
      <div className="w-px h-6 bg-border" />
      <ThemeToggle />
    </motion.div>
  );
}
