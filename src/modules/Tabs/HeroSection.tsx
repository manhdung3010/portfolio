'use client'

import { motion } from "framer-motion";
import { MapPin, CheckCircle, Code2 } from "lucide-react";
import { useLanguage } from "../../app/contexts/LanguageContext";
import { STACKS } from "@/app/common/constants/stacks";
import Link from "next/link";
import { useMemo } from "react";

// Replace black colors with dark theme-friendly alternatives
const getThemeFriendlyColor = (name: string, originalColor: string, originalBackground: string): { color: string; background: string; isBlack: boolean } => {
  // Map black colors to better alternatives for dark theme
  // Using slate/gray colors that work well in both light and dark modes
  const blackToColorMap: Record<string, { color: string; background: string }> = {
    'Next.js': { color: 'text-slate-700 dark:text-slate-300', background: 'bg-slate-200 dark:bg-slate-700' },
    'Socket.io': { color: 'text-slate-700 dark:text-slate-300', background: 'bg-slate-200 dark:bg-slate-700' },
    'Vercel': { color: 'text-slate-700 dark:text-slate-300', background: 'bg-slate-200 dark:bg-slate-700' },
    'GitHub': { color: 'text-slate-700 dark:text-slate-300', background: 'bg-slate-200 dark:bg-slate-700' },
    'Prisma': { color: 'text-slate-700 dark:text-slate-300', background: 'bg-slate-200 dark:bg-slate-700' },
    'Prettier': { color: 'text-slate-700 dark:text-slate-300', background: 'bg-slate-200 dark:bg-slate-700' },
    'Markdown': { color: 'text-slate-700 dark:text-slate-300', background: 'bg-slate-200 dark:bg-slate-700' },
    'Express.js': { color: 'text-slate-700 dark:text-slate-300', background: 'bg-slate-200 dark:bg-slate-700' },
  };

  const isBlack = originalBackground === 'bg-black' || originalColor === 'text-black';
  
  if (blackToColorMap[name]) {
    return { ...blackToColorMap[name], isBlack: true };
  }

  return { color: originalColor, background: originalBackground, isBlack };
};

// Group skills by category
const categorizeSkills = (stacks: typeof STACKS) => {
  const categories: Record<string, Array<{ name: string; color: string; background: string; icon: JSX.Element; isBlack: boolean }>> = {
    'Languages': [],
    'Frontend': [],
    'Backend': [],
    'Database': [],
    'Tools': [],
    'Cloud & DevOps': [],
    'Other': [],
  };

  const languageSkills = ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3'];
  const frontendSkills = ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Angular', 'Vite', 'Webpack', 'Redux', 'React Hook Form', 'Formik', 'Tailwind CSS', 'Chakra UI', 'Ant Design', 'Bootstrap', 'Styled Components', 'SCSS'];
  const backendSkills = ['Node.js', 'Express.js', 'NestJS', 'GraphQL', 'Apollo GraphQL', 'Socket.io'];
  const databaseSkills = ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Firebase'];
  const cloudSkills = ['Docker', 'AWS', 'Google Cloud', 'Azure', 'Vercel', 'Render'];
  const toolSkills = ['npm', 'Yarn', 'pnpm', 'ESLint', 'Prettier', 'Git', 'GitHub', 'GitLab', 'Postman', 'Figma', 'Markdown'];

  Object.entries(stacks).forEach(([name, value]) => {
    if (!value.isActive) return;

    // Get theme-friendly colors (replace black with slate colors for dark theme)
    const { color, background, isBlack } = getThemeFriendlyColor(name, value.color, value.background);

    const skill = { 
      name, 
      color,
      background,
      icon: value.icon,
      isBlack
    };
    
    if (languageSkills.includes(name)) {
      categories['Languages'].push(skill);
    } else if (frontendSkills.includes(name)) {
      categories['Frontend'].push(skill);
    } else if (backendSkills.includes(name)) {
      categories['Backend'].push(skill);
    } else if (databaseSkills.includes(name)) {
      categories['Database'].push(skill);
    } else if (cloudSkills.includes(name)) {
      categories['Cloud & DevOps'].push(skill);
    } else if (toolSkills.includes(name)) {
      categories['Tools'].push(skill);
    } else {
      categories['Other'].push(skill);
    }
  });

  // Remove empty categories
  return Object.entries(categories).filter(([, skills]) => skills.length > 0);
};

export default function HeroSection() {
  const { t } = useLanguage();

  const skillCategories = useMemo(() => categorizeSkills(STACKS), []);

  return (
    <div className="py-12 flex flex-col gap-12">
      {/* Hero Content */}
      <motion.div
        className="max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 py-3 gradient-text" suppressHydrationWarning>
          Hi, I&apos;m {t("profile.name")}
        </h1>
        
        {/* Location and Availability */}
        <div className="flex items-center gap-4 mb-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span suppressHydrationWarning>{t("profile.location")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span suppressHydrationWarning>{t("profile.available")}</span>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-xl leading-relaxed text-muted-foreground mb-8 max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          suppressHydrationWarning
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
          <Link
            href="?tab=projects"
            scroll={false}
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
            suppressHydrationWarning
          >
            {t("actions.viewWork")}
          </Link>
          <Link
            href="?tab=contact"
            scroll={false}
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            suppressHydrationWarning
          >
            {t("actions.getInTouch")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-bold gradient-text" suppressHydrationWarning>
              {t("sections.skills.title")}
            </h2>
          </div>

          {/* Skills by Category */}
          <div className="space-y-6">
            {skillCategories.map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                className="space-y-3"
                // Keep category animation lightweight (avoid animating every chip on first load)
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.9 + categoryIndex * 0.06 }}
              >
                <h3 className="text-lg font-semibold text-foreground/80 mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skill.name}
                      // Hover interactions are handled by CSS to reduce initial animation workload.
                      className={`px-4 py-2 rounded-lg text-sm font-semibold ${skill.color} ${skill.background} ${skill.isBlack ? '' : 'bg-opacity-10'} border-2 border-current border-opacity-30 ${skill.isBlack ? 'hover:opacity-80' : 'hover:bg-opacity-20'} hover:border-opacity-50 hover:shadow-md transition-all duration-200 cursor-default flex items-center gap-2.5 hover:-translate-y-0.5 hover:scale-[1.02] will-change-transform`}
                    >
                      <span className="flex-shrink-0 w-4 h-4 flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 [&>svg]:flex-shrink-0 [&>svg]:inline-block">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 