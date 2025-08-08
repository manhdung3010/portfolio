'use client'

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-12 px-4">
      <motion.div
        className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg mb-4 animate-float"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Fullstack Developer
      </motion.div>
      
      <motion.div
        className="text-center max-w-3xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text text-shadow py-2">
          Nguyễn Mạnh Dũng
        </h1>
        <p className="text-xl text-muted-foreground italic leading-relaxed">
          "Kiến tạo giải pháp hiện đại, tối ưu trải nghiệm người dùng và không ngừng học hỏi công nghệ mới."
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-12 animate-bounce-slow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
} 