'use client'

import { motion } from "framer-motion";
import { MapPinIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <div className="py-12">
      <motion.div
        className="max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
          Hi, I'm Nguyễn Mạnh Dũng
        </h1>
        
        {/* Location and Availability */}
        <div className="flex items-center gap-4 mb-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5" />
            <span>Based in Hanoi, Vietnam 🇻🇳</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-green-500" />
            <span>Available for work</span>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-xl leading-relaxed text-muted-foreground mb-8 max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Experienced and passionate Fullstack Developer specializing in building scalable and efficient digital solutions. 
          On the frontend, I work with React, Next.js, TypeScript, and Tailwind CSS to craft responsive and accessible user interfaces. 
          On the backend, I develop robust services using Node.js, and for mobile, I build cross-platform apps with React Native. 
          I'm a collaborative and detail-oriented engineer committed to delivering well-structured, high-performance applications across platforms.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
} 