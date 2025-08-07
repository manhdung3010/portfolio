"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <motion.h2
        className="text-2xl font-bold mb-6 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
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