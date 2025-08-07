"use client";

import { motion } from "framer-motion";

const skills = [
  { 
    group: "Ngôn ngữ lập trình", 
    items: ["JavaScript (ES6+)", "TypeScript"] 
  },
  { 
    group: "Frontend Frameworks", 
    items: ["React.js", "Next.js"] 
  },
  { 
    group: "CSS Frameworks/Libraries", 
    items: ["Bootstrap", "Tailwind CSS", "Material UI", "Ant Design", "Shopify Polaris"] 
  },
  { 
    group: "Backend Frameworks", 
    items: ["NodeJs", "NestJS", "Express.js"] 
  },
  { 
    group: "Database", 
    items: ["MySQL", "MongoDB"] 
  },
  { 
    group: "DevOps and Tools", 
    items: ["Docker", "Jenkins", "Git/GitHub/GitLab"] 
  },
  { 
    group: "Khác", 
    items: ["Figma", "Jira", "Swagger", "Postman", "OOP", "SOLID", "Scrum", "Agile", "CI/CD", "UI/UX"] 
  },
];

const additionalSkills = [
  "Hiểu biết tốt về các phương pháp OOP, nguyên tắc SOLID, Scrum và Agile.",
  "Kinh nghiệm thiết lập quy trình CI/CD, sử dụng Docker và triển khai DevOps.",
  "Thực hành tốt với các công cụ thiết kế như Figma, tích hợp UI/UX vào ứng dụng.",
  "Kỹ năng làm việc nhóm và giao tiếp hiệu quả, tương tác tốt với các team khác.",
  "Kinh nghiệm giao tiếp với khách hàng, thu thập và chuyển đổi yêu cầu thành giải pháp kỹ thuật.",
  "Tư duy logic, khả năng giải quyết vấn đề và đọc hiểu tài liệu, code, tiếng Anh.",
  "Chuyên nghiệp, có trách nhiệm cao trong công việc và khả năng viết tài liệu tiếng Anh."
];

export default function Skills() {
  return (
    <div className="space-y-8">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <div key={skill.group} className="bg-card rounded-xl shadow p-5 flex flex-col gap-2">
            <div className="font-semibold text-primary mb-2">{skill.group}</div>
            <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {skill.items.map((item) => (
                <li key={item} className="bg-accent px-2 py-1 rounded-md">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="bg-card rounded-xl shadow p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-lg text-primary mb-4">Kỹ năng bổ sung</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {additionalSkills.map((skill, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}