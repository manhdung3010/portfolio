"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Send, MapPin, Clock, MessageSquare, User, Calendar } from "lucide-react";
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
    <div className="py-12 flex flex-col" style={{gap: '3rem'}}>
      {/* Contact Header */}
      <motion.div
        className="max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MessageSquare className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold gradient-text">Contact</h2>
        </motion.div>
        <p className="text-xl leading-relaxed text-muted-foreground">
          I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let&apos;s connect and start a conversation!
        </p>
      </motion.div>

      <div className="border w-full" />

      {/* Contact Info Cards */}
      <motion.div
        className="space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="text-center space-y-4">
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <User className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold gradient-text">Get In Touch</h3>
          </motion.div>
          <p className="text-muted-foreground">Choose your preferred way to connect</p>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.label === "GitHub" || contact.label === "LinkedIn" ? "_blank" : undefined}
                    rel={contact.label === "GitHub" || contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="bg-background/80 border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.4 + index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="space-y-4">
                    
                      <div className="flex gap-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-lg text-primary">{contact.label}</h4>
                          <p className="text-muted-foreground text-[12px]">{contact.value}</p>
                        </div>
                      </div>
                 
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="border w-full" />

      {/* Contact Form */}
      <motion.div
        className="space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="text-center space-y-4">
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Send className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold gradient-text">Send Message</h3>
          </motion.div>
                     <p className="text-muted-foreground">Drop me a line and I&apos;ll get back to you</p>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg p-6">
            <motion.div
              className="bg-background/80 border border-border rounded-lg p-8"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                      Name *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?" 
                    className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!" 
                    className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none" 
                    rows={5}
                    required
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground rounded-lg px-6 py-4 font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>


    </div>
  );
}