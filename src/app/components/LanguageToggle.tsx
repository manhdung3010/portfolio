'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (newLang: 'en' | 'vi') => {
    if (newLang !== language) {
      setLanguage(newLang);
    }
  };

  return (
    <div className="flex bg-accent rounded-lg p-1">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-primary'
        }`}
        suppressHydrationWarning
      >
        <Globe className="w-3 h-3" />
        <span suppressHydrationWarning>{t('common.language.en')}</span>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleLanguageChange('vi')}
        className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 flex items-center gap-1 ${
          language === 'vi'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-primary'
        }`}
        suppressHydrationWarning
      >
        <Languages className="w-3 h-3" />
        <span suppressHydrationWarning>{t('common.language.vi')}</span>
      </motion.button>
    </div>
  );
}
