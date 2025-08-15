'use client'

import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "../../app/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <div className="py-12">
      <motion.div
        className="max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
          Hi, I&apos;m {t("profile.name")}
        </h1>
        
        {/* Location and Availability */}
        <div className="flex items-center gap-4 mb-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>{t("profile.location")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>{t("profile.available")}</span>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-xl leading-relaxed text-muted-foreground mb-8 max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {t("profile.description")}
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            {t("actions.viewWork")}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            {t("actions.getInTouch")}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
} 