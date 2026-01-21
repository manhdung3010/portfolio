'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, getTranslation } from '../utils/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: typeof translations;
  isMounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Always start with 'en' on both server and client to avoid hydration mismatch
  const [language, setLanguageState] = useState<Language>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Load language from localStorage on mount
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'vi')) {
        setLanguageState(savedLanguage);
      } else {
        // Default to browser language or English
        const browserLang = navigator.language.startsWith('vi') ? 'vi' : 'en';
        setLanguageState(browserLang);
      }
    } catch (error) {
      console.warn('Failed to read from localStorage:', error);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  };

  const t = (key: string) => getTranslation(language, key);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations,
    isMounted,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
