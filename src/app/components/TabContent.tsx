"use client";

import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import HeroSection from "./HeroSection";

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
      {/* Tab Navigation */}
      <div className="flex-shrink-0 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab.id
                  ? "border-primary text-primary bg-primary/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full overflow-y-auto"
          >
            <div className="p-6">
              <ActiveComponent />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
