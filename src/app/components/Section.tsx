"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { 
  User, 
  Code, 
  Briefcase, 
  FolderOpen, 
  GraduationCap, 
  MessageSquare 
} from "lucide-react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

const sectionIcons = {
  about: User,
  skills: Code,
  experience: Briefcase,
  projects: FolderOpen,
  education: GraduationCap,
  contact: MessageSquare
};

export default function Section({ id, title, children }: SectionProps) {
  const Icon = sectionIcons[id as keyof typeof sectionIcons] || User;

  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight gradient-text">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </section>
  );
}