"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row items-center justify-between gap-2 py-6 border-t border-border text-xs text-muted-foreground bg-background/90"
    >
      <div>
        © {new Date().getFullYear()} Nguyễn Mạnh Dũng. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a href="mailto:ngmanhdung2003@gmail.com" className="hover:underline transition-all duration-200">Email</a>
        <a href="https://github.com/manhdung3010" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200">GitHub</a>
        <a href="https://linkedin.com/in/manhdung3010" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-200">LinkedIn</a>
      </div>
    </motion.footer>
  );
}