"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../app/contexts/LanguageContext";
import Image from "next/image";

export default function About() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/files/CV_NguyenManhDung_FullstackDeveloper.pdf';
    link.download = 'CV_NguyenManhDung_FullstackDeveloper.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPortfolio = () => {
    // Mở trang web trong tab mới để người dùng có thể tải về
    window.open('https://portfolio-manhdung3010.vercel.app', '_blank');
  };

  const careerJourney = [
    {
      id: 1,
      key: 'physcode',
      company: t('sections.careerData.physcode.company'),
      position: t('sections.careerData.physcode.position'),
      period: t('sections.careerData.physcode.period'),
      location: t('sections.careerData.physcode.location'),
      type: t('sections.careerData.physcode.type'),
      mode: t('sections.careerData.physcode.mode'),
      responsibilities: t('sections.careerData.physcode.responsibilities')
    },
    {
      id: 2,
      key: 'acd',
      company: t('sections.careerData.acd.company'),
      position: t('sections.careerData.acd.position'),
      period: t('sections.careerData.acd.period'),
      location: t('sections.careerData.acd.location'),
      type: t('sections.careerData.acd.type'),
      mode: t('sections.careerData.acd.mode'),
      responsibilities: t('sections.careerData.acd.responsibilities')
    }
  ];
  

  const education = {
    school: t('sections.educationData.school'),
    degree: t('sections.educationData.degree'),
    period: t('sections.educationData.period'),
    location: t('sections.educationData.location'),
    achievements: t('sections.educationData.achievements')
  };

  return (
    <div className="py-12 flex flex-col" style={{gap: '3rem'}}>
      {/* About Section */}
      <motion.div
        className="max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold gradient-text">{t('sections.about.title')}</h2>
        </motion.div>
        
        <div className="space-y-6">
          {[
            t('sections.about.content.intro'),
            t('sections.about.content.experience'),
            t('sections.about.content.workStyle'),
            t('sections.about.content.future')
          ].map((content, index) => (
            <motion.p 
              key={index}
              className="text-xl leading-relaxed text-muted-foreground"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileInView={{ 
                y: 0, 
                opacity: 1 
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {content}
            </motion.p>
          ))}
          
          <motion.div 
            className="pt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4, ease: "easeOut" }}
          >
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.6 }}
            >
              {t('sections.about.content.signature')}
            </motion.p>
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <Image
                src="/images/signature.png"
                alt="Signature"
                width={120}
                height={40}
                className="h-auto w-auto max-h-10"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="border w-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 2.0,
          ease: "easeInOut"
        }}
      />

      {/* Career Section */}
      <motion.div
        className="space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Section Header */}
        <div className="text-start space-y-4">
          <motion.div
            className="flex items-center justify-start gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">{t('sections.career.title')}</h2>
          </motion.div>
          <p className="text-muted-foreground">{t('sections.career.subtitle')}</p>
        </div>

        {/* Career Cards */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg">
            <div className="space-y-6">
              {careerJourney.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-background/80 border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.4 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex gap-4">
                    {/* Company Logo Placeholder */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg text-primary">{job.position}</h3>
                          <p className="text-muted-foreground">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.mode}</span>
                      </div>

                      {/* Responsibilities Toggle */}
                      <div className="pt-2">
                        <motion.button
                          onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                          className="flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            animate={{ 
                              rotate: expandedJob === job.id ? 180 : 0 
                            }}
                            transition={{ 
                              duration: 0.3,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                          >
                            <ChevronDown className="w-4 h-4 group-hover:text-primary/80" />
                          </motion.div>
                          {expandedJob === job.id ? t('sections.career.hideResponsibilities') : t('sections.career.showResponsibilities')}
                        </motion.button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedJob === job.id ? "auto" : 0,
                            opacity: expandedJob === job.id ? 1 : 0
                          }}
                          transition={{ 
                            duration: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94]
                          }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 pt-3 pl-4 text-sm text-muted-foreground">
                            {(Array.isArray(job.responsibilities) ? job.responsibilities : []).map((responsibility: string, respIndex: number) => (
                              <motion.li 
                                key={respIndex} 
                                className="flex items-start gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ 
                                  opacity: expandedJob === job.id ? 1 : 0,
                                  x: expandedJob === job.id ? 0 : -10
                                }}
                                transition={{ 
                                  duration: 0.3,
                                  delay: expandedJob === job.id ? respIndex * 0.1 : 0,
                                  ease: "easeOut"
                                }}
                              >
                                <motion.div 
                                  className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                                  initial={{ scale: 0 }}
                                  animate={{ 
                                    scale: expandedJob === job.id ? 1 : 0 
                                  }}
                                  transition={{ 
                                    duration: 0.2,
                                    delay: expandedJob === job.id ? respIndex * 0.1 + 0.1 : 0,
                                    ease: "backOut"
                                  }}
                                ></motion.div>
                                {responsibility}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="border w-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 2.2,
          ease: "easeInOut"
        }}
      />

      {/* Education Section */}
      <motion.div
        className="space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        {/* Section Header */}
        <div className="text-start space-y-4">
          <motion.div
            className="flex items-center justify-start gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">{t('sections.education.title')}</h2>
          </motion.div>
          <p className="text-muted-foreground">{t('sections.education.subtitle')}</p>
        </div>

        {/* Education Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg">
            <motion.div 
              className="bg-background/80 border border-border rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 2.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex gap-4">
                {/* University Logo Placeholder */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                {/* Education Details */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{education.school}</h3>
                      <p className="text-muted-foreground">{education.degree}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>

                  {/* Achievements */}
                  <div className="pt-2">
                    <h4 className="font-semibold text-lg text-primary">{t('sections.achievements.title')}:</h4>
                    <ul className="space-y-2 ml-3 text-sm text-muted-foreground">
                      {(Array.isArray(education.achievements) ? education.achievements : []).map((achievement: string, index: number) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: 2.4 + index * 0.1,
                            ease: "easeOut"
                          }}
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: 2.5 + index * 0.1,
                              ease: "backOut"
                            }}
                          ></motion.div>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
        >
          <motion.button 
            onClick={handleDownloadPortfolio}
            className="px-6 py-3 bg-primary text-primary-foreground hover:text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 2.6,
              ease: "backOut"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Download className="w-4 h-4" />
            </motion.div>
            {t('sections.actions.downloadPortfolio')}
          </motion.button>
          
          <motion.button 
            onClick={handleDownloadCV}
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 2.8,
              ease: "backOut"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
            <motion.div
              className="relative z-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Download className="w-4 h-4" />
            </motion.div>
            <span className="relative z-10">{t('sections.actions.downloadResume')}</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}