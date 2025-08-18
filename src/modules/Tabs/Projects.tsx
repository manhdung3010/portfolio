"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/app/components/Modal";
import {
  Github,
  Eye,
  FolderOpen,
  CheckCircle,
} from "lucide-react";

type Screenshot = {
  title: string;
  url: string;
  desc: string;
};

type Features = {
  frontend: string[];
  backend: string[];
  ai: string[];
  admin: string[];
};

type Repositories = {
  frontend?: string;
  backend?: string;
  ai?: string;
  admin?: string;
};

type Project = {
  title: string;
  cover: string;
  description: string;
  role: string;
  tech: string[];
  repos?: Repositories;
  demo?: string;
  video?: string;
  screenshots: Screenshot[];
  features: Features;
  responsibilities: string[];
};

const projects: Project[] = [
  {
    title: "WorldReader",
    cover: "/images/project/worldreader/cover.png",
    description:
      "WorldReader là một nền tảng thương mại điện tử sách toàn diện, tôi tự phát triển từ đầu với kiến trúc microservice gồm 3 phần: Frontend (Next.js + React), Backend (NestJS + MySQL), và AI Service (Flask + ML). Hệ thống tích hợp đầy đủ tính năng e-commerce hiện đại, kèm hệ thống gợi ý sách thông minh và chatbot AI.",
    role: "Full-stack & AI Developer (Solo Project)",
    tech: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Ant Design",
      "NestJS",
      "MySQL",
      "TypeORM",
      "JWT",
      "Google OAuth2.0",
      "Swagger",
      "Flask",
      "Scikit-learn",
      "FAISS",
      "Python NLP",
    ],
    repos: {
      frontend: "https://github.com/manhdung3010/WorldReader-FE",
      admin: "https://github.com/manhdung3010/WorldReader-Admin",
      backend: "https://github.com/manhdung3010/WorldReader-BE",
      ai: "https://github.com/manhdung3010/WorldReader-AI",
    },
    demo: "https://worldreader-demo.vercel.app",
    video: "https://youtu.be/demo-video-worldreader",
    screenshots: [
      {
        title: "Trang chủ",
        url: "/images/project/worldreader/cover.png",
        desc: "Giao diện trang chủ hiển thị danh sách sách nổi bật, bộ lọc, tìm kiếm.",
      },
      {
        title: "Chi tiết sản phẩm",
        url: "/images/project/worldreader/product.png",
        desc: "Trang chi tiết sách với thông tin, đánh giá, gợi ý sách liên quan.",
      },
      {
        title: "Giỏ hàng & Thanh toán",
        url: "/images/project/worldreader/cart.png",
        desc: "Giỏ hàng với xử lý giảm giá, voucher, nhiều phương thức thanh toán.",
      },
      {
        title: "Admin Dashboard",
        url: "/images/project/worldreader/admin.png",
        desc: "Trang quản trị quản lý người dùng, đơn hàng, sản phẩm, flash sale.",
      },
      {
        title: "AI Recommendation",
        url: "/images/project/worldreader/ai.png",
        desc: "Sơ đồ kiến trúc tổng thể phân lớp với module AI Service",
      },
      {
        title: "Chatbot AI",
        url: "/images/project/worldreader/chatbot.png",
        desc: "Chatbot AI hỗ trợ tư vấn và tìm kiếm sách thông minh.",
      },
    ],
    features: {
      frontend: [
        "Responsive UI/UX với Next.js, React, TailwindCSS, Ant Design",
        "Trang chủ, danh mục, chi tiết sản phẩm, giỏ hàng, thanh toán",
        "Authentication flow (Login, Register, OAuth2.0, Forgot password)",
        "Multi-language & Dark mode support",
      ],
      backend: [
        "API xây dựng với NestJS (RESTful)",
        "Authentication & Authorization (JWT, Google OAuth2.0)",
        "Quản lý sản phẩm, đơn hàng, voucher, flash sale",
        "Swagger API Documentation",
      ],
      ai: [
        "Recommendation System (Collaborative Filtering + Content-based)",
        "Chatbot AI sử dụng NLP (Python + Flask + Scikit-learn)",
        "Vector Search với FAISS cho truy vấn ngữ nghĩa",
      ],
      admin: [
        "Admin Dashboard role-based",
        "Quản lý người dùng, sản phẩm, đơn hàng",
        "Phân quyền và thống kê hệ thống",
      ],
    },
    responsibilities: [
      "Phân tích, thiết kế kiến trúc tổng thể hệ thống với mô hình microservice.",
      "Phát triển frontend với Next.js, React, TailwindCSS, Ant Design.",
      "Phát triển backend API với NestJS, TypeORM, MySQL, tích hợp xác thực JWT và Google OAuth2.0.",
      "Thiết kế và tối ưu cơ sở dữ liệu MySQL với hơn 15 bảng quan hệ.",
      "Xây dựng AI Service với Flask (Python), triển khai Recommendation Engine và Chatbot.",
      "Tích hợp các dịch vụ AI vào frontend và backend thông qua API.",
      "Viết tài liệu API chi tiết bằng Swagger, hỗ trợ kiểm thử và tích hợp dễ dàng.",
      "Tối ưu hiệu năng, cache, và triển khai CI/CD.",
    ],
  
  },
];

