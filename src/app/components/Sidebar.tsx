"use client";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  HomeIcon, 
  UserIcon, 
  TrophyIcon, 
  FolderIcon, 
  ChartBarIcon, 
  ChatBubbleLeftRightIcon, 
  EnvelopeIcon,
  ArrowRightIcon,
  ChatBubbleLeftIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

interface SidebarProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export default function Sidebar({ activeTab = "home", onTabChange }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "about", label: "About", icon: UserIcon },
    { id: "skills", label: "Skills", icon: TrophyIcon },
    { id: "experience", label: "Experience", icon: ChartBarIcon },
    { id: "projects", label: "Projects", icon: FolderIcon },
    { id: "education", label: "Education", icon: TrophyIcon },
    { id: "contact", label: "Contact", icon: EnvelopeIcon },
  ];

  const handleNavClick = (sectionId: string) => {
    if (onTabChange) {
      onTabChange(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-background border border-border rounded-lg shadow-lg"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Desktop Sidebar */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-background border-r border-border flex flex-col z-50"
      >
        {/* Profile Section */}
        <div className="p-6 border-b border-border">
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/images/avatar.jpg"
                  alt="Nguyễn Mạnh Dũng"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>

            {/* Name and Username */}
            <div className="text-center">
              <h2 className="text-xl font-bold text-foreground">Nguyễn Mạnh Dũng</h2>
              <p className="text-sm text-muted-foreground">@manhdung</p>
            </div>

            {/* Language and Theme Toggle */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <div className="flex bg-accent rounded-lg p-1">
                <button className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md">
                  US
                </button>
                <button className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground">
                  VN
                </button>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1 + index * 0.05,
              }}
              whileHover={{ x: 4 }}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                activeTab === item.id
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {activeTab === item.id && (
                <ArrowRightIcon className="w-4 h-4" />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Smart Talk Button */}
        <div className="p-4 border-t border-border">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 p-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <ChatBubbleLeftIcon className="w-5 h-5" />
            Smart Talk
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            COPYRIGHT © 2025 Nguyễn Mạnh Dũng. All rights reserved.
          </p>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 top-0 h-full w-80 bg-background border-r border-border flex flex-col z-50 lg:hidden"
            >
              {/* Profile Section */}
              <div className="p-6 border-b border-border">
                <div className="flex flex-col items-center space-y-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                      <Image
                        src="/images/avatar.jpg"
                        alt="Nguyễn Mạnh Dũng"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Name and Username */}
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-foreground">Nguyễn Mạnh Dũng</h2>
                    <p className="text-sm text-muted-foreground">@manhdung</p>
                  </div>

                  {/* Language and Theme Toggle */}
                  <div className="flex items-center gap-3">
                    <div className="flex bg-accent rounded-lg p-1">
                      <button className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md">
                        US
                      </button>
                      <button className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground">
                        VN
                      </button>
                    </div>
                    <ThemeToggle />
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.05,
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                      activeTab === item.id
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {activeTab === item.id && (
                      <ArrowRightIcon className="w-4 h-4" />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Smart Talk Button */}
              <div className="p-4 border-t border-border">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 p-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <ChatBubbleLeftIcon className="w-5 h-5" />
                  Smart Talk
                </motion.button>
              </div>

              {/* Copyright */}
              <div className="p-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  COPYRIGHT © 2025 Nguyễn Mạnh Dũng. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
