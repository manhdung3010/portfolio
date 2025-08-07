"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.div
      className="bg-card rounded-xl shadow-lg p-6 border border-border"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <h3 className="text-xl font-bold text-primary">Trường Đại học Mỏ – Địa chất</h3>
          <div className="text-sm text-muted-foreground">09/2021 - Now</div>
        </div>
        
        <div className="space-y-2">
          <div className="text-base">
            <span className="font-semibold">Ngành học:</span> Công nghệ Thông tin, Chuyên ngành Khoa học Máy tính
          </div>
          <div className="text-base">
            <span className="font-semibold">Điểm GPA:</span> <span className="font-bold text-primary">3.1</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}