// ================== Modal Content Component ==================
function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-primary mb-2">{project.title}</h2>
      <p className="text-muted-foreground mb-6">{project.description}</p>

      {/* Video Demo */}
      {project.video && (
        <div className="mb-6">
          <iframe
            width="100%"
            height="400"
            src={project.video.replace("watch?v=", "embed/")}
            title="Demo Video"
            className="rounded-lg"
            allowFullScreen
          />
        </div>
      )}

      {/* Screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {project.screenshots.map((s, i) => (
          <div key={i} className="space-y-2">
            <Image
              src={s.url}
              alt={s.title}
              width={800}
              height={500}
              className="rounded-lg border shadow-sm w-full object-cover"
            />
            <p className="text-sm text-muted-foreground">
              <strong>{s.title}:</strong> {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-primary mb-3">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(Object.entries(project.features) as Array<[string, string[]]>).map(
            ([section, items], i) => (
              <div key={i}>
                <h4 className="font-semibold mb-2 capitalize">{section}</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {items.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-primary mb-3">Responsibilities</h3>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
          {project.responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      </div>


      {/* Tech Stack */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-primary mb-3">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-accent px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Repositories & Demo */}
      <div className="flex flex-wrap gap-3">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
          >
            <Eye className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {project.repos?.frontend && (
          <a
            href={project.repos.frontend}
            target="_blank"
            className="inline-flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-primary/10"
          >
            <Github className="w-4 h-4" /> Frontend
          </a>
        )}
         {project.repos?.admin && (
          <a
            href={project.repos.admin}
            target="_blank"
            className="inline-flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-primary/10"
          >
            <Github className="w-4 h-4" /> Admin
          </a>
        )}
        {project.repos?.backend && (
          <a
            href={project.repos.backend}
            target="_blank"
            className="inline-flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-primary/10"
          >
            <Github className="w-4 h-4" /> Backend
          </a>
        )}
        {project.repos?.ai && (
          <a
            href={project.repos.ai}
            target="_blank"
            className="inline-flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-primary/10"
          >
            <Github className="w-4 h-4" /> AI Service
          </a>
        )}
      </div>
    </div>
  );
}

// ================== Main Projects Component ==================
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-12 flex flex-col gap-12">
      {/* Header */}
      <motion.div
        className="max-w-4xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <FolderOpen className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold gradient-text">Projects</h2>
        </div>
        <p className="text-xl text-muted-foreground">
          A showcase of my expertise in full-stack and AI development through real-world projects that combine technical depth, modern architecture, and practical problem-solving.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-card/50 backdrop-blur-sm border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.2 }}
          >
            <Image
              src={project.cover}
              alt={project.title}
              width={1200}
              height={384}
              className="h-48 w-full object-cover"
              priority={i === 0}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((t, idx) => (
                  <span key={idx} className="bg-accent px-2 py-1 text-xs rounded-full">
                    {t}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="bg-primary/10 text-primary px-2 py-1 text-xs rounded-full">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        contentClassName="p-6"
      >
        {selectedProject && <ProjectDetailContent project={selectedProject} />}
      </Modal>
    </div>
  );
}
