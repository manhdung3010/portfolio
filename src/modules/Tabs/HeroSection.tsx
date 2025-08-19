'use client'

import { motion } from "framer-motion";
import { MapPin, CheckCircle, Code2 } from "lucide-react";
import { useLanguage } from "../../app/contexts/LanguageContext";
import { STACKS } from "@/app/common/constants/stacks";
import GlassIcon from "@/app/components/GlassIcon";

export default function HeroSection() {
  const { t } = useLanguage();

  const stacksInArray: Array<
    [string, { icon: JSX.Element; background: string }]
  > = Object.entries(STACKS)
    .filter(([, value]) => value.isActive)
    .map(([name, value]) => [
      name,
      { icon: value.icon, background: value.background },
    ]);



  return (
    <div className="py-12 flex flex-col" style={{gap: '3rem'}}>
      {/* Hero Content */}
      <motion.div
        className="max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 py-3 gradient-text">
          Hi, I&apos;m {t("profile.name")}
        </h1>
        
        {/* Location and Availability */}
        <div className="flex items-center gap-4 mb-6 text-muted-foreground">
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

      <div className="border w-full "/>


      {/* Skills Section */}
      <motion.div
        className="space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Skills Header */}
        <div className="text-center space-y-4">
          <motion.div
            className="flex items-center justify-start gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Code2 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">
              {t("sections.skills.title") }
            </h2>
          </motion.div>
        </div>


        {/* Skills Grid */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          
          <div className="relative bg-card/50 backdrop-blur-sm ">
            <div 
              className="grid grid-cols-3  sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12"
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))',
                gap: '20px'
              }}
            >
              {stacksInArray.map(([name, { icon, background }], index) => (
                <motion.div
                key={index}
                className="flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.4 + index * 0.02,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <GlassIcon
                  name={name}
                  icon={icon}
                  background={background}
                />
              </motion.div>
              
              ))}
            </div>
            
 
          </div>
        </motion.div>

    
      </motion.div>
    </div>
  );
} 