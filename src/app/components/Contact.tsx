"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
        <h3 className="text-xl font-bold text-primary mb-4">Thông tin liên hệ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-primary">Phone:</span>
            <a href="tel:+84326680326" className="hover:underline">+84 326680326</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-primary">Email:</span>
            <a href="mailto:ngmanhdung2003@gmail.com" className="hover:underline">ngmanhdung2003@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-primary">GitHub:</span>
            <a href="https://github.com/manhdung3010" target="_blank" rel="noopener noreferrer" className="hover:underline">manhdung3010</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-primary">LinkedIn:</span>
            <a href="https://linkedin.com/in/manhdung3010" target="_blank" rel="noopener noreferrer" className="hover:underline">manhdung3010</a>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
        <h3 className="text-xl font-bold text-primary mb-4">Gửi tin nhắn</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Tên của bạn</label>
            <input 
              type="text" 
              id="name"
              placeholder="Nhập tên của bạn" 
              className="w-full border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="Nhập email của bạn" 
              className="w-full border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Nội dung</label>
            <textarea 
              id="message"
              placeholder="Nhập nội dung tin nhắn" 
              className="w-full border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              rows={4} 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground rounded-lg px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
          >
            Gửi tin nhắn
          </button>
        </form>
      </div>
    </motion.div>
  );
}