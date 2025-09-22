"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/app/components/Modal";
import { useLanguage } from "@/app/contexts/LanguageContext";
import {
  Github,
  Eye,
  FolderOpen,
  Play,
  Monitor,
  Code,
  Brain,
  Settings,
  CheckCircle,
  ExternalLink,
  Calendar,
  User,
} from "lucide-react";

type Screenshot = {
  title: string;
  url: string;
  desc: string;
};

type Features = {
  frontend?: string[];
  backend?: string[];
  ai?: string[];
  admin?: string[];
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

const projectsVi: Project[] = [
  {
    title: "Bitcoin Chart Pro",
    cover: "/projects/chart/home.png",
    description:
      "Bitcoin Chart Pro là một ứng dụng phân tích kỹ thuật Bitcoin chuyên nghiệp được xây dựng với Lightweight Charts và các thư viện tùy biến mở rộng. Ứng dụng cung cấp giao diện trực quan hiện đại với các chỉ báo kỹ thuật nâng cao, phân tích xu hướng thời gian thực, và trải nghiệm người dùng được tối ưu hóa cho các nhà đầu tư cryptocurrency.",
    role: "Frontend Developer & Chart Specialist (Solo Project)",
    tech: [
      "React",
      "TypeScript",
      "Lightweight Charts",
      "WebSocket",
      "Canvas API",
      "Custom Hooks",
      "TailwindCSS",
      "Framer Motion",
      "Real-time Data",
      "Technical Analysis",
    ],
    repos: {
      frontend: "https://github.com/manhdung3010/bitcoin-chart-pro",
    },
    demo: "https://bitcoin-chart-pro.vercel.app",
    video: "/projects/chart/Screen Recording 2025-09-22 104855.mp4",
    screenshots: [
      {
        title: "Trang chủ Dashboard",
        url: "/projects/chart/home.png",
        desc: "Giao diện chính hiển thị biểu đồ Bitcoin với các chỉ báo kỹ thuật, thông tin giá real-time và các công cụ phân tích.",
      },
      {
        title: "Classic Chart View",
        url: "/projects/chart/classic.png",
        desc: "Chế độ xem biểu đồ cổ điển với các đường trung bình động, hỗ trợ zoom, pan và các công cụ vẽ kỹ thuật.",
      },
    ],
    features: {
      frontend: [
        "Giao diện responsive với React + TypeScript + TailwindCSS",
        "Tích hợp Lightweight Charts cho hiệu năng cao",
        "Real-time data streaming với WebSocket",
        "Custom chart overlays và indicators",
        "Dark/Light theme với smooth transitions",
      ],
    },
    responsibilities: [
      "Thiết kế và phát triển giao diện người dùng với React và TypeScript.",
      "Tích hợp và tùy biến Lightweight Charts library cho hiệu năng tối ưu.",
      "Xây dựng hệ thống real-time data streaming với WebSocket.",
      "Phát triển các custom chart overlays và technical indicators.",
      "Tối ưu hóa hiệu năng rendering với Canvas API và virtualization.",
      "Implement responsive design và cross-browser compatibility.",
      "Tích hợp các công cụ phân tích kỹ thuật và pattern recognition.",
      "Xây dựng hệ thống caching và data management hiệu quả.",
    ],
  },
  {
    title: "WorldReader",
    cover: "/projects/worldreader/cover.png",
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
    video: "/projects/worldreader/demo.mp4",
    screenshots: [
      {
        title: "Trang chủ",
        url: "/projects/worldreader/cover.png",
        desc: "Giao diện trang chủ hiển thị danh sách sách nổi bật, bộ lọc, tìm kiếm.",
      },
      {
        title: "Chi tiết sản phẩm",
        url: "/projects/worldreader/product.png",
        desc: "Trang chi tiết sách với thông tin, đánh giá, gợi ý sách liên quan.",
      },
      {
        title: "Giỏ hàng & Thanh toán",
        url: "/projects/worldreader/cart.png",
        desc: "Giỏ hàng với xử lý giảm giá, voucher, nhiều phương thức thanh toán.",
      },
      {
        title: "Admin Dashboard",
        url: "/projects/worldreader/admin.png",
        desc: "Trang quản trị quản lý người dùng, đơn hàng, sản phẩm, flash sale.",
      },
      {
        title: "AI Recommendation",
        url: "/projects/worldreader/ai.png",
        desc: "Sơ đồ kiến trúc tổng thể phân lớp với module AI Service",
      },
      {
        title: "Chatbot AI",
        url: "/projects/worldreader/chatbot.png",
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

const projectsEn: Project[] = [
  {
    title: "Bitcoin Chart Pro",
    cover: "/projects/chart/home.png",
    description:
      "Bitcoin Chart Pro is a professional Bitcoin technical analysis application built with Lightweight Charts and custom extensions. It delivers a modern, intuitive UI with advanced indicators, real-time trend analysis, and an optimized UX for crypto traders.",
    role: "Frontend Developer & Chart Specialist (Solo Project)",
    tech: [
      "React",
      "TypeScript",
      "Lightweight Charts",
      "WebSocket",
      "Canvas API",
      "Custom Hooks",
      "TailwindCSS",
      "Framer Motion",
      "Real-time Data",
      "Technical Analysis",
    ],
    repos: {
      frontend: "https://github.com/manhdung3010/bitcoin-chart-pro",
    },
    demo: "https://bitcoin-chart-pro.vercel.app",
    video: "/projects/chart/Screen Recording 2025-09-22 104855.mp4",
    screenshots: [
      {
        title: "Dashboard",
        url: "/projects/chart/home.png",
        desc: "Main interface with Bitcoin chart, real-time pricing and analysis tools.",
      },
      {
        title: "Classic Chart View",
        url: "/projects/chart/classic.png",
        desc: "Classic chart with moving averages, zoom/pan and drawing tools.",
      },
    ],
    features: {
      frontend: [
        "Responsive UI with React + TypeScript + TailwindCSS",
        "High-performance Lightweight Charts integration",
        "Real-time data streaming via WebSocket",
        "Custom chart overlays and indicators",
        "Dark/Light themes with smooth transitions",
      ],
    },
    responsibilities: [
      "Designed and developed the UI with React and TypeScript.",
      "Integrated and customized Lightweight Charts for optimal performance.",
      "Implemented real-time streaming using WebSocket.",
      "Built custom overlays and technical indicators.",
      "Optimized canvas rendering performance and virtualization.",
      "Implemented responsive and cross-browser compatibility.",
      "Integrated technical analysis and pattern recognition tools.",
      "Designed efficient caching and data management.",
    ],
  },
  {
    title: "WorldReader",
    cover: "/projects/worldreader/cover.png",
    description:
      "WorldReader is a full e-commerce platform I built end-to-end with a microservice-style architecture: Frontend (Next.js + React), Backend (NestJS + MySQL), and AI Service (Flask + ML). It includes modern e-commerce features, an intelligent recommendation engine, and an AI chatbot.",
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
    video: "/projects/worldreader/demo.mp4",
    screenshots: [
      { title: "Home", url: "/projects/worldreader/cover.png", desc: "Showcases featured books, filters and search." },
      { title: "Product Details", url: "/projects/worldreader/product.png", desc: "Book details, reviews and related recommendations." },
      { title: "Cart & Checkout", url: "/projects/worldreader/cart.png", desc: "Cart with discounts, vouchers and multiple payment methods." },
      { title: "Admin Dashboard", url: "/projects/worldreader/admin.png", desc: "Role-based admin to manage users, orders, products and flash sales." },
      { title: "AI Recommendation", url: "/projects/worldreader/ai.png", desc: "Architecture diagram with AI Service module." },
      { title: "AI Chatbot", url: "/projects/worldreader/chatbot.png", desc: "AI chatbot for smart book assistance and search." },
    ],
    features: {
      frontend: [
        "Responsive UI/UX with Next.js, React, TailwindCSS, Ant Design",
        "Home, category, product details, cart and checkout",
        "Authentication flow (Login, Register, OAuth2.0, Forgot password)",
        "Multi-language & Dark mode support",
      ],
      backend: [
        "RESTful API built with NestJS",
        "Authentication & Authorization (JWT, Google OAuth2.0)",
        "Products, orders, vouchers, flash sale management",
        "Swagger API Documentation",
      ],
      ai: [
        "Recommendation System (Collaborative Filtering + Content-based)",
        "NLP Chatbot (Python + Flask + Scikit-learn)",
        "Vector Search with FAISS",
      ],
      admin: [
        "Role-based Admin Dashboard",
        "Manage users, products, orders",
        "Permissions and system analytics",
      ],
    },
    responsibilities: [
      "Analyzed and designed the overall system architecture (microservice-style).",
      "Developed the frontend with Next.js, React, TailwindCSS, Ant Design.",
      "Built backend APIs with NestJS, TypeORM, MySQL, integrated JWT and Google OAuth2.0.",
      "Designed and optimized MySQL database with 15+ relational tables.",
      "Built the AI Service with Flask (Python), implemented recommendation engine and chatbot.",
      "Integrated AI services into frontend and backend via APIs.",
      "Wrote detailed API docs with Swagger for easier testing and integration.",
      "Optimized performance, caching and CI/CD deployment.",
    ],
  },
];

// ================== Modal Content Component ==================
function ProjectDetailContent({ projects }: { projects: Project }) {
  const getFeatureIcon = (section: string) => {
    switch (section.toLowerCase()) {
      case 'frontend': return <Monitor className="w-5 h-5" />;
      case 'backend': return <Code className="w-5 h-5" />;
      case 'ai': return <Brain className="w-5 h-5" />;
      case 'admin': return <Settings className="w-5 h-5" />;
      default: return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-primary mb-3 gradient-text">{projects.title}</h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{projects.role}</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">{projects.description}</p>
      </div>

      {/* Video Demo */}
      {projects.video && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Play className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-primary">Demo Video</h3>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <video
              width="100%"
              height="500"
              controls
              autoPlay
              muted
              loop
              className="w-full"
            >
              <source src={projects.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Screenshots */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Monitor className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-primary">Screenshots</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.screenshots.map((s, i) => (
            <motion.div 
              key={i} 
              className="group space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={s.url}
                  alt={s.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-primary">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <CheckCircle className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-primary">Key Features</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(Object.entries(projects.features) as Array<[string, string[]]>).map(
            ([section, items], i) => (
              <motion.div 
                key={i}
                className="bg-card/30 backdrop-blur-sm border rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {getFeatureIcon(section)}
                  </div>
                  <h4 className="text-lg font-semibold text-primary capitalize">{section}</h4>
                </div>
                <ul className="space-y-3">
                  {items.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <User className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-primary">My Responsibilities</h3>
        </div>
        <div className="bg-card/30 backdrop-blur-sm border rounded-xl p-6">
          <ul className="space-y-4">
            {projects.responsibilities.map((resp, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start gap-3 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <Code className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-primary">Technologies Used</h3>
        </div>
        <div className="bg-card/30 backdrop-blur-sm border rounded-xl p-6">
          <div className="flex flex-wrap gap-3">
            {projects.tech.map((t, i) => (
              <motion.span
                key={i}
                className="bg-accent/80 hover:bg-primary/10 hover:text-primary px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Repositories & Demo */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-6">
          <ExternalLink className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-primary">Links & Resources</h3>
        </div>
        <div className="flex flex-wrap gap-4">
          {projects.demo && (
            <motion.a
              href={projects.demo}
              target="_blank"
              className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-all duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5" />
              Live Demo
            </motion.a>
          )}
          {projects.repos?.frontend && (
            <motion.a
              href={projects.repos.frontend}
              target="_blank"
              className="inline-flex items-center gap-3 border-2 border-border hover:border-primary/50 hover:bg-primary/5 px-6 py-3 rounded-xl transition-all duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" /> 
              Frontend Code
            </motion.a>
          )}
          {projects.repos?.admin && (
            <motion.a
              href={projects.repos.admin}
              target="_blank"
              className="inline-flex items-center gap-3 border-2 border-border hover:border-primary/50 hover:bg-primary/5 px-6 py-3 rounded-xl transition-all duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" /> 
              Admin Code
            </motion.a>
          )}
          {projects.repos?.backend && (
            <motion.a
              href={projects.repos.backend}
              target="_blank"
              className="inline-flex items-center gap-3 border-2 border-border hover:border-primary/50 hover:bg-primary/5 px-6 py-3 rounded-xl transition-all duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" /> 
              Backend Code
            </motion.a>
          )}
          {projects.repos?.ai && (
            <motion.a
              href={projects.repos.ai}
              target="_blank"
              className="inline-flex items-center gap-3 border-2 border-border hover:border-primary/50 hover:bg-primary/5 px-6 py-3 rounded-xl transition-all duration-200 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" /> 
              AI Service Code
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
}

// ================== Main Projects Component ==================
export default function Projects() {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = language === 'vi' ? projectsVi : projectsEn;

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
          <h2 className="text-3xl font-bold gradient-text">{language === 'vi' ? 'Dự án' : 'Projects'}</h2>
        </div>
        <p className="text-xl text-muted-foreground">
          {language === 'vi'
            ? 'Tổng hợp các dự án thể hiện chuyên môn của tôi về full‑stack và AI với kiến trúc hiện đại, kỹ thuật chuyên sâu và khả năng giải quyết bài toán thực tế.'
            : 'A showcase of my expertise in full‑stack and AI through real‑world projects that combine technical depth, modern architecture, and practical problem‑solving.'}
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((projects, i) => (
          <motion.div
            key={i}
            className="group bg-card/50 backdrop-blur-sm border rounded-xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            onClick={() => setSelectedProject(projects)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.2 }}
          >
            {/* Image Container with Fixed Height */}
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={projects.cover}
                alt={projects.title}
                width={1200}
                height={384}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                priority={i === 0}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Role Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {projects.role.split('(')[0].trim()}
                </span>
              </div>
            </div>

            {/* Content Container with Flex Layout */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">
                {projects.title}
              </h3>
              
              {/* Description with Fixed Height */}
              <div className="flex-grow mb-4">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {projects.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {projects.tech.slice(0, 4).map((t, idx) => (
                  <span 
                    key={idx} 
                    className="bg-accent/80 hover:bg-accent px-3 py-1 text-xs rounded-full font-medium transition-colors"
                  >
                    {t}
                  </span>
                ))}
                {projects.tech.length > 4 && (
                  <span className="bg-primary/10 text-primary px-3 py-1 text-xs rounded-full font-medium">
                    +{projects.tech.length - 4}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span>{language === 'vi' ? 'Nhấn để xem chi tiết' : 'Click to view details'}</span>
                </div>
                <div className="flex items-center gap-2">
                  {projects.demo && (
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Live Demo Available" />
                  )}
                  {projects.repos?.frontend && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full" title="Source Code Available" />
                  )}
                </div>
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
        {selectedProject && <ProjectDetailContent projects={selectedProject} />}
      </Modal>
    </div>
  );
}
