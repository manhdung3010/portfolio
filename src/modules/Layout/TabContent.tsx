"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef } from "react";
import type { ComponentType } from "react";

interface TabContentProps {
  activeTab: string;
}

const TabFallback = () => (
  <div className="p-6 text-sm text-muted-foreground">Loading section…</div>
);

const HeroSection = dynamic(() => import("../Tabs/HeroSection"), {
  loading: () => <TabFallback />,
});

const About = dynamic(() => import("../Tabs/About"), {
  loading: () => <TabFallback />,
});

const Experience = dynamic(() => import("../Tabs/Experience"), {
  loading: () => <TabFallback />,
});

const Achievements = dynamic(() => import("../Tabs/Achievements"), {
  loading: () => <TabFallback />,
});

const Projects = dynamic(() => import("../Tabs/Projects"), {
  loading: () => <TabFallback />,
});

const Contact = dynamic(() => import("../Tabs/Contact"), {
  loading: () => <TabFallback />,
});

type TabConfig = {
  id: string;
  label: string;
  component: ComponentType;
};

const TABS: TabConfig[] = [
  { id: "home", label: "Home", component: HeroSection },
  { id: "about", label: "About", component: About },
  { id: "experience", label: "Experience", component: Experience },
  { id: "achievements", label: "Achievements", component: Achievements },
  { id: "projects", label: "Projects", component: Projects },
  { id: "contact", label: "Contact", component: Contact },
];

export default function TabContent({ activeTab }: TabContentProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const ActiveComponent = useMemo(
    () => TABS.find((tab) => tab.id === activeTab)?.component ?? HeroSection,
    [activeTab]
  );

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <div
      ref={scrollContainerRef}
      className="h-full w-full overflow-y-auto flex justify-center"
    >
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
