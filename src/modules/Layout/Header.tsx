"use client";
import ThemeToggle from "../../app/components/ThemeToggle";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "Giới thiệu" },
    { href: "#skills", label: "Kỹ năng" },
    { href: "#experience", label: "Kinh nghiệm" },
    { href: "#projects", label: "Dự án" },
    { href: "#education", label: "Học vấn" },
    { href: "#contact", label: "Liên hệ" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border"
            : "bg-background border-b border-border"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-foreground">
                  Portfolio
                </h1>
                <p className="text-sm text-muted-foreground">
                  Fullstack Developer
                </p>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.05,
                  }}
                  whileHover={{ y: -2 }}
                  className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <ThemeToggle />
              </motion.div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                    <motion.span
                      animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                      className="w-5 h-0.5 bg-foreground transition-all duration-300"
                    />
                    <motion.span
                      animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                      className="w-5 h-0.5 bg-foreground transition-all duration-300"
                    />
                    <motion.span
                      animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                      className="w-5 h-0.5 bg-foreground transition-all duration-300"
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-[67px] left-0 right-0 bg-background border-b border-border lg:hidden z-40 overflow-hidden"
      >
        <nav className="flex flex-col py-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{
                x: isMobileMenuOpen ? 0 : -20,
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
                delay: isMobileMenuOpen ? index * 0.05 : 0,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200 cursor-pointer"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/10 dark:bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
