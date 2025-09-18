"use client";

import { motion } from "framer-motion";
import { Calendar, Users, ExternalLink, Code, ChevronDown, ChevronUp, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const experiencesVi = [
  {
    company: "Physcode",
    role: "Fullstack Developer",
    time: "03/2025 - Hiện tại",
    location: "Hà Nội, Việt Nam",
    type: "Full-time",
    mode: "Onsite",
    logo: "/experience/physcode-logo.png",
    projects: [
      {
        name: "Mosyne AI – Nền tảng chỉnh sửa ảnh (3 thành viên)",
        description: "Phát triển nền tảng web chỉnh sửa ảnh chuyên nghiệp ứng dụng AI, cung cấp các công cụ như xóa nền, inpainting, phóng to ảnh, sinh nền từ văn bản... Hệ thống hỗ trợ giao diện canvas trực quan, thao tác drag & drop, chia sẻ dự án, xác thực người dùng, thanh toán, và bộ công cụ thiết kế thương hiệu.",
        tech: ["NextJS", "TypeScript", "Ant Design", "Tailwind CSS", "Konva.js", "React-Konva", "Zustand", "React Query", "MongoDB", "AWS S3", "Redis", "PayPal"],
        demo: "https://mosyne.ai",
        responsibilities: [
          "Thiết kế kiến trúc và xây dựng toàn bộ hệ thống full-stack ",
          "Phát triển giao diện canvas với drag & drop, inpainting, background generation và các công cụ chỉnh sửa ảnh.",
          "Xây dựng API back-end, thiết kế database MongoDB, triển khai caching bằng Redis và lưu trữ AWS S3.",
          "Tích hợp hệ thống thanh toán (PayPal) và cơ chế xác thực người dùng an toàn.",
          "Thiết lập và quản lý quy trình CI/CD, tối ưu hiệu năng và khả năng mở rộng hệ thống.",
          "Định nghĩa coding convention, review code và điều phối quy trình phát triển trong nhóm."
        ]
      },
      {
        name: "Washbank – Hệ thống quản lý chuỗi cửa hàng rửa xe",
        description: "Phát triển nền tảng quản trị toàn diện cho ngành rửa xe tại Hàn Quốc. Xây dựng hệ thống đặt lịch, xử lý thanh toán và dashboard quản lý chi tiết",
        responsibilities: [
          "Phát triển nền tảng quản trị toàn diện cho ngành rửa xe tại Hàn Quốc",
          "Xây dựng hệ thống đặt lịch, xử lý thanh toán và dashboard quản lý chi tiết"
        ]
      },
      {
        name: "KNU Component Platform – Cổng thông tin giáo dục số",
        demo: "https://knu.component.team/",
        description: "Phát triển website chính thức cho dự án đổi mới giáo dục AI của Đại học Kyungpook. Xây dựng hệ thống đa ngôn ngữ, tối ưu SEO, tích hợp CMS và CI/CD",
        responsibilities: [
          "Phát triển website chính thức cho dự án đổi mới giáo dục AI của Đại học Kyungpook",
          "Xây dựng hệ thống đa ngôn ngữ, tối ưu SEO, tích hợp CMS và CI/CD"
        ]
      }
    ]
  },
  {
    company: "ACD TECHNOLOGY",
    role: "Full Stack Developer",
    time: "07/2023 - 02/2025",
    location: "Hà Nội, Việt Nam",
    type: "Full-time",
    mode: "Onsite",
    logo: "/experience/acd-logo.png",
    projects: [
      {
        name: "DOOP - F&B Management System (8 thành viên)",
        description: "Ứng dụng web quản lý dịch vụ F&B và giải trí với các tính năng nổi bật như quản lý chi nhánh, vai trò và phân quyền nhân viên, hệ thống POS hỗ trợ bán hàng, quản lý tồn kho và sản phẩm, CRM tương tác khách hàng, theo dõi tài chính, quản lý gói dịch vụ, cùng với báo cáo kinh doanh chi tiết và phân tích số liệu",
        tech: ["NextJS", "TypeScript", "Ant Design", "Tailwind CSS", "Java Spring Boot", "MySQL", "JPA/Hibernate"],
        demo:  "https://doop-staging.acdtech.asia",
        responsibilities: [
          "Thiết kế & phát triển toàn bộ frontend với Next.js & TailwindCSS",
          "Xây dựng canvas editor với Konva.js (drag-drop, layer, undo/redo)",
          "Phát triển toàn bộ backend (API, MongoDB, Mongoose)",
          "Tích hợp xác thực người dùng (Email, Google, JWT, reset password)",
          "Quản lý dự án ảnh (lưu, chia sẻ link, auto-save, thumbnail)",
          "Tích hợp thanh toán PayPal, xây dựng gói dịch vụ & giới hạn tính năng",
          "Tối ưu hiệu năng (SSR, lazy load) & bảo mật (CSRF, validation)"
        ]
      },
      {
        name: "UpdownCrypto (2 thành viên)",
        description: "Ứng dụng web sử dụng thư viện TradingView Lightweight Charts để hiển thị biến động giá Bitcoin theo thời gian thực. Ứng dụng cung cấp các tính năng theo dõi biến động giá ở cấp độ giây và phút, đảm bảo dữ liệu chính xác và chi tiết.",
        tech: ["ReactJs", "TypeScript", "Ant Design", "Tailwind CSS", "Java Spring Boot", "MongoDB", "WebSocket", "Socket.IO"],
        responsibilities: [
          "Xây dựng mã nền cho dự án front-end, bao gồm định nghĩa kiến trúc và thiết lập các quy tắc viết mã.",
          "Phát triển và duy trì các tính năng front-end, đảm bảo chúng được tối ưu hóa và tương thích trên nhiều thiết bị.",
          "Hỗ trợ phát triển back-end bằng cách sửa lỗi và cải thiện mã nguồn khi cần thiết.",
          "Triển khai cập nhật dữ liệu theo thời gian thực bằng cách sử dụng Socket.IO và WebSocket cho biến động giá Bitcoin.",
          "Tích hợp thư viện TradingView Lightweight Charts để hiển thị chính xác và động biến động giá Bitcoin.",
          "Đưa ra phản hồi và đề xuất cải tiến thiết kế giao diện người dùng nhằm nâng cao trải nghiệm người dùng."
        ]
      },
      {
        name: "Decoraz",
        description: "Một trang web thương mại điện tử cung cấp đầy đủ các tính năng thường có trên các nền tảng bán lẻ trực tuyến. Trang web bao gồm danh sách sản phẩm, bài viết blog, quản lý giảm giá và khuyến mãi, chức năng giỏ hàng, tài khoản người dùng, chính sách, thông tin liên hệ, các tùy chọn mua sắm và chương trình liên kết.",
        tech: ["NextJs", "Material UI", "Tailwind CSS", "Java Spring Boot", "MySQL"],
        responsibilities: [
          "Phát triển và triển khai front-end cho trang web, đảm bảo tính năng và trải nghiệm người dùng.",
          "Thiết kế và xây dựng các trang web dựa trên mockup hoặc mẫu thiết kế đã được cung cấp.",
          "Tối ưu hóa trang web cho SEO để cải thiện khả năng hiển thị và thứ hạng trên công cụ tìm kiếm.",
          "Tạo và phát triển bảng điều khiển quản trị để quản lý nội dung và các tính năng của trang web.",
          "Xử lý quy trình triển khai để đảm bảo trang web hoạt động mượt mà và ổn định."
        ],
        features: ["E-commerce", "SEO Optimization", "Admin Dashboard", "Responsive Design", "Payment Integration"]
      }
    ]
  }
];

const experiencesEn = [
  {
    company: "Physcode",
    role: "Fullstack Developer",
    time: "03/2025 - Present",
    location: "Hanoi, Vietnam",
    type: "Full-time",
    mode: "Onsite",
    logo: "/experience/physcode-logo.png",
    projects: [
      {
        name: "Mosyne AI – AI-powered image editor (3 members)",
        description: "Built a professional AI image editing web platform with tools like background removal, inpainting, upscaling, and text-to-background. Includes intuitive canvas UI, drag & drop, project sharing, authentication, payments, and brand design toolkit.",
        tech: ["NextJS", "TypeScript", "Ant Design", "Tailwind CSS", "Konva.js", "React-Konva", "Zustand", "React Query", "MongoDB", "AWS S3", "Redis", "PayPal"],
        demo: "https://mosyne.ai",
        responsibilities: [
          "Designed architecture and built the entire full‑stack system",
          "Developed canvas UI with drag & drop, inpainting, background generation, and editing tools",
          "Implemented backend APIs, MongoDB schema, Redis caching, and AWS S3 storage",
          "Integrated payments (PayPal) and secure user authentication",
          "Set up and maintained CI/CD, optimized performance and scalability",
          "Defined coding conventions, reviewed code, and coordinated team workflow"
        ]
      },
      {
        name: "Washbank – Car wash chain management system",
        description: "Developed an admin platform for the car wash industry in Korea. Implemented booking system, payment processing, and detailed management dashboards.",
        responsibilities: [
          "Built a comprehensive admin platform for the car wash industry in Korea",
          "Implemented scheduling, payment processing, and detailed dashboards"
        ]
      },
      {
        name: "KNU Component Platform – Education portal",
        demo: "https://knu.component.team/",
        description: "Developed the official website for KNU's AI education innovation project. Added multilingual support, SEO optimization, CMS integration, and CI/CD.",
        responsibilities: [
          "Developed the official website for KNU's AI education innovation project",
          "Implemented multilingual system, SEO optimization, CMS, and CI/CD"
        ]
      }
    ]
  },
  {
    company: "ACD TECHNOLOGY",
    role: "Full Stack Developer",
    time: "07/2023 - 02/2025",
    location: "Hanoi, Vietnam",
    type: "Full-time",
    mode: "Onsite",
    logo: "/experience/acd-logo.png",
    projects: [
      {
        name: "DOOP - F&B Management System (8 members)",
        description: "Web app to manage F&B and entertainment services with branch management, role-based access, POS, inventory & product management, CRM, finance tracking, service packages, and detailed business reports & analytics.",
        tech: ["NextJS", "TypeScript", "Ant Design", "Tailwind CSS", "Java Spring Boot", "MySQL", "JPA/Hibernate"],
        demo:  "https://doop-staging.acdtech.asia",
        responsibilities: [
          "Designed & developed the entire frontend with Next.js & TailwindCSS",
          "Built a canvas editor using Konva.js (drag-drop, layers, undo/redo)",
          "Implemented backend (APIs, MongoDB, Mongoose)",
          "Integrated authentication (Email, Google, JWT, password reset)",
          "Managed image projects (save, share link, auto-save, thumbnails)",
          "Integrated PayPal, built service packages & feature limits",
          "Optimized performance (SSR, lazy load) & security (CSRF, validation)"
        ]
      },
      {
        name: "UpdownCrypto (2 members)",
        description: "Web app using TradingView Lightweight Charts to display Bitcoin price movements in real time, supporting per-second and per-minute updates with accurate data.",
        tech: ["ReactJs", "TypeScript", "Ant Design", "Tailwind CSS", "Java Spring Boot", "MongoDB", "WebSocket", "Socket.IO"],
        responsibilities: [
          "Bootstrapped the frontend architecture and coding standards",
          "Developed and maintained frontend features across devices",
          "Supported backend by fixing bugs and improving code",
          "Implemented real-time updates via Socket.IO and WebSocket",
          "Integrated TradingView Lightweight Charts for accurate visuals",
          "Provided UX feedback and design improvement suggestions"
        ]
      },
      {
        name: "Decoraz",
        description: "An e-commerce website with typical retail features: product listing, blog posts, discounts and promotions, shopping cart, user accounts, policies, contact info, shopping options, and affiliate program.",
        tech: ["NextJs", "Material UI", "Tailwind CSS", "Java Spring Boot", "MySQL"],
        responsibilities: [
          "Developed and deployed the frontend ensuring functionality and UX",
          "Built pages from provided mockups/designs",
          "Optimized SEO for better visibility and rankings",
          "Created an admin dashboard to manage content and features",
          "Handled deployment to ensure stable operation"
        ],
        features: ["E-commerce", "SEO Optimization", "Admin Dashboard", "Responsive Design", "Payment Integration"]
      }
    ]
  }
];

export default function Experience() {
  const { t, language } = useLanguage();
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({});
  const experiences = language === 'vi' ? experiencesVi : experiencesEn;

  const getCareerKey = (company: string) => {
    const normalized = company.trim().toLowerCase();
    if (normalized.includes('physcode')) return 'physcode';
    if (normalized.includes('acd')) return 'acd';
    return undefined;
  };

  const toggleProject = (companyIndex: number, projectIndex: number) => {
    const key = `${companyIndex}-${projectIndex}`;
    setExpandedProjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="py-12 flex flex-col" style={{gap: '3rem'}}>
      {/* Experience Header */}
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
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold gradient-text">{t('sections.experience.title')}</h2>
        </motion.div>
        <p className="text-xl leading-relaxed text-muted-foreground">{t('sections.experience.subtitle')}</p>
      </motion.div>

      <div className="border w-full" />

      {/* Experience Timeline */}
      <motion.div
        className="space-y-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + idx * 0.2 }}
          >
            {/* Timeline connector */}
            {idx < experiences.length - 1 && (
              <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary/50 to-transparent"></div>
            )}

            <div className="flex gap-6">
              {/* Timeline dot */}
              

              {/* Experience content */}
              <div className="flex-1">
                <motion.div
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Company Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div className="flex gap-2">
                      <div className="relative">
                        <div className="w-16 h-16 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                          <Image src={exp.logo} alt={exp.company} width={64} height={64} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                        <p className="text-lg font-semibold">
                          {(() => {
                            const key = getCareerKey(exp.company);
                            return key ? t(`sections.careerData.${key}.position`) : exp.role;
                          })()}
                        </p>
                      </div>
                  </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {(() => {
                          const key = getCareerKey(exp.company);
                          return key ? t(`sections.careerData.${key}.period`) : exp.time;
                        })()}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                          {(() => {
                            const key = getCareerKey(exp.company);
                            return key ? t(`sections.careerData.${key}.type`) : exp.type;
                          })()}
                        </span>
                        <span className="bg-accent px-2 py-1 rounded text-xs font-medium">
                          {(() => {
                            const key = getCareerKey(exp.company);
                            return key ? t(`sections.careerData.${key}.mode`) : exp.mode;
                          })()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4">
                    {exp.projects.map((project, projectIdx) => (
                      <motion.div
                        key={projectIdx}
                        className="bg-background/80 border border-border rounded-lg p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + idx * 0.2 + projectIdx * 0.1, duration: 0.5 }}
                      >
                        <div className="space-y-3">
                          {/* Project Header */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-semibold text-lg text-primary">🔸 {project.name}</h4>
                                {project.demo && (
                                  <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    {t('sections.projects.viewProject')}
                                  </a>
                                )}
                              </div>
                              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                            </div>
                          </div>

                          {/* Technologies */}
                          {project.tech && (
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Code className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-sm text-primary">{t('sections.projects.technologies')}:</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Responsibilities Toggle */}
                          <div className="space-y-2">
                            <button
                              onClick={() => toggleProject(idx, projectIdx)}
                              className="flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
                            >
                              {expandedProjects[`${idx}-${projectIdx}`] ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                              {expandedProjects[`${idx}-${projectIdx}`]
                                ? t('sections.career.hideResponsibilities')
                                : t('sections.career.showResponsibilities')}
                            </button>

                            <motion.div
                              initial={false}
                              animate={{
                                height: expandedProjects[`${idx}-${projectIdx}`] ? "auto" : 0,
                                opacity: expandedProjects[`${idx}-${projectIdx}`] ? 1 : 0
                              }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="flex items-center gap-2 mb-2 pt-2">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-sm text-primary">{language === 'vi' ? 'Trách nhiệm:' : 'Responsibilities:'}</span>
                              </div>
                              <ul className="space-y-2 pl-6">
                                {project.responsibilities.map((resp, respIdx) => (
                                  <li key={respIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="leading-relaxed">{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}