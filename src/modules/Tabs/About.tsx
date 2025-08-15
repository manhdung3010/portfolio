"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Download } from "lucide-react";

export default function About() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+84 326680326",
      href: "tel:+84326680326"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "ngmanhdung2003@gmail.com",
      href: "mailto:ngmanhdung2003@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "manhdung3010",
      href: "https://github.com/manhdung3010"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "manhdung3010", 
      href: "https://linkedin.com/in/manhdung3010"
    }
  ];

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-start gap-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Avatar Section */}
      <motion.div 
        className="flex-shrink-0 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 p-1 animate-pulse-slow">
            <img 
              src="/images/avatar.jpg" 
              alt="Nguyễn Mạnh Dũng" 
              className="w-full h-full rounded-full object-cover border-4 border-background shadow-xl"
            />
          </div>
          <motion.div
            className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Fullstack
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-3 gradient-text text-shadow py-2">
            NGUYỄN MẠNH DŨNG
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xl text-muted-foreground">
              Fullstack Developer
            </span>
            <div className="flex gap-2">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                React.js
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                Next.js
              </span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                Node.js
              </span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed max-w-3xl">
            Tôi là một <strong className="text-primary">Fullstack Developer</strong> với hơn 2 năm kinh nghiệm chuyên sâu trong việc thiết kế và phát
            triển giao diện người dùng cho các ứng dụng web sử dụng React.js và Next.js. Tôi tập trung vào
            việc xây dựng các giải pháp tối ưu về hiệu suất, tính tương tác và trải nghiệm người dùng.
          </p>
          <p className="text-base leading-relaxed max-w-3xl text-muted-foreground">
            Tôi luôn tìm tòi, học hỏi các công nghệ mới và áp dụng các phương pháp tốt nhất để không ngừng hoàn
            thiện kỹ năng, đồng thời tạo ra những sản phẩm chất lượng, hiện đại và tối ưu.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === "GitHub" || contact.label === "LinkedIn" ? "_blank" : undefined}
                rel={contact.label === "GitHub" || contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:bg-accent transition-all duration-200 group"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-sm font-medium text-muted-foreground">{contact.label}</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">
                    {contact.value}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/cv-nguyen-manh-dung.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Tải CV
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}