"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ExternalLink, X } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";




// moved into component to use translations

export default function Achievements() {
  const { t, language } = useLanguage();
  const certifications = [
    {
      name: t('sections.achievements.certs.jsAdvanced'),
      issuer: t('sections.achievements.issuer'),
      date: language === 'vi' ? '2023' : '2023',
      credential: t('sections.achievements.level.advanced'),
      link: 'https://fullstack.edu.vn/',
      image: '/images/javascript-advanced-certificate.png',
    },
    {
      name: t('sections.achievements.certs.jsBasic'),
      issuer: t('sections.achievements.issuer'),
      date: language === 'vi' ? '2023' : '2023',
      credential: t('sections.achievements.level.basic'),
      link: 'https://fullstack.edu.vn/',
      image: '/images/javascript-basic-certificate.png',
    },
    {
      name: t('sections.achievements.certs.ubuntuWsl'),
      issuer: t('sections.achievements.issuer'),
      date: language === 'vi' ? '2025' : '2025',
      credential: t('sections.achievements.level.tools'),
      link: 'https://fullstack.edu.vn/',
      image: '/images/ubuntu-with-WSL-certificate.png',
    }
  ];
  const [preview, setPreview] = useState<null | { src: string; alt: string }>(null);
  const openPreview = (src: string, alt: string) => setPreview({ src, alt });
  const closePreview = () => setPreview(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePreview();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="py-12 flex flex-col" style={{gap: '3rem'}}>
      {/* Achievements Header */}
      <motion.div
        className="max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Trophy className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold gradient-text">{t('sections.achievements.title')}</h2>
        </motion.div>
        <p className="text-xl leading-relaxed text-muted-foreground">
          {t('sections.achievements.subtitle')}
        </p>
      </motion.div>

      <div className="border w-full" />
      {/* Certifications Section */}
      <motion.div
        className="space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg">
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, certIdx) => (
                <motion.div
                  key={certIdx}
                  className="bg-background/80 border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + certIdx * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                   <div className="space-y-4">
                      <button
                        type="button"
                        onClick={() => openPreview(cert.image, cert.name)}
                        className="group w-full h-40 flex items-center justify-center relative rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-zoom-in"
                        aria-label={`${t('sections.achievements.enlarge')}: ${cert.name}`}
                      >
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="max-h-40 rounded-md shadow-md mx-auto transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute bottom-2 right-2 bg-background/80 text-foreground border border-border rounded-md px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{t('sections.achievements.clickToView')}</div>
                      </button>
                      
                      {/* Info */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg text-primary">{cert.name}</h4>
                        <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                        <div className="flex items-center justify-center gap-2">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                            {cert.credential}
                          </span>
                          <span className="text-muted-foreground text-xs">{cert.date}</span>
                        </div>
                      </div>
                    <a
                      href={cert.link}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('sections.achievements.viewCourse')}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closePreview}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="relative z-10 max-w-5xl w-[92vw] sm:w-auto max-h-[86vh] p-2"
              initial={{ scale: 0.95, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 250, damping: 24 }}
            >
              <div className="relative bg-background border border-border rounded-lg shadow-2xl overflow-hidden">
                <img
                  src={preview.src}
                  alt={preview.alt}
                  className="w-full h-full object-contain max-h-[86vh]"
                />

                <button
                  type="button"
                  onClick={closePreview}
                  className="absolute top-2 right-2 inline-flex items-center justify-center w-9 h-9 rounded-md bg-background/90 border border-border text-black hover:text-foreground hover:bg-background transition-colors"
                  aria-label={t('sections.achievements.close')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

