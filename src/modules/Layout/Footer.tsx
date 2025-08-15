'use client'

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="text-center py-4 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="text-muted-foreground">
        © 2024 Nguyễn Mạnh Dũng. Built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </motion.footer>
  );
}