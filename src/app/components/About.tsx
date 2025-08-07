"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-start gap-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex-shrink-0">
        <img src="/avatar.jpg" alt="Avatar" className="w-40 h-40 rounded-full border shadow-lg" />
      </div>
      <div className="flex-1 space-y-6">
        <div>
          <motion.h1 
            className="text-4xl font-bold mb-3 text-primary" 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.1, duration: 0.5 }} 
            viewport={{ once: true }}
          >
            NGUYỄN MẠNH DŨNG
          </motion.h1>
          <motion.div 
            className="text-xl text-muted-foreground mb-4" 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2, duration: 0.5 }} 
            viewport={{ once: true }}
          >
            Front-End Developer | React.js | Next.js
          </motion.div>
        </div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.3, duration: 0.5 }} 
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed max-w-3xl">
            Tôi là một Front-End Developer với hơn 2 năm kinh nghiệm chuyên sâu trong việc thiết kế và phát
            triển giao diện người dùng cho các ứng dụng web sử dụng React.js và Next.js. Tôi tập trung vào
            việc xây dựng các giải pháp tối ưu về hiệu suất, tính tương tác và trải nghiệm người dùng. Tôi luôn
            tìm tòi, học hỏi các công nghệ mới và áp dụng các phương pháp tốt nhất để không ngừng hoàn
            thiện kỹ năng, đồng thời tạo ra những sản phẩm chất lượng, hiện đại và tối ưu.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.4, duration: 0.5 }} 
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">Phone:</span>
            <a href="tel:+84326680326" className="hover:underline">+84 326680326</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">Email:</span>
            <a href="mailto:ngmanhdung2003@gmail.com" className="hover:underline">ngmanhdung2003@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">Git:</span>
            <a href="https://github.com/manhdung3010" target="_blank" rel="noopener noreferrer" className="hover:underline">manhdung3010</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-primary">LinkedIn:</span>
            <a href="https://linkedin.com/in/manhdung3010" target="_blank" rel="noopener noreferrer" className="hover:underline">manhdung3010</a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}