"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Download, ChevronDown, ChevronUp, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const careerJourney = [
    {
      id: 1,
      company: "Physcode",
      position: "Fullstack Developer",
      period: "03/2025 - Hiện tại",
      location: "Hà Nội, Việt Nam",
      type: "Full-time",
      mode: "Onsite",
      responsibilities: [
        "Phát triển frontend với React.js, Next.js và TypeScript",
        "Xây dựng backend API với Node.js và Express",
        "Thiết kế và quản lý cơ sở dữ liệu PostgreSQL",
        "Tối ưu hóa hiệu suất và trải nghiệm người dùng",
        "Làm việc trong môi trường Agile/Scrum",
        "Code review và mentoring junior developers"
      ]
    },
    {
      id: 2,
      company: "ACD TECHNOLOGY",
      position: "Full Stack Developer",
      period: "07/2023 - 02/2025",
      location: "Hà Nội, Việt Nam",
      type: "Full-time",
      mode: "Onsite",
      responsibilities: [
        "Phát triển giao diện người dùng responsive với React.js",
        "Xây dựng RESTful APIs và GraphQL endpoints",
        "Tích hợp các dịch vụ bên thứ ba và payment gateways",
        "Thực hiện unit testing và integration testing",
        "Deploy và maintain ứng dụng trên cloud platforms",
        "Collaborate với team cross-functional để deliver features"
      ]
    }
  ];

  const education = {
    school: "Trường Đại học Mỏ – Địa chất",
    degree: "Ngành Công nghệ Thông tin, chuyên ngành Khoa học Máy tính",
    period: "09/2021 - 02/2024",
    location: "Hà Nội, Việt Nam",
    achievements: [
      "Hoàn thành chương trình 4.5 năm trong 2.5 năm (tăng tốc 44%)",
      "Bắt đầu đi làm từ năm thứ 2 đại học",
      "Đạt học bổng năm 3 với GPA 3.8/4.0",
      "Thành thạo các công nghệ web hiện đại và áp dụng thực tế",
      "Có khả năng học hỏi nhanh và thích ứng với môi trường làm việc"
    ]
  };

  return (
    <div className="py-12 flex flex-col" style={{gap: '3rem'}}>
      {/* About Section */}
      <motion.div
        className="max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold gradient-text">About</h2>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-xl leading-relaxed text-muted-foreground">
            Tôi là <strong className="text-primary">Nguyễn Mạnh Dũng</strong>, một <strong className="text-primary">Fullstack Developer</strong> với hơn 2 năm kinh nghiệm 
            trong việc phát triển các ứng dụng web hiện đại. Tôi đã tốt nghiệp ngành Công nghệ Thông tin tại 
            Đại học Mỏ - Địa chất và hiện đang làm việc tại Physcode với vai trò Fullstack Developer.
          </p>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Phong cách làm việc của tôi tập trung vào việc tạo ra những giải pháp <strong className="text-primary">thân thiện với người dùng</strong> 
            và <strong className="text-primary">hiệu suất cao</strong>. Tôi tin vào việc viết code rõ ràng, hiệu quả và luôn sẵn sàng học hỏi 
            những công nghệ mới để giải quyết các vấn đề phức tạp một cách sáng tạo.
          </p>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Tôi đánh giá cao tầm quan trọng của giao tiếp và sự đồng bộ trong nhóm. Kinh nghiệm của tôi đã 
            rèn luyện cho tôi những phẩm chất kỹ thuật, phân tích và lãnh đạo. Tôi rất hào hứng được học hỏi 
            từ những người khác và đóng góp vào các dự án có tác động.
          </p>
          
          <div className="pt-4">
            <p className="text-sm text-muted-foreground">Best regards,</p>
            <p className="text-primary font-semibold text-lg">dũng</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="border w-full" />

      {/* Career Section */}
      <motion.div
        className="space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Section Header */}
        <div className="text-start space-y-4">
          <motion.div
            className="flex items-center justify-start gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">Career</h2>
          </motion.div>
          <p className="text-muted-foreground">My professional journey.</p>
        </div>

        {/* Career Cards */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg">
            <div className="space-y-6">
              {careerJourney.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="bg-background/80 border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
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
                  <div className="flex gap-4">
                    {/* Company Logo Placeholder */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>

                    {/* Job Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg text-primary">{job.position}</h3>
                          <p className="text-muted-foreground">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.mode}</span>
                      </div>

                      {/* Responsibilities Toggle */}
                      <div className="pt-2">
                        <button
                          onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                          className="flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
                        >
                          {expandedJob === job.id ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                          {expandedJob === job.id ? "Hide responsibilities" : "Show responsibilities"}
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: expandedJob === job.id ? "auto" : 0,
                            opacity: expandedJob === job.id ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 pt-3 pl-4 text-sm text-muted-foreground">
                            {job.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="border w-full" />

      {/* Education Section */}
      <motion.div
        className="space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        {/* Section Header */}
        <div className="text-start space-y-4">
          <motion.div
            className="flex items-center justify-start gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">Education</h2>
          </motion.div>
          <p className="text-muted-foreground">My educational journey.</p>
        </div>

        {/* Education Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm rounded-lg">
            <motion.div 
              className="bg-background/80 border border-border rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 2.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex gap-4">
                {/* University Logo Placeholder */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                {/* Education Details */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-lg text-primary">{education.school}</h3>
                      <p className="text-muted-foreground">{education.degree}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>

                  {/* Achievements */}
                  <div className="pt-2">
                    <h4 className="font-semibold text-lg text-primary">Achievements:</h4>
                    <ul className="space-y-2 ml-3 text-sm text-muted-foreground">
                      {education.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.4 }}
        >
          <button className="px-6 py-3 bg-primary text-primary-foreground hover:text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Portfolio
          </button>
          <button className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}