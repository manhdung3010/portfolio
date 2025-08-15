"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import About from "../Tabs/About";
import Experience from "../Tabs/Experience";
import Projects from "../Tabs/Projects";
import Contact from "../Tabs/Contact";
import HeroSection from "../Tabs/HeroSection";

interface TabContentProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs = [
  { id: "home", label: "Home", component: HeroSection },
  { id: "about", label: "About", component: About },
  { id: "experience", label: "Experience", component: Experience },
  { id: "projects", label: "Projects", component: Projects },
  { id: "contact", label: "Contact", component: Contact },
];

export default function TabContent({ activeTab, onTabChange }: TabContentProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HeroSection;

  // Scroll to top when tab changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  return (
    <div ref={scrollContainerRef} className="h-full w-full overflow-y-auto flex justify-center">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="w-full max-w-6xl"
      >
        <div className="p-6">
          <ActiveComponent />
        </div>
      </motion.div>
    </div>
  );
}
