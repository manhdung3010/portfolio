"use client";

import { motion } from "framer-motion";
import { Code, Palette, Database, Cloud, Settings, Users, Zap } from "lucide-react";

const skills = [
  {
    group: "Ngôn ngữ & Nền tảng",
    icon: Code,
    items: [
      { name: "JavaScript", color: "bg-yellow-500", textColor: "text-yellow-900", icon: "⚡" },
      { name: "TypeScript", color: "bg-blue-600", textColor: "text-white", icon: "📘" },
      { name: "Python", color: "bg-blue-500", textColor: "text-white", icon: "🐍" },
      { name: "Java", color: "bg-red-600", textColor: "text-white", icon: "☕" },
      { name: "HTML5", color: "bg-orange-500", textColor: "text-white", icon: "🌐" },
      { name: "CSS3", color: "bg-blue-500", textColor: "text-white", icon: "🎨" },
      { name: "Markdown", color: "bg-gray-600", textColor: "text-white", icon: "📝" }
    ]
  },
  {
    group: "Frontend Frameworks & Libraries",
    icon: Palette,
    items: [
      { name: "React", color: "bg-cyan-500", textColor: "text-white", icon: "⚛️" },
      { name: "Next.js", color: "bg-black", textColor: "text-white", icon: "▲" },
      { name: "Vue.js", color: "bg-green-500", textColor: "text-white", icon: "💚" },
      { name: "Nuxt.js", color: "bg-green-600", textColor: "text-white", icon: "🟢" },
      { name: "Angular", color: "bg-red-600", textColor: "text-white", icon: "🅰️" },
      { name: "React Native", color: "bg-blue-500", textColor: "text-white", icon: "📱" },
      { name: "Vite", color: "bg-purple-500", textColor: "text-white", icon: "⚡" },
      { name: "Webpack", color: "bg-blue-600", textColor: "text-white", icon: "📦" }
    ]
  },
  {
    group: "State & Form Management",
    icon: Settings,
    items: [
      { name: "Redux", color: "bg-purple-600", textColor: "text-white", icon: "🔄" },
      { name: "Zustand", color: "bg-orange-500", textColor: "text-white", icon: "🐻" },
      { name: "React Hook Form", color: "bg-pink-500", textColor: "text-white", icon: "📋" },
      { name: "Formik", color: "bg-blue-500", textColor: "text-white", icon: "📝" }
    ]
  },
  {
    group: "UI/UX & CSS",
    icon: Palette,
    items: [
      { name: "Tailwind CSS", color: "bg-cyan-500", textColor: "text-white", icon: "🎨" },
      { name: "Material UI", color: "bg-blue-600", textColor: "text-white", icon: "🧩" },
      { name: "Chakra UI", color: "bg-teal-500", textColor: "text-white", icon: "🎯" },
      { name: "Ant Design", color: "bg-blue-600", textColor: "text-white", icon: "🐜" },
      { name: "Bootstrap", color: "bg-purple-600", textColor: "text-white", icon: "🚀" },
      { name: "Styled Components", color: "bg-pink-500", textColor: "text-white", icon: "💅" },
      { name: "SCSS", color: "bg-pink-600", textColor: "text-white", icon: "🎨" }
    ]
  },
  {
    group: "Backend & API",
    icon: Code,
    items: [
      { name: "Node.js", color: "bg-green-600", textColor: "text-white", icon: "🟢" },
      { name: "Express.js", color: "bg-gray-600", textColor: "text-white", icon: "🚂" },
      { name: "NestJS", color: "bg-red-600", textColor: "text-white", icon: "🪺" },
      { name: "REST API", color: "bg-blue-500", textColor: "text-white", icon: "🔗" },
      { name: "GraphQL", color: "bg-pink-600", textColor: "text-white", icon: "📊" },
      { name: "Apollo GraphQL", color: "bg-purple-600", textColor: "text-white", icon: "🚀" },
      { name: "Socket.io", color: "bg-black", textColor: "text-white", icon: "🔌" }
    ]
  },
  {
    group: "Database & ORM",
    icon: Database,
    items: [
      { name: "MongoDB", color: "bg-green-600", textColor: "text-white", icon: "🍃" },
      { name: "PostgreSQL", color: "bg-blue-600", textColor: "text-white", icon: "🐘" },
      { name: "MySQL", color: "bg-blue-500", textColor: "text-white", icon: "🐬" },
      { name: "Redis", color: "bg-red-600", textColor: "text-white", icon: "🔴" },
      { name: "Prisma", color: "bg-gray-800", textColor: "text-white", icon: "🔮" },
      { name: "Mongoose", color: "bg-green-600", textColor: "text-white", icon: "🐍" },
      { name: "Firebase", color: "bg-orange-500", textColor: "text-white", icon: "🔥" }
    ]
  },
  {
    group: "DevOps & Cloud",
    icon: Cloud,
    items: [
      { name: "Docker", color: "bg-blue-600", textColor: "text-white", icon: "🐳" },
      { name: "AWS", color: "bg-orange-500", textColor: "text-white", icon: "☁️" },
      { name: "Google Cloud", color: "bg-blue-500", textColor: "text-white", icon: "☁️" },
      { name: "Azure", color: "bg-blue-600", textColor: "text-white", icon: "☁️" },
      { name: "Vercel", color: "bg-black", textColor: "text-white", icon: "▲" },
      { name: "Render", color: "bg-purple-500", textColor: "text-white", icon: "🎨" }
    ]
  },
  {
    group: "Tools & Workflow",
    icon: Settings,
    items: [
      { name: "npm", color: "bg-red-600", textColor: "text-white", icon: "📦" },
      { name: "Yarn", color: "bg-blue-500", textColor: "text-white", icon: "🧶" },
      { name: "pnpm", color: "bg-orange-500", textColor: "text-white", icon: "📦" },
      { name: "ESLint", color: "bg-purple-600", textColor: "text-white", icon: "🔍" },
      { name: "Prettier", color: "bg-gray-600", textColor: "text-white", icon: "✨" },
      { name: "Husky", color: "bg-gray-800", textColor: "text-white", icon: "🐕" },
      { name: "Git", color: "bg-orange-600", textColor: "text-white", icon: "📚" },
      { name: "GitHub", color: "bg-black", textColor: "text-white", icon: "🐙" },
      { name: "GitLab", color: "bg-orange-500", textColor: "text-white", icon: "🦊" },
      { name: "VS Code", color: "bg-blue-600", textColor: "text-white", icon: "💻" },
      { name: "Postman", color: "bg-orange-500", textColor: "text-white", icon: "📮" },
      { name: "Figma", color: "bg-purple-500", textColor: "text-white", icon: "🎨" }
    ]
  }
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
      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div 
              key={skill.group} 
              className="bg-card rounded-xl shadow-lg p-6 border border-border card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-primary">{skill.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item.name} 
                    className={`${item.color} ${item.textColor} px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition-opacity shadow-sm flex items-center gap-1`}
                  >
                    <span className="text-xs">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Additional Skills */}
      <motion.div
        className="bg-card rounded-xl shadow-lg p-6 border border-border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-primary">Kỹ năng bổ sung & Điểm mạnh</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground leading-relaxed">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}