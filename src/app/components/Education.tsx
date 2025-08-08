"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function Education() {
  const educationDetails = [
    {
      icon: GraduationCap,
      label: "Trường Đại học Mỏ – Địa chất",
      value: "Công nghệ Thông tin, Chuyên ngành Khoa học Máy tính"
    },
    {
      icon: Calendar,
      label: "Thời gian học",
      value: "09/2021 - Hiện tại"
    },
    {
      icon: Award,
      label: "Điểm GPA",
      value: "3.1/4.0"
    },
    {
      icon: MapPin,
      label: "Địa điểm",
      value: "Hà Nội, Việt Nam"
    }
  ];

  const achievements = [
    "Thành viên tích cực trong các dự án nghiên cứu và phát triển phần mềm",
    "Tham gia các cuộc thi lập trình và hackathon trong trường",
    "Hoàn thành các khóa học online về React, Node.js và các công nghệ web hiện đại",
    "Tích lũy kiến thức thực tế thông qua các dự án cá nhân và thực tập"
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Main Education Card */}
      <motion.div
        className="bg-card rounded-xl shadow-lg p-6 border border-border card-hover"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
      >
        <div className="flex items-start gap-6">
          {/* University Logo/Icon */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Education Content */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Trường Đại học Mỏ – Địa chất</h3>
              <p className="text-lg text-muted-foreground">Công nghệ Thông tin, Chuyên ngành Khoa học Máy tính</p>
            </div>

            {/* Education Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={detail.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">{detail.label}</div>
                      <div className="font-semibold text-primary">{detail.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        className="bg-card rounded-xl shadow-lg p-6 border border-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-primary">Thành tích & Hoạt động</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Summary */}
      <motion.div
        className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-primary">Quá trình học tập</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          Với nền tảng học vấn vững chắc từ một trong những trường đại học hàng đầu về kỹ thuật tại Việt Nam, 
          tôi đã được trang bị kiến thức cơ bản và tư duy logic cần thiết cho sự nghiệp phát triển phần mềm.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Năm học tập</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3.1</div>
            <div className="text-sm text-muted-foreground">GPA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">CS</div>
            <div className="text-sm text-muted-foreground">Chuyên ngành</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}