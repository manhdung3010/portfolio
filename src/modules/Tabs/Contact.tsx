"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  User,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { useState, useMemo } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/app/contexts/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  // 🔹 contactInfo memoized để không re-render khi nhập form
  const contactInfo = useMemo(
    () => [
      {
        icon: Phone,
        label: t("sections.contact.contactInfo.phone.label"),
        value: "+84 326680326",
        href: "tel:+84326680326",
        description: t("sections.contact.contactInfo.phone.description"),
      },
      {
        icon: Mail,
        label: t("sections.contact.contactInfo.email.label"),
        value: "ngmanhdung2003@gmail.com",
        href: "mailto:ngmanhdung2003@gmail.com",
        description: t("sections.contact.contactInfo.email.description"),
      },
      {
        icon: Github,
        label: t("sections.contact.contactInfo.github.label"),
        value: "manhdung3010",
        href: "https://github.com/manhdung3010",
        description: t("sections.contact.contactInfo.github.description"),
      },
      {
        icon: Linkedin,
        label: t("sections.contact.contactInfo.linkedin.label"),
        value: "manhdung3010",
        href: "https://linkedin.com/in/manhdung3010",
        description: t("sections.contact.contactInfo.linkedin.description"),
      },
    ],
    [t]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error(t("sections.contact.messages.configError"));
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "New Contact Form Submission",
        message: formData.message,
        to_name: "Nguyễn Mạnh Dũng",
      };

      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      if (result.status === 200) {
        setSubmitStatus("success");
        setSubmitMessage(t("sections.contact.messages.success"));
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(t("sections.contact.messages.error"));
    }
  };

  return (
    <div className="py-12 flex flex-col gap-12">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl space-y-4"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold gradient-text">{t("sections.contact.title")}</h2>
        </motion.div>
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground">
          {t("sections.contact.subtitle")}
        </motion.p>
      </motion.div>

      <div className="border w-full" />

      {/* Contact Info */}
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        <motion.div variants={itemVariants} className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <User className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold gradient-text">
              {t("sections.contact.getInTouch.title")}
            </h3>
          </div>
          <p className="text-muted-foreground">{t("sections.contact.getInTouch.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={idx}
                variants={itemVariants}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex gap-2 items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary">{contact.label}</h4>
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <div className="border w-full" />

      {/* Contact Form */}
      <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-8">
        <motion.div variants={itemVariants} className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <Send className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold gradient-text">
              {t("sections.contact.sendMessage.title")}
            </h3>
          </div>
          <p className="text-muted-foreground">{t("sections.contact.sendMessage.subtitle")}</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-background/80 border border-border rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                  {t("sections.contact.form.name")} {t("sections.contact.form.required")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t("sections.contact.form.namePlaceholder")}
                  className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                  {t("sections.contact.form.email")} {t("sections.contact.form.required")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t("sections.contact.form.emailPlaceholder")}
                  className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">
                {t("sections.contact.form.subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={t("sections.contact.form.subjectPlaceholder")}
                className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                {t("sections.contact.form.message")} {t("sections.contact.form.required")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t("sections.contact.form.messagePlaceholder")}
                className="w-full border border-border rounded-lg px-4 py-3 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                rows={5}
                required
              />
            </div>

            {/* Submit Status Message */}
            {submitStatus !== "idle" && submitStatus !== "loading" && (
              <motion.div
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus === "success"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : submitStatus === "error"
                    ? "bg-red-100 text-red-800 border border-red-200"
                    : "bg-blue-100 text-blue-800 border border-blue-200"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {submitStatus === "success" && <CheckCircle className="w-5 h-5" />}
                {submitStatus === "error" && <AlertCircle className="w-5 h-5" />}
                <span className="text-sm font-medium">{submitMessage}</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={submitStatus === "loading"}
              className="w-full bg-primary text-primary-foreground rounded-lg px-6 py-4 font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={submitStatus !== "loading" ? { scale: 1.02 } : {}}
              whileTap={submitStatus !== "loading" ? { scale: 0.98 } : {}}
            >
              {submitStatus === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t("sections.contact.form.sending")}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t("sections.contact.form.send")}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
