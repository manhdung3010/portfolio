"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Send, MapPin, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+84 326680326",
      href: "tel:+84326680326",
      description: "Gọi điện trực tiếp"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "ngmanhdung2003@gmail.com",
      href: "mailto:ngmanhdung2003@gmail.com",
      description: "Gửi email"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "manhdung3010",
      href: "https://github.com/manhdung3010",
      description: "Xem dự án"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "manhdung3010", 
      href: "https://linkedin.com/in/manhdung3010",
      description: "Kết nối chuyên nghiệp"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Contact Info Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
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
              className="bg-card rounded-xl p-4 border border-border hover:bg-accent transition-all duration-200 group card-hover"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">{contact.label}</div>
                  <div className="font-semibold group-hover:text-primary transition-colors">
                    {contact.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{contact.description}</div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="bg-card rounded-xl shadow-lg p-6 border border-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-primary">Gửi tin nhắn</h3>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                Tên của bạn *
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Nhập tên của bạn" 
                className="w-full border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                Email *
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Nhập email của bạn" 
                className="w-full border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2 text-muted-foreground">
              Tiêu đề
            </label>
            <input 
              type="text" 
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Nhập tiêu đề tin nhắn" 
              className="w-full border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
              Nội dung tin nhắn *
            </label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Nhập nội dung tin nhắn" 
              className="w-full border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none" 
              rows={4}
              required
            />
          </div>
          
          <motion.button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground rounded-lg px-6 py-3 font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-4 h-4" />
            Gửi tin nhắn
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Summary */}
      <motion.div
        className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-primary mb-3">Hãy liên hệ với tôi</h3>
        <p className="text-muted-foreground mb-4">
          Tôi luôn sẵn sàng lắng nghe các cơ hội hợp tác, dự án mới hoặc chỉ đơn giản là trò chuyện về công nghệ. 
          Hãy liên hệ với tôi để bắt đầu cuộc trò chuyện!
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Sẵn sàng</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">Fast</div>
            <div className="text-sm text-muted-foreground">Phản hồi nhanh</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">Professional</div>
            <div className="text-sm text-muted-foreground">Chuyên nghiệp</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}