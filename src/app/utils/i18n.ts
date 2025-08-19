import enTranslations from '../locales/en.json';
import viTranslations from '../locales/vi.json';

export type Language = 'en' | 'vi';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  profile: {
    name: string;
    username: string;
    location: string;
    available: string;
    title: string;
    description: string;
  };
  actions: {
    smartTalk: string;
    viewWork: string;
    getInTouch: string;
    downloadCV: string;
    sendMessage: string;
  };
  sections: {
    about: {
      title: string;
      subtitle: string;
      description: string;
      content: {
        intro: string;
        experience: string;
        workStyle: string;
        future: string;
        signature: string;
      };
    };
    skills: {
      title: string;
      subtitle: string;
      frontend: string;
      backend: string;
      mobile: string;
      tools: string;
    };
    experience: {
      title: string;
      subtitle: string;
      present: string;
      months: string;
      years: string;
    };
    projects: {
      title: string;
      subtitle: string;
      viewProject: string;
      viewCode: string;
      technologies: string;
    };
    education: {
      title: string;
      subtitle: string;
      degree: string;
      university: string;
      graduation: string;
    };
    career: {
      title: string;
      subtitle: string;
      showResponsibilities: string;
      hideResponsibilities: string;
    };
    actions: {
      downloadPortfolio: string;
      downloadResume: string;
    };
    contact: {
      title: string;
      subtitle: string;
      getInTouch: {
        title: string;
        subtitle: string;
      };
      sendMessage: {
        title: string;
        subtitle: string;
      };
      contactInfo: {
        phone: {
          label: string;
          description: string;
        };
        email: {
          label: string;
          description: string;
        };
        github: {
          label: string;
          description: string;
        };
        linkedin: {
          label: string;
          description: string;
        };
      };
      form: {
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        subject: string;
        subjectPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        required: string;
        send: string;
        sending: string;
      };
      messages: {
        success: string;
        error: string;
        configError: string;
      };
    };
  };
  common: {
    copyright: string;
    language: {
      en: string;
      vi: string;
    };
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    edit: string;
    delete: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: enTranslations,
  vi: viTranslations,
};

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.');
  let value: unknown = translations[language];
  
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  
  return (value as string) || key;
};
