"use client";

import { motion } from "framer-motion";
import About from "../Tabs/About";
import Skills from "../Tabs/Skills";
import Experience from "../Tabs/Experience";
import Projects from "../Tabs/Projects";
import Education from "../Tabs/Education";
import Contact from "../Tabs/Contact";
import HeroSection from "../Tabs/HeroSection";

interface TabContentProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs = [
  { id: "home", label: "Home", component: HeroSection },
  { id: "about", label: "About", component: About },
  { id: "skills", label: "Skills", component: Skills },
  { id: "experience", label: "Experience", component: Experience },
  { id: "projects", label: "Projects", component: Projects },
  { id: "education", label: "Education", component: Education },
  { id: "contact", label: "Contact", component: Contact },
];

export default function TabContent({ activeTab, onTabChange }: TabContentProps) {
  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HeroSection;

  return (
    <div className="h-full flex flex-col">
      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="h-full overflow-y-auto"
        >
          <div className="p-6">
            <ActiveComponent />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